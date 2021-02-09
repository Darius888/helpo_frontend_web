import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HelpoJob } from '../shared/models/helpo.job.model';

@Component({
  selector: 'app-add-helpo-job-dialog',
  templateUrl: './add-helpo-job-dialog.component.html',
  styleUrls: ['./add-helpo-job-dialog.component.css']
})
export class AddHelpoJobDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { fact: string }) { }

  ngOnInit(): void {
  }

}
