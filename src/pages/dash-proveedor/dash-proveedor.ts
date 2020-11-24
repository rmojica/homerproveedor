import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
// import {Cordova} from 'ionic-native';
import { CategoryService } from '../../providers/service/category-service'
import { BackgroundMode } from '@ionic-native/background-mode';
import {Values} from '../../providers/service/values';
import { Service } from '../../providers/service/service';
import {Socket}  from 'ngx-socket-io';
import {ServicesPage} from '../services/services';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

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
  lat:string;
  lng:string;
  miLatitude = 0;
  miLongitude = 0;
  filter: any;
  products:any;
  constructor(public service: CategoryService, private nativeGeocoder: NativeGeocoder, private platform: Platform, private backgroundMode: BackgroundMode, private socket: Socket, public navCtrl: NavController, public navParams: NavParams, public values: Values, private geolocation: Geolocation) {
    this.filter = {}
    this.lat = '';
    this.lng = '';
    this.products = [];



    this.platform.ready().then(() => {
      // const subscription = this.geolocation.watchPosition()
      //   .filter((p) => p.coords !== undefined) //Filter Out Errors
      //   .subscribe(position => {
      //     this.miLatitude = position.coords.latitude;
      //     this.miLongitude = position.coords.longitude;
      //     console.log("miLocation=" + position.coords.latitude + ' ' + position.coords.longitude);
      //   });
      const subscription = this.geolocation.watchPosition().subscribe(position => {
        if ((position as Geoposition).coords != undefined) {
          var geoposition = (position as Geoposition);
          this.miLatitude = geoposition.coords.latitude;
          this.miLongitude = geoposition.coords.longitude;
          console.log('Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);
        } else {
          var positionError = (position as PositionError);
          console.log('Error ' + positionError.code + ': ' + positionError.message);
        }
      });
    });

  }

  ionViewDidLoad() {

  }

  ionViewDidEnter(){
    this.service.getProductsByIdVendor2()
    .then((result:any) => {
      if(result.length > 0){
        for(let i=0; i<result.length; i++){
          this.products.push({id:result[i]})
        }
      }
    });
  }


  ngOnInit() {
    this.socket.fromEvent('adduser').subscribe((data:any) => {
      this.homerProviders.push(data);
      console.log('data:',data)
      for(let provider of this.homerProviders){
        if(this.values.customerId == provider){
          this.values.isActive = true;
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

      // this.backgroundMode.on('deactivate').subscribe(() => {
      //   console.log("backgroundMode deactivate");
      // });

      // this.backgroundMode.on('activate').subscribe(() => {
      //   this.backgroundMode.disableWebViewOptimizations();
      //   console.log('backgroundMode activated');
      // });

      // this.backgroundMode.setDefaults({ silent: true });
      // this.backgroundMode.enable();


      console.log('interval start at', new Date().toISOString());

      console.log('waiting first response ....');


        this.socket.connect();
        this.socket.emit('adduser',{
          id:this.values.customerId,
          lat: this.miLatitude,
          lng: this.miLongitude,
          products:this.products
        });
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
