import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentPage } from '../student/student';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html' 
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {
  }
  nextPage()
  {
    this.navCtrl.push(StudentPage);
  }
}