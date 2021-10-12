import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Navbar } from 'ionic-angular';
import {Values} from '../../providers/service/values';
import {Socket}  from 'ngx-socket-io';
import { Service } from '../../providers/service/service';
import { ProductService } from '../../providers/service/product-service';
import { Observable } from 'rxjs';
import { OrdersDetailPage } from '../orders-detail/orders-detail';
import {ModalPage} from '../modal/modal'
import { ChatPage } from '../chat/chat';
import {DashProveedorPage} from '../dash-proveedor/dash-proveedor';
import { LoadingController } from 'ionic-angular';
import { Functions } from '../../providers/service/functions';
import { EndOrdersPage } from '../end-orders/end-orders';
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
  // @ViewChild (Navbar) navBar : Navbar;
  data
  downcount
  Lista:any
  counts:Observable<number>
  dataCount:any
  btnEnabled:Boolean = false;
  btnCancel:Boolean = false;
  constructor(
      private socket: Socket,
      public navCtrl: NavController,
      public navParams: NavParams,
      public values:Values,
      public productService:ProductService,
      public modalCtrl:ModalController,
      public loadingCtrl: LoadingController,
      public functions: Functions
  )
  {
    this.Lista = []
    this.socket.connect();
    this.dataCount = [];
  }

  ionViewWillEnter(){

    // this.downCount()
  }

  validateUnique(myObject) {
      return !!this.Lista.find(i => i.id === myObject.id)
  }

  goHome(){
     this.navCtrl.pop();
  }

  changestate(order, state, onesignal)
  {
    this.btnEnabled = true;
    // this.presentLoading();
    let message = ""
    let title = ""
    this.productService.changestate({
      "order":order,
      "state":state
    }).then((result:any) => {
      if(result.data[0] == 1){
        this.btnEnabled = false;
      }
    })

    if(state==="solicitado"){
      title = `Solicitud Aceptada`
      message = `Tu proveedor de servicio te informa que tu servicio ha sido aceptado`
    }else if(state==="pagado"){
      title = `Tu homer ha llegado`
      message = `Tu proveedor de servicio te informa que ha llegado al destino`
    }else if(state==="he llegado"){
      title = `El servicio ha iniciado`
      message = `Tu proveedor de servicio te informa que ha iniciado el servicio`
    }else if(state==="iniciado"){
      title = `El servicio ha finalizado`
      message = `Tu proveedor de servicio te informa que tu servicio ha sido finalizado`
    }


    this.productService.sendNotification({
      "title":title,
      "content":message,
      "onesignalid":onesignal
    })

  }
  changestatecancel(order, onesignal)
  {
    this.btnCancel = true;
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
    modal.onDidDismiss((data) => {

      if(data.result && data.message !=''){
        this.productService.changestate({
          "order":order,
          "state":"cancelado",
          "isCancel":data.message
        }).then((result:any) => {
          if(result.data[0] == 1){
            this.btnCancel = false;
          }
        })

        this.productService.sendNotification({
          "title":"Servicio cancelado",
          "content":`El homer ha cancelado el servicio el motivo ${data.message}`,
          "onesignalid":onesignal
        });

        this.functions.showAlert("Éxito", `El servicio se ha cancelado correctamente, motivo ${data.message}`);
      }
    })
  }

  ionViewDidEnter() {
    this.getData().subscribe((data:any) => {
      this.data = data
      var duplicado = false;
      duplicado = this.validateUnique(data)

      if (duplicado == false){
        this.Lista.push(data)
          // this.Lista[this.count] = data
          // this.count++;
      }
    });
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
          console.log("data desde el server", data);

          observer.next(data)
        });
    })
    return observable;
  }

  downCount(){
    this.socket.emit('getCountDown',{ id: this.values.customerId });
    this.socket.fromEvent('getCountDown').subscribe((data:any) => {
      this.counts = data;
    });
  }

  openchat(order){
    this.navCtrl.push(ChatPage, {order:order})
  }


  countDown( minutes, seconds )
  {
      var element, endTime, hours, mins, msLeft, time;

      function twoDigits( n )
      {
          return (n <= 9 ? "0" + n : n);
      }

      function updateTimer()
      {
          msLeft = endTime - (+new Date);
          if ( msLeft < 1000 ) {
              console.log("Time is up!");
          } else {
              time = new Date( msLeft );
              hours = time.getUTCHours();
              mins = time.getUTCMinutes();
              console.log("mierda no sirve",( hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds()));
              // this.count = ( hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds())
              setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
          }
      }
      endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
      updateTimer();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Por favor espere...",
      duration: 3000
    });
    loader.present();
  }

}
