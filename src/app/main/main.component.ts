import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CdkVirtualScrollViewport, ScrollDispatcher } from '@angular/cdk/scrolling';
import { BehaviorSubject } from 'rxjs';
import { HelpoJobService } from '../helpo-job.service';
import { Fact } from '../shared/models/data';
import { filter } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 
  dataSource: FactsDataSource;

  constructor(private factService: HelpoJobService) {
   
    this.dataSource = new FactsDataSource(factService);
    console.log(this.dataSource);
  }

}
  export class FactsDataSource extends DataSource<Fact | undefined> {
    private cachedFacts = Array.from<Fact>({ length: 0 });
    private dataStream = new BehaviorSubject<(Fact | undefined)[]>(this.cachedFacts);
    private subscription = new Subscription();
  
    private pageSize = 100;
    private lastPage = 0;
  
    constructor(private factService: HelpoJobService) {
      super();
  
      // Start with some data.
      this._fetchFactPage();
      console.log(this._fetchFactPage());
    }
  
    connect(collectionViewer: CollectionViewer): Observable<(Fact | undefined)[] | ReadonlyArray<Fact | undefined>> {
      this.subscription.add(collectionViewer.viewChange.subscribe(range => {
  
        const currentPage = this._getPageForIndex(range.end);
  
        if (currentPage && range) {
          console.log(currentPage, this.lastPage);
        }
  
        if (currentPage > this.lastPage) {
          this.lastPage = currentPage;
          this._fetchFactPage();
        }
      }));
      return this.dataStream;
    }
  
    disconnect(collectionViewer: CollectionViewer): void {
      this.subscription.unsubscribe();
    }
  
    private _fetchFactPage(): void {
      for (let i = 0; i < this.pageSize; ++i) {
        this.factService.getRandomFact().subscribe(res => {
          this.cachedFacts = this.cachedFacts.concat(res);
          this.dataStream.next(this.cachedFacts);
        });
      }
    }
  
    private _getPageForIndex(i: number): number {
      return Math.floor(i / this.pageSize);
    }
  }

