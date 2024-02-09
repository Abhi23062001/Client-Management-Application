import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMeetingViewComponent } from './dialog-meeting-view.component';

describe('DialogMeetingViewComponent', () => {
  let component: DialogMeetingViewComponent;
  let fixture: ComponentFixture<DialogMeetingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogMeetingViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogMeetingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
