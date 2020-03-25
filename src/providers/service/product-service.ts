import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Config } from './config'
import { Values } from './values'
import { URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/map'
import { LoadingController } from 'ionic-angular'

@Injectable()
export class ProductService {
  data: any
  product: any
  gallery: any
  status: any
  wishlist: any
  reviews: any
  reviewForm: any
  cart: any
  code: any
  loader: any
  constructor(
    private http: Http,
    private config: Config,
    private values: Values,
    private loadingController: LoadingController,
  ) {}
  getProduct(id) {
    return new Promise(resolve => {
      this.http
        .get(
          this.config.setUrl(
            'GET',
            '/wp-json/wc-bookings/v1/products/' + id + '?',
            false,
          ),
          this.config.options,
        )
        .map(res => res.json())
        .subscribe(data => {
          this.product = data
          resolve(this.product)
        })
    })
  }
  getReviews(id) {
    return new Promise(resolve => {
      this.http
        .get(
          this.config.setUrl(
            'GET',
            '/wp-json/wc-bookings/v1/products/' + id + '/reviews' + '?',
            false,
          ),
          this.config.options,
        )
        .map(res => res.json())
        .subscribe(data => {
          this.reviews = data
          resolve(this.reviews)
        })
    })
  }
  addToCart(params) {
    return new Promise(resolve => {
      var searchParams = new URLSearchParams()
      for (let param in params) {
        searchParams.set(param, params[param])
      }
      console.log(searchParams)
      // searchParams.append("start_date", '');
      // searchParams.append("end_date", '');

      this.http
        .post(
          this.config.url +
            '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart',
          searchParams,
          this.config.options,
        )
        .map(res => res.json())
        // this.http.post(this.config.url + '/product/coronary-angioplasty-and-stents/', searchParams, this.config.options).map(res => res.json())
        .subscribe(data => {
          console.log(data)
          this.status = data
          resolve(this.status)
        })
    })
  }
  presentLoading(text) {
    this.loader = this.loadingController.create({
      content: text,
    })
    this.loader.present()
  }
  dismissLoading() {
    this.loader.dismiss()
  }
  addToWishlist(id) {
    return new Promise(resolve => {
      var params = new URLSearchParams()
      params.append('product_id', id)
      params.append('customer_id', this.values.customerId.toString())
      this.http
        .post(
          this.config.url +
            '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist',
          params,
          this.config.options,
        )
        .map(res => res.json())
        .subscribe(data => {
          this.status = data
          resolve(this.status)
        })
    })
  }
  getBlocks(day, month, year, id) {
    return new Promise(resolve => {
      var params = new URLSearchParams()
      params.append('wc_bookings_field_start_date_month', month)
      params.append('wc_bookings_field_start_date_day', day)
      params.append('wc_bookings_field_start_date_year', year)
      params.append('wc_bookings_field_start_date_time', '')
      params.append('wc_bookings_field_start_date_local_timezone', '')
      params.append('add-to-cart', id)
      this.http
        .post(
          this.config.url +
            '/wp-admin/admin-ajax.php?action=wc_bookings_get_blocks',
          params,
          this.config.options,
        )
        .map(res => res.json())
        .subscribe(data => {
          console.log(data)
          this.status = data
          resolve(this.status)
        })
    })
  }
  deleteItem(id) {
    var params = new URLSearchParams()
    params.append('product_id', id)
    params.append('customer_id', this.values.customerId.toString())
    return new Promise(resolve => {
      this.http
        .post(
          this.config.url +
            '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist',
          params,
          this.config.options,
        )
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        })
    })
  }
}
