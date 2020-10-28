import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import {Cordova} from 'ionic-native';
import { BackgroundMode } from '@ionic-native/background-mode';
import {Values} from '../../providers/service/values';
import {Socket}  from 'ngx-socket-io';
import {ServicesPage} from '../services/services';

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

  constructor(private backgroundMode: BackgroundMode, private socket: Socket, public navCtrl: NavController, public navParams: NavParams, public values: Values) {
    
  }

  ionViewDidLoad() {
    
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

  // ionViewWillEnter(){
  //   console.log("conectando al socket");
    
  //   this.socket.connect();
  // }

 

  changeToggle(){  
    if(this.values.isActive){
       
      this.backgroundMode.on('deactivate').subscribe(() => {
        console.log("backgroundMode deactivate");
      });
  
      this.backgroundMode.on('activate').subscribe(() => {
        this.backgroundMode.disableWebViewOptimizations();
        console.log('backgroundMode activated');
      });
  
      this.backgroundMode.setDefaults({ silent: true });
      this.backgroundMode.enable();
      
  
      console.log('interval start at', new Date().toISOString());
      
      console.log('waiting first response ....');  
  
          
        this.socket.connect();
        this.socket.emit('adduser',{id:this.values.customerId});
        this.values.isActive = true;
    }else{
      this.backgroundMode.disable();
        this.socket.disconnect();
        this.values.isActive = false;
    }
  }

  services(title:string, status:string, unconfirm:string) {
    this.navCtrl.push(ServicesPage,{title, status, unconfirm});
  }
  // sendMessage() {
  //   // this.socket.emit('send-message', { text: this.message });
  //   // this.message = '';
  // }
    // ionViewWillLeave() {
    //   this.socket.disconnect();
    // }

}
