import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpoJobDialogComponent } from './helpo-job-dialog.component';

describe('HelpoJobDialogComponent', () => {
  let component: HelpoJobDialogComponent;
  let fixture: ComponentFixture<HelpoJobDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpoJobDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpoJobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
