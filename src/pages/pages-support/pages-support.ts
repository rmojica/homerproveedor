import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Nav } from 'ionic-angular';
import { Values } from '../../providers/service/values';
import {Post} from '../../pages/post/post';

/**
 * Generated class for the PagesSupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-support',
  templateUrl: 'pages-support.html',
})
export class PagesSupportPage {
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public values: Values,public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesSupportPage');
  }

  post(id, title) {
    this.navCtrl.push(Post, {data:id, title:title});
  }
  contact() {
    let email = {
        to: this.values.settings.support_email,
        subject: '',
        body: '',
        isHtml: true
    };
    this.emailComposer.open(email);
}

}