import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCvEducationComponent } from './my-cv-education.component';

describe('MyCvEducationComponent', () => {
  let component: MyCvEducationComponent;
  let fixture: ComponentFixture<MyCvEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCvEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCvEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
