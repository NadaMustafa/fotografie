import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('f') loginForm : NgForm;
  constructor(public navCtrl: NavController) {
  }
  onLogin(form:NgForm) {
    this.navCtrl.setRoot('TabsPage');
  }
}
