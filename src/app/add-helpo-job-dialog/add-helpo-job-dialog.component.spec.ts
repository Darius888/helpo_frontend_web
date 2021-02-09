import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHelpoJobDialogComponent } from './add-helpo-job-dialog.component';

describe('AddHelpoJobDialogComponent', () => {
  let component: AddHelpoJobDialogComponent;
  let fixture: ComponentFixture<AddHelpoJobDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHelpoJobDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHelpoJobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
