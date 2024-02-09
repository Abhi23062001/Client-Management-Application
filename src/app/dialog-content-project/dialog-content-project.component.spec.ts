import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentProjectComponent } from './dialog-content-project.component';

describe('DialogContentProjectComponent', () => {
  let component: DialogContentProjectComponent;
  let fixture: ComponentFixture<DialogContentProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogContentProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogContentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
