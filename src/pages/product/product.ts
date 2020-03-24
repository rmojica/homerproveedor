import { Component, ViewChild } from '@angular/core'
import { NavController, NavParams, Content } from 'ionic-angular'
import { ProductService } from '../../providers/service/product-service'
import { Values } from '../../providers/service/values'
import { Functions } from '../../providers/service/functions'
import { md5 } from './md5'
import { CartPage } from '../cart/cart'

@Component({
  templateUrl: 'product.html',
})
export class ProductPage {
  @ViewChild(Content) content: Content
  product: any = {}
  id: any
  type: any
  status: any
  options: any
  opt: any
  message: any
  wishlist: any
  quantity: any
  reviews: any
  reviewForm: any
  nickname: any
  details: any
  AddToCart: any
  disableSubmit: boolean = false
  wishlistIcon: boolean = false
  usedVariationAttributes: any = []
  selectedProduct: any

  day: any
  month: any = 1
  year: any

  constructor(
    public nav: NavController,
    public service: ProductService,
    params: NavParams,
    public functions: Functions,
    public values: Values,
  ) {
    this.options = []
    this.quantity = '1'
    this.AddToCart = 'AddToCart'
    if (params.data.id) {
      this.selectedProduct = null
      console.log(params)
      this.product.product = params.data
      this.id = params.data.id

      this.options.product_id = this.id
      console.log('Product: ', this.product.product.resources_full)
      this.usedVariationAttributes = (this.product.product
        .resources_full as Array<any>).map(item => item)

      console.log('usedVariationAttributes:', this.usedVariationAttributes)
    } else {
      console.log(params.data)
      this.options.product_id = this.id
      this.service
        .getProduct(this.id)
        .then(results => this.handleProductResults(results))
    }
    this.getReviews()
  }

  handleProductResults(results) {
    this.product = results
    this.usedVariationAttributes = this.product.product.attributes.filter(
      function(attribute) {
        return attribute.variation == true
      },
    )
  }
  getProduct(id) {
    this.nav.push(ProductPage, id)
    console.log(id)
  }
  addToCart() {
    if (this.setVariations()) {
      this.service
        .addToCart(this.options)
        .then(results => this.updateCart(results))
    }
  }

  setVariations() {
    this.product.product.attributes.forEach(item => {
      if (item.selected) {
        this.options['variation[attribute_pa_' + item.name + ']'] =
          item.selected
      }
    })
    for (var i = 0; i < this.product.product.attributes.length; i++) {
      console.log(this.product.product.attributes[i].name)
      if (
        this.product.product.attributes[i].variation &&
        this.product.product.attributes[i].selected == undefined
      ) {
        this.functions.showAlert(
          'Options',
          'Please Select Product ' +
            this.product.product.attributes[i].name +
            ' Option',
        )
        return false
      }
    }
    return true
  }
  onDaySelect($event, id) {
    this.day = $event.date
    this.month = $event.month + 1
    this.year = $event.year

    if (this.values.isLoggedIn) {
      this.service
        .getBlocks(this.day, this.month, this.year, id)
        .then(results => this.update_blocks(results))
    } else {
      this.functions.showAlert('Warning', 'You must login to add to cart')
    }
  }
  update_blocks(a) {
    if (a.success == 'Success') {
      //this.functions.showAlert(a.success, a.message);
      this.values.blockslistId[this.product.product.id] = true
    } else {
      this.functions.showAlert('error', 'error')
    }
  }
  updateCart(a) {
    this.disableSubmit = false
    this.values.count += parseInt(this.quantity)
    this.AddToCart = 'AddToCart'
  }
  getCart() {
    this.nav.push(CartPage)
  }
  mySlideOptions = {
    initialSlide: 1,
    loop: true,
    autoplay: 5800,
    pager: true,
  }
  getReviews() {
    this.service.getReviews(this.id).then(results => this.handleReview(results))
  }
  handleReview(a) {
    this.reviews = a
    for (let item in this.reviews.product_reviews) {
      this.reviews.product_reviews[item].avatar = md5(
        this.reviews.product_reviews[item].reviewer_email,
      )
    }
  }
  addToWishlist(id) {
    if (this.values.isLoggedIn) {
      this.service.addToWishlist(id).then(results => this.update(results))
    } else {
      this.functions.showAlert(
        'Warning',
        'You must login to add product to wishlist',
      )
    }
  }
  update(a) {
    if (a.success == 'Success') {
      //this.functions.showAlert(a.success, a.message);
      this.values.wishlistId[this.product.product.id] = true
    } else {
      this.functions.showAlert('error', 'error')
    }
  }
  removeFromWishlist(id) {
    this.values.wishlistId[id] = false
    this.service.deleteItem(id).then(results => this.updateWish(results, id))
  }
  updateWish(results, id) {
    if (results.status == 'success') {
      this.values.wishlistId[id] = false
    }
  }
  chooseVariation(option) {
    if (this.selectedProduct) {
      this.selectedProduct = null
      this.product.product.price = this.product.product.minPrice
    }
    this.product.product.resources_full.forEach(item => {
      if (item.resource_id == option.resource_id) {
        this.selectedProduct = option
        this.product.product.price = this.selectedProduct.price
      }
    })

    // this.product.product.variations.forEach(variation => {
    //   var test = new Array(this.usedVariationAttributes.length)
    //   test.fill(false)
    //   this.usedVariationAttributes.forEach(attribute => {
    //     if (variation.attributes.length == 0) {
    //       this.options.variation_id = variation.id
    //       this.product.product.in_stock = variation.in_stock
    //       this.product.product.price = variation.price
    //       this.product.product.sale_price = variation.sale_price
    //       this.product.product.regular_price = variation.regular_price
    //     } else {
    //       variation.attributes.forEach((item, index) => {
    //         if (
    //           attribute.selected &&
    //           item.name.toUpperCase() == attribute.name.toUpperCase() &&
    //           item.option.toUpperCase() == attribute.selected.toUpperCase()
    //         ) {
    //           test[index] = true
    //         }
    //       })
    //       if (test.every(v => v == true)) {
    //         this.options.variation_id = variation.id
    //         this.product.product.in_stock = variation.in_stock
    //         this.product.product.price = variation.price
    //         this.product.product.sale_price = variation.sale_price
    //         this.product.product.regular_price = variation.regular_price
    //         test.fill(false)
    //       }
    //     }
    //   })
    // })
  }
}
