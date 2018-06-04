import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ProfileSearchResultPage } from '../profile-search-result/profile-search-result'


@IonicPage({
  segment: 'profile'
})
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {

  username : string;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation(): void {
    this.navCtrl.push('ProfileSearchResultPage', {
      username: this.username
    });
  }
}
