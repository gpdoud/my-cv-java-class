import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCvExperienceComponent } from './my-cv-experience.component';

describe('MyCvExperienceComponent', () => {
  let component: MyCvExperienceComponent;
  let fixture: ComponentFixture<MyCvExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCvExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCvExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
