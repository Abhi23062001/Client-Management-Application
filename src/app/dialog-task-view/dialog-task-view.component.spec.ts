import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskViewComponent } from './dialog-task-view.component';

describe('DialogTaskViewComponent', () => {
  let component: DialogTaskViewComponent;
  let fixture: ComponentFixture<DialogTaskViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogTaskViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogTaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
