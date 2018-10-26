import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cv-experience',
  templateUrl: './my-cv-experience.component.html',
  styleUrls: ['./my-cv-experience.component.css']
})
export class MyCvExperienceComponent implements OnInit {

  experience = [
    'MAX Teachnical Training: Instructor, 2017-Present',
    'TIY: Instructor, 2016-2017',
    'PE: Lead Soft Dev, 2016-2016',
    'Janitor'
  ];
  constructor() { }

  ngOnInit() {
  }

}
