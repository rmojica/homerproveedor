import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Values} from '../../providers/service/values';
import {Socket}  from 'ngx-socket-io';
import { Service } from '../../providers/service/service';
import { Observable } from 'rxjs';
import { OrdersDetailPage } from '../orders-detail/orders-detail';
/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  data
  constructor(
      private socket: Socket,
      public navCtrl: NavController,
      public navParams: NavParams,
      public values:Values,
  )
  {
    this.socket.connect();
    this.getData().subscribe((data:any) => {
      console.log(data);
      // this.data.splice(0, ...data.length)
      this.data = data

    });



  }

  ionViewDidLoad() {

  }

  ionViewWillLeave() {
      this.socket.disconnect();
  }

  ngOnInit() {


  }

  openOrdersDetail(){
    this.navCtrl.push(OrdersDetailPage,{data:this.data})
  }

  getData(){
    let observable = new Observable(observer => {
        this.socket.emit('getordersbyproviders',{ id:this.values.customerId});
        this.socket.fromEvent('getordersbyproviders').subscribe((data:any) => {
          observer.next(data)
        });
    })
    return observable;
  }

}
