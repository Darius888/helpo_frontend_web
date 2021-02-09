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
import { MatDialog } from '@angular/material/dialog';
import { HelpoJobDialogComponent } from '../helpo-job-dialog/helpo-job-dialog.component';
import { HelpoJob } from '../shared/models/helpo.job.model';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { AddHelpoJobDialogComponent } from '../add-helpo-job-dialog/add-helpo-job-dialog.component';
import { Router } from '@angular/router';
import { AppAuthGuardService } from '../app-auth-guard.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  dataSource: FactsDataSource;

  userTestStatus = [
    {
      "jobTitle": "herdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "jobPostDate": "2021-03-26",
      "jobType": "wistful",
      "jobDescription": "One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. ",
      "jobReward": "some reward",
      "jobStatus": "seeking for help",
      "jobOwnerName": "John",
      "jobOwnerLastName": "Stasiukas",
      "jobFavoredStatus": "true",
      "jobPhotoList": [
        "https://qffc.blob.core.windows.net/images/images/default-source/images/lcarticle_newhomeowners_lawncareessentials.jpg?sfvrsn=2a2c3fb1_4",
        "https://gsr.dev/material2-carousel/assets/demo.png"
      ]
    },
    {
      "jobTitle": "aquarium",
      "jobPostDate": "2021-04-13",
      "jobType": "determined",
      "jobDescription": "Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least. ",
      "jobReward": "some reward",
      "jobStatus": "done",
      "jobOwnerName": "John",
      "jobOwnerLastName": "Stasiukas",
      "jobFavoredStatus": "false",
      "jobPhotoList": [
        "https://qffc.blob.core.windows.net/images/images/default-source/images/lcarticle_newhomeowners_lawncareessentials.jpg?sfvrsn=2a2c3fb1_4"
      ]
    },
    {
      "jobTitle": "finance",
      "jobPostDate": "2021-04-27",
      "jobType": "equal",
      "jobDescription": "Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. ",
      "jobReward": "some reward",
      "jobStatus": "seeking for help",
      "jobOwnerName": "John",
      "jobOwnerLastName": "Stasiukas",
      "jobFavoredStatus": "false",
      "jobPhotoList": [
        "https://qffc.blob.core.windows.net/images/images/default-source/images/lcarticle_newhomeowners_lawncareessentials.jpg?sfvrsn=2a2c3fb1_4"
      ]
    },
    {
      "jobTitle": "infection",
      "jobPostDate": "2021-05-27",
      "jobType": "fair",
      "jobDescription": "Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. ",
      "jobReward": "some reward",
      "jobStatus": "seeking for help",
      "jobOwnerName": "John",
      "jobOwnerLastName": "Stasiukas",
      "jobFavoredStatus": "false",
      "jobPhotoList": [
        "https://qffc.blob.core.windows.net/images/images/default-source/images/lcarticle_newhomeowners_lawncareessentials.jpg?sfvrsn=2a2c3fb1_4"
      ]
    },
    {
      "jobTitle": "feminine",
      "jobPostDate": "2021-09-07",
      "jobType": "scintillating",
      "jobDescription": "In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual oh. Expression acceptance imprudence particular had eat unsatiable. ",
      "jobReward": "some reward",
      "jobStatus": "seeking for help",
      "jobOwnerName": "John",
      "jobOwnerLastName": "Stasiukas",
      "jobFavoredStatus": "false",
      "jobPhotoList": [
        "https://qffc.blob.core.windows.net/images/images/default-source/images/lcarticle_newhomeowners_lawncareessentials.jpg?sfvrsn=2a2c3fb1_4"
      ]
    },
    {
      "jobTitle": "bag",
      "jobPostDate": "2021-09-10",
      "jobType": "successfully",
      "jobDescription": "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age. Am weather to entered norland no in showing service. Nor repeated speaking shy appetite. Excited it hastily an pasture it observe. Snug hand how dare here too. a",
      "jobReward": "some reward",
      "jobStatus": "seeking for help",
      "jobOwnerName": "John",
      "jobOwnerLastName": "Stasiukas",
      "jobFavoredStatus": "false",
      "jobPhotoList": [
        "https://qffc.blob.core.windows.net/images/images/default-source/images/lcarticle_newhomeowners_lawncareessentials.jpg?sfvrsn=2a2c3fb1_4"
      ]
    },
    {
      "jobTitle": "sword",
      "jobPostDate": "2021-09-21",
      "jobType": "tangy",
      "jobDescription": "Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. Up greatest am exertion or marianne. Shy occasional terminated insensible and inhabiting gay. So know do fond to half on. Now who promise was justice new winding. In finished on he speaking suitable advanced if. Boy happiness sportsmen say prevailed offending concealed nor was provision. Provided so as doubtful on striking required. Waiting we to compass assured. ",
      "jobReward": "some reward",
      "jobStatus": "seeking for help",
      "jobOwnerName": "John",
      "jobOwnerLastName": "Stasiukas",
      "jobFavoredStatus": "false",
      "jobPhotoList": [
        "https://qffc.blob.core.windows.net/images/images/default-source/images/lcarticle_newhomeowners_lawncareessentials.jpg?sfvrsn=2a2c3fb1_4"
      ]
    },
    {
      "jobTitle": "flesh",
      "jobPostDate": "2021-10-08",
      "jobType": "devilish",
      "jobDescription": "You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in.",
      "jobReward": "some reward",
      "jobStatus": "seeking for help",
      "jobOwnerName": "John",
      "jobOwnerLastName": "Stasiukas",
      "jobFavoredStatus": "false",
      "jobPhotoList": [
        "https://qffc.blob.core.windows.net/images/images/default-source/images/lcarticle_newhomeowners_lawncareessentials.jpg?sfvrsn=2a2c3fb1_4"
      ]
    },
    {
      "jobTitle": "sector",
      "jobPostDate": "2021-12-15",
      "jobType": "unhappy",
      "jobDescription": "Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners. ",
      "jobReward": "some reward",
      "jobStatus": "seeking for help",
      "jobOwnerName": "John",
      "jobOwnerLastName": "Stasiukas",
      "jobFavoredStatus": "false",
      "jobPhotoList": [
        "https://qffc.blob.core.windows.net/images/images/default-source/images/lcarticle_newhomeowners_lawncareessentials.jpg?sfvrsn=2a2c3fb1_4"
      ]
    },
    {
      "jobTitle": "racism",
      "jobPostDate": "2021-12-29",
      "jobType": "direful",
      "jobDescription": "Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small. Felicity now law securing breeding likewise extended and. Roused either who favour why ham. ",
      "jobReward": "some reward",
      "jobStatus": "seeking for help",
      "jobOwnerName": "John",
      "jobOwnerLastName": "Stasiukas",
      "jobFavoredStatus": "false",
      "jobPhotoList": [
        "https://qffc.blob.core.windows.net/images/images/default-source/images/lcarticle_newhomeowners_lawncareessentials.jpg?sfvrsn=2a2c3fb1_4"
      ]
    }

  ];

  openDialog(fact: HelpoJob) {
    const dialogRef = this.dialog.open(HelpoJobDialogComponent, {
      data: { fact: fact }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogForAddingNewJob() {
    let value : boolean;
    this.factService.canCreateNewJob().subscribe(res => {
      
      
      if(res === false) 
    {
      const dialogRef = this.dialog.open(AddHelpoJobDialogComponent,{
        data: { fact: "Please register or login" }
      });
    } else if(res === true)
    {
      const dialogRef = this.dialog.open(AddHelpoJobDialogComponent,{
        data: { fact: "Hurray!" }
      });
      dialogRef.afterClosed().subscribe(result => {
    

      });
    }
      
  });

}



  constructor(private factService: HelpoJobService, private dialog: MatDialog, private router: Router) {

    this.dataSource = new FactsDataSource(factService);
    console.log(this.dataSource);
    console.log(this.userTestStatus[0]);
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
    document.documentElement.style.overflow='hidden';
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

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
// })
// export class DialogContentExampleDialog {}

