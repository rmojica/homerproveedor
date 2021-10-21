import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Values} from '../../providers/service/values';
import {EndOrdesService} from '../../providers/service/endorders';
import { Observable } from 'rxjs';
import { DashProveedorPage } from '../dash-proveedor/dash-proveedor';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the EndOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-end-orders',
  templateUrl: 'end-orders.html',
})
export class EndOrdersPage {
  orders:any;
  constructor(
    public values:Values,
      public navCtrl: NavController,
      public navParams: NavParams,
      public endOrdersServices:EndOrdesService,
      public loadingCtrl: LoadingController,
    )
    {
      this.orders = [];
    }

    ionViewDidEnter(){
      const loader = this.loadingCtrl.create({
        content: "Por favor espere...",
      });
      loader.present();
      this.endOrdersServices.getEndOrders({provider:this.values.customerId}).then((response:any) => {
        loader.dismiss();
        for(let orders of response.data){
          this.orders.push(orders)
        }
      });
    }

  ionViewDidLoad() {

  }

  goHome(){
    this.navCtrl.pop();
  }
}
