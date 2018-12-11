import { User } from './../../app/services/auth/user.model';
import { AuthService } from './../../app/services/auth/auth.service';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: User;
  constructor(private authService: AuthService) {
  }

  ionViewWillLoad() {
    this.user = this.authService.getUser();
  }

}
