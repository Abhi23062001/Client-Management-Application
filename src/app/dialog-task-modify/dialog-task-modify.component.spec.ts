import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskModifyComponent } from './dialog-task-modify.component';

describe('DialogTaskModifyComponent', () => {
  let component: DialogTaskModifyComponent;
  let fixture: ComponentFixture<DialogTaskModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogTaskModifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogTaskModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
