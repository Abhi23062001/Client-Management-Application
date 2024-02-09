import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModifyDialogComponent } from './project-modify-dialog.component';

describe('ProjectModifyDialogComponent', () => {
  let component: ProjectModifyDialogComponent;
  let fixture: ComponentFixture<ProjectModifyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectModifyDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectModifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
