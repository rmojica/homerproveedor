import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Values} from '../../providers/service/values';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public values:Values) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}