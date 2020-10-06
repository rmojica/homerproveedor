import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Values} from '../../providers/service/values';
import {Socket}  from 'ngx-socket-io';
import { Observable } from 'rxjs';
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
  homerProviders = [];

  constructor(private socket: Socket, public navCtrl: NavController, public navParams: NavParams, public values: Values) {
    // this.GetIfActiveUser().subscribe(data => {
    //   console.log(data)
    //   this.homerProviders.push(data);
    //     for(let provider of this.homerProviders){
    //       if(this.values.customerId == provider.id){
    //         this.values.isActive = true;
    //       }else{
    //         this.values.isActive = false;
    //       }
    //     }
    // })
  }

  ionViewDidLoad() {
    
  }

  ngOnInit() {
    this.socket.fromEvent('adduser').subscribe((data:any) => {
      this.homerProviders.push(...data);
      for(let provider of this.homerProviders){
        if(this.values.customerId == provider.id){
          this.values.isActive = true;
        }else{
          this.values.isActive = false;
        }
      }
    });
 
    // this.socket.fromEvent('message').subscribe(message => {
    //   // this.messages.push(message);
    // });
  }

  // ionViewWillEnter(){
  //   console.log("conectando al socket");
    
  //   this.socket.connect();
  // }

  GetIfActiveUser(){
    let observable = new Observable(observer => {
      this.socket.fromEvent('adduser').subscribe((data:any) => {
        console.log('dentro den getIfActiveUser',data)
        observer.next(data);
      });
    });
    console.log('observable', observable)
    return observable;
  }

  changeToggle(){
    console.log(this.values.isActive)
    if(this.values.isActive){
        this.socket.connect();
        this.socket.emit('adduser',{id:this.values.customerId});
        this.values.isActive = true;
    }else{
        this.socket.disconnect();
        this.values.isActive = false;
    }
  }
  // sendMessage() {
  //   // this.socket.emit('send-message', { text: this.message });
  //   // this.message = '';
  // }
    // ionViewWillLeave() {
    //   this.socket.disconnect();
    // }

}
