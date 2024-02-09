import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmeetingComponent } from './listmeeting.component';

describe('ListmeetingComponent', () => {
  let component: ListmeetingComponent;
  let fixture: ComponentFixture<ListmeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListmeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
