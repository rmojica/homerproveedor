import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Values} from '../../providers/service/values';
import {EndOrdesService} from '../../providers/service/endorders';
import { Observable } from 'rxjs';
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
  orders:any={}
  constructor(
    public values:Values,
      public navCtrl: NavController,
      public navParams: NavParams,
      public endOrdersServices:EndOrdesService
    )
    {
      this.getOrdenes().subscribe((data:any) =>{
        this.orders= data.map(r => {return r})
        console.log(this.orders);
      })

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndOrdersPage');
  }

  getOrdenes(){
    let observable = new Observable(observe =>{
      this.endOrdersServices.getEndOrders({data:this.values.customerId}).then((result:any) => {
        observe.next(result)
      })
    })
    return observable
  }

}
