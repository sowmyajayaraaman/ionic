import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { SuccessPage } from '../success/success';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

openPage()
{
  this.navCtrl.push(SuccessPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }
}