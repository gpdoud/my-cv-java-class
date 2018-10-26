import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  draft = false;
  name = 'Greg Doud';
  address = '4900 Parkway Dr., Mason, OH 45040';
  phone = '513-322-8888';
  email = 'gdoud@maxtrain.com';
}
