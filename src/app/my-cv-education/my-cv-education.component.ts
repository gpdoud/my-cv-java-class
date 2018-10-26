import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cv-education',
  templateUrl: './my-cv-education.component.html',
  styleUrls: ['./my-cv-education.component.css']
})
export class MyCvEducationComponent implements OnInit {

  education = [
    'Athenaeum of Ohio: Master Certificate 2016',
    'UC: BS IPS 1985'
  ];
  constructor() { }

  ngOnInit() {
  }

}
