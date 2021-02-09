import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HelpoJob } from '../shared/models/helpo.job.model';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-helpo-job-dialog',
  templateUrl: './helpo-job-dialog.component.html',
  styleUrls: ['./helpo-job-dialog.component.css']
})
export class HelpoJobDialogComponent implements OnInit {

  slides = [{ 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }];


  constructor(@Inject(MAT_DIALOG_DATA) public data: { fact: HelpoJob }) { 
  }

  ngOnInit(): void {
  }

}
