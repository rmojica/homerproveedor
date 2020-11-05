import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import {Values} from '../../providers/service/values'

import { Service } from '../../providers/service/service';
import { ProductsPage } from '../products/products';
import { SearchPage } from '../search/search';
import { ProductPage } from '../product/product';
import { Post } from '../post/post';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
// import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CategoryServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-category-service',
  templateUrl: 'category-service.html',
})
export class CategoryServicePage {
  map: any;
  address:string;
  lat: string;
  long: string;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  PredictionArray: any[];

  location: any;
  placeid: any;
  GoogleAutocomplete: any;

  selectedCategory: string;
  HiddenList: boolean = true;
  HiddenListCat: boolean = true;
  HiddenSearchLocation: boolean = false;
  HideRadius: boolean = false;
  HideBtnSearch: boolean = false;
  autocompleteCat: { input: string; };

  itemsCategory: any;
  radius: any = 0;
  originalCoords;
  miLatitude = 0;
  miLongitude = 0;

    status: any;
    items: any;
    product: any;
    options: any;
    id: any;
    variationID: any;
    time: any;
    has_more_items: boolean = true;
    loading: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public values:Values, public service: Service, public alert:AlertController) {
    this.items = [];
        this.options = [];
        this.service.getProducts();

        this.autocomplete = { input: '' };
        this.autocompleteItems = [];

        this.autocompleteCat = { input: '' };
        this.itemsCategory = [];

        this.lat = '';
        this.long = '';

  }

  gohome() {
    this.navCtrl.parent.select(0);
  }

  addServicio(event){
    if(event.target.checked){
    this.showAlert('Se ha actualizado este servicio', '<strong>Genial:</strong> Has actualizado correctamente');
    }
  }

  showAlert(title, text) {
    let alert = this.alert.create({
        title: title,
        subTitle: text,
        buttons: ['OK'],
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryServicePage');
  }

}
