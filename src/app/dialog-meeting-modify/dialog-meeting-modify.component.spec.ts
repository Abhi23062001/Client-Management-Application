import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMeetingModifyComponent } from './dialog-meeting-modify.component';

describe('DialogMeetingModifyComponent', () => {
  let component: DialogMeetingModifyComponent;
  let fixture: ComponentFixture<DialogMeetingModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogMeetingModifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogMeetingModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
