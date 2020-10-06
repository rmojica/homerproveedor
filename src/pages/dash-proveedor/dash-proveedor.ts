import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Values} from '../../providers/service/values';
import {Socket}  from 'ngx-socket-io';
/**
 * Generated class for the DashProveedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dash-proveedor',
  templateUrl: 'dash-proveedor.html',
})
export class DashProveedorPage {
  homerProviders = [];

  constructor(private socket: Socket, public navCtrl: NavController, public navParams: NavParams, public values: Values) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashProveedorPage');
  }

  ngOnInit() {
    this.socket.fromEvent('adduser').subscribe((data:any) => {
      this.homerProviders.push(...data);
      console.log('data:',data)
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
  changeToggle(){
    if(!this.values.isActive){
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
