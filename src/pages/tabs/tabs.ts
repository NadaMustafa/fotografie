import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homePage: any;
  searchPage: any;
  constructor(){
    this.homePage = 'HomePage';
    this.searchPage = 'SearchPage';
  }

}