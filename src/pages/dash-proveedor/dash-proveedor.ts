import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Values} from '../../providers/service/values'

/**
 * Generated class for the DashProveedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dash-proveedor',
  templateUrl: 'dash-proveedor.html',
})
export class DashProveedorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public values: Values) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashProveedorPage');
  }

}
