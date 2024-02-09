import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModifyClientComponent } from './dialog-modify-client.component';

describe('DialogModifyClientComponent', () => {
  let component: DialogModifyClientComponent;
  let fixture: ComponentFixture<DialogModifyClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogModifyClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogModifyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
