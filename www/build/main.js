webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_category_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchPage = /** @class */ (function () {
    function SearchPage(nav, categoryService, service, values, params) {
        this.nav = nav;
        this.categoryService = categoryService;
        this.service = service;
        this.values = values;
        this.has_more_items = true;
        this.page = 1;
        this.shouldShowCancel = true;
        this.showSearch = true;
        this.showFilters = false;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.quantity = "1";
        this.myInput = "";
    }
    SearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.searchbar.setFocus();
        }, 0);
    };
    SearchPage.prototype.ionViewWillLeave = function () {
        // this.showSearch = false;
    };
    SearchPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    SearchPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter['filter[q]'] = $event.srcElement.value;
        this.values.filter = {};
        this.service.getSearch(this.filter)
            .then(function (results) { return _this.products = results; });
    };
    SearchPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    SearchPage.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], item);
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        // this.page += 1;
        this.service.getSearch(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    SearchPage.prototype.handleMore = function (results, infiniteScroll) {
        // if (results.products == undefined) {
        //     console.log('No hay mas productos que mostrar...', results.products)
        //     this.has_more_items = false
        //     infiniteScroll.complete()
        //     return
        // }
        console.log(results);
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    SearchPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id)
            .then(function (results) { return _this.status = results; });
    };
    SearchPage.prototype.addToCart = function (id) {
        var _this = this;
        var text = '{';
        var i;
        for (i = 0; i < this.options.length; i++) {
            var res = this.options[i].split(":");
            text += '"' + res[0] + '":"' + res[1] + '",';
        }
        text += '"product_id":"' + id + '",';
        text += '"quantity":"' + this.quantity + '"}';
        var obj = JSON.parse(text);
        this.service.addToCart(obj)
            .then(function (results) { return _this.updateCart(results); });
    };
    SearchPage.prototype.updateCart = function (a) {
    };
    SearchPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    SearchPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    SearchPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id)
            .then(function (results) { return _this.status = results; });
    };
    //Filter shit
    SearchPage.prototype.getFilter = function () {
        this.showFilters = true;
        this.has_more_items = false;
    };
    SearchPage.prototype.cancel = function () {
        this.showFilters = false;
        this.has_more_items = true;
    };
    SearchPage.prototype.chnageFilter = function (sort) {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        // if (sort == 0) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'date'
        // }
        // if (sort == 1) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'name'
        // } else if (sort == 2) {
        //   this.filter['filter[order]'] = 'DESC'
        //   this.filter['filter[orderby]'] = 'name'
        // } else if (sort == 3) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'meta_value_num'
        //   this.filter['filter[orderby_meta_key]'] = '_price'
        // } else if (sort == 4) {
        //   this.filter['filter[order]'] = 'DESC'
        //   this.filter['filter[orderby]'] = 'meta_value_num'
        //   this.filter['filter[orderby_meta_key]'] = '_price'
        // }
        // FILTROS SHIT EN FUNCION
        if (sort == 5) {
            this.filter['orderby'] = 'menu_order';
        }
        else if (sort == 6) {
            this.filter['orderby'] = 'popularity';
        }
        else if (sort == 7) {
            this.filter['orderby'] = 'rating';
        }
        else if (sort == 8) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'asc';
        }
        else if (sort == 9) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'desc';
        }
        else if (sort == 10) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'asc';
        }
        else if (sort == 11) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'desc';
        }
        else if (sort == 12) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'asc';
        }
        else if (sort == 13) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'desc';
        }
        /*this.filter['filter[meta_query][key]'] = "_price";
            this.filter['filter[meta_query][value]'] = '[0,10]';
            this.filter['filter[meta_query][compare]'] = "BETWEEN";*/
        this.categoryService.load(this.filter).then(function (results) { return (_this.products = results); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Searchbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Searchbar"])
    ], SearchPage.prototype, "searchbar", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-searchbar *ngIf="showSearch" [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel"\n\n      (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n\n    </ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="search">\n\n\n\n  <div *ngIf="showFilters" class="filter">\n\n    <ion-list radio-group [(ngModel)]="sort" (ngModelChange)="chnageFilter(sort)">\n\n      <ion-list-header>\n\n        <b>\n\n          {{"Sort" | translate}}\n\n        </b>\n\n      </ion-list-header>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Default" | translate}}</ion-label>\n\n        <ion-radio value="5"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by popularity" | translate}}</ion-label>\n\n        <ion-radio value="6"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by average rating" | translate}}</ion-label>\n\n        <ion-radio value="7"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by date: ASC" | translate}}</ion-label>\n\n        <ion-radio value="8"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by date: DESC" | translate}}</ion-label>\n\n        <ion-radio value="9"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by price: low to high" | translate}}</ion-label>\n\n        <ion-radio value="10"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by price: high to low" | translate}}</ion-label>\n\n        <ion-radio value="11"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by name: ASC" | translate}}</ion-label>\n\n        <ion-radio value="12"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by name: DESC" | translate}}</ion-label>\n\n        <ion-radio value="13"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="button-color" (click)="cancel()">\n\n      {{"CANCEL" | translate}}\n\n    </button>\n\n  </div>\n\n  <div *ngIf="!showFilters">\n\n    <div *ngIf="products" class="products-search">\n\n      <h2 *ngIf="!products.length" style="font-size: 15px;text-align: center;margin-top: 30px">No products found!.</h2>\n\n      <div *ngIf="products.length">\n\n        <div *ngIf="values.listview">\n\n          <ion-item no-lines class="item-name">\n\n            <ion-label text-uppercase>{{"Providers" | translate}}\n\n            </ion-label>\n\n            <button ion-button icon-only item-right clear color="button-color" (click)="getFilter()">\n\n              <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only item-right clear color="button-color" (click)="setGridView()">\n\n              <ion-icon ios="ios-grid" md="md-grid">\n\n              </ion-icon>\n\n            </button>\n\n          </ion-item>\n\n          <ion-list *ngIf="products">\n\n            <div class="item-list" *ngFor="let item of products">\n\n              <ion-item no-lines class="price-list">\n\n                <ion-thumbnail item-left class="stock-list">\n\n                  <a (click)="getProduct(item)">\n\n                    <img [style.height.rem]="values.dimensions.imageListViewHeight" src="{{item.images[0].src}}">\n\n                    <button ion-button color="danger"\n\n                      *ngIf="item.stock_status !== \'instock\'">{{"OUTOFSTOCK" | translate}}\n\n                    </button>\n\n                  </a>\n\n                </ion-thumbnail>\n\n                <a (click)="getProduct(item)">\n\n                  <div class="product-name-top">\n\n                    <h2>{{item.title}}\n\n                    </h2>\n\n                    <h2 *ngIf="item.name">{{item.name}}</h2>\n\n                    <p class="max-lines" [innerHTML]="item.description">\n\n                    </p>\n\n                  </div>\n\n                  <div class="bottom-left">\n\n                    <h3 class="price-regular" *ngIf="!item.sale_price">\n\n                      {{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </h3>\n\n                    <h3 class="price-special" *ngIf="item.sale_price">\n\n                      {{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </h3>\n\n                    <h3 class="price-del" *ngIf="item.sale_price">\n\n                      <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n                      </del>\n\n                    </h3>\n\n                  </div>\n\n                </a>\n\n                <div class="bottom-right-button">\n\n                  <!-- <button ion-button text-uppercase color="button-color" item-right outline *ngIf="item.in_stock && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n\n                  {{"Add" | translate}}\n\n                </button> -->\n\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1"\n\n                    (click)="deleteFromCart(item.id)">\n\n                    <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n\n                    </ion-icon>\n\n                  </button>\n\n                  <button ion-button item-right color="button-color" clear\n\n                    *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n\n                  </button>\n\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1"\n\n                    (click)="updateToCart(item.id)">\n\n                    <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n\n                    </ion-icon>\n\n                  </button>\n\n                  <button ion-button text-uppercase color="button-color" item-right [disabled]=\'disableSubmit\' clear\n\n                    *ngIf="item.stock_status !== \'instock\' && values.cart[item.id] == undefined || values.cart[item.id] == 0"\n\n                    (click)="addToCart(item.id, item.type)">\n\n                    {{button}}\n\n                  </button>\n\n                </div>\n\n              </ion-item>\n\n            </div>\n\n          </ion-list>\n\n        </div>\n\n        <div *ngIf="!values.listview">\n\n          <ion-item no-lines class="item-name">\n\n            <ion-label text-uppercase>{{"Providers" | translate}}\n\n            </ion-label>\n\n            <button ion-button icon-only item-right clear color="button-color" (click)="getFilter()">\n\n              <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only item-right clear color="button-color" (click)="setListView()">\n\n              <ion-icon ios="ios-list-box" md="ios-list-box">\n\n              </ion-icon>\n\n            </button>\n\n          </ion-item>\n\n          <div class="card-background-page grid" *ngIf="products">\n\n            <ion-row class="row unlimited-items">\n\n              <ion-col class="col" *ngFor="let item of products">\n\n                <ion-card>\n\n                  <ion-card-content class="stock">\n\n                    <a (click)="getProduct(item)">\n\n                      <img [style.height.px]="values.dimensions.imageGridViewHeight" src="{{item.images[0].src}}">\n\n                      <button ion-button color="danger"\n\n                        *ngIf="item.stock_status !== \'instock\'">{{"OUTOFSTOCK" | translate}}\n\n                      </button>\n\n                    </a>\n\n                  </ion-card-content>\n\n                  <ion-label class="product-label">{{item.title}}\n\n                  </ion-label>\n\n                  <h2 *ngIf="item.name">{{item.name}}</h2>\n\n                  <ion-item no-padding class="price-list">\n\n                    <h3 class="price-regular" *ngIf="!item.sale_price">\n\n                      {{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </h3>\n\n                    <h3 class="price-special" *ngIf="item.sale_price">\n\n                      {{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n                    </h3>\n\n                    <h3 class="price-delete" *ngIf="item.sale_price">\n\n                      <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n                      </del>\n\n                    </h3>\n\n                    <button ion-button text-uppercase color="button-color" item-right [disabled]=\'disableSubmit\' clear\n\n                      *ngIf="item.stock_status !== \'instock\' && values.cart[item.id] == undefined || values.cart[item.id] == 0"\n\n                      (click)="addToCart(item.id, item.type)">\n\n                      {{button}}\n\n                    </button>\n\n                    <!-- <button ion-button text-uppercase color="button-color" item-right clear *ngIf="item.in_stock && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n\n                    {{"Add" | translate}}\n\n                  </button> -->\n\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1"\n\n                      (click)="deleteFromCart(item.id)">\n\n                      <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n\n                      </ion-icon>\n\n                    </button>\n\n                    <button ion-button item-right color="button-color" clear\n\n                      *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n\n                    </button>\n\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1"\n\n                      (click)="updateToCart(item.id)">\n\n                      <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n\n                      </ion-icon>\n\n                    </button>\n\n                  </ion-item>\n\n                </ion-card>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n      <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading more items..\' | translate}}">\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_service_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgotten_forgotten__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_category_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dash_proveedor_dash_proveedor__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { IframePage } from '../../iframe/iframe'
// import {Home} from '../../home/home'
var AccountLogin = /** @class */ (function () {
    function AccountLogin(nav, service, functions, values, platform, oneSignal, alert, categoryService) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.alert = alert;
        this.categoryService = categoryService;
        this.disableSubmit = false;
        this.isActiveToggleTextPassword = true;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.loginData = {};
        this.buttonText = 'Login';
        this.service.getNonce().then(function (results) { return (_this.nonce = results); });
        this.countries = {};
        this.products = [];
    }
    AccountLogin.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    AccountLogin.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = 'Logging In...';
            this.service
                .login(this.loginData)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    AccountLogin.prototype.validateForm = function () {
        if (this.loginData.username == undefined || this.loginData.username == '') {
            return false;
        }
        if (this.loginData.password == undefined || this.loginData.password == '') {
            return false;
        }
        else {
            return true;
        }
    };
    AccountLogin.prototype.handleResults = function (results) {
        var _this = this;
        this.disableSubmit = false;
        this.buttonText = 'Login';
        if (!results.errors) {
            if (this.platform.is('cordova'))
                this.oneSignal.getIds().then(function (data) {
                    _this.service.subscribeNotification(data);
                });
            // this.categoryService.getProductsByIdVendor2()
            // .then((result:any) => {
            //   if(result.length > 0){
            //     for(let i=0; i<result.length; i++){
            //       this.products.push(result[i])
            //     }
            //   }
            // });
            // this.service.registerProvider({
            //   id:this.values.customerId,
            //   lat: 'kdjlakda',
            //   lng: 'ksajldkas',
            //   products:this.products,
            //   onesignal:this.values.userId
            // })
            // .then(results => console.log("resultado del registro del proveedor",results))
            // .catch(error => console.log(error));
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__dash_proveedor_dash_proveedor__["a" /* DashProveedorPage */]);
            // console.log(results)
            // if(results.data.subscription.length == 0){
            //   console.log('entro no subscription:',this.values.isLoggedIn);
            //     this.nav.setRoot(test);
            // }else{
            //   console.log('entro subscription:',this.values.isLoggedIn);
            //   this.nav.setRoot(DashProveedorPage);
            // }
        }
        else if (results.errors) {
            if (results.errors.invalid_email)
                this.functions.showAlert('Email', results.errors.invalid_email);
            else if (results.errors.invalid_username)
                this.functions.showAlert('Username', results.errors.invalid_username);
            else if (results.errors.incorrect_password)
                this.showAlertForgotPass('Password', '<strong>ERROR</strong>: The password you entered for the email address <strong>' + this.loginData.username + '</strong> is incorrect.');
            else if (results.errors.az_confirmation_error)
                this.showAlertResendKey('Confirmation mail', '<strong>ERROR:</strong> Please verify your account before login.');
            else
                this.functions.showAlert('error', 'invalid username/password');
        }
    };
    AccountLogin.prototype.forgotten = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__forgotten_forgotten__["a" /* AccountForgotten */]);
    };
    AccountLogin.prototype.showAlertForgotPass = function (title, text) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Lost your password?',
                    handler: function (data) {
                        _this.forgotten();
                    }
                }
            ],
        });
        alert.present();
    };
    AccountLogin.prototype.showAlertResendKey = function (title, text) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Resend Verification Link?',
                    handler: function (data) {
                        _this.service.getNonceResendKey(_this.loginData.username).then(function (results) { return _this.handleResultsNonce(results); });
                    }
                }
            ]
        });
        alert.present();
    };
    AccountLogin.prototype.handleResultsNonce = function (results) {
        this.countries = results;
        this.service.resendKey(this.loginData.username, this.countries.resend_key_nonce);
    };
    AccountLogin.prototype.toggleTextPassword = function () {
        this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
    };
    AccountLogin.prototype.getType = function () {
        return this.isActiveToggleTextPassword ? 'password' : 'text';
    };
    AccountLogin.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    AccountLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\login\login.html"*/'<!-- Header -->\n\n<ion-header>\n\n  <ion-toolbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="account-login">\n\n    <img class="header-login" src="{{values.headerLogin}}">\n\n\n\n  <div class="margin">\n\n    <div>\n\n      <img class="logo-login" style="width: 70%;" src="{{values.logoLogin}}">\n\n    </div>\n\n    <form #f="ngForm" class="login">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>{{"username" | translate}}</ion-label>\n\n          <ion-input required type="email" [(ngModel)]="loginData.username" name="firstname">\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <!-- <ion-item>\n\n          <ion-input [type]="getType()" required type="password" [(ngModel)]="loginData.password" name="password" placeholder="Password"></ion-input>\n\n        <ion-icon name="eye" item-right (click)="toggleTextPassword()"></ion-icon>\n\n\n\n        </ion-item> -->\n\n\n\n        <ion-item>\n\n          <ion-label floating>{{"password" | translate}}</ion-label>\n\n          <ion-input class="pass" required [type]="passwordType" clearOnEdit="false" [(ngModel)]="loginData.password" name="password"></ion-input>\n\n          <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (click)=\'hideShowPassword()\'></ion-icon>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <div class="margin">\n\n        <div class="button-center">\n\n          <button ion-button block color="button-color" type="submit" class="button button-block button-default"\n\n            text-uppercase [disabled]="disableSubmit" (click)="login(loginData)">{{"LogIn" | translate}}\n\n          </button>\n\n        </div>\n\n        <br>\n\n        <button ion-button clear color="button-color" type="submit" class="forgot-pass button button-block button-clear"\n\n          text-uppercase (click)="forgotten()">{{"Forgot Password" | translate}} ?\n\n        </button>\n\n      </div>\n\n    </form>\n\n    <br />\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_service_category_service__["a" /* CategoryService */]])
    ], AccountLogin);
    return AccountLogin;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingVendor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__booking_details_booking_details__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BookingVendor = /** @class */ (function () {
    function BookingVendor(translate, config, http, nav, service, values, functions) {
        this.translate = translate;
        this.config = config;
        this.http = http;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.page = 1;
        this.dataVendor = {};
        this.lan = {};
    }
    BookingVendor.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.idVendor = this.values.customerId;
        this.filter['id'] = this.values.customerId.toString();
        this.service.getBookingsVendor(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    BookingVendor.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getBookingsVendor(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    BookingVendor.prototype.handleMore = function (results, infiniteScroll) {
        this.filter.page += 1;
        if (results.orders != undefined) {
            for (var i = 0; i < results.orders.length; i++) {
                this.orders.orders.push(results.orders[i]);
            }
            ;
        }
        if (results.orders.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    BookingVendor.prototype.getBookingDetails = function (idOrder) {
        var idVendor = this.idVendor;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__booking_details_booking_details__["a" /* BookingDetails */], { idOrder: idOrder, idVendor: idVendor });
    };
    BookingVendor.prototype.confirm = function (bookingId) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* URLSearchParams */]();
        params.append('bookingid', bookingId);
        return new Promise(function (resolve) {
            console.log(params);
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-process_confirm', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
                console.log(_this.status);
                console.log(data);
                console.log(_this.status.message);
                if (_this.status.message == "success") {
                    _this.functions.showAlert("SUCCESS", "Booking Confirmed. ");
                    _this.ionViewDidEnter();
                }
                else
                    _this.functions.showAlert("ERROR", "an error has occurred please check. ");
            });
        });
    };
    BookingVendor.prototype.unconfirm = function (bookingId) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* URLSearchParams */]();
        params.append('bookingid', bookingId);
        return new Promise(function (resolve) {
            console.log(params);
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-process_unconfirm', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
                console.log(_this.status);
                console.log(data);
                console.log(_this.status.message);
                if (_this.status.message == "success") {
                    _this.functions.showAlert("SUCCESS", "Booking Unconfirmed. ");
                    _this.ionViewDidEnter();
                }
                else
                    _this.functions.showAlert("ERROR", "an error has occurred please check. ");
            });
        });
    };
    BookingVendor.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get(['SUCCESS', 'Please Select']).subscribe(function (translations) {
            _this.lan.oops = translations['Oops!'];
            _this.lan.oops = translations['Oops!'];
        });
    };
    BookingVendor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\booking-vendor\booking-vendor.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title  text-center>{{"Bookings" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="account-order">\n\n  <ion-spinner *ngIf="!orders" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orders">\n\n\n\n    <div class="no-orders">\n\n    <h4 *ngIf="orders.orders.length == 0" text-center no-lines>\n\n      <button ion-button full clear text-uppercase color="header">{{"Therearenoorders." | translate}}\n\n      </button>\n\n    </h4>\n\n    </div>\n\n\n\n    <div *ngIf="orders.orders.length">\n\n      <ion-item *ngFor="let item of orders.orders">\n\n        \n\n        <h2>\n\n          <b>{{"Details" | translate}} :\n\n          </b>{{"Booking" | translate }} # {{item.bookingId}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Booked Product" | translate}} :\n\n          </b> <label style="color:#1e88e5e6;"> {{item.booked_product}}</label>\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Booked By" | translate}} :\n\n          </b> {{item.booked_by}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Start Date" | translate}} :\n\n          </b> {{item.start_date | date:\'medium\'}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"End Date" | translate}} :\n\n          </b> {{item.end_date | date:\'medium\'}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Customer" | translate}} :\n\n          </b> {{item.billing_address.first_name}} {{item.billing_address.last_name}}, {{item.billing_address.address_1}}, {{item.billing_address.address_2}}, {{item.billing_address.city}}, {{item.billing_address.state}}, {{item.billing_address.country}}, {{item.billing_address.postcode}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Status" | translate}} :\n\n          </b> {{item.statusbooking}}\n\n        </h2>\n\n\n\n        <button *ngIf="item.row_actions.edit" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="getBookingDetails(item.order_id)">\n\n          <ion-icon name="ios-eye">\n\n          </ion-icon>		  		\n\n          {{"View" | translate}} \n\n        </button>\n\n\n\n        <button *ngIf="item.row_actions.confirm" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="confirm(item.bookingId)">\n\n          <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n\n          </ion-icon>		  		\n\n          {{"Confirm" | translate}} \n\n        </button>\n\n\n\n        <button *ngIf="item.row_actions.unconfirm" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="unconfirm(item.bookingId)">\n\n          <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n\n          </ion-icon>		  		\n\n          {{"Unconfirm" | translate}} \n\n        </button>\n\n\n\n      </ion-item>\n\n    </div> \n\n    <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n      <ion-infinite-scroll-content\n\n      loadingSpinner="crescent"\n\n      loadingText="{{\'Loading more items..\' | translate}}">\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll> -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\booking-vendor\booking-vendor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], BookingVendor);
    return BookingVendor;
}());

//# sourceMappingURL=booking-vendor.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesProductsProvidersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_product_new_product__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the PagesProductsProvidersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagesProductsProvidersPage = /** @class */ (function () {
    function PagesProductsProvidersPage(nav, popoverCtrl, service, params, values, functions) {
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.listview = false;
        this.shouldShowCancel = true;
        this.showFilters = false;
        this.sort = 0;
        this.data = {};
        this.filter = {};
        this.q = '';
        if (params.data.slug != '') {
            this.filter['filter[category]'] = params.data.slug;
            this.filter.id = params.data.id;
        }
        if (params.data.productslocation != '') {
            this.filter['include'] = params.data.productslocation;
        }
        this.categoryName = params.data.name;
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.subCategories = [];
        this.items = [];
        this.quantity = '1';
        this.subCategories = params.data.categories;
    }
    PagesProductsProvidersPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.service.getProductsByIdVendor()
            .then(function (resultsByVendor) { return _this.handleProdInit(resultsByVendor); });
    };
    PagesProductsProvidersPage.prototype.handleProdInit = function (resultsByVendor) {
        var _this = this;
        this.filter['include'] = resultsByVendor.toString();
        console.log(this.filter);
        this.service.load(this.filter).then(function (results) {
            _this.products = results;
            var _loop_1 = function (index) {
                var element = _this.products[index];
                var resources = element.resource_block_costs;
                var prices = new Array();
                for (var key in resources) {
                    prices = prices.concat([resources[key]]);
                }
                if (Object.keys(resources).length) {
                    var minPrice_1 = Math.min.apply(Math, prices);
                    _this.products.map(function (element) {
                        return (element.minPrice = minPrice_1);
                    });
                }
            };
            for (var index = 0; index < _this.products.length; index++) {
                _loop_1(index);
            }
        });
    };
    PagesProductsProvidersPage.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.categories;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__products_products__["a" /* ProductsPage */], this.items);
    };
    PagesProductsProvidersPage.prototype.parseText = function (id, count, offset, obj2) {
        var text = '{';
        text += '"category' + '":"' + id + '"}';
        var obj1 = JSON.parse(text);
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    };
    PagesProductsProvidersPage.prototype.getProducts = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__products_products__["a" /* ProductsPage */], item);
    };
    PagesProductsProvidersPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
    };
    PagesProductsProvidersPage.prototype.getProductForANewProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__new_product_new_product__["a" /* NewProductPage */], id);
    };
    PagesProductsProvidersPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    PagesProductsProvidersPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service
            .loadMore(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    PagesProductsProvidersPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
        }
        console.log('resultados', results);
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    PagesProductsProvidersPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    PagesProductsProvidersPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    PagesProductsProvidersPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id).then(function (results) { return (_this.status = results); });
    };
    PagesProductsProvidersPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id).then(function (results) { return (_this.status = results); });
    };
    PagesProductsProvidersPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
        }
        else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(':');
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then(function (results) { return _this.updateCart(results); });
        }
    };
    PagesProductsProvidersPage.prototype.updateCart = function (a) { };
    PagesProductsProvidersPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter['filter[q]'] = $event.srcElement.value;
        console.log(this.filter['filter[q]']);
        this.service.search(this.filter).then(function (results) { return (_this.products = results); });
    };
    PagesProductsProvidersPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    PagesProductsProvidersPage.prototype.getFilter = function () {
        this.showFilters = true;
        this.has_more_items = false;
    };
    PagesProductsProvidersPage.prototype.cancel = function () {
        this.showFilters = false;
        this.has_more_items = true;
    };
    PagesProductsProvidersPage.prototype.chnageFilter = function (sort) {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        // if (sort == 0) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'date'
        // }
        // if (sort == 1) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'name'
        // } else if (sort == 2) {
        //   this.filter['filter[order]'] = 'DESC'
        //   this.filter['filter[orderby]'] = 'name'
        // } else if (sort == 3) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'meta_value_num'
        //   this.filter['filter[orderby_meta_key]'] = '_price'
        // } else if (sort == 4) {
        //   this.filter['filter[order]'] = 'DESC'
        //   this.filter['filter[orderby]'] = 'meta_value_num'
        //   this.filter['filter[orderby_meta_key]'] = '_price'
        // }
        // FILTROS SHIT EN FUNCION
        if (sort == 5) {
            this.filter['orderby'] = 'menu_order';
        }
        else if (sort == 6) {
            this.filter['orderby'] = 'popularity';
        }
        else if (sort == 7) {
            this.filter['orderby'] = 'rating';
        }
        else if (sort == 8) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'asc';
        }
        else if (sort == 9) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'desc';
        }
        else if (sort == 10) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'asc';
        }
        else if (sort == 11) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'desc';
        }
        else if (sort == 12) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'asc';
        }
        else if (sort == 13) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'desc';
        }
        /*this.filter['filter[meta_query][key]'] = "_price";
            this.filter['filter[meta_query][value]'] = '[0,10]';
            this.filter['filter[meta_query][compare]'] = "BETWEEN";*/
        this.service.load(this.filter).then(function (results) { return (_this.products = results); });
    };
    PagesProductsProvidersPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.functions.showAlert('Warning', 'You must login to add product to wishlist');
        }
    };
    PagesProductsProvidersPage.prototype.update = function (results, id) {
        if (results.success == 'Success') {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[id] = true;
        }
        else {
        }
    };
    PagesProductsProvidersPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    PagesProductsProvidersPage.prototype.updateWish = function (results, id) {
        if (results.status == 'success') {
            this.values.wishlistId[id] = false;
        }
    };
    PagesProductsProvidersPage.prototype.newProduct = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__new_product_new_product__["a" /* NewProductPage */]);
    };
    PagesProductsProvidersPage.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    PagesProductsProvidersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pages-products-providers',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\pages-products-providers\pages-products-providers.html"*/'<ion-header>\n\n  <ion-toolbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="products">\n\n  <div class="sub-header">\n\n    <h1>Servicios</h1>\n\n  </div>\n\n  <div class="body-product">\n\n    <ion-item no-padding no-lines class="item-background">\n\n      <button  style="font-weight: bold;" ion-button item-center medium color="button-color" text-uppercase\n\n      (click)="newProduct()">{{"Agregar nuevo servicio" | translate}}\n\n      </button>\n\n    </ion-item>\n\n    <ion-spinner *ngIf="!products" name="crescent"></ion-spinner>\n\n    <div *ngIf="products">\n\n      <h2\n\n        *ngIf="!products.length"\n\n        style="font-size: 15px;text-align: center;margin-top: 30px"\n\n      >\n\n        No products found!.\n\n      </h2>\n\n    </div>\n\n    <div *ngIf="products !== undefined" class="products-listing">\n\n      <div *ngIf="products.length">\n\n        <div *ngIf="values.listview">\n\n          <ion-list>\n\n            <div class="item-list" *ngFor="let item of products">\n\n              <ion-item class="left-padding" no-lines>\n\n                <ion-thumbnail item-left class="stock-list">\n\n                  <img\n\n                    [style.height.rem]="values.dimensions.imageListViewHeight"\n\n                    tappable\n\n                    (click)="getProduct(item)"\n\n                    src="{{item.images[0].src}}"\n\n                  />\n\n\n\n                </ion-thumbnail>\n\n\n\n                <div class="product-name-top">\n\n                  <ion-row>\n\n                    <ion-col width-80 class="product-label">\n\n                      <div tappable (click)="getProduct(item)">\n\n                        <h2 *ngIf="item.title">{{item.title}}</h2>\n\n                        <h2 *ngIf="item.name">{{item.name}}</h2>\n\n                      </div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <p\n\n                    tappable\n\n                    (click)="getProduct(item)"\n\n                    class="max-lines"\n\n                    [innerHTML]="item.description"\n\n                  ></p>\n\n                </div>\n\n\n\n                <div class="price-bottom-list">\n\n                  <h3 class="price-regular" *ngIf="!item.minPrice">\n\n                    Starting from {{1*item.price |\n\n                    currency:values.currency:true:\'1.2-2\'}}\n\n                  </h3>\n\n\n\n                  <h3 class="price-regular" *ngIf="item.minPrice">\n\n                    Starting from {{1*item.minPrice |\n\n                    currency:values.currency:true:\'1.2-2\'}}\n\n                  </h3>\n\n\n\n                </div>\n\n\n\n                <div class="bottom-right-button">\n\n                  <button\n\n                    ion-button\n\n                    icon-only\n\n                    item-right\n\n                    clear\n\n                    color="button-color"\n\n                    *ngIf="values.cart[item.id] >= 1"\n\n                    (click)="deleteFromCart(item.id)"\n\n                  >\n\n                    <ion-icon\n\n                      ios="ios-remove-circle-outline"\n\n                      md="ios-remove-circle-outline"\n\n                    ></ion-icon>\n\n                  </button>\n\n                  <button\n\n                    ion-button\n\n                    item-right\n\n                    color="button-color"\n\n                    clear\n\n                    *ngIf="values.cart[item.id] >= 1"\n\n                  >\n\n                    {{values.cart[item.id]}}\n\n                  </button>\n\n                  <button\n\n                    ion-button\n\n                    icon-only\n\n                    item-right\n\n                    clear\n\n                    color="button-color"\n\n                    *ngIf="values.cart[item.id] >= 1"\n\n                    (click)="updateToCart(item.id)"\n\n                  >\n\n                    <ion-icon\n\n                      ios="ios-add-circle-outline"\n\n                      md="ios-add-circle-outline"\n\n                    ></ion-icon>\n\n                  </button>\n\n                </div>\n\n              </ion-item>\n\n            </div>\n\n          </ion-list>\n\n        </div>\n\n        <div *ngIf="!values.listview">\n\n          <div class="card-background-page grid">\n\n            <ion-row class="row unlimited-items">\n\n              <ion-col class="col" *ngFor="let item of products">\n\n                <ion-card class="item-product">\n\n                  <ion-card-content class="stock">\n\n                    <img\n\n                      [style.height.px]="values.dimensions.imageGridViewHeight"\n\n                      tappable\n\n                      src="{{item.images[0].src}}"\n\n                      (click)="getProduct(item)"\n\n                    />\n\n                  </ion-card-content>\n\n                  <div tappable (click)="getProduct(item)" class="card-name">\n\n                    <ion-label *ngIf="item.title">{{item.title}}</ion-label>\n\n                    <ion-label *ngIf="item.name">{{item.name}}</ion-label>\n\n                  </div>\n\n\n\n                    <ion-item no-padding no-lines class="item-background">\n\n                      {{"Descripción" | translate}} :\n\n                    </ion-item>\n\n                    <ion-item class="description" text-wrap no-lines>\n\n                      <div [innerHTML]="item.description"></div>\n\n                    </ion-item>\n\n\n\n                    <ion-item no-padding no-lines class="item-background">\n\n                      {{"Categoria:" | translate}}<div  style="display: flex;">\n\n                        <div *ngFor="let c of item.categories" style="width: 10%; margin-bottom: 5px; margin-right: 5px; margin-top: 5px;">\n\n                          <div *ngIf="c.slug == \'servicio-limpieza\'">\n\n                            <img class="img" src="{{values.limpieza}}" alt="{{c.name}}" >\n\n                          </div>\n\n                          <div *ngIf="c.slug == \'servicio-de-cuido-de-ninos\'">\n\n                            <img class="img"src="{{values.cuido}}" alt="{{c.name}}" >\n\n                          </div>\n\n                          <div *ngIf="c.slug == \'servicio-planchado\'">\n\n                            <img class="img" src="{{values.planchado}}" alt="{{c.name}}" >\n\n                          </div>\n\n                          <div *ngIf="c.slug == \'servicio-camarero\'">\n\n                            <img class="img" src="{{values.camarero}}" alt="{{c.name}}" >\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </ion-item>\n\n                    <ion-item no-padding no-lines class="item-background">\n\n                      <button style="font-weight: bold;" ion-button item-center medium color="button-color" text-uppercase\n\n                      (click)="getProduct(item)">{{"Ver" | translate}}\n\n                      </button>\n\n                      <button style="font-weight: bold;" ion-button item-center medium color="button-color" text-uppercase\n\n                      (click)="getProductForANewProduct(item)">{{"Editar" | translate}}\n\n                      </button>\n\n                    </ion-item>\n\n                </ion-card>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <ion-infinite-scroll\n\n        (ionInfinite)="doInfinite($event)"\n\n        *ngIf="has_more_items"\n\n      >\n\n        <ion-infinite-scroll-content\n\n          loadingSpinner="crescent"\n\n          loadingText="{{\'Loading more items..\' | translate}}"\n\n        ></ion-infinite-scroll-content>\n\n      </ion-infinite-scroll>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\pages-products-providers\pages-products-providers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], PagesProductsProvidersPage);
    return PagesProductsProvidersPage;
}());

//# sourceMappingURL=pages-products-providers.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_functions__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Service = /** @class */ (function () {
    function Service(reqhttp, http, config, values, loadingCtrl, nativeStorage, functions) {
        this.reqhttp = reqhttp;
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.functions = functions;
        this.header = new Headers();
        this.dir = 'left';
        this.filter = {};
        this.has_more_items = true;
        this.blocks = [];
        this.dataSearchProduct = [];
        this.mainCategories = [];
        this.filter.page = 1;
    }
    Service.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-keys')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.values.data = data;
                _this.values.settings = data.settings;
                _this.blocks = data.blocks;
                var _loop_1 = function (item) {
                    if (_this.blocks[item].block_type == 'product_block') {
                        if (_this.blocks[item].filter_by == 'tag')
                            filter = { tag: _this.blocks[item].link_id, status: 'publish' };
                        else
                            filter = {
                                category: _this.blocks[item].link_id,
                                status: 'publish',
                            };
                        _this.http
                            .get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/?', filter))
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            _this.blocks[item].products = data;
                        });
                    }
                    if (_this.blocks[item].block_type == 'flash_sale_block') {
                        if (_this.blocks[item].filter_by == 'tag')
                            filter = { tag: _this.blocks[item].link_id, status: 'publish' };
                        else
                            filter = {
                                category: _this.blocks[item].link_id,
                                status: 'publish',
                            };
                        _this.http
                            .get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/?', filter))
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            _this.blocks[item].products = data;
                        });
                        _this.blocks[item].interval = setInterval(function () {
                            var countDownDate = new Date(_this.blocks[item].sale_ends).getTime();
                            var now = new Date().getTime();
                            var distance = countDownDate - now;
                            _this.blocks[item].days = Math.floor(distance / (1000 * 60 * 60 * 24));
                            _this.blocks[item].hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            _this.blocks[item].minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                            _this.blocks[item].seconds = Math.floor((distance % (1000 * 60)) / 1000);
                            if (distance < 0) {
                                clearInterval(_this.blocks[item].interval);
                                _this.blocks[item].hide = true;
                            }
                        }, 1000);
                    }
                };
                var filter;
                for (var item in _this.blocks) {
                    _loop_1(item);
                }
                _this.values.currency = data.currency;
                _this.login_nonce = data.login_nonce;
                if (data.user && data.user.data != undefined) {
                    _this.values.isLoggedIn = data.user.data.status;
                    _this.values.customerId = data.user.data.ID;
                    _this.values.customerName = data.user.data.display_name;
                    //this.values.avatar = data.user.data.avatar_url;
                    _this.values.logoutUrl = _this.encodeUrl(data.user.data.url);
                    _this.nativeStorage.getItem('loginData').then(function (data) {
                        if (data.type == 'social') {
                            _this.values.customerName = data.displayName;
                            //this.values.avatar = data.avatar;
                        }
                    }, function (error) { return console.error(error); });
                }
                else {
                    _this.nativeStorage.getItem('loginData').then(function (data) {
                        if (data.type == 'woo') {
                            _this.login(data);
                        }
                        else if (data.type == 'social') {
                            _this.values.customerName = data.displayName;
                        }
                    }, function (error) { return console.error(error); });
                }
                _this.nativeStorage.setItem('blocks', data).then(function (data) { return console.log('Saved'); }, function (error) { return console.error(error); });
                _this.getCategories(1);
                _this.nativeStorage.getItem('loginData').then(function (data) { return _this.login(data); }, function (error) { return console.error(error); });
                _this.http
                    .get(_this.config.url +
                    '/wp-admin/admin-ajax.php?action=mstoreapp-cart')
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.cart = data;
                    _this.values.cartNonce = data.cart_nonce;
                    _this.values.updateCart(_this.cart);
                });
                resolve(true);
            });
        });
    };
    Service.prototype.getCategories = function (page) {
        var _this = this;
        this.http
            .get(this.config.setUrl('GET', '/wp-json/wc/v2/products/categories?', {
            per_page: 100,
            page: page,
        }))
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (page == 1)
                _this.categories = data;
            else {
                _this.categories.push.apply(_this.categories, data);
            }
            if (data.length == 100)
                _this.getCategories(page + 1);
            else {
                _this.categories = _this.categories.filter(function (item) { return item.name !== 'Uncategorized'; });
                _this.mainCategories = _this.categories.filter(function (item) { return item.parent === 0; });
                _this.nativeStorage.setItem('categories', _this.categories).then(function (data) { return console.log('Saved'); }, function (error) { return console.error(error); });
            }
        });
    };
    Service.prototype.getNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-nonce', _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getNonceResendKey = function (username) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('username', username);
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-nonce&' + params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.updateProduct = function (data, product) {
        this.header.append('Content-Type', 'application/json');
        this.http
            .put(this.config.url + '/wp-json/wc-bookings/v1/products/' + product + '?consumer_key=ck_462b7613b1f89991924e149f7d7df2a1c37eb71a&consumer_secret=cs_81a58277089318569168ff48defefa83fa740d86', {
            'name': data.name,
            'description': data.description,
            'short_description': data.short_description,
            'cost': data.cost,
            'block_cost': data.block_cost,
            'display_cost': data.display_cost,
            'availability': data.availability,
            'categories': data.categories
        }, this.header)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('Actualizado', data);
        });
    };
    Service.prototype.addProduct = function (data) {
        var _this = this;
        this.header.append('Content-Type', 'application/json');
        this.http
            .post(this.config.url + '/wp-json/wc-bookings/v1/products?consumer_key=ck_462b7613b1f89991924e149f7d7df2a1c37eb71a&consumer_secret=cs_81a58277089318569168ff48defefa83fa740d86', {
            'name': data.name,
            'slug': data.slug,
            'status': data.status,
            'featured': data.featured,
            'catalog_visibility': data.catalog_visibility,
            'description': data.description,
            'short_description': data.short_description,
            'sku': data.sku,
            'price': data.price,
            'sale_price': data.sale_price,
            'date_on_sale_from': data.date_on_sale_from,
            'date_on_sale_from_gmt': data.date_on_sale_from_gmt,
            'date_on_sale_to': data.date_on_sale_to,
            'date_on_sale_to_gmt': data.date_on_sale_to_gmt,
            'price_html': data.price_htm,
            'on_sale': data.on_sale,
            'purchasable': data.purchasable,
            'virtual': data.virtual,
            'downloadable': data.downloadabl,
            'downloads': data.downloads,
            'download_limit': data.download_limit,
            'download_expiry': data.download_expiry,
            'external_url': data.external_url,
            'button_text': data.button_text,
            'tax_status': data.tax_status,
            'tax_class': data.tax_class,
            'manage_stock': data.manage_stock,
            'stock_quantity': data.stock_quantity,
            'stock_status': data.stock_status,
            'backorders': data.backorders,
            'backorders_allowed': data.backorders_allowed,
            'backordered': data.backordered,
            'sold_individually': data.sold_individually,
            'weight': data.weight,
            'shipping_required': data.shipping_required,
            'shipping_taxable': data.shipping_taxable,
            'shipping_class': data.shipping_class,
            'shipping_class_id': data.shipping_class_id,
            'reviews_allowed': data.reviews_allowed,
            'average_rating': data.average_rating,
            'rating_count': data.rating_count,
            'upsell_ids': data.upsell_ids,
            'cross_sell_ids': data.cross_sell_ids,
            'parent_id': data.parent_id,
            'purchase_note': data.purchase_note,
            'categories': data.categories,
            'tags': data.tags,
            'images': data.images,
            'attributes': data.attributes,
            'default_attributes': data.default_attributes,
            'variations': data.variations,
            'grouped_products': data.grouped_products,
            'menu_order': data.menu_order,
            'apply_adjacent_buffer': data.apply_adjacent_buffer,
            'availability': data.availability,
            'block_cost': data.block_cost,
            'buffer_period': data.buffer_period,
            'calendar_display_mode': data.calendar_display_mode,
            'cancel_limit_unit': data.cancel_limit_unit,
            'cancel_limit': data.cancel_limit,
            'check_start_block_only': data.check_start_block_only,
            'cost': data.cost,
            'display_cost': data.display_cost,
            'duration_type': data.duration_type,
            'duration_unit': data.duration_unit,
            'duration': data.duration,
            'enable_range_picker': data.enable_range_picker,
            'first_block_time': data.first_block_time,
            'has_person_cost_multiplier': data.has_person_cost_multiplier,
            'has_person_qty_multiplier': data.has_person_qty_multiplier,
            'has_person_types': data.has_person_types,
            'has_persons': data.has_persons,
            'has_resources': data.has_resources,
            'max_date_value': data.max_date_value,
            'max_date_unit': data.max_date_unit,
            'max_duration': data.max_duration,
            'max_persons': data.max_persons,
            'min_date_value': data.min_date_value,
            'min_date_unit': data.min_date_unit,
            'min_duration': data.min_duration,
            'min_persons': data.min_person,
            'person_types': data.person_types,
            'pricing': data.pricing,
            'qty': data.qty,
            'requires_confirmation': data.requires_confirmation,
            'resource_label': data.resource_label,
            'resources_assignment': data.resources_assignment,
            'restricted_days': data.restricted_days,
            'can_be_cancelled': data.can_be_cancelled,
            'user_can_cancel': data.user_can_cancel
        }, this.header)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.updateProductWithVendor(data.id);
            console.log(data);
        });
    };
    Service.prototype.getMessage = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.header.append('Content-Type', 'application/json');
            _this.http
                .post(_this.config.urlApi + '/message/getmessages', {
                'roomName': data.roomName
            }, _this.header)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.updateProductWithVendor = function (post_id) {
        var params = {
            vendor: this.values.customerId,
            post_id: post_id
        };
        this.http
            .put(this.config.url + '/wp-admin/admin-ajax.php?vendor=' + this.values.customerId + '&post_id=' + post_id + '&action=mstoreapp-update_product_author', params, this.header).subscribe();
    };
    Service.prototype.login = function (loginData) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('username', loginData.username);
        params.append('password', encodeURIComponent(loginData.password));
        // params.append});('_wpnonce', this.login_nonce)
        // params.append('login', 'Login')
        params.append('redirect', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-userdata');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-login-vendor', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (!data.errors) {
                    _this.values.isLoggedIn = data.data.status;
                    _this.values.customerName = data.data.display_name;
                    _this.values.customerId = data.data.ID;
                    _this.values.logoutUrl = _this.encodeUrl(data.data.url);
                    _this.values.user_login = data.data.user_login;
                    console.log(data.data);
                    _this.values.vendor = data.allcaps.vendor;
                    _this.values.subscription = data.data.subscription;
                    console.log(_this.values.subscription);
                    params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    params.append('customer_id', _this.values.customerId.toString());
                    _this.http
                        .post(_this.config.url +
                        '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        for (var item in data) {
                            _this.values.wishlistId[data[item].id] = data[item].id;
                        }
                    });
                    params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    params.append('customer_id', _this.values.customerId.toString());
                    _this.http
                        .post(_this.config.url +
                        '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        console.log(data);
                    });
                    _this.nativeStorage
                        .setItem('loginData', {
                        username: loginData.username,
                        password: loginData.password,
                    })
                        .then(function (data) { return console.log('Login Details Stored'); }, function (error) { return console.error(error); });
                }
                resolve(data);
            }, function (err) {
                resolve(JSON.parse(err._body));
            });
        });
    };
    Service.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    Service.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-logout', 
            // this.values.logoutUrl + '&redirect_to=http://localhost:8100',
            _this.config.options)
                .subscribe(function (data) {
                console.log('prueba');
                _this.values.isLoggedIn = false;
                _this.values.customerName = '';
                _this.nativeStorage.setItem('loginData', {}).then(function (data) { return console.log('Login Data cleared'); }, function (error) { return console.error(error); });
                _this.http
                    .get(_this.config.url +
                    '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.cart = data;
                    _this.values.updateCart(_this.cart);
                });
                resolve(_this.cart);
            });
        });
    };
    Service.prototype.passwordreset = function (email, nonce, url) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('user_login', email);
        params.append('wc_reset_password', 'true');
        params.append('_wpnonce', nonce);
        params.append('_wp_http_referer', '/my-account/lost-password/');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url + '/my-account/lost-password/', params)
                .subscribe(function (status) {
                resolve(status);
            });
        });
    };
    Service.prototype.passwordResetNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-passwordreset', _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.resendKey = function (usernameKey, nonceKey) {
        var _this = this;
        console.log(nonceKey);
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url +
                '/my-account/?action=resend_key&user_login=' + usernameKey + '&nonce=' + nonceKey + '')
                .map(function (res) { return res; })
                .subscribe(function (data) {
                resolve(data);
                if (data.statusText == "OK") {
                    _this.functions.showAlert("ÉXITO", "Verifique el correo electrónico para ver si hay un nuevo enlace de verificación");
                }
                else
                    _this.functions.showAlert("ERROR", "an error has occurred please check. ");
            });
        });
    };
    Service.prototype.getAddress = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wc-api/v3/customers/' + _this.values.customerId + '?', false), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.address = data;
                resolve(_this.address);
            });
        });
    };
    Service.prototype.getCustomer = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wc-api/v3/customers/' + _this.values.customerId + '?', false), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.customer = data;
                console.log(_this.customer);
                resolve(_this.customer);
            });
        });
    };
    Service.prototype.checkAvatar = function () {
        var result = '';
        if (this.values.customerId != null) {
            if (this.customer.customer.avatar_url.indexOf('8ab2424adb5aafd0f6fc73775cd77668') != -1) {
                result = 'avatar';
            }
            else if (this.customer.customer.avatar_url.indexOf('8ab2424adb5aafd0f6fc73775cd77668') == -1) {
                result = 'image';
            }
        }
        else
            result = 'false';
        return result;
    };
    Service.prototype.saveAddress = function (address) {
        var _this = this;
        var params = {
            customer: address,
        };
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(function (resolve) {
            _this.reqhttp
                .put(_this.config.setUrl('PUT', '/wc-api/v3/customers/' + _this.values.customerId + '?', false), params, {})
                .then(function (data) {
                resolve(JSON.parse(data.data));
            });
        });
    };
    Service.prototype.pushNotification = function (notification) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('device_id', notification.device_id);
        params.append('platform', notification.platform);
        params.append('email', notification.email);
        params.append('city', notification.city);
        params.append('state', notification.state);
        params.append('country', notification.country);
        params.append('pincode', notification.pincode);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.pushNotify = function (deviceId, platform) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('device_id', deviceId);
        params.append('platform', platform);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.getOrder = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wc-api/v3/orders/' + id + '?', false), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.order = data;
                resolve(_this.order);
            });
        });
    };
    Service.prototype.getBooking = function (idOrder, idVendor) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/custom-api/v1/get_vendor_order?id_vendor=' + idVendor + '&id=' + idOrder + '&', false), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.order = data;
                resolve(_this.order);
            });
        });
    };
    Service.prototype.getCountry = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-get_country', _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.country = data;
                resolve(_this.country);
            });
        });
    };
    Service.prototype.registerCustomer = function (customer) {
        var _this = this;
        var params = {
            customer: customer,
        };
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.setUrl('POST', '/wc-api/v3/customers?', false), params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.user = data;
                resolve(_this.user);
            }, function (err) {
                resolve(err.json());
            });
        });
    };
    Service.prototype.registerVendor = function (vendor) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("email", vendor.email);
        params.append("password", vendor.password);
        params.append("first_name", vendor.first_name);
        params.append("last_name", vendor.last_name);
        params.append("phone", vendor.phone);
        return new Promise(function (resolve) {
            _this.http
                .post(
            // this.config.setUrl('POST', '/wp-admin/admin-ajax.php?action=mstoreapp-create-user-vendor', false),
            // params,
            _this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-create-user-vendor', params)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.user = data;
                resolve(_this.user);
            }, function (err) {
                resolve(err.json());
            });
        });
    };
    Service.prototype.getOrders = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wc-api/v3/orders?', filter), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orders = data;
                resolve(_this.orders);
            });
        });
    };
    Service.prototype.getOrdersVendor = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/custom-api/v1/get_vendor_orders?', filter), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orders = data;
                resolve(_this.orders);
            });
        });
    };
    Service.prototype.getBookingsVendor = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/custom-api/v1/get_vendor_orders?', filter), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orders = data;
                resolve(_this.orders);
            });
        });
    };
    Service.prototype.updateOrder = function (data, id) {
        var _this = this;
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(function (resolve) {
            _this.reqhttp
                .put(_this.config.setUrl('PUT', '/wc-api/v3/orders/' + id + '?', false), data, {})
                .then(function (data) {
                _this.status = JSON.parse(data.data);
                resolve(_this.status);
            }, function (err) {
                console.log(JSON.parse(err.error));
                resolve(JSON.parse(err.error));
            });
        });
    };
    Service.prototype.presentLoading = function (text) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    };
    Service.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Service.prototype.getPage = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('page_id', id);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-page_content', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getProducts = function () {
        var _this = this;
        this.http
            .get(this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', false), this.config.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.products = data;
            var _loop_2 = function (index) {
                var element = _this.products[index];
                var resources = element.resource_block_costs;
                var prices = new Array();
                for (var key in resources) {
                    prices = prices.concat([resources[key]]);
                }
                if (Object.keys(resources).length) {
                    var minPrice_1 = Math.min.apply(Math, prices);
                    _this.products.map(function (element) {
                        return (element.minPrice = minPrice_1);
                    });
                }
            };
            for (var index = 0; index < _this.products.length; index++) {
                _loop_2(index);
            }
        });
    };
    Service.prototype.getProductsMembership = function () {
        var _this = this;
        this.http
            .get(this.config.setUrl('GET', '/wc-api/v3/products?type=wcvm-membership&', false), this.config.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.products_membership = data.products;
            // for (let index = 0; index < this.products_membership.length; index++) {
            //   const element = this.products_membership[index]
            //   let resources = element.resource_block_costs
            //   let prices = new Array()
            //   for (var key in resources) {
            //     prices = [...prices, resources[key]]
            //   }
            //   if (Object.keys(resources).length) {
            //     let minPrice = Math.min(...prices)
            //     this.products_membership.map(function (element) {
            //       return (element.minPrice = minPrice)
            //     })
            //   }
            // }
        });
    };
    Service.prototype.addToCartMembership = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        // params.append("quantity", "1");
        params.append("add-to-cart", id);
        params.append("is-membership", "yes");
        return new Promise(function (resolve) {
            //  this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', params, this.config.options).map(res => res.json())
            _this.http.get(_this.config.url + '/checkout/?' + params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.cartDataMembership = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(data.cart);
                resolve(_this.cartDataMembership);
            });
        });
    };
    Service.prototype.testApiLogin = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        // params.append("quantity", "1");
        params.append("username", "bonod49459");
        params.append("productid", "5138");
        return new Promise(function (resolve) {
            //  this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', params, this.config.options).map(res => res.json())
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-autoLogin', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                // this.cartDataMembership = data;
                // this.values.cartNonce = data.cart_nonce;
                // this.values.updateCartTwo(data.cart);
                // resolve(this.cartDataMembership);
            });
        });
    };
    Service.prototype.loadMore = function () {
        var _this = this;
        this.filter.page += 1;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', _this.filter), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.handleMore(data);
                resolve(true);
            });
        });
    };
    Service.prototype.loadMoreProvider = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', filter), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.handleMore(data);
                resolve(true);
            });
        });
    };
    Service.prototype.handleMore = function (results) {
        console.log(results.length);
        // if (results.products == undefined) {
        //   console.log('No hay mas productos que mostrar...', results.products)
        //   this.has_more_items = false
        //   return
        // }
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
    };
    Service.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append('product_id', id);
            params.append('customer_id', _this.values.customerId.toString());
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('product_id', id);
        params.append('customer_id', this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.subscribeNotification = function (data) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('onesignal_user_id', data.userId);
        params.append('onesignal_push_token', data.pushToken);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-update_user_notification', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getLocationFromProduct = function (lat, long, radius) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('latitude', lat);
        params.append('longitude', long);
        params.append('use_radius', 'on');
        params.append('radius', radius);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-geolocation_process', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log('data:', _this.status.data);
                _this.dataSearchProduct = _this.status.data;
                _this.includeProduct = '';
                if (_this.dataSearchProduct === undefined || _this.dataSearchProduct.length == 0) {
                    _this.includeProduct = '0';
                }
                else {
                    for (var key in _this.dataSearchProduct) {
                        var prices = _this.dataSearchProduct[key];
                        _this.includeProduct += prices.ID + ',';
                    }
                    _this.includeProduct = _this.includeProduct.slice(0, -1);
                }
                resolve(_this.includeProduct);
            });
        });
    };
    Service.prototype.registerProvider = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.header.append('Content-Type', 'application/json');
            _this.http
                .post(_this.config.urlApi + '/provider/register', {
                "id": data.id,
                "lat": data.lat,
                "lng": data.lng,
                "products": data.products,
                "onesignal": data.onesignal
            }, _this.header).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_9__providers_service_functions__["a" /* Functions */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckoutService = /** @class */ (function () {
    function CheckoutService(http, config) {
        this.http = http;
        this.config = config;
    }
    CheckoutService.prototype.updateOrderReview = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("security", form.nonce.update_order_review_nonce);
        params.append("payment_method", form.payment_method);
        params.append("address", form.billing_address_1);
        params.append("address_2", form.billing_address_2);
        params.append("city", form.billing_city);
        params.append("postcode", form.billing_postcode);
        params.append("country", form.billing_country);
        params.append("state", form.billing_state);
        params.append("s_address", form.billing_address_1);
        params.append("s_address_2", form.billing_address_2);
        params.append("s_city", form.billing_city);
        params.append("s_postcode", form.billing_postcode);
        params.append("s_country", form.billing_country);
        params.append("s_state", form.billing_state);
        params.append("shipping_method[0]", form.shipping_method);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkout = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        if (form.payment_method == 'authnet') {
            params.append("authnet-card-number", form.authnet_card_number);
            params.append("authnet-card-expiry", form.authnet_card_expiry);
            params.append("authnet-card-cvc", form.authnet_card_cvc);
            console.log(form);
        }
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        if (form.onesignal_user_id)
            params.append("onesignal_user_id", form.onesignal_user_id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkouttest = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", "Name hajsk");
        params.append("billing_last_name", "Name hajsk");
        params.append("billing_company", "Name hajsk");
        params.append("billing_email", "test@gmail.com");
        params.append("billing_phone", "237648372");
        params.append("billing_address_1", "form billing_address_1");
        params.append("billing_address_2", "dsjfh sdjfhsdkj");
        params.append("billing_city", "fsdfdjgif");
        params.append("billing_postcode", "560048");
        params.append("billing_country", "IN");
        params.append("billing_state", "KA");
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveBillingAddress = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.nonce.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("createaccount", form.billing_address_1);
        params.append("account_password", form.billing_address_2);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", "544bcd0d1d");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveShippingAddress = function (shipping) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping[firstname]", shipping.firstname);
        params.append("shipping[lastname]", shipping.lastname);
        params.append("shipping[company]", shipping.company);
        params.append("shipping[street][0]", shipping.street1);
        params.append("shipping[street][1]", shipping.street2);
        params.append("shipping[city]", shipping.city);
        params.append("shipping[postcode]", shipping.postcode);
        params.append("shipping[country_id]", shipping.country_id);
        params.append("shipping[state_id]", shipping.state_id);
        if (shipping.entity_id) {
            params.append("shipping_address_id", shipping.entity_id);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getShippingPayment = function () {
        var _this = this;
        if (this.shippingMethods && this.paymentMethods) {
            return Promise.resolve(this.shippingMethods);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingMethods = data[0];
                _this.paymentMethods = data[1];
                resolve(_this.shippingMethods);
            });
        });
    };
    CheckoutService.prototype.saveMethods = function (shippingMethod, payment) {
        var _this = this;
        var shipping = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        shipping.append("shipping_method", shippingMethod);
        for (var param in payment) {
            params.set("payment[" + param + "]", payment[param]);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', params, _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingStatus = data[0];
                _this.paymentStatus = data[1];
                resolve(_this.shippingStatus);
            });
        });
    };
    CheckoutService.prototype.getTime = function (date) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_slots_on_date");
        params.append("date", date);
        console.log(params);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getDate = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_upcoming_bookable_dates");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.login = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", form.username);
        params.append("password", form.password);
        params.append("_wpnonce", form.checkout_login);
        params.append("login", "Login");
        params.append("_wp_http_referer", "/checkout/");
        params.append("redirect", this.config.url + "/wp-admin/admin-ajax.php?action=mstoreapp-userdata");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout/', params, _this.config.options)
                .subscribe(function (data) {
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.status = data;
                    resolve(_this.status);
                });
            });
        });
    };
    CheckoutService.prototype.submitCoupon = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", form.coupon_code);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getStripeToken = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("key", form.payment.stripe.publishable_key);
        params.append("payment_user_agent", 'stripe.js/6ea8d55');
        params.append("card[number]", form.stripe_number);
        params.append("card[cvc]", form.stripe_code);
        params.append("card[exp_month]", form.stripe_exp_month);
        params.append("card[exp_year]", form.stripe_exp_year);
        params.append("card[name]", form.billing_first_name + form.billing_last_name);
        params.append("card[address_line1]", form.billing_address_1);
        params.append("card[address_line2]", form.billing_address_2);
        params.append("card[address_state]", form.billing_state);
        params.append("card[address_city]", form.billing_city);
        params.append("card[address_zip]", form.billing_postcode);
        params.append("card[address_country]", form.billing_country);
        return new Promise(function (resolve) {
            _this.http.post('https://api.stripe.com/v1/tokens', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            }, function (err) { return resolve(err.json()); });
        });
    };
    CheckoutService.prototype.stripePlaceOrder = function (form, token) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        if (form.onesignal_user_id)
            params.append("onesignal_user_id", form.onesignal_user_id);
        params.append("wc-stripe-payment-token", 'new');
        params.append("stripe_token", token.id);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getOrderSummary = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/orders/' + id + '?', false), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orderSummary = data;
                resolve(_this.orderSummary);
            });
        });
    };
    CheckoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], CheckoutService);
    return CheckoutService;
}());

//# sourceMappingURL=checkout-service.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderSummary = /** @class */ (function () {
    function OrderSummary(nav, service, params, functions, values) {
        this.nav = nav;
        this.service = service;
        this.params = params;
        this.functions = functions;
        this.values = values;
        this.id = params.data;
    }
    OrderSummary.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.service.getOrderSummary(this.id)
            .then(function (results) { return _this.orderSummary = results; });
    };
    OrderSummary.prototype.Continue = function () {
        this.values.count = 0;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
    };
    OrderSummary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\checkout\order-summary\order-summary.html"*/'<ion-header>\n\n  <ion-navbar color="header" hideBackButton>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title text-wrap text-center>{{"OrderSummary" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="order-summary">\n\n  <ion-spinner *ngIf="!orderSummary" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orderSummary" class="margin">\n\n    <div *ngIf="orderSummary.order">\n\n      <div class="thank-you-message">\n\n        <ion-item>\n\n          <h2>{{"OrderReceived" | translate}} \n\n          </h2>\n\n          <h3>{{"orderreceivedtext" | translate}}\n\n          </h3>\n\n        </ion-item>\n\n      </div>\n\n      <div *ngIf="orderSummary" class="summary">\n\n        <ion-item no-lines>\n\n          <h2>{{"OrderNumber" | translate}} : {{orderSummary.order.order_number}}\n\n          </h2>\n\n          <h2>{{"Orderdate" | translate}} : {{orderSummary.order.created_at | date:\'medium\'}}\n\n          </h2>\n\n          <h2>{{"Totalquantity" | translate}} :  {{orderSummary.order.total_line_items_quantity}}\n\n          </h2>\n\n          <h2>{{"Totals" | translate}} :  {{1*orderSummary.order.total | currency:values.currency:true:\'1.2-2\'}}\n\n          </h2>\n\n          <h2>{{"PaymentMethod" | translate}} :  {{orderSummary.order.payment_details.method_title}}\n\n          </h2>\n\n        </ion-item>\n\n      </div>\n\n      <div class="order-details">\n\n        <ion-item no-lines>\n\n          <ion-label class="side-header">{{"OrderDetails" | translate}}\n\n          </ion-label>\n\n        </ion-item>\n\n        <div *ngFor="let item of orderSummary.order.line_items | keys">\n\n          <ion-row >\n\n            <ion-col width-75>\n\n              <ion-label no-margin>{{item.value.name}} - ({{item.value.quantity}})\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-right>\n\n              <ion-label no-margin>{{1*item.value.subtotal | currency:values.currency:true:\'1.2-2\' }}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n        <ion-row *ngIf="orderSummary.order.coupon_lines.length != 0" > \n\n          <ion-col width-75>\n\n            <ion-label no-margin>{{"Coupon" | translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-25 text-right>\n\n            <ion-label no-margin>{{1*orderSummary.order.total_discount | currency:values.currency:true:\'1.2-2\' }}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row > \n\n          <ion-col width-75>\n\n            <ion-label no-margin>{{"SubTotal" | translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-25 text-right>\n\n            <ion-label no-margin>{{1*orderSummary.order.subtotal | currency:values.currency:true:\'1.2-2\' }}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row > \n\n          <ion-col width-50>\n\n            <ion-label no-margin>{{"Shipping" | translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-50 text-right>\n\n            <ion-label no-margin>{{orderSummary.order.shipping_methods}}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row > \n\n          <ion-col width-50>\n\n            <ion-label no-margin>{{"PaymentMethod" |translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-50 text-right>\n\n            <ion-label no-margin>{{orderSummary.order.payment_details.method_title}}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="order-total"> \n\n          <ion-col width-75>\n\n            <ion-label class="side-header">{{"Totals" |translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-25 text-right>\n\n            <ion-label>\n\n              <b>{{1*orderSummary.order.total | currency:values.currency:true:\'1.2-2\' }}\n\n              </b>\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer *ngIf="orderSummary">\n\n  <button ion-button full color="button-color" no-padding no-margin text-uppercase (click)="Continue()">\n\n    {{"Continue" | translate}}\n\n  </button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\checkout\order-summary\order-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], OrderSummary);
    return OrderSummary;
}());

//# sourceMappingURL=order-summary.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_post__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_service_category_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Home = /** @class */ (function () {
    function Home(categoryService, toastCtrl, nav, service, values) {
        this.categoryService = categoryService;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.has_more_items = true;
        this.loading = true;
        this.showFilters = false;
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.items = [];
        this.options = [];
        this.service.getProducts();
        this.filter = {};
        this.filter.page = 1;
    }
    Home.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    Home.prototype.getCart = function () {
        this.nav.parent.select(2);
    };
    Home.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.service.load().then(function (results) {
            _this.handleService(results);
            refresher.complete();
        });
    };
    Home.prototype.handleService = function (results) {
        //
    };
    Home.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], this.items);
    };
    Home.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    Home.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    Home.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    Home.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    Home.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    Home.prototype.getSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    Home.prototype.getId = function () {
        var i;
        if (this.options.length >= 1)
            var resa = this.options[0].split(":");
        if (this.options.length >= 2)
            var resb = this.options[1].split(":");
        if (this.options.length >= 1)
            for (i = 0; i < this.product.product.variations.length; i++) {
                if (this.product.product.variations[i].attributes[0].option == resa[1]) {
                    if (this.options.length == 1) {
                        break;
                    }
                    else if (this.product.product.variations[i].attributes[1].option == resb[1]) {
                        break;
                    }
                }
            }
    };
    Home.prototype.goto = function (data) {
        var _this = this;
        if (data.description == "product") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], data.url);
        }
        else if (data.description == "category") {
            this.items.id = data.url;
            this.items.name = data.title;
            this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(_this.items.id); });
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], this.items);
        }
        else if (data.description == "post") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__post_post__["a" /* Post */], data.url);
        }
    };
    Home.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log(this.filter.page);
        this.filter.page += 1;
        this.service.loadMoreProvider(this.filter).then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Home.prototype.handleMore = function (results, infiniteScroll) {
        if (!results) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    Home.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], item);
    };
    Home.prototype.hideLoading = function () {
        this.loading = false;
    };
    Home.prototype.getSubCategories = function (id) {
        var results = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        return results;
    };
    //Filter shit
    Home.prototype.getFilter = function () {
        this.showFilters = true;
        this.has_more_items = false;
    };
    Home.prototype.cancel = function () {
        this.showFilters = false;
        this.has_more_items = true;
    };
    Home.prototype.chnageFilter = function (sort) {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        console.log(this.filter.page);
        // FILTROS SHIT EN FUNCION
        if (sort == 5) {
            this.filter['orderby'] = 'menu_order';
        }
        else if (sort == 6) {
            this.filter['orderby'] = 'popularity';
        }
        else if (sort == 7) {
            this.filter['orderby'] = 'rating';
        }
        else if (sort == 8) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'asc';
        }
        else if (sort == 9) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'desc';
        }
        else if (sort == 10) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'asc';
        }
        else if (sort == 11) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'desc';
        }
        else if (sort == 12) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'asc';
        }
        else if (sort == 13) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'desc';
        }
        /*this.filter['filter[meta_query][key]'] = "_price";
            this.filter['filter[meta_query][value]'] = '[0,10]';
            this.filter['filter[meta_query][compare]'] = "BETWEEN";*/
        this.categoryService.load(this.filter).then(function (results) { return (_this.service.products = results); });
    };
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\home\home.html"*/'<!-- <ion-header class="home-header">\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n       <img style="max-width: 200px;" src="{{values.avatar}}" /> \n\n      {{"Providers" | translate}}\n\n    </ion-title>\n\n    \n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="icon-color" (click)="getFilter()">\n\n        <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only color="icon-color" (click)="getSearch()">\n\n        <ion-icon color="icon-color" ios="ios-search" md="md-search"></ion-icon>\n\n      </button>\n\n      <button\n\n        ion-button\n\n        icon-only\n\n        color="icon-color"\n\n        class="has-icon icon-only has-badge"\n\n        (click)="getCart()"\n\n      >\n\n        <ion-icon\n\n          color="icon-color"\n\n          name="md-basket"\n\n          class="item-icon"\n\n        ></ion-icon>\n\n        <ion-badge class="badge badge-light" *ngIf="values.count != 0">\n\n          {{values.count}}\n\n        </ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-header>\n\n  <ion-toolbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button\n\n        ion-button\n\n        icon-only\n\n        light\n\n        class="has-icon icon-only has-badge"\n\n        (click)="getCart()"\n\n      >\n\n        <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n\n          {{values.count}}\n\n        </ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="home">\n\n\n\n  <ion-slides initialSlide="0" speed="3000" loop="false" pager="true" dir="rtl">\n\n    <ion-slide>\n\n      <div class="overlay">\n\n        <img src="{{values.slider}}" />\n\n      </div>\n\n      <div class="title-home-banner">\n\n        {{\'Proveedores de Servicios\' | translate}}\n\n      </div>\n\n\n\n      <div class="card-search">\n\n        \n\n      </div>\n\n\n\n    </ion-slide>\n\n  </ion-slides>\n\n  \n\n  <ion-row>\n\n    <ion-col col-9> \n\n      <ion-searchbar class="searchbar-category" placeholder="Seleccionar Categoria"></ion-searchbar>\n\n    </ion-col>\n\n    <ion-col col-3 style="align-self: center;font-weight: bold;padding: 0;">\n\n      \n\n      <button class="btn-filter" (click)="getFilter()">\n\n        <!-- <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon> -->\n\n        Filtrar<img src="../../assets/icon/filter.svg" alt="">\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div *ngIf="showFilters" class="filter">\n\n    <ion-list radio-group [(ngModel)]="sort" (ngModelChange)="chnageFilter(sort)">\n\n      <ion-list-header>\n\n        <b>\n\n          {{"Sort" | translate}}\n\n        </b>\n\n      </ion-list-header>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Default" | translate}}</ion-label>\n\n        <ion-radio value="5"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by popularity" | translate}}</ion-label>\n\n        <ion-radio value="6"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by average rating" | translate}}</ion-label>\n\n        <ion-radio value="7"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by date: ASC" | translate}}</ion-label>\n\n        <ion-radio value="8"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by date: DESC" | translate}}</ion-label>\n\n        <ion-radio value="9"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by price: low to high" | translate}}</ion-label>\n\n        <ion-radio value="10"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by price: high to low" | translate}}</ion-label>\n\n        <ion-radio value="11"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by name: ASC" | translate}}</ion-label>\n\n        <ion-radio value="12"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by name: DESC" | translate}}</ion-label>\n\n        <ion-radio value="13"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="button-color" (click)="cancel()">\n\n      {{"Cancel" | translate}}\n\n    </button>\n\n  </div>\n\n\n\n  <!-- <ion-fab bottom right slot="fixed">\n\n    <button ion-fab>\n\n      <ion-icon name="chatboxes"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="left">\n\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.messenger.com/t/thehexchange">\n\n        <ion-icon style="background: #2196f3;" name="custom-facebook"></ion-icon>\n\n      </a>\n\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.instagram.com/thehexchange/">\n\n        <ion-icon style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);" name="custom-instagram"></ion-icon>\n\n      </a>\n\n    </ion-fab-list>\n\n  </ion-fab> -->\n\n\n\n  <ion-refresher\n\n    *ngIf="values.settings.pull_to_refresh == \'1\'"\n\n    (ionRefresh)="doRefresh($event)"\n\n  >\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-spinner *ngIf="!service?.blocks" name="crescent"></ion-spinner>\n\n\n\n  <div\n\n    *ngFor="let children of service?.blocks"\n\n    hideWhen="loading"\n\n    class="blocks"\n\n  >\n\n    <div\n\n      *ngIf="children.block_type == \'banner_block\'"\n\n      [style.background-color]="children.bg_color"\n\n      [style.margin]="children.margin"\n\n      [style.padding]="children.padding"\n\n      class="banner_block"\n\n    >\n\n      <div\n\n        class="{{children.header_align}}"\n\n        [style.color]="children.title_color"\n\n      >\n\n        {{children.title}}\n\n      </div>\n\n      <!-- Banner Slider -->\n\n      <div *ngIf="children.children.length && children.style == \'slider\'">\n\n        <ion-slides pager="true" loop="true" autoplay="5800">\n\n          <ion-slide *ngFor="let image of children.children">\n\n            <img\n\n              src="{{image.image}}"\n\n              (click)="goto(image)"\n\n              (load)="hideLoading()"\n\n              [style.border-radius]="children.border_radius"\n\n            />\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </div>\n\n\n\n      <!-- Banner Scroll -->\n\n      <div\n\n        *ngIf="children.children.length && children.style == \'scroll\'"\n\n        [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}"\n\n        class="floating-header banner-scroll"\n\n      >\n\n        <img\n\n          class="banner"\n\n          tappable\n\n          *ngFor="let image of children.children"\n\n          (load)="hideLoading()"\n\n          src="{{image.image}}"\n\n          (click)="goto(image)"\n\n          [style.border-radius]="children.border_radius"\n\n          [style.width.%]="children.child_width"\n\n        />\n\n      </div>\n\n\n\n      <!-- Banner Grid -->\n\n      <div\n\n        *ngIf="children.children.length && children.style == \'grid\'"\n\n        class="banner-grid"\n\n      >\n\n        <ion-row class="row unlimited-items">\n\n          <ion-col\n\n            *ngFor="let image of children.children"\n\n            (load)="hideLoading()"\n\n            [style.width.%]="children.child_width"\n\n          >\n\n            <img\n\n              src="{{image.image}}"\n\n              (click)="goto(image)"\n\n              [style.border-radius]="children.border_radius"\n\n              class="{{children.card_style}}"\n\n            />\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n\n\n    <div\n\n      *ngIf="children.block_type == \'product_block\'"\n\n      [style.background-color]="children.bg_color"\n\n      [style.margin]="children.margin"\n\n      class="product-block"\n\n    >\n\n      <div\n\n        *ngIf="children.products"\n\n        class="{{children.header_align}}"\n\n        [style.color]="children.title_color"\n\n      >\n\n        {{children.title}}\n\n      </div>\n\n      <!-- Products Scroll -->\n\n      <div\n\n        *ngIf="children.products && children.style == \'scroll\'"\n\n        class="product-scroll"\n\n      >\n\n        <div\n\n          class="scroller"\n\n          [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}"\n\n        >\n\n          <a\n\n            *ngFor="let item of children.products"\n\n            [style.width.%]="children.child_width"\n\n          >\n\n            <ion-card>\n\n              <ion-card-content (click)="getProduct(item)">\n\n                <img\n\n                  [style.border-radius]="children.border_radius"\n\n                  src="{{item.images[0].src}}"\n\n                />\n\n              </ion-card-content>\n\n              <h5 *ngIf="item.title">{{item.title}}</h5>\n\n              <h5 *ngIf="item.name">{{item.name}}</h5>\n\n              <ion-label>\n\n                <span class="price-regular" *ngIf="!item.sale_price">\n\n                  {{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n\n                </span>\n\n                <span class="price-regular" *ngIf="item.sale_price">\n\n                  {{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'\n\n                  }}\n\n                </span>\n\n                <span *ngIf="item.sale_price">\n\n                  <del>\n\n                    {{1*item.regular_price |\n\n                    currency:values.currency:symbol:\'1.2-2\' }}\n\n                  </del>\n\n                </span>\n\n              </ion-label>\n\n            </ion-card>\n\n          </a>\n\n        </div>\n\n      </div>\n\n      <!-- Products  Grid-->\n\n      <div\n\n        class="product-grid"\n\n        *ngIf="children.products && children.style == \'grid\'"\n\n      >\n\n        <ion-row class="row unlimited-items">\n\n          <ion-col class="col" *ngFor="let item of children.products">\n\n            <ion-card>\n\n              <ion-card-content>\n\n                <img\n\n                  [style.height.px]="values.dimensions.imageGridViewHeight"\n\n                  tappable\n\n                  src="{{item.images[0].src}}"\n\n                  (click)="getProduct(item)"\n\n                />\n\n                <button\n\n                  ion-button\n\n                  color="danger"\n\n                  class="stock"\n\n                  *ngIf="!item.in_stock"\n\n                >\n\n                  {{"No Stock" | translate}}\n\n                </button>\n\n                <ion-icon\n\n                  name="md-heart"\n\n                  color="icon-color"\n\n                  class="wishlist-button-grid1"\n\n                  *ngIf="values.wishlistId[item.id]"\n\n                  (click)="removeFromWishlist(item.id)"\n\n                ></ion-icon>\n\n                <ion-icon\n\n                  name="md-heart-outline"\n\n                  color="icon-color"\n\n                  class="wishlist-button-grid2"\n\n                  *ngIf="!values.wishlistId[item.id]"\n\n                  (click)="addToWishlist(item.id)"\n\n                ></ion-icon>\n\n\n\n                <div *ngIf="item.in_stock">\n\n                  <button\n\n                    ion-button\n\n                    class="offer"\n\n                    *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'"\n\n                  >\n\n                    {{(item.regular_price - item.price) /item.regular_price*100\n\n                    | number : \'1.0-0\'}}%\n\n                  </button>\n\n                </div>\n\n              </ion-card-content>\n\n\n\n              <div tappable (click)="getProduct(item)" class="card-name">\n\n                <ion-label *ngIf="item.title">{{item.title}}</ion-label>\n\n                <ion-label *ngIf="item.name">{{item.name}}</ion-label>\n\n              </div>\n\n\n\n              <ion-label>\n\n                <span class="price-regular" *ngIf="!item.sale_price">\n\n                  {{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                </span>\n\n                <span class="price-regular" *ngIf="item.sale_price">\n\n                  {{1*item.sale_price |\n\n                  currency:values.currency:symbol:\'1.2-2\'}}\n\n                </span>\n\n                <span class="price-delete" *ngIf="item.sale_price">\n\n                  <del>\n\n                    {{1*item.regular_price |\n\n                    currency:values.currency:symbol:\'1.2-2\'}}\n\n                  </del>\n\n                </span>\n\n              </ion-label>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n\n\n    <!--flash sale-->\n\n\n\n    <div\n\n      *ngIf="children.block_type == \'flash_sale_block\' && !children.hide"\n\n      [style.background-color]="children.bg_color"\n\n      [style.margin]="children.margin"\n\n      [style.padding]="children.padding"\n\n      class="product-block flash_sale"\n\n    >\n\n      <div\n\n        *ngIf="children.products"\n\n        class="{{children.header_align}}"\n\n        [style.color]="children.title_color"\n\n      >\n\n        <ion-item no-lines class="flash-item-name">\n\n          <h2 [style.color]="children.title_color">\n\n            <ion-icon\n\n              name="md-flash"\n\n              style="margin-right: 6px;font-size: 18px;"\n\n            ></ion-icon>\n\n            {{children.title}}\n\n          </h2>\n\n          <!--h4 [style.color]="children.title_color" style="filter: brightness(100%);">Ends in</h4-->\n\n          <div style="text-align: center;">\n\n            <h3 class="day"><span>{{children.days}}</span></h3>\n\n            :\n\n            <h3 class="day"><span>{{children.hours}}</span></h3>\n\n            :\n\n            <h3 class="day"><span>{{children.minutes}}</span></h3>\n\n            :\n\n            <h3 class="day"><span>{{children.seconds}}</span></h3>\n\n          </div>\n\n        </ion-item>\n\n      </div>\n\n\n\n      <!-- Products Scroll -->\n\n      <div\n\n        *ngIf="children.products && children.style == \'scroll\'"\n\n        class="product-scroll"\n\n      >\n\n        <div\n\n          class="scroller"\n\n          [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}"\n\n        >\n\n          <a\n\n            *ngFor="let item of children.products"\n\n            [style.width.%]="children.child_width"\n\n          >\n\n            <ion-card>\n\n              <ion-card-content (click)="getProduct(item)">\n\n                <img\n\n                  [style.height.px]="values.dimensions.productSliderHeight"\n\n                  [style.border-radius]="children.border_radius"\n\n                  src="{{item.images[0].src}}"\n\n                />\n\n              </ion-card-content>\n\n              <h5 *ngIf="item.title">{{item.title}}</h5>\n\n              <h5 *ngIf="item.name">{{item.name}}</h5>\n\n              <!-- <ion-label>\n\n                <span class="price-regular" *ngIf="!item.sale_price">\n\n                  {{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n\n                </span>\n\n                <span class="price-regular" *ngIf="item.sale_price">\n\n                  {{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'\n\n                  }}\n\n                </span>\n\n                <span *ngIf="item.sale_price">\n\n                  <del>\n\n                    {{1*item.regular_price |\n\n                    currency:values.currency:symbol:\'1.2-2\' }}\n\n                  </del>\n\n                </span>\n\n              </ion-label> -->\n\n            </ion-card>\n\n          </a>\n\n        </div>\n\n      </div>\n\n      <!-- Products  Grid-->\n\n      <div\n\n        class="product-grid"\n\n        *ngIf="children.products && children.style == \'grid\'"\n\n      >\n\n        <ion-row class="row unlimited-items">\n\n          <ion-col\n\n            class="col"\n\n            *ngFor="let item of children.products"\n\n            [style.padding]="children.padding"\n\n          >\n\n            <ion-card>\n\n              <ion-card-content>\n\n                <img\n\n                  [style.height.px]="values.dimensions.imageGridViewHeight"\n\n                  tappable\n\n                  src="{{item.images[0].src}}"\n\n                  (click)="getProduct(item)"\n\n                />\n\n                <button\n\n                  ion-button\n\n                  color="danger"\n\n                  class="stock"\n\n                  *ngIf="item.stock_status == \'outofstock\'"\n\n                >\n\n                  {{"No Stock" | translate}}\n\n                </button>\n\n                <ion-icon\n\n                  name="md-heart"\n\n                  class="wishlist-button-grid1"\n\n                  *ngIf="values.wishlistId[item.id]"\n\n                  (click)="removeFromWishlist(item.id)"\n\n                ></ion-icon>\n\n                <ion-icon\n\n                  name="md-heart-outline"\n\n                  class="wishlist-button-grid2"\n\n                  *ngIf="!values.wishlistId[item.id]"\n\n                  (click)="addToWishlist(item.id)"\n\n                ></ion-icon>\n\n\n\n                <div *ngIf="item.stock_status == \'instock\'">\n\n                  <button\n\n                    ion-button\n\n                    class="offer"\n\n                    *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'"\n\n                  >\n\n                    {{(item.regular_price - item.price) /item.regular_price*100\n\n                    | number : \'1.0-0\'}}%\n\n                  </button>\n\n                </div>\n\n              </ion-card-content>\n\n\n\n              <div tappable (click)="getProduct(item)" class="card-name">\n\n                <ion-label *ngIf="item.title">{{item.title}}</ion-label>\n\n                <ion-label *ngIf="item.name">{{item.name}}</ion-label>\n\n              </div>\n\n\n\n              <!-- <ion-label>\n\n                <span class="price-regular" *ngIf="!item.sale_price">\n\n                  {{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                </span>\n\n                <span class="price-regular" *ngIf="item.sale_price">\n\n                  {{1*item.sale_price |\n\n                  currency:values.currency:symbol:\'1.2-2\'}}\n\n                </span>\n\n                <span class="price-delete" *ngIf="item.sale_price">\n\n                  <del>\n\n                    {{1*item.regular_price |\n\n                    currency:values.currency:symbol:\'1.2-2\'}}\n\n                  </del>\n\n                </span>\n\n              </ion-label> -->\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n\n\n    <div\n\n      *ngIf="children.block_type == \'category_block\'"\n\n      [style.background-color]="children.bg_color"\n\n      [style.margin]="children.margin"\n\n      [style.padding]="children.padding"\n\n      class="category"\n\n    >\n\n      <div\n\n        *ngIf="service?.categories"\n\n        class="{{children.header_align}}"\n\n        [style.color]="children.title_color"\n\n      >\n\n        {{children.title}}\n\n      </div>\n\n      <!-- Category Scroll -->\n\n      <div\n\n        *ngIf="service?.categories && children.style == \'scroll\'"\n\n        class="category-slider-scroll"\n\n      >\n\n        <div\n\n          class="scrollmenu2"\n\n          [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}"\n\n        >\n\n          <a\n\n            *ngFor="let item of getSubCategories(children.link_id)"\n\n            class="{{item.slug}}"\n\n            [style.width.%]="children.child_width"\n\n          >\n\n            <img\n\n              *ngIf="item.image?.src"\n\n              [style.border-radius]="children.border_radius"\n\n              (load)="hideLoading()"\n\n              src="{{item.image.src}}"\n\n              (click)="getCategory(item.id, item.slug, item.name, item.image)"\n\n            />\n\n            <h5\n\n              *ngIf="item.image"\n\n              (click)="getCategory(item.id, item.slug, item.name, item.image)"\n\n              [innerHTML]="item.name"\n\n            ></h5>\n\n            <div *ngIf="!item.image" class="no-image">\n\n              <h5\n\n                (click)="getCategory(item.id, item.slug, item.name, item.image)"\n\n                [innerHTML]="item.name"\n\n                [style.color]="children.title_color"\n\n              ></h5>\n\n            </div>\n\n          </a>\n\n        </div>\n\n      </div>\n\n\n\n      <!-- Category Grid -->\n\n      <div\n\n        *ngIf="service?.categories && children.style == \'grid\'"\n\n        class="category-slider-grid"\n\n      >\n\n        <ion-row class="row unlimited-items">\n\n          <ion-col\n\n            class="col {{item.slug}}"\n\n            *ngFor="let item of getSubCategories(children.link_id)"\n\n            [style.width.%]="children.child_width"\n\n          >\n\n            <div\n\n              (click)="getCategory(item.id, item.slug, item.name, item.image)"\n\n            >\n\n              <ion-card>\n\n                <ion-card-content>\n\n                  <img\n\n                    *ngIf="item.image"\n\n                    (load)="hideLoading()"\n\n                    [style.border-radius]="children.border_radius"\n\n                    src="{{item.image}}"\n\n                  />\n\n                </ion-card-content>\n\n                <div text-center>\n\n                  <ion-label\n\n                    text-uppercase\n\n                    [innerHTML]="item.name"\n\n                    [style.color]="children.title_color"\n\n                  ></ion-label>\n\n                </div>\n\n              </ion-card>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <!--div *ngIf="service?.categories" style="margin-bottom: 10px;">\n\n\n\n    <div *ngIf="service.mainCategories" class="main-categories">\n\n      <ion-row class="row unlimited-items">\n\n        <ion-col class="col" *ngFor="let item of service.mainCategories">\n\n          <a (click)="getCategory(item.id, item.slug, item.name)">\n\n            <ion-card>\n\n              <ion-card-content>\n\n                <img src="{{item.image}}"/>\n\n              </ion-card-content>\n\n              <div text-center>\n\n                <ion-label text-uppercase><span [innerHTML]="item.name"></span>\n\n                </ion-label>\n\n              </div>\n\n            </ion-card>\n\n          </a>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div-->\n\n  <div *ngIf="!showFilters">\n\n  <div class="products-listing">\n\n    <div *ngIf="service?.products">\n\n      <!--ion-item no-lines class="item-name">\n\n            <ion-label text-uppercase><b>{{"Products" | translate}}</b>\n\n            </ion-label>\n\n          </ion-item-->\n\n      <ion-list>\n\n        <div class="card-background-page grid">\n\n          <ion-row class="row unlimited-items">\n\n            <ion-col class="col" *ngFor="let item of service.products">\n\n              <ion-card>\n\n                <ion-card-content class="stock">\n\n                  <img\n\n                    [style.height.px]="values.dimensions.imageGridViewHeight * 2 - 200"\n\n                    tappable\n\n                    src="{{item.images[0].src}}"\n\n                    (load)="hideLoading()"\n\n                    (click)="getProduct(item)"\n\n                  />\n\n                  <button\n\n                    ion-button\n\n                    color="danger"\n\n                    *ngIf="item.stock_status !== \'instock\'"\n\n                  >\n\n                    {{"OUTOFSTOCK" | translate}}\n\n                  </button>\n\n\n\n                  <ion-icon\n\n                    name="md-heart"\n\n                    color="icon-color"\n\n                    class="wishlist-button-grid"\n\n                    *ngIf="values.wishlistId[item.id]"\n\n                    (click)="removeFromWishlist(item.id)"\n\n                  ></ion-icon>\n\n                  <ion-icon\n\n                    name="md-heart-outline"\n\n                    color="icon-color"\n\n                    class="wishlist-button-grid"\n\n                    *ngIf="!values.wishlistId[item.id]"\n\n                    (click)="addToWishlist(item.id)"\n\n                  ></ion-icon>\n\n                </ion-card-content>\n\n                <div tappable (click)="getProduct(item)" class="card-name">\n\n                  <ion-label *ngIf="item.title">{{item.title}}</ion-label>\n\n                  <ion-label *ngIf="item.name">{{item.name}}</ion-label>\n\n                </div>\n\n                <!-- <ion-item no-padding class="price-list">\n\n                  <h3 class="price-regular" *ngIf="item.minPrice">\n\n                    Starting from {{1*item.minPrice |\n\n                    currency:values.currency:true:\'1.2-2\'}}\n\n                  </h3>\n\n                </ion-item> -->\n\n                <ion-item no-padding class="price-list">\n\n                  <span item-left *ngIf="item.average_rating" class="rating">\n\n                    <!-- <span *ngIf="item.rating_count > 0">\n\n                      ({{item.rating_count}})\n\n                    </span> -->\n\n                    <span\n\n                      class="star-icon"\n\n                      [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}"\n\n                    >\n\n                      &#x2605;\n\n                    </span>\n\n                    <span\n\n                      class="star-icon"\n\n                      [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}"\n\n                    >\n\n                      &#x2605;\n\n                    </span>\n\n                    <span\n\n                      class="star-icon"\n\n                      [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}"\n\n                    >\n\n                      &#x2605;\n\n                    </span>\n\n                    <span\n\n                      class="star-icon"\n\n                      [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}"\n\n                    >\n\n                      &#x2605;\n\n                    </span>\n\n                    <span\n\n                      class="star-icon"\n\n                      [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}"\n\n                    >\n\n                      &#x2605;\n\n                    </span>\n\n                  </span>\n\n                </ion-item>\n\n                \n\n              </ion-card>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n  </div>\n\n   <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n            <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading more items...\' | translate}}"> </ion-infinite-scroll-content>\n\n        </ion-infinite-scroll> \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], Home);
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductService = /** @class */ (function () {
    function ProductService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
        this.header = new Headers();
    }
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products/' + id + '?', false), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.product = data;
                resolve(_this.product);
            });
        });
    };
    ProductService.prototype.getReviews = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wc-api/v3/products/' + id + '/reviews' + '?', false), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.reviews = data;
                resolve(_this.reviews);
            });
        });
    };
    ProductService.prototype.addToCart = function (resource_id, month, day, year, selected_time, product) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append('wc_bookings_field_resource', resource_id);
            params.append('wc_bookings_field_start_date_month', month);
            params.append('wc_bookings_field_start_date_day', day);
            params.append('wc_bookings_field_start_date_year', year);
            params.append('wc_bookings_field_start_date_time', selected_time);
            params.append('wc_bookings_field_start_date_local_timezone', '');
            params.append('variation_id', '');
            params.append('start_date', '');
            params.append('end_date', '');
            params.append('add-to-cart', product.id);
            _this.http
                .post(_this.config.url + '/product/' + product.slug + '/', params, _this.config.options)
                .subscribe(function (data) {
                console.log(data);
                _this.status = data.status;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    ProductService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    ProductService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append('product_id', id);
            params.append('customer_id', _this.values.customerId.toString());
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.pad = function (number, length) {
        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    };
    ProductService.prototype.getBlocks = function (day, month, year, product_id, resource_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var form_params = "wc_bookings_field_resource=" + resource_id + "&wc_bookings_field_start_date_month=" + _this.pad(month, 2) + "&wc_bookings_field_start_date_day=" + day + "&wc_bookings_field_start_date_year=" + year + "&wc_bookings_field_start_date_time=&wc_bookings_field_start_date_local_timezone=&add-to-cart=" + product_id;
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append('action', 'wc_bookings_get_blocks');
            params.append('form', form_params);
            _this.http
                .post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options)
                .map(function (res) { return res; })
                .subscribe(function (data) {
                _this.schedule = data._body;
                resolve(_this.schedule);
            });
        });
    };
    ProductService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('product_id', id);
        params.append('customer_id', this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProductService.prototype.changestate = function (data) {
        this.header.append('Content-Type', 'application/json');
        this.http
            .post(this.config.urlApi + '/orders/changestate', {
            "order": data.order,
            "state": data.state,
            "isCancel": data.isCancel
        }, this.header)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            return data;
        });
    };
    ProductService.prototype.sendNotification = function (data) {
        this.header.append('Content-Type', 'application/json');
        this.http
            .post('https://onesignal.com/api/v1/notifications', {
            "app_id": "8ad1c280-92da-4d39-b49c-cf0a81e0d1fc",
            "include_player_ids": ["" + data.onesignalid],
            "data": { "foo": "bar" },
            "headings": { "en": "" + data.title },
            "contents": { "en": "" + data.content }
        }, this.header)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            return data;
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"]])
    ], ProductService);
    return ProductService;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashProveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_background_mode__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_socket_io__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation_ngx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__orders_orders__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__end_orders_end_orders__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__post_post__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Cordova} from 'ionic-native';










/**
 * Generated class for the DashProveedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashProveedorPage = /** @class */ (function () {
    function DashProveedorPage(serv, service, nativeGeocoder, platform, backgroundMode, socket, navCtrl, navParams, values, geolocation) {
        var _this = this;
        this.serv = serv;
        this.service = service;
        this.nativeGeocoder = nativeGeocoder;
        this.platform = platform;
        this.backgroundMode = backgroundMode;
        this.socket = socket;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.values = values;
        this.geolocation = geolocation;
        this.homerProviders = [];
        this.miLatitude = 0;
        this.miLongitude = 0;
        this.filter = {};
        this.lat = '';
        this.lng = '';
        this.products = [];
        this.socket.connect();
        this.platform.ready().then(function () {
            _this.geolocation.watchPosition().subscribe(function (position) {
                if (position.coords != undefined) {
                    var geoposition = position;
                    _this.miLatitude = geoposition.coords.latitude;
                    _this.miLongitude = geoposition.coords.longitude;
                    console.log('Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);
                }
                else {
                    var positionError = position;
                    console.log('Error ' + positionError.code + ': ' + positionError.message);
                }
            });
        });
        // this.backgroundMode.setDefaults({
        //   title: "Homer background",
        //   text: "Ahora esta a la escucha de notificaciones",
        //   icon:'platforms/android/app/src/res/endmipmap-hdpi/ic_launcher.png',
        //   color: 'F14F4D', // hex format like 'F14F4D'
        //   resume: true,
        //   hidden: false,
        //   bigText: false
        // });
        // this.backgroundMode.on('activate').subscribe(() => {
        //   console.log("backgroundMode Activate");
        //   this.backgroundMode.disableWebViewOptimizations();
        // });
        // this.serv.registerProvider({
        //   id:this.values.customerId,
        //   lat: 'kdjlakda',
        //   lng: 'ksajldkas',
        //   products:this.products,
        //   onesignal:this.values.userId
        // })
        // .then(results => console.log("resultado del registro del proveedor",results))
        // .catch(error => console.log(error));
    }
    DashProveedorPage.prototype.ionViewDidLoad = function () {
    };
    DashProveedorPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.service.getProductsByIdVendor2()
            .then(function (result) {
            if (result.length > 0) {
                for (var i = 0; i < result.length; i++) {
                    _this.products.push({ id: result[i] });
                }
            }
        });
    };
    DashProveedorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.fromEvent('adduser').subscribe(function (data) {
            _this.homerProviders.push(data);
            for (var _i = 0, _a = _this.homerProviders; _i < _a.length; _i++) {
                var provider = _a[_i];
                if (_this.values.customerId == provider) {
                    // this.values.isActive = true;
                }
            }
        });
        // this.socket.fromEvent('message').subscribe(message => {
        //   // this.messages.push(message);
        // });
    };
    // ionViewWillEnter(){
    //   console.log("conectando al socket");
    //   this.socket.connect();
    // }
    DashProveedorPage.prototype.changeToggle = function () {
        console.log(this.values.isActive);
        if (!this.values.isActive) {
            this.backgroundMode.disable();
            this.values.isActive = false;
            this.socket.emit('adduser', {
                id: this.values.customerId,
                lat: this.miLatitude,
                lng: this.miLongitude,
                products: this.products,
                onesignal: this.values.userId
            });
            // this.backgroundMode.on('deactivate').subscribe(() => {
            // });
        }
        else {
            this.backgroundMode.enable();
            this.socket.connect();
            this.values.isActive = true;
            this.socket.emit('adduser', {
                id: this.values.customerId,
                lat: this.miLatitude,
                lng: this.miLongitude,
                products: this.products,
                onesignal: this.values.userId
            });
        }
    };
    DashProveedorPage.prototype.end_services = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__end_orders_end_orders__["a" /* EndOrdersPage */]);
    };
    DashProveedorPage.prototype.pastservice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__post_post__["a" /* Post */], { title: 'Servicios Pasados', id: 93 });
    };
    DashProveedorPage.prototype.services = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__orders_orders__["a" /* OrdersPage */]);
    };
    DashProveedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dash-proveedor',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\dash-proveedor\dash-proveedor.html"*/'<ion-header>\n  <ion-toolbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title >\n      <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <div class="card">\n    <div class="header">\n      <div class="avatar">\n        <img src="../../../assets/image/avatar.png" alt="">\n      </div>\n    </div>\n    <div class="card-body">\n      <div class="user-meta ion-text-center">\n        <h3 class="playername"> {{values.customerName}}</h3>\n        <h5 class="country">Proveedor</h5>\n        <ion-item class="sign_toggle">\n          <ion-label>GO ONLINE </ion-label>\n          <ion-toggle ng-repeat="item in settingsList" [(ngModel)]="values.isActive" (ngModelChange)="changeToggle()" color="success"></ion-toggle>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n\n  <ion-card>\n    <ion-card-header style="background-color: #ebebeb">\n      <h3>Estado de mis servicios</h3>\n    </ion-card-header>\n    <!-- <ion-card-content style="margin-top: 10px">\n\n    </ion-card-content> -->\n  </ion-card>\n  <div class="card">\n    <div class="card-body">\n      <div class="button-dashboard">\n        <div class="last-services">\n          <a (click)="end_services();"><img src="{{values.lastIcon}}"></a>\n          <p>Servicios Pasados</p>\n        </div>\n        <div class="proscess-services">\n          <a (click)="services();" href="#"><img src="{{values.oclockIcon}}"></a>\n          <p>Próximos Servicios</p>\n        </div>\n        <!-- <div class="future-services">\n          <a (click)="services(\'Proximos Servicios\');"><img src="{{values.nextIcon}}"></a>\n          <p>Proximos Servicios</p>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\dash-proveedor\dash-proveedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_6_ngx_socket_io__["a" /* Socket */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation_ngx__["a" /* Geolocation */]])
    ], DashProveedorPage);
    return DashProveedorPage;
}());

//# sourceMappingURL=dash-proveedor.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_socket_io__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatPage = /** @class */ (function () {
    function ChatPage(socket, toastCtrl, alertCtrl, formBuilder, values, navParams, service) {
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.values = values;
        this.navParams = navParams;
        this.service = service;
        this.messages = [];
        this.nickname = '';
        this.roomName = '';
        this.messageForm = formBuilder.group({
            message: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('')
        });
        this.chatBox = '';
        this.roomName = this.navParams.get('order');
        this.nickname = this.values.customerName;
        console.log("name " + this.nickname, "roomName " + this.roomName);
    }
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.service.getMessage({ roomName: this.roomName }).then(function (chat) {
            for (var _i = 0, _a = chat.data; _i < _a.length; _i++) {
                var message = _a[_i];
                _this.messages.push(message);
            }
        });
        this.scrollToBottom();
    };
    ChatPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.socket.connect();
        this.socket.emit('set-nickname', { "userName": this.nickname, "roomName": this.roomName });
        this.getMessages().subscribe(function (message) {
            console.log("mensaje", message);
            console.log("mensajes", _this.messages);
            _this.messages.push(message);
            _this.scrollToBottom();
        });
        this.getUsers().subscribe(function (data) {
            var user = data['user'];
            // if (data['event'] === 'left') {
            //   this.showToast('User left: ' + user);
            // } else {
            //   this.showToast('User joined: ' + user);
            // }
        });
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.sendMessage = function (message) {
        if (!message || message === '')
            return;
        console.log(this.roomName);
        this.socket.emit('add-message', { "text": message, "roomName": this.roomName });
        this.chatBox = '';
    };
    ChatPage.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatPage.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('users-changed', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    ChatPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ChatPage.prototype.presentPrompt = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Nickname',
                inputs: [
                    {
                        name: 'nickname',
                        placeholder: 'doretta'
                    }
                ],
                buttons: [
                    {
                        text: 'Random',
                        role: 'cancel',
                        handler: function (data) {
                            resolve('random_' + Math.round(Math.random() * 100));
                        }
                    },
                    {
                        text: 'Go on',
                        handler: function (data) {
                            resolve(data.nickname);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 100);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\chat\chat.html"*/'<ion-header class="settings-header">\n  <ion-navbar color="header">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <!-- <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title> -->\n      <ion-title >\n          <img style="max-width: 150px;" src="{{values.avatar}}" />\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor="let message of messages" class="message-wrapper">\n    <div>\n      <!-- <img class="profile-pic" [ngClass]="{\'left\':nickname !== message.from, \'right\':nickname === message.from}" src="https://dev.digitalfactory.tech/demos/homer/wp-content/uploads/2020/06/unnamed-7.png"\n      /> -->\n      <!--  wave-->\n      <div class="chat-bubble" [ngClass]="{\'left\':nickname !== message.from, \'right\':nickname === message.from, \'slide-left\': nickname !== message.from, \'slide-right\':nickname === message.from}">\n\n        <div class="message" [innerHTML]="message.text" autolinker>\n        </div>\n\n        <div class="message-detail">\n          <span class="bold">{{message.from}}</span>,\n          <span>{{message.created | date:\'dd/MM hh:MM\'}}</span>\n        </div>\n\n      </div>\n    </div>\n\n    <div class="cf"></div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <form [formGroup]="messageForm" (submit)="sendMessage(chatBox)" novalidate>\n    <ion-item>\n      <ion-input formControlName="message" [(ngModel)]="chatBox" placeholder="Send a message..."></ion-input>\n      <button ion-button clear (click)="sendMessage(chatBox)" item-end>\n        <ion-icon class="footer-btn" name="send"></ion-icon>\n      </button>\n    </ion-item>\n  </form>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_socket_io__["a" /* Socket */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditAddressForm = /** @class */ (function () {
    function EditAddressForm(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.regions = [];
        this.disableSubmit = false;
        this.Save = "Save";
        this.editAddress = params.data;
        this.editAddress.shipping = true;
        this.service.getCountry()
            .then(function (results) { return _this.handleContries(results); });
    }
    EditAddressForm.prototype.handleContries = function (results) {
        this.country = results;
        this.billing_states = this.country.state[this.editAddress.billing_address.country];
        this.shipping_states = this.country.state[this.editAddress.shipping_address.country];
    };
    EditAddressForm.prototype.getBillingRegion = function (countryId) {
        this.billing_states = this.country.state[countryId];
    };
    EditAddressForm.prototype.getShippingRegion = function (countryId) {
        this.shipping_states = this.country.state[countryId];
    };
    EditAddressForm.prototype.saveAddress = function () {
        var _this = this;
        this.Save = "Save";
        this.disableSubmit = true;
        if (this.editAddress.shipping) {
            this.editAddress.shipping_address.first_name = this.editAddress.billing_address.first_name;
            this.editAddress.shipping_address.last_name = this.editAddress.billing_address.last_name;
            this.editAddress.shipping_address.company = this.editAddress.billing_address.company;
            this.editAddress.shipping_address.address_1 = this.editAddress.billing_address.address_1;
            this.editAddress.shipping_address.address_2 = this.editAddress.billing_address.address_2;
            this.editAddress.shipping_address.city = this.editAddress.billing_address.city;
            this.editAddress.shipping_address.country = this.editAddress.billing_address.country;
            this.editAddress.shipping_address.state = this.editAddress.billing_address.state;
            this.editAddress.shipping_address.postcode = this.editAddress.billing_address.postcode;
        }
        this.service.saveAddress(this.editAddress)
            .then(function (results) { return _this.handleSaveAddress(results); });
    };
    EditAddressForm.prototype.handleSaveAddress = function (results) {
        this.disableSubmit = false;
        this.Save = "Saving...";
        this.nav.pop();
    };
    EditAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\edit-address-form\edit-address-form.html"*/'<ion-header no-border>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Edit Address" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="edit-address-form">\n\n  <div>\n\n    <ion-list>\n\n      <ion-item class="side-heading-background">\n\n        <h2 class="heading-label">{{"Billing Address" | translate}}\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"First Name" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.first_name" name="first_name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Last Name"| translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.last_name" name="last_name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <!--ion-item>\n\n        <ion-label floating>{{"Company" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.company" name="company">\n\n        </ion-input>\n\n      </ion-item-->\n\n      <ion-item>\n\n        <ion-label floating>{{"Phone" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.phone" name="phone">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Email" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="email" [(ngModel)]="editAddress.billing_address.email" name="email">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 1\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.address_1" name="address_1">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 2\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.address_2" name="address_2">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"City" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.city" name="city">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="country">\n\n        <ion-label>  \n\n          {{"Country" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.billing_address.country" (ngModelChange)="getBillingRegion(editAddress.billing_address.country)" name="country">\n\n          <div *ngFor="let field of country.country.countries | keys">\n\n            <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="billing_states">\n\n        <ion-label>  \n\n          {{"State" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.billing_address.state" name="state">\n\n          <div *ngFor="let field of billing_states | keys">\n\n            <ion-option value="{{field.key}}">{{field.value}}\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>      \n\n      </ion-item>\n\n      <ion-item *ngIf="!billing_states">\n\n        <ion-label floating>{{"Country" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.state" name="state">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Postcode" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.postcode" name="postcode">\n\n        </ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <ion-item class="side-heading-background">\n\n    <ion-label class="heading-label">{{"Same For Shipping" | translate}}\n\n    </ion-label>\n\n    <ion-toggle checked="true" [(ngModel)]="editAddress.shipping_true" name="subscribe">\n\n    </ion-toggle>\n\n  </ion-item>\n\n  <br>\n\n  <div *ngIf="!editAddress.shipping_true">\n\n    <ion-list>\n\n      <ion-item class="side-heading-background">\n\n        <h2 class="heading-label">{{"Shipping Address" | translate}}\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"First Name" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.first_name" name="firstname">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Last Name"| translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.last_name" name="last_name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Company" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.company" name="company">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 1\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.address_1" name="address_1">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 2\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.address_2" name="address_2">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"City" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.city" name="city">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="country">\n\n        <ion-label>  \n\n          {{"Country" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.shipping_address.country" (ngModelChange)="getShippingRegion(editAddress.shipping_address.country)" name="country">\n\n          <div *ngFor="let field of country.country.countries | keys">\n\n            <ion-option value="{{field.key}}">{{field.value}}\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="shipping_states">\n\n        <ion-label>  \n\n          {{"State" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.shipping_address.state" name="state">\n\n          <div *ngFor="let field of shipping_states | keys">\n\n            <ion-option value="{{field.key}}">{{field.value}}\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>      \n\n      </ion-item>\n\n      <ion-item *ngIf="!shipping_states">\n\n        <ion-label floating>{{"Country" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.state" name="state">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Postcode" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.postcode" name="postcode">\n\n        </ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div class="margin">\n\n    <button ion-button block color="button-color" type="submit" [disabled]="disableSubmit" class="button button-block button-default" text-uppercase (click)="saveAddress()">{{Save | translate}}\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\edit-address-form\edit-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], EditAddressForm);
    return EditAddressForm;
}());

//# sourceMappingURL=edit-address-form.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderDetails = /** @class */ (function () {
    function OrderDetails(nav, service, params, actionSheetCtrl, config, reqhttp, http, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.actionSheetCtrl = actionSheetCtrl;
        this.config = config;
        this.reqhttp = reqhttp;
        this.http = http;
        this.values = values;
        console.log(params);
        this.id = params.data;
        this.service.getOrder(this.id)
            .then(function (results) { return _this.orderDetails = results; });
    }
    OrderDetails.prototype.confirmOrder = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Change Your Order Status ...',
            cssClass: 'myaction',
            buttons: [
                {
                    text: 'Processing',
                    cssClass: 'processing',
                    handler: function () {
                        var params = {
                            status: 'processing'
                        };
                        new Promise(function (resolve) {
                            _this.http
                                .post(_this.config.setUrl +
                                '/wc-api/v3/orders/' + _this.id, params, _this.config.options)
                                .map(function (res) { return res.json(); })
                                .subscribe(function (data) {
                            });
                        });
                        //  this.WooCommerce.putAsync("orders/" + this.order.id, data).then( (data) => {
                        //   console.log(JSON.parse(data.body));
                        //   this.navCtrl.push("OrderPage");
                        // }, (err) => {
                        //   console.log(err);
                        // });
                    }
                },
                {
                    text: 'Cancel',
                    cssClass: 'cancel',
                    handler: function () {
                        var params = {
                            status: 'cancelled'
                        };
                        return new Promise(function (resolve) {
                            _this.http
                                .post(_this.config.setUrl('POST', '/wc-api/v3/orders/', false), params, _this.config.options)
                                .map(function (res) { return res.json(); })
                                .subscribe(function (data) {
                                _this.dataOrder = data;
                                resolve(_this.dataOrder);
                                console.log(_this.dataOrder);
                            }, function (err) {
                                resolve(err.json());
                            });
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    OrderDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\order-details\order-details.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"OrderInfo" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="order-details">\n\n  <ion-spinner *ngIf="!orderDetails" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orderDetails">\n\n    <ion-item-group>\n\n      <ion-item-divider>{{"Order" | translate }} #\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.order.order_number}}\n\n      </ion-item>\n\n      <ion-item-divider>{{"Date" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.order.created_at | date:\'medium\'}}\n\n      </ion-item>\n\n      <ion-item-divider>{{"PaymentMethod" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.order.payment_details.method_title}}\n\n      </ion-item>\n\n      <ion-item-divider>{{"BillingAddress" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        {{orderDetails.order.billing_address.first_name}}\n\n        {{orderDetails.order.billing_address.last_name}},\n\n        <br>\n\n        {{orderDetails.order.billing_address.email}}\n\n        <br>\n\n        {{orderDetails.order.billing_address.phone}}\n\n        <br>\n\n        {{orderDetails.order.billing_address.address_1}},\n\n        <br>\n\n        {{orderDetails.order.billing_address.address_2}},\n\n        <br>\n\n        {{orderDetails.order.billing_address.city}}, \n\n        {{orderDetails.order.billing_address.state}}\n\n        <br>\n\n        {{orderDetails.order.billing_address.postcode}}\n\n      </ion-item>\n\n      <!-- <ion-item-divider>{{"ShippingMethod" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.order.shipping_methods}}\n\n      </ion-item>\n\n      <ion-item-divider>{{"ShippingAddress" | translate}} \n\n      </ion-item-divider>\n\n      <ion-item>\n\n        {{orderDetails.order.shipping_address.first_name}}\n\n        {{orderDetails.order.shipping_address.last_name}},\n\n        <br>\n\n        {{orderDetails.order.shipping_address.company}}\n\n        <br>\n\n        {{orderDetails.order.shipping_address.address_1}},\n\n        <br>\n\n        {{orderDetails.order.shipping_address.address_2}},\n\n        <br>\n\n        {{orderDetails.order.shipping_address.city}}, \n\n        {{orderDetails.order.shipping_address.state}}\n\n        <br>\n\n        {{orderDetails.order.shipping_address.country}}\n\n        <br>\n\n        {{orderDetails.order.shipping_address.postcode}}\n\n      </ion-item>-->\n\n      <ion-item-divider>{{"Provider Details" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item *ngFor="let item of orderDetails.order.line_items">\n\n        <h2>{{"ProductName" | translate}} : {{item.name}}\n\n        </h2>\n\n        <h2>{{"Price" | translate}} : {{item.price | currency:values.currency:true:\'1.2-2\'}}\n\n        </h2>\n\n        <h2>{{"Quantity" | translate}} : {{item.quantity}}\n\n        </h2>     \n\n        <h2>{{"SubTotal" | translate}} : {{1*item.subtotal | currency:values.currency:true:\'1.2-2\'}}\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item-divider>{{"Totals" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col>{{"SubTotal" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{1*orderDetails.order.subtotal | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col> {{"ShippingTotal" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{1*orderDetails.order.total_shipping}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"TaxTotal" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{1*orderDetails.order.total_tax}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row text-uppercase>\n\n          <ion-col>{{"GrandTotal" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{1*orderDetails.order.total | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-item-group>\n\n  </div>\n\n</ion-content>\n\n<!-- <ion-footer *ngIf="values.vendor">\n\n  <ion-toolbar color="brand">\n\n    <button ion-button round full color="primary" (click)="confirmOrder()">Confirm Order</button>\n\n  </ion-toolbar>\n\n</ion-footer> -->'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\order-details\order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], OrderDetails);
    return OrderDetails;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WishlistPage = /** @class */ (function () {
    function WishlistPage(nav, values, params, functions, service) {
        this.nav = nav;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.service = service;
    }
    WishlistPage.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    WishlistPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.service.loadWishlist()
            .then(function (results) { return _this.wishlist = results; });
    };
    WishlistPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.service.deleteItem(id)
            .then(function (results) { return _this.updateWish(results, id); });
    };
    WishlistPage.prototype.updateWish = function (results, id) {
        var _this = this;
        if (results.status == "success") {
            this.service.loadWishlist()
                .then(function (results) { return _this.wishlist = results; });
            this.values.wishlistId.splice(id, 0);
        }
    };
    WishlistPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    WishlistPage.prototype.addToCart = function (item, id, type) {
        var _this = this;
        console.log({ item: item });
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
        }
        else {
            this.service.addToCart(id)
                .then(function (results) { return _this.updateCart(results, id); });
        }
    };
    WishlistPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
    };
    WishlistPage.prototype.updateCart = function (results, id) {
        var _this = this;
        if (results.error) {
            this.functions.showAlert("ERROR", "Unable to add to Wishlist");
        }
        else {
            this.service.deleteItem(id)
                .then(function (results) { return _this.updateWishlist(results); });
        }
    };
    WishlistPage.prototype.updateWishlist = function (results) {
        var _this = this;
        this.service.loadWishlist()
            .then(function (results) { return _this.wishlist = results; });
        this.functions.showAlert("SUCCESS", "Item has been added to cart");
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\wishlist\wishlist.html"*/'<!-- Header -->\n\n<ion-header>\n\n  <ion-toolbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button\n\n        ion-button\n\n        icon-only\n\n        light\n\n        class="has-icon icon-only has-badge"\n\n        (click)="getCart()"\n\n      >\n\n        <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n\n          {{values.count}}\n\n        </ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="wishlistPage">\n\n  <div *ngIf="wishlist?.error" class="margin">\n\n    <h2>{{"Your wishlist is empty!" | translate}}</h2>\n\n  </div>\n\n\n\n  <div *ngIf="wishlist">\n\n    <div *ngIf="wishlist.length">\n\n      <div *ngFor="let item of wishlist | keys" class="wish-list">\n\n        <ion-item no-lines>\n\n          <ion-thumbnail item-left>\n\n            <img src="{{item.value.image_thumb}}" />\n\n          </ion-thumbnail>\n\n\n\n          <h2 wrap-text>{{item.value.name}}</h2>\n\n          <h3 wrap-text>\n\n            {{"Price" | translate}}: {{item.value.price |\n\n            currency:values.currency:true:\'1.2-2\'}}\n\n          </h3>\n\n\n\n          <ion-row class="add-remove-button">\n\n            <ion-col royal width-50>\n\n              <button\n\n                ion-button\n\n                full\n\n                color="danger"\n\n                clear\n\n                text-uppercase\n\n                no-padding\n\n                item-left\n\n                no-margin\n\n                (click)="removeFromWishlist(item.value.id)"\n\n              >\n\n                <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n                ELIMINAR\n\n              </button>\n\n            </ion-col>\n\n            <ion-col royal width-50>\n\n              <button\n\n              style="font-weight: bold;" ion-button item-center medium color="button-color" text-uppercase\n\n                item-right\n\n                (click)="getProduct(item.value.id)"\n\n              >\n\n                <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n\n                SOLICITAR\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-item>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\wishlist\wishlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__["a" /* WishlistService */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_address_form_edit_address_form__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountPage = /** @class */ (function () {
    function AccountPage(nav, service, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.service.getCustomer()
            .then(function (results) { return _this.customers = results; });
        this.service.getAddress()
            .then(function (resultsAddresses) { return _this.addresses = resultsAddresses; });
    }
    AccountPage.prototype.editAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__edit_address_form_edit_address_form__["a" /* EditAddressForm */], this.addresses.customer);
    };
    AccountPage.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    AccountPage.prototype.getCart = function () {
        this.nav.parent.select(2);
    };
    AccountPage.prototype.checkAvatar = function () {
        return this.service.checkAvatar();
    };
    AccountPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* AccountLogin */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\account\account.html"*/'<!-- Header -->\n\n<ion-header>\n\n  <ion-toolbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n\n    </ion-title>\n\n    <!-- <ion-buttons end>\n\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n\n        <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n\n          {{values.count}}\n\n        </ion-badge>\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen="true" slot="fixed" >\n\n  \n\n  <ion-spinner *ngIf="!customers" name="crescent" style="display:block; margin-left: auto; margin-right:auto; margin-top: 5px; margin-bottom:5px" ></ion-spinner>\n\n\n\n  <div *ngIf="customers" class="customer">\n\n    <div *ngIf="customers.customer.billing_address">\n\n      <div class="card">\n\n        <div class="header">\n\n          <div class="avatar" *ngIf="checkAvatar()==\'false\'">\n\n            <img src="../../../assets/image/avatar.png" alt="">\n\n          </div>\n\n          <div class="avatar" *ngIf="checkAvatar()!=\'false\'">\n\n            <img src="{{customers.customer.avatar_url}}"/>\n\n          </div>\n\n        </div>\n\n        <div class="card-body">\n\n          <div class="user-meta ion-text-center">\n\n            <h3 class="playername"> {{customers.customer.billing_address.first_name}} {{customers.customer.billing_address.last_name}}<br *ngIf="customers.customer.billing_address.first_name"></h3>\n\n            <h5 class="country" *ngIf="values.vendor">Proveedor</h5>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <ion-card>\n\n        <ion-card-header style="background-color: #ebebeb"> \n\n          {{"Home Address" | translate}}\n\n        </ion-card-header>\n\n        <ion-card-content style="margin-top: 10px">\n\n          {{customers.customer.billing_address.first_name}} {{customers.customer.billing_address.last_name}}<br *ngIf="customers.customer.billing_address.first_name">\n\n          {{customers.customer.billing_address.address_1}}<br *ngIf="customers.customer.billing_address.address_1">\n\n          {{customers.customer.billing_address.address_2}}<br *ngIf="customers.customer.billing_address.address_2">\n\n          {{customers.customer.billing_address.city}} {{customers.customer.billing_address.state}}<br *ngIf="customers.customer.billing_address.city">\n\n          {{customers.customer.billing_address.phone}}<br *ngIf="customers.customer.billing_address.phone">\n\n          {{customers.customer.billing_address.email}}<br *ngIf="customers.customer.billing_address.email">\n\n          {{customers.customer.billing_address.country}} {{customers.customer.billing_address.postcode}}<br *ngIf="customers.customer.billing_address.postcode">\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <div *ngIf="customers.customer.shipping_address">\n\n        <ion-card style="margin-bottom: 20px;">\n\n          <ion-card-header style="background-color: #ebebeb">\n\n            {{"BillingAddress" | translate}}\n\n          </ion-card-header>\n\n          <ion-card-content style="margin-top: 10px">\n\n            {{customers.customer.shipping_address.first_name}} {{customers.customer.shipping_address.last_name}}<br\n\n              *ngIf="customers.customer.shipping_address.first_name">\n\n            {{customers.customer.shipping_address.address_1}}<br *ngIf="customers.customer.shipping_address.address_1">\n\n            {{customers.customer.shipping_address.address_2}}<br *ngIf="customers.customer.shipping_address.address_2">\n\n            {{customers.customer.shipping_address.city}} {{customers.customer.shipping_address.state}}<br\n\n              *ngIf="customers.customer.shipping_address.city">\n\n            {{customers.customer.shipping_address.phone}}<br *ngIf="customers.customer.shipping_address.phone">\n\n            {{customers.customer.shipping_address.email}}<br *ngIf="customers.customer.shipping_address.email">\n\n            {{customers.customer.shipping_address.country}} {{customers.customer.shipping_address.postcode}}<br>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </div>\n\n      <div class="margin" style="margin-bottom: 70px;">\n\n        <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase (click)="editAddress()">{{"EditAddress" | translate}}</button>\n\n     </div>\n\n\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookingDetails = /** @class */ (function () {
    function BookingDetails(nav, service, params, actionSheetCtrl, config, reqhttp, http, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.actionSheetCtrl = actionSheetCtrl;
        this.config = config;
        this.reqhttp = reqhttp;
        this.http = http;
        this.values = values;
        console.log(params);
        this.idOrder = params.data.idOrder;
        this.idVendor = params.data.idVendor;
        this.service.getBooking(this.idOrder, this.idVendor)
            .then(function (results) { return _this.orderDetails = results; });
    }
    BookingDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\booking-details\booking-details.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Booking Info" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="order-details">\n\n  <ion-spinner *ngIf="!orderDetails" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orderDetails">\n\n    <ion-item-group>\n\n      <ion-item-divider>{{"Booked Product" | translate }}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.order.booked_product}}\n\n      </ion-item>\n\n      \n\n      <ion-item-divider>{{"Customer Details" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col>{{"Name" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.first_name}}\n\n            {{orderDetails.order.billing_address.last_name}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"Email" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.email}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"Phone" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.phone}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"Address" | translate}} 1\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.address_1}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"Address" | translate}} 2\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.address_2}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"City" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.city}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"State" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.city}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"Postcode" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.billing_address.postcode}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n      <ion-item-divider>{{"Booking Status" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item no-lines>{{orderDetails.order.statusbooking}}\n\n      </ion-item> \n\n\n\n      <ion-item-divider>{{"Booking Date/Time" | translate}}\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-row>\n\n          <ion-col>{{"Start Date" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.start_date}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>{{"End Date" | translate}}\n\n          </ion-col>\n\n          <ion-col text-right>{{orderDetails.order.end_date}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-item-group>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\booking-details\booking-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], BookingDetails);
    return BookingDetails;
}());

//# sourceMappingURL=booking-details.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return test; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_products__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_post__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_category_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var test = /** @class */ (function () {
    function test(inAppBrowser, categoryService, toastCtrl, nav, service, values) {
        this.inAppBrowser = inAppBrowser;
        this.categoryService = categoryService;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.has_more_items = true;
        this.loading = true;
        this.showFilters = false;
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.items = [];
        this.options = [];
        this.service.getProductsMembership();
        this.filter = {};
        this.filter.page = 1;
    }
    test.prototype.redirect = function (id) {
        this.inAppBrowser.create("https://dev.digitalfactory.tech/demos/homer/wp-admin/admin-ajax.php?action=mstoreapp-autoLogin&username=" + this.values.user_login + "&productid=" + id + "", '_self');
    };
    test.prototype.testApi = function () {
        this.service.testApiLogin()
            .then(function (results) {
            console.log(results);
        });
    };
    test.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.service.load().then(function (results) {
            _this.handleService(results);
            refresher.complete();
        });
    };
    test.prototype.addToCart = function (item, id, type) {
        console.log({ item: item });
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], id);
        }
        else {
            this.service.addToCartMembership(id)
                .then(function (results) {
                console.log(results);
            });
        }
    };
    test.prototype.handleService = function (results) {
        // 
    };
    test.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], this.items);
    };
    test.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    test.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    test.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    test.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    test.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    test.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    test.prototype.getSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    test.prototype.getId = function () {
        var i;
        if (this.options.length >= 1)
            var resa = this.options[0].split(":");
        if (this.options.length >= 2)
            var resb = this.options[1].split(":");
        if (this.options.length >= 1)
            for (i = 0; i < this.product.product.variations.length; i++) {
                if (this.product.product.variations[i].attributes[0].option == resa[1]) {
                    if (this.options.length == 1) {
                        break;
                    }
                    else if (this.product.product.variations[i].attributes[1].option == resb[1]) {
                        break;
                    }
                }
            }
    };
    test.prototype.goto = function (data) {
        var _this = this;
        if (data.description == "product") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], data.url);
        }
        else if (data.description == "category") {
            this.items.id = data.url;
            this.items.name = data.title;
            this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(_this.items.id); });
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], this.items);
        }
        else if (data.description == "post") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_8__post_post__["a" /* Post */], data.url);
        }
    };
    test.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log(this.filter.page);
        this.filter.page += 1;
        this.service.loadMoreProvider(this.filter).then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    test.prototype.handleMore = function (results, infiniteScroll) {
        if (!results) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    test.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], item);
    };
    test.prototype.hideLoading = function () {
        this.loading = false;
    };
    test.prototype.getSubCategories = function (id) {
        var results = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        return results;
    };
    //Filter shit
    test.prototype.getFilter = function () {
        this.showFilters = true;
        this.has_more_items = false;
    };
    test.prototype.cancel = function () {
        this.showFilters = false;
        this.has_more_items = true;
    };
    test.prototype.chnageFilter = function (sort) {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        console.log(this.filter.page);
        // FILTROS SHIT EN FUNCION
        if (sort == 5) {
            this.filter['orderby'] = 'menu_order';
        }
        else if (sort == 6) {
            this.filter['orderby'] = 'popularity';
        }
        else if (sort == 7) {
            this.filter['orderby'] = 'rating';
        }
        else if (sort == 8) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'asc';
        }
        else if (sort == 9) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'desc';
        }
        else if (sort == 10) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'asc';
        }
        else if (sort == 11) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'desc';
        }
        else if (sort == 12) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'asc';
        }
        else if (sort == 13) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'desc';
        }
        /*this.filter['filter[meta_query][key]'] = "_price";
            this.filter['filter[meta_query][value]'] = '[0,10]';
            this.filter['filter[meta_query][compare]'] = "BETWEEN";*/
        this.categoryService.load(this.filter).then(function (results) { return (_this.service.products = results); });
    };
    test = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\test\test.html"*/'\n\n<ion-header>\n\n  <ion-toolbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img style="max-width: 150px;" src="{{values.avatar}}" />\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="test">\n\n\n\n  <ion-slides initialSlide="0" speed="3000" loop="false" pager="true">\n\n    <ion-slide>\n\n      <div class="overlay">\n\n        <img src="{{values.slider}}" />\n\n      </div>\n\n      <div class="title-home-banner">\n\n        {{\'¡Se requiere membresía!\'}}\n\n      </div> \n\n      <div class="title-home-banner" style="\n\n      position: absolute;\n\n      top: 60%;\n\n      font-size: 28px;\n\n      width: 100%;\n\n      color: #000;\n\n      text-align: center;\n\n  ">\n\n        {{\'Debe registrarse en un plan.\'}}\n\n      </div>\n\n\n\n\n\n      <div class="card-search">\n\n        \n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  \n\n  \n\n\n\n  <ion-refresher\n\n    *ngIf="values.settings.pull_to_refresh == \'1\'"\n\n    (ionRefresh)="doRefresh($event)"\n\n  >\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-spinner *ngIf="!service?.blocks" name="crescent"></ion-spinner>\n\n\n\n  <div\n\n    *ngFor="let children of service?.blocks"\n\n    hideWhen="loading"\n\n    class="blocks"\n\n  >\n\n    <div\n\n      *ngIf="children.block_type == \'banner_block\'"\n\n      [style.background-color]="children.bg_color"\n\n      [style.margin]="children.margin"\n\n      [style.padding]="children.padding"\n\n      class="banner_block"\n\n    >\n\n      <div\n\n        class="{{children.header_align}}"\n\n        [style.color]="children.title_color"\n\n      >\n\n        {{children.title}}\n\n      </div>\n\n      <!-- Banner Slider -->\n\n      <div *ngIf="children.children.length && children.style == \'slider\'">\n\n        <ion-slides pager="true" loop="true" autoplay="5800">\n\n          <ion-slide *ngFor="let image of children.children">\n\n            <img\n\n              src="{{image.image}}"\n\n              (click)="goto(image)"\n\n              (load)="hideLoading()"\n\n              [style.border-radius]="children.border_radius"\n\n            />\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </div>\n\n\n\n      <!-- Banner Scroll -->\n\n      <div\n\n        *ngIf="children.children.length && children.style == \'scroll\'"\n\n        [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}"\n\n        class="floating-header banner-scroll"\n\n      >\n\n        <img\n\n          class="banner"\n\n          tappable\n\n          *ngFor="let image of children.children"\n\n          (load)="hideLoading()"\n\n          src="{{image.image}}"\n\n          (click)="goto(image)"\n\n          [style.border-radius]="children.border_radius"\n\n          [style.width.%]="children.child_width"\n\n        />\n\n      </div>\n\n\n\n      <!-- Banner Grid -->\n\n      <div\n\n        *ngIf="children.children.length && children.style == \'grid\'"\n\n        class="banner-grid"\n\n      >\n\n        <ion-row class="row unlimited-items">\n\n          <ion-col\n\n            *ngFor="let image of children.children"\n\n            (load)="hideLoading()"\n\n            [style.width.%]="children.child_width"\n\n          >\n\n            <img\n\n              src="{{image.image}}"\n\n              (click)="goto(image)"\n\n              [style.border-radius]="children.border_radius"\n\n              class="{{children.card_style}}"\n\n            />\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n\n\n    <div\n\n      *ngIf="children.block_type == \'product_block\'"\n\n      [style.background-color]="children.bg_color"\n\n      [style.margin]="children.margin"\n\n      class="product-block"\n\n    >\n\n      <div\n\n        *ngIf="children.products"\n\n        class="{{children.header_align}}"\n\n        [style.color]="children.title_color"\n\n      >\n\n        {{children.title}}\n\n      </div>\n\n      <!-- Products Scroll -->\n\n      <div\n\n        *ngIf="children.products && children.style == \'scroll\'"\n\n        class="product-scroll"\n\n      >\n\n        <div\n\n          class="scroller"\n\n          [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}"\n\n        >\n\n          <a\n\n            *ngFor="let item of children.products"\n\n            [style.width.%]="children.child_width"\n\n          >\n\n            <ion-card>\n\n              <ion-card-content (click)="getProduct(item)">\n\n                <img\n\n                  [style.border-radius]="children.border_radius"\n\n                  src="{{item.images[0].src}}"\n\n                />\n\n              </ion-card-content>\n\n              <h5 *ngIf="item.title">{{item.title}}</h5>\n\n              <h5 *ngIf="item.name">{{item.name}}</h5>\n\n              <ion-label>\n\n                <span class="price-regular" *ngIf="!item.sale_price">\n\n                  {{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n\n                </span>\n\n                <span class="price-regular" *ngIf="item.sale_price">\n\n                  {{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'\n\n                  }}\n\n                </span>\n\n                <span *ngIf="item.sale_price">\n\n                  <del>\n\n                    {{1*item.regular_price |\n\n                    currency:values.currency:symbol:\'1.2-2\' }}\n\n                  </del>\n\n                </span>\n\n              </ion-label>\n\n            </ion-card>\n\n          </a>\n\n        </div>\n\n      </div>\n\n      <!-- Products  Grid-->\n\n      <div\n\n        class="product-grid"\n\n        *ngIf="children.products && children.style == \'grid\'"\n\n      >\n\n        <ion-row class="row unlimited-items">\n\n          <ion-col class="col" *ngFor="let item of children.products">\n\n            <ion-card>\n\n              <ion-card-content>\n\n                <img\n\n                  [style.height.px]="values.dimensions.imageGridViewHeight"\n\n                  tappable\n\n                  src="{{item.images[0].src}}"\n\n                  (click)="getProduct(item)"\n\n                />\n\n                <button\n\n                  ion-button\n\n                  color="danger"\n\n                  class="stock"\n\n                  *ngIf="!item.in_stock"\n\n                >\n\n                  {{"No Stock" | translate}}\n\n                </button>\n\n                <ion-icon\n\n                  name="md-heart"\n\n                  color="icon-color"\n\n                  class="wishlist-button-grid1"\n\n                  *ngIf="values.wishlistId[item.id]"\n\n                  (click)="removeFromWishlist(item.id)"\n\n                ></ion-icon>\n\n                <ion-icon\n\n                  name="md-heart-outline"\n\n                  color="icon-color"\n\n                  class="wishlist-button-grid2"\n\n                  *ngIf="!values.wishlistId[item.id]"\n\n                  (click)="addToWishlist(item.id)"\n\n                ></ion-icon>\n\n\n\n                <div *ngIf="item.in_stock">\n\n                  <button\n\n                    ion-button\n\n                    class="offer"\n\n                    *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'"\n\n                  >\n\n                    {{(item.regular_price - item.price) /item.regular_price*100\n\n                    | number : \'1.0-0\'}}%\n\n                  </button>\n\n                </div>\n\n              </ion-card-content>\n\n\n\n              <div tappable (click)="getProduct(item)" class="card-name">\n\n                <ion-label *ngIf="item.title">{{item.title}}</ion-label>\n\n                <ion-label *ngIf="item.name">{{item.name}}</ion-label>\n\n              </div>\n\n\n\n              <ion-label>\n\n                <span class="price-regular" *ngIf="!item.sale_price">\n\n                  {{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                </span>\n\n                <span class="price-regular" *ngIf="item.sale_price">\n\n                  {{1*item.sale_price |\n\n                  currency:values.currency:symbol:\'1.2-2\'}}\n\n                </span>\n\n                <span class="price-delete" *ngIf="item.sale_price">\n\n                  <del>\n\n                    {{1*item.regular_price |\n\n                    currency:values.currency:symbol:\'1.2-2\'}}\n\n                  </del>\n\n                </span>\n\n              </ion-label>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n\n\n    <!--flash sale-->\n\n\n\n    <div\n\n      *ngIf="children.block_type == \'flash_sale_block\' && !children.hide"\n\n      [style.background-color]="children.bg_color"\n\n      [style.margin]="children.margin"\n\n      [style.padding]="children.padding"\n\n      class="product-block flash_sale"\n\n    >\n\n      <div\n\n        *ngIf="children.products"\n\n        class="{{children.header_align}}"\n\n        [style.color]="children.title_color"\n\n      >\n\n        <ion-item no-lines class="flash-item-name">\n\n          <h2 [style.color]="children.title_color">\n\n            <ion-icon\n\n              name="md-flash"\n\n              style="margin-right: 6px;font-size: 18px;"\n\n            ></ion-icon>\n\n            {{children.title}}\n\n          </h2>\n\n          <!--h4 [style.color]="children.title_color" style="filter: brightness(100%);">Ends in</h4-->\n\n          <div style="text-align: center;">\n\n            <h3 class="day"><span>{{children.days}}</span></h3>\n\n            :\n\n            <h3 class="day"><span>{{children.hours}}</span></h3>\n\n            :\n\n            <h3 class="day"><span>{{children.minutes}}</span></h3>\n\n            :\n\n            <h3 class="day"><span>{{children.seconds}}</span></h3>\n\n          </div>\n\n        </ion-item>\n\n      </div>\n\n\n\n      <!-- Products Scroll -->\n\n      <div\n\n        *ngIf="children.products && children.style == \'scroll\'"\n\n        class="product-scroll"\n\n      >\n\n        <div\n\n          class="scroller"\n\n          [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}"\n\n        >\n\n          <a\n\n            *ngFor="let item of children.products"\n\n            [style.width.%]="children.child_width"\n\n          >\n\n            <ion-card>\n\n              <ion-card-content (click)="getProduct(item)">\n\n                <img\n\n                  [style.height.px]="values.dimensions.productSliderHeight"\n\n                  [style.border-radius]="children.border_radius"\n\n                  src="{{item.images[0].src}}"\n\n                />\n\n              </ion-card-content>\n\n              <h5 *ngIf="item.title">{{item.title}}</h5>\n\n              <h5 *ngIf="item.name">{{item.name}}</h5>\n\n              <!-- <ion-label>\n\n                <span class="price-regular" *ngIf="!item.sale_price">\n\n                  {{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n\n                </span>\n\n                <span class="price-regular" *ngIf="item.sale_price">\n\n                  {{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'\n\n                  }}\n\n                </span>\n\n                <span *ngIf="item.sale_price">\n\n                  <del>\n\n                    {{1*item.regular_price |\n\n                    currency:values.currency:symbol:\'1.2-2\' }}\n\n                  </del>\n\n                </span>\n\n              </ion-label> -->\n\n            </ion-card>\n\n          </a>\n\n        </div>\n\n      </div>\n\n      <!-- Products  Grid-->\n\n      <div\n\n        class="product-grid"\n\n        *ngIf="children.products && children.style == \'grid\'"\n\n      >\n\n        <ion-row class="row unlimited-items">\n\n          <ion-col\n\n            class="col"\n\n            *ngFor="let item of children.products"\n\n            [style.padding]="children.padding"\n\n          >\n\n            <ion-card>\n\n              <ion-card-content>\n\n                <img\n\n                  [style.height.px]="values.dimensions.imageGridViewHeight"\n\n                  tappable\n\n                  src="{{item.images[0].src}}"\n\n                  (click)="getProduct(item)"\n\n                />\n\n                <button\n\n                  ion-button\n\n                  color="danger"\n\n                  class="stock"\n\n                  *ngIf="item.stock_status == \'outofstock\'"\n\n                >\n\n                  {{"No Stock" | translate}}\n\n                </button>\n\n                <ion-icon\n\n                  name="md-heart"\n\n                  class="wishlist-button-grid1"\n\n                  *ngIf="values.wishlistId[item.id]"\n\n                  (click)="removeFromWishlist(item.id)"\n\n                ></ion-icon>\n\n                <ion-icon\n\n                  name="md-heart-outline"\n\n                  class="wishlist-button-grid2"\n\n                  *ngIf="!values.wishlistId[item.id]"\n\n                  (click)="addToWishlist(item.id)"\n\n                ></ion-icon>\n\n\n\n                <div *ngIf="item.stock_status == \'instock\'">\n\n                  <button\n\n                    ion-button\n\n                    class="offer"\n\n                    *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'"\n\n                  >\n\n                    {{(item.regular_price - item.price) /item.regular_price*100\n\n                    | number : \'1.0-0\'}}%\n\n                  </button>\n\n                </div>\n\n              </ion-card-content>\n\n\n\n              <div tappable (click)="getProduct(item)" class="card-name">\n\n                <ion-label *ngIf="item.title">{{item.title}}</ion-label>\n\n                <ion-label *ngIf="item.name">{{item.name}}</ion-label>\n\n              </div>\n\n\n\n              <!-- <ion-label>\n\n                <span class="price-regular" *ngIf="!item.sale_price">\n\n                  {{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                </span>\n\n                <span class="price-regular" *ngIf="item.sale_price">\n\n                  {{1*item.sale_price |\n\n                  currency:values.currency:symbol:\'1.2-2\'}}\n\n                </span>\n\n                <span class="price-delete" *ngIf="item.sale_price">\n\n                  <del>\n\n                    {{1*item.regular_price |\n\n                    currency:values.currency:symbol:\'1.2-2\'}}\n\n                  </del>\n\n                </span>\n\n              </ion-label> -->\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n\n\n    <div\n\n      *ngIf="children.block_type == \'category_block\'"\n\n      [style.background-color]="children.bg_color"\n\n      [style.margin]="children.margin"\n\n      [style.padding]="children.padding"\n\n      class="category"\n\n    >\n\n      <div\n\n        *ngIf="service?.categories"\n\n        class="{{children.header_align}}"\n\n        [style.color]="children.title_color"\n\n      >\n\n        {{children.title}}\n\n      </div>\n\n      <!-- Category Scroll -->\n\n      <div\n\n        *ngIf="service?.categories && children.style == \'scroll\'"\n\n        class="category-slider-scroll"\n\n      >\n\n        <div\n\n          class="scrollmenu2"\n\n          [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}"\n\n        >\n\n          <a\n\n            *ngFor="let item of getSubCategories(children.link_id)"\n\n            class="{{item.slug}}"\n\n            [style.width.%]="children.child_width"\n\n          >\n\n            <img\n\n              *ngIf="item.image?.src"\n\n              [style.border-radius]="children.border_radius"\n\n              (load)="hideLoading()"\n\n              src="{{item.image.src}}"\n\n              (click)="getCategory(item.id, item.slug, item.name, item.image)"\n\n            />\n\n            <h5\n\n              *ngIf="item.image"\n\n              (click)="getCategory(item.id, item.slug, item.name, item.image)"\n\n              [innerHTML]="item.name"\n\n            ></h5>\n\n            <div *ngIf="!item.image" class="no-image">\n\n              <h5\n\n                (click)="getCategory(item.id, item.slug, item.name, item.image)"\n\n                [innerHTML]="item.name"\n\n                [style.color]="children.title_color"\n\n              ></h5>\n\n            </div>\n\n          </a>\n\n        </div>\n\n      </div>\n\n\n\n      <!-- Category Grid -->\n\n      <div\n\n        *ngIf="service?.categories && children.style == \'grid\'"\n\n        class="category-slider-grid"\n\n      >\n\n        <ion-row class="row unlimited-items">\n\n          <ion-col\n\n            class="col {{item.slug}}"\n\n            *ngFor="let item of getSubCategories(children.link_id)"\n\n            [style.width.%]="children.child_width"\n\n          >\n\n            <div\n\n              (click)="getCategory(item.id, item.slug, item.name, item.image)"\n\n            >\n\n              <ion-card>\n\n                <ion-card-content>\n\n                  <img\n\n                    *ngIf="item.image"\n\n                    (load)="hideLoading()"\n\n                    [style.border-radius]="children.border_radius"\n\n                    src="{{item.image}}"\n\n                  />\n\n                </ion-card-content>\n\n                <div text-center>\n\n                  <ion-label\n\n                    text-uppercase\n\n                    [innerHTML]="item.name"\n\n                    [style.color]="children.title_color"\n\n                  ></ion-label>\n\n                </div>\n\n              </ion-card>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <!--div *ngIf="service?.categories" style="margin-bottom: 10px;">\n\n\n\n    <div *ngIf="service.mainCategories" class="main-categories">\n\n      <ion-row class="row unlimited-items">\n\n        <ion-col class="col" *ngFor="let item of service.mainCategories">\n\n          <a (click)="getCategory(item.id, item.slug, item.name)">\n\n            <ion-card>\n\n              <ion-card-content>\n\n                <img src="{{item.image}}"/>\n\n              </ion-card-content>\n\n              <div text-center>\n\n                <ion-label text-uppercase><span [innerHTML]="item.name"></span>\n\n                </ion-label>\n\n              </div>\n\n            </ion-card>\n\n          </a>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div-->\n\n  <div *ngIf="!showFilters">\n\n  <div class="products-listing">\n\n    <div *ngIf="service?.products_membership">\n\n      <!--ion-item no-lines class="item-name">\n\n            <ion-label text-uppercase><b>{{"Products" | translate}}</b>\n\n            </ion-label>\n\n          </ion-item-->\n\n      <ion-list>\n\n        <div class="card-background-page grid">\n\n          <ion-row class="row unlimited-items">\n\n            <ion-col class="col" *ngFor="let item of service.products_membership">\n\n              <ion-card>\n\n                <ion-card-content class="stock">\n\n                  <!-- <img\n\n                    [style.height.px]="values.dimensions.imageGridViewHeight"\n\n                    tappable\n\n                    src="{{item.images[0].src}}"\n\n                    (load)="hideLoading()"\n\n                    (click)="getProduct(item)"\n\n                  /> -->\n\n                  <button\n\n                    ion-button\n\n                    color="danger"\n\n                    *ngIf="item.in_stock !== true"\n\n                  >\n\n                    {{"OUTOFSTOCK" | translate}}\n\n                  </button>\n\n\n\n                  <!-- <ion-icon\n\n                    name="md-heart"\n\n                    color="icon-color"\n\n                    class="wishlist-button-grid"\n\n                    *ngIf="values.wishlistId[item.id]"\n\n                    (click)="removeFromWishlist(item.id)"\n\n                  ></ion-icon>\n\n                  <ion-icon\n\n                    name="md-heart-outline"\n\n                    color="icon-color"\n\n                    class="wishlist-button-grid"\n\n                    *ngIf="!values.wishlistId[item.id]"\n\n                    (click)="addToWishlist(item.id)"\n\n                  ></ion-icon> -->\n\n                  <div tappable class="card-name">\n\n                    <ion-label *ngIf="item.title">{{item.title}}</ion-label>\n\n                    <ion-label class="membership" *ngIf="item.short_description" [innerHTML]="item.short_description"></ion-label>\n\n                  </div>\n\n                </ion-card-content>\n\n                <ion-item no-padding no-lines class="item-background">\n\n                  <!-- <button style="font-weight: bold;" ion-button item-center medium color="button-color" text-uppercase\n\n                  [disabled]="disableSubmit"\n\n                  (click)="addToCart(item,item.id, item.type)">{{"CONTRATAR" | translate}}\n\n                  </button> -->\n\n                  <button style="font-weight: bold;" ion-button item-center medium color="button-color" text-uppercase\n\n                  [disabled]="disableSubmit"\n\n                  (click)="redirect(item.id)">{{"CONTRATAR" | translate}}\n\n                  </button>\n\n                </ion-item>\n\n                \n\n                <!-- <ion-item no-padding class="price-list">\n\n                  <h3 class="price-regular" *ngIf="item.minPrice">\n\n                    Starting from {{1*item.minPrice |\n\n                    currency:values.currency:true:\'1.2-2\'}}\n\n                  </h3>\n\n                </ion-item> -->\n\n                \n\n              </ion-card>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n  </div>\n\n   <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n            <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading more items...\' | translate}}"> </ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>  -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\test\test.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_9__providers_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], test);
    return test;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__values__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Functions = /** @class */ (function () {
    function Functions(alert, loadingController, values) {
        this.alert = alert;
        this.loadingController = loadingController;
        this.values = values;
    }
    Functions.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    Functions.prototype.presentLoading = function () {
        this.loader = this.loadingController.create({
            content: this.values.lan.WaitTitle
        });
        this.loader.present();
    };
    Functions.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Functions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_2__values__["a" /* Values */]])
    ], Functions);
    return Functions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 263;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
var Config = /** @class */ (function () {
    function Config() {
        // url: any = 'http://localhost/hexchange'
        this.url = 'https://dev.digitalfactory.tech/demos/homer';
        // url: any = 'https://hexchange.digitalfactory.tech'
        this.urlApi = 'https://websockethomer.herokuapp.com/api/v1';
        this.consumerKey = 'ck_462b7613b1f89991924e149f7d7df2a1c37eb71a';
        this.consumerSecret = 'cs_81a58277089318569168ff48defefa83fa740d86';
        this.options = {};
        this.options.withCredentials = true;
        this.options.headers = headers;
        this.oauth = oauthSignature;
        this.oauth_signature_method = 'HMAC-SHA1';
        this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        this.params = {};
        this.params.oauth_consumer_key = this.consumerKey;
        this.params.oauth_signature_method = 'HMAC-SHA1';
        this.params.oauth_version = '1.0';
    }
    Config.prototype.setOauthNonce = function (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    };
    Config.prototype.setUrl = function (method, endpoint, filter) {
        var key;
        var unordered = {};
        var ordered = {};
        if (this.url.indexOf('https') >= 0) {
            unordered = {};
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            unordered['consumer_key'] = this.consumerKey;
            unordered['consumer_secret'] = this.consumerSecret;
            Object.keys(unordered)
                .sort()
                .forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            return this.url + endpoint + this.searchParams.toString();
        }
        else {
            var url = this.url + endpoint;
            this.params['oauth_consumer_key'] = this.consumerKey;
            this.params['oauth_nonce'] = this.setOauthNonce(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            this.params['oauth_timestamp'] = new Date().getTime() / 1000;
            for (key in this.params) {
                unordered[key] = this.params[key];
            }
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            Object.keys(unordered)
                .sort()
                .forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            this.encodedSignature = this.oauth.generate(method, url, this.searchParams.toString(), this.consumerSecret);
            return (this.url +
                endpoint +
                this.searchParams.toString() +
                '&oauth_signature=' +
                this.encodedSignature);
        }
    };
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartService = /** @class */ (function () {
    function CartService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CartService.prototype.loadCart = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                console.log({ cart: _this.cart });
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteItem = function (item_key) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-remove_cart_item&item_key=' +
                item_key, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.checkout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.billing = data;
                _this.http
                    .get(_this.config.url +
                    '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', _this.config.options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                });
                resolve(_this.billing);
            });
        });
    };
    CartService.prototype.addToCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined &&
            this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity += 1;
        }
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] += 1;
        }
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url + '/cart/', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined &&
            this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity -= 1;
        }
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] -= 1;
        }
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url + '/cart/', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.submitCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('coupon_code', coupon);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CartService.prototype.removeCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('coupon', coupon);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-remove_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
            });
        });
    };
    CartService.prototype.updateShipping = function (method) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('shipping_method[0]', method);
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-update_shipping_method', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CartService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_condition_terms_condition__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BillingAddressForm = /** @class */ (function () {
    function BillingAddressForm(iab, nav, oneSignal, platform, service, params, functions, values) {
        this.iab = iab;
        this.nav = nav;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.showCreateAccont = false;
        this.buttonSubmit = false;
        this.buttonSubmitLogin = false;
        this.buttonSubmitCoupon = false;
        this.buttonText = "Place booking";
        this.buttonText1 = "Apply";
        this.buttonText2 = "Login";
        this.loginData = [];
        this.form = params.data;
        this.billing = {};
        this.billing.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
        this.getRegion(this.form.shipping_country);
        this.form.shipping = true;
        this.shipping = {};
        this.shipping.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
    }
    BillingAddressForm.prototype.getRegion = function (countryId) {
        var _this = this;
        this.states = this.form.state[countryId];
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm.prototype.handleOrderReviews = function (results) {
        this.OrderReview = results;
        this.form.payment = this.OrderReview.payment;
        this.chosen_shipping = this.OrderReview.chosen_shipping;
    };
    BillingAddressForm.prototype.checkout = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.buttonText = "Placing order...";
        if (this.platform.is('cordova'))
            this.oneSignal.getIds().then(function (data) {
                _this.form.onesignal_user_id = data.userId;
            });
        if (this.form.shipping) {
            this.form.shipping_first_name = this.form.billing_first_name;
            this.form.shipping_last_name = this.form.billing_last_name;
            this.form.shipping_company = this.form.billing_company;
            this.form.shipping_address_1 = this.form.billing_address_1;
            this.form.shipping_address_2 = this.form.billing_address_2;
            this.form.shipping_city = this.form.billing_city;
            this.form.shipping_country = this.form.billing_country;
            this.form.shipping_state = this.form.billing_state;
            this.form.shipping_postcode = this.form.billing_postcode;
        }
        if (this.form.payment_method == 'bacs' || this.form.payment_method == 'cheque' || this.form.payment_method == 'cod') {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handleBilling(results); });
        }
        else if (this.form.payment_method == 'stripe') {
            this.service.getStripeToken(this.form)
                .then(function (results) { return _this.handleStripeToken(results); });
        }
        else {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handlePayment(results); });
        }
    };
    BillingAddressForm.prototype.handlePayment = function (results) {
        var _this = this;
        if (results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser_1 = this.iab.create(results.redirect, '_blank', options);
            browser_1.show();
            browser_1.on('loadstart').subscribe(function (data) {
                if (data.url.indexOf('order-received') != -1) {
                    _this.values.cart = [];
                    _this.values.count = 0;
                    var str = data.url;
                    var pos1 = str.lastIndexOf("/order-received/");
                    var pos2 = str.lastIndexOf("/?key=wc_order");
                    var pos3 = pos2 - (pos1 + 16);
                    var order_id = str.substr(pos1 + 16, pos3);
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__["a" /* OrderSummary */], order_id);
                    browser_1.hide();
                }
                else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                    browser_1.close();
                    _this.buttonSubmit = false;
                }
            });
            browser_1.on('exit').subscribe(function (data) {
                _this.buttonSubmit = false;
            });
        }
        else if (results.result == 'failure') {
            this.functions.showAlert("STATUS", results.messages);
            this.buttonSubmit = false;
        }
    };
    BillingAddressForm.prototype.checkoutStripe = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.buttonText = "Placing Order...";
        this.service.getStripeToken(this.form)
            .then(function (results) { return _this.handleStripeToken(results); });
    };
    BillingAddressForm.prototype.handleStripeToken = function (results) {
        var _this = this;
        if (results.error) {
            this.buttonSubmit = false;
            this.buttonText = "Place booking";
            this.functions.showAlert("ERROR", results.error.message);
        }
        else {
            this.service.stripePlaceOrder(this.form, results)
                .then(function (results) { return _this.handleBilling(results); });
        }
    };
    BillingAddressForm.prototype.handleBilling = function (results) {
        if (results.result == "success") {
            var str = results.redirect;
            var pos1 = str.lastIndexOf("/order-received/");
            var pos2 = str.lastIndexOf("/?key=wc_order");
            var pos3 = pos2 - (pos1 + 16);
            var order_id = str.substr(pos1 + 16, pos3);
            this.values.cart = [];
            this.values.count = 0;
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__["a" /* OrderSummary */], order_id);
        }
        else if (results.result == "failure") {
            this.functions.showAlert("ERROR", results.messages);
        }
        this.buttonSubmit = false;
        this.buttonText = "Place booking";
    };
    BillingAddressForm.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.buttonSubmitLogin = true;
            this.buttonText2 = "Loading";
            this.service.login(this.form)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    BillingAddressForm.prototype.validateForm = function () {
        if (this.form.username == undefined || this.form.username == "") {
            return false;
        }
        if (this.form.password == undefined || this.form.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    BillingAddressForm.prototype.handleResults = function (a) {
        this.buttonSubmitLogin = false;
        this.buttonText2 = "Login";
        //this.form.shipping = true;
        if (a.user_logged) {
            this.form = a;
            this.states = this.form.state[this.form.billing_country];
            this.values.isLoggedIn = a.user_logged;
            this.values.customerName = a.billing_first_name;
            this.values.customerId = a.user_id;
            this.values.logoutUrl = a.logout_url;
        }
        else {
            this.functions.showAlert("Error", 'Login unsuccessful. try again');
        }
    };
    BillingAddressForm.prototype.submitCoupon = function () {
        var _this = this;
        this.buttonSubmitCoupon = true;
        this.buttonText1 = "Loading";
        this.service.submitCoupon(this.form)
            .then(function (results) { return _this.handleCoupon(results); });
    };
    BillingAddressForm.prototype.handleCoupon = function (results) {
        var _this = this;
        this.buttonSubmitCoupon = false;
        this.buttonText1 = "Apply";
        this.couponStatus = results._body;
        this.functions.showAlert("STATUS", results._body);
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.OrderReview = results; });
    };
    BillingAddressForm.prototype.createAccount = function () {
        this.showCreateAccont = true;
    };
    BillingAddressForm.prototype.changePayment = function () {
        this.form.payment_instructions = this.form.payment[this.form.payment_method].description;
        this.buttonSubmit = false;
        this.buttonText = "Continue to " + this.form.payment[this.form.payment_method].method_title;
    };
    BillingAddressForm.prototype.terms = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__terms_condition_terms_condition__["a" /* TermsCondition */], this.form.terms_content);
    };
    BillingAddressForm.prototype.updateOrderReview = function () {
        var _this = this;
        this.form.shipping_method = this.chosen_shipping;
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\checkout\billing-address-form\billing-address-form.html"*/'<ion-header>\n\n  <ion-navbar color="header"> \n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title text-wrap text-center>{{"Checkout" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="billing-address-form">\n\n <div>\n\n    <ion-item *ngIf="!values.isLoggedIn" class="side-heading-background Returningcustomer" no-lines>\n\n      <ion-label color="side-heading-color">{{"Returningcustomer?Loginhere.." | translate}}\n\n        <ion-icon ios="ios-log-in" md="md-log-in">\n\n        </ion-icon>\n\n      </ion-label>\n\n      <ion-toggle checked="true" [(ngModel)]="form.islogin" name="subscribe">\n\n      </ion-toggle>\n\n    </ion-item>\n\n    <div *ngIf="form.islogin" class="login-form">\n\n      <form #f="ngForm">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label floating>{{"username" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="email" [(ngModel)]="form.username" name="firstname">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"password" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="password" [(ngModel)]="form.password" name="password">\n\n            </ion-input>\n\n          </ion-item>\n\n        </ion-list> \n\n        <div class="login-button">\n\n          <button ion-button block color="button-color" type="submit" text-uppercase [disabled]="buttonSubmitLogin" (click)="login(loginData)">{{buttonText2}}\n\n          </button> \n\n        </div>\n\n      </form>\n\n    </div>\n\n    <div *ngIf="form.iscoupon" class="coupon">\n\n      <form #f="ngForm">\n\n        <ion-item>\n\n          <ion-label floating>coupon\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="form.coupon_code" name="coupon">\n\n          </ion-input>\n\n        </ion-item> \n\n        <button ion-button color="button-color" block type="submit" [disabled]="buttonSubmitCoupon" (click)="submitCoupon()"> {{buttonText1}}\n\n        </button> \n\n      </form>\n\n    </div>\n\n    <div *ngIf="form">\n\n      <form #f="ngForm" class="form">\n\n        <ion-list no-margin>\n\n          <ion-item class="side-heading-background">\n\n            <ion-label class="col" color="side-heading-color">{{"BillingAddress" | translate}}\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"FirstName" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_first_name" name="firstname">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"LastName"| translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_last_name" name="lastname">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"Company" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_company" name="company">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"Phone" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="number" [(ngModel)]="form.billing_phone" name="telephone">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"StreetAddress" | translate}} 1\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_address_1" name="street1">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"StreetAddress" | translate}} 2\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_address_2" name="street2">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"Email" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="email" [(ngModel)]="form.billing_email" name="email">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"City" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_city" name="city">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"Postcode" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_postcode" name="postcode">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label> {{"Country" | translate}}\n\n            </ion-label>\n\n            <ion-select [(ngModel)]="form.billing_country" (ngModelChange)="getRegion(form.billing_country)" name="billing_country">\n\n              <div *ngFor="let field of form.country.countries | keys">\n\n                <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n\n                </ion-option>\n\n              </div>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="states">\n\n            <ion-label> {{"State" | translate}} \n\n            </ion-label>\n\n            <ion-select [(ngModel)]="form.billing_state" name="billing_state">\n\n              <div *ngFor="let field of states | keys">\n\n                <ion-option value="{{field.key}}">{{field.value}}\n\n                </ion-option>\n\n              </div>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="!states">\n\n            <ion-label floating> {{"State" | translate}} \n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.billing_state" name="billing_state">\n\n            </ion-input>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n        <div class="same-for-shipping">\n\n          <ion-item class="side-heading-background">\n\n            <ion-label color="side-heading-color">{{"SameForShipping" | translate}}\n\n            </ion-label>\n\n            <ion-toggle checked="true" [(ngModel)]="form.shipping" name="shipping">\n\n            </ion-toggle>\n\n          </ion-item>\n\n        </div>\n\n        <div *ngIf="!form.shipping" class="same-for-shipping-form">\n\n          <ion-list class="shipping-address-list">\n\n            <ion-item class="side-heading-background">\n\n              <ion-label color="side-heading-color">{{"ShippingAddress" | translate}}\n\n              </ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"FirstName" | translate}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_first_name" name="first_name">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"LastName"| translate}}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_last_name" name="last_name">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"Company" | translate}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_company" name="shipping_company">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"StreetAddress" | translate}} 1\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_address_1" name="address_1">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"StreetAddress" | translate}} 2\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_address_2" name="address_2">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"City" | translate}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_city" name="shipping_city">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label> {{"Country" | translate}}\n\n              </ion-label>\n\n              <ion-select [(ngModel)]="form.shipping_country" (ngModelChange)="getRegion(form.shipping_country)" name="shipping_country">\n\n                <div *ngFor="let field of form.country.countries | keys">\n\n                  <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n\n                  </ion-option>\n\n                </div>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item *ngIf="states">\n\n              <ion-label> {{"State" | translate}} \n\n              </ion-label>\n\n              <ion-select [(ngModel)]="form.shipping_state" name="form.shipping_state">\n\n                <div *ngFor="let field of states | keys">\n\n                  <ion-option value="{{field.key}}">{{field.value}}\n\n                  </ion-option>\n\n                </div>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item *ngIf="!states">\n\n              <ion-label floating>{{form.checkout_fields?.shipping?.shipping_state?.label}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_state" name="form.shipping_state">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"Postcode" | translate}}\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.shipping_postcode" name="shipping_postcode">\n\n              </ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </form>\n\n    </div>\n\n    <ion-item *ngIf="!values.isLoggedIn" no-lines class="side-heading-background create-account">\n\n      <ion-label color="side-heading-color">{{"Create Account" | translate}}\n\n      </ion-label>\n\n      <ion-toggle checked="true" [(ngModel)]="form.register" name="subscribe">\n\n      </ion-toggle>\n\n    </ion-item>\n\n    <div *ngIf="form.register" class="create-account-form">\n\n      <form #f="ngForm">\n\n        <ion-list>\n\n          <ion-label class="create-account-label"> {{"Createanaccounttext" | translate}} \n\n          </ion-label>\n\n          <ion-item>\n\n            <ion-label floating>{{"password" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="password" [(ngModel)]="form.password" name="password">\n\n            </ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form>\n\n    </div>\n\n\n\n\n\n    <div *ngIf="OrderReview?.shipping" class="shipping">\n\n      <div no-margin text-wrap radio-group [(ngModel)]="chosen_shipping" (ngModelChange)="updateOrderReview()">\n\n          <ion-item class="side-heading-background payment-method-header" no-lines>\n\n            <ion-label color="side-heading-color">{{"Select a payment method" | translate}}\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item *ngFor="let method of OrderReview.shipping | keys" style="padding-left:20px">\n\n            <ion-label><span [innerHTML]="method.value.label"></span> <b>-</b> <span>{{method.value.cost  | currency:values.currency:true:\'1.2-2\'}}</span></ion-label>           \n\n            <ion-radio value="{{method.value.id}}">\n\n            </ion-radio>\n\n          </ion-item>\n\n      </div>\n\n    </div>\n\n\n\n<ion-list *ngIf="OrderReview?.cart">\n\n      <ion-item class="side-heading-background order-review-header" no-lines>\n\n        <ion-label color="side-heading-color">{{"Your Orders" | translate}}\n\n        </ion-label>\n\n      </ion-item>\n\n      <div *ngFor="let item of OrderReview.cart.cart_contents | keys">\n\n        <ion-row>\n\n          <ion-col width-75>\n\n            <ion-label no-margin>{{item.value.name}} - ({{item.value.quantity}})\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-25 text-right>\n\n            <ion-label no-margin>{{1*item.value.line_subtotal | currency:values.currency:true:\'1.2-2\'}}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <div *ngIf="OrderReview.totals.discount_total && OrderReview.totals.discount_total != 0">\n\n        <ion-row>\n\n          <ion-col width-75>\n\n            <ion-label no-margin>{{"Coupon" | translate}}\n\n            </ion-label>\n\n          </ion-col>\n\n          <ion-col width-25 text-right>\n\n            <ion-label no-margin> - {{1*OrderReview.totals.discount_total | currency:values.currency:true:\'1.2-2\'}}\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <ion-row>\n\n        <ion-col width-75>\n\n          <ion-label no-margin>{{"SubTotal" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label no-margin>{{1*OrderReview.totals.subtotal | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="OrderReview.totals.shipping_total != 0">\n\n        <ion-col width-75>\n\n          <ion-label>{{"Shipping" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label>{{1*OrderReview.totals.shipping_total | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="OrderReview.totals.fee_total != 0">\n\n        <ion-col width-75>\n\n          <ion-label>{{"Fee" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label>{{1*OrderReview.totals.fee_total | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="OrderReview.totals.cart_contents_total != 0">\n\n        <ion-col width-75>\n\n          <ion-label>{{"Subtotal ex tax" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label>{{1*OrderReview.totals.cart_contents_total | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>  \n\n\n\n      <ion-row *ngIf="OrderReview.totals.total_tax != 0">\n\n        <ion-col width-75>\n\n          <ion-label>{{"Tax total" | translate}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label>{{1*OrderReview.totals.total_tax | currency:values.currency:true:\'1.2-2\'}}\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col width-75>\n\n          <ion-label no-margin>\n\n            <b>{{"Totals" | translate}}\n\n            </b>\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col width-25 text-right>\n\n          <ion-label no-margin>\n\n            <b>{{1*OrderReview.totals.total | currency:values.currency:true:\'1.2-2\'}}\n\n            </b>\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n    <ion-item class="side-heading-background payment-method-header" no-lines>\n\n      <ion-label color="side-heading-color">{{"Select shipping method" | translate}}\n\n      </ion-label>\n\n    </ion-item>\n\n    <div *ngIf="form.payment">\n\n      <ion-list no-margin text-wrap radio-group [(ngModel)]="form.payment_method" (ngModelChange)="changePayment()">\n\n        <ion-item *ngFor="let method of form.payment | keys">\n\n          <ion-label class="payment-method-title">{{method.value.title}}\n\n          </ion-label>\n\n          <ion-radio value="{{method.value.id}}">\n\n          </ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n      <div *ngIf="form.payment_method != \'stripe\'" class="side-heading-background">\n\n        <!-- <ion-label class="payment-instructions">{{form.payment_instructions}}\n\n        </ion-label>  -->\n\n        <div class="payment-instructions">\n\n          <span [innerHTML]="form.payment_instructions"></span>\n\n        </div>\n\n        <div *ngIf="form.payment_method == \'authnet\'">\n\n          \n\n          <ion-list no-margin>\n\n            <ion-item class="side-heading-background">\n\n              <ion-label color="side-heading-color">Credit Card Details\n\n              </ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"CardNumber" | translate}} *\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.authnet_card_number" name="authnet_card_number">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"Expiry" | translate}} (MM/YY) *\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.authnet_card_expiry" name="authnet_card_expiry">\n\n              </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{"CardCode" | translate}} *\n\n              </ion-label>\n\n              <ion-input required type="text" [(ngModel)]="form.authnet_card_cvc" name="authnet_card_cvc">\n\n              </ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n\n\n        </div>\n\n      <ion-item *ngIf="form.terms_content" no-lines class="side-heading-background">\n\n      <ion-label>{{"IAgree" | translate}} <a (click)="terms()">{{"TermsConditions" | translate}}</a>\n\n      </ion-label>\n\n      <ion-toggle checked="true" [(ngModel)]="form.terms" name="terms">\n\n      </ion-toggle>\n\n      </ion-item>\n\n      <div class="button-margin">\n\n        <button ion-button color="button-color" text-uppercase [disabled]="buttonSubmit" block secondary type="submit" class="button button-block button-default" (click)="checkout()">{{"PlaceOrder" | translate}}\n\n        </button> \n\n      </div>\n\n        \n\n      </div>\n\n    </div>\n\n    <div *ngIf="form.payment_method ==\'stripe\'" class="side-heading-background stripe-payment">\n\n      <ion-label [innerHTML]="form.payment.stripe.description">\n\n      </ion-label>\n\n      <form #f="ngForm">\n\n        <ion-list no-margin>\n\n          <ion-item class="side-heading-background">\n\n            <ion-label color="side-heading-color">Stripe Card Details\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"CardNumber" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.stripe_number" name="stripe_number">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"ExpiryMonth" | translate}} (MM)\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.stripe_exp_month" name="stripe_exp_year">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"ExpiryYear" |translate}} (YYYY)\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.stripe_exp_year" name="stripe_exp_year">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{"CardCode" | translate}}\n\n            </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="form.stripe_code" name="stripe_code">\n\n            </ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form> \n\n     <ion-item class="side-heading-background" no-lines>\n\n      <ion-label>{{"IAgree" | translate}} <a (click)="terms()">{{"TermsConditions" | translate}}</a>\n\n      </ion-label>\n\n      <ion-toggle checked="true" [(ngModel)]="form.terms" name="terms">\n\n      </ion-toggle>\n\n    </ion-item>\n\n\n\n      <div class="button-margin">\n\n      <button ion-button color="button-color" text-uppercase *ngIf="form.payment_method ==\'stripe\'" [disabled]="buttonSubmit" (click)="checkout()" block secondary type="submit" class="button button-block button-default">{{"PlaceOrder" | translate}}\n\n      </button>\n\n      </div>\n\n    </div>\n\n    <br>\n\n    <br>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\checkout\billing-address-form\billing-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */]])
    ], BillingAddressForm);
    return BillingAddressForm;
}());

//# sourceMappingURL=billing-address-form.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchService = /** @class */ (function () {
    function SearchService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    SearchService.prototype.getSearch = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            // this.http.get(this.config.setUrl('GET', '/wc-api/v3/products?', filter), this.config.options).map(res => res.json())
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', filter), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    SearchService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */]])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryService = /** @class */ (function () {
    function CategoryService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CategoryService.prototype.load = function (params) {
        var _this = this;
        console.log('flter:', params);
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', params), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.loadMore = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', filter), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined &&
                    this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url + '/cart/', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined &&
                    this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        console.log(this.values.cartNonce);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url + '/cart/', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CategoryService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CategoryService.prototype.search = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log('parametros de busqueda: ', _this.config.options);
            _this.http
                .get(_this.config.setUrl('GET', '/wp-json/wc-bookings/v1/products?', params), _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log('resultados de la busqueda:', data);
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append('product_id', id);
            params.append('customer_id', _this.values.customerId.toString());
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('product_id', id);
        params.append('customer_id', this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http
                .post(_this.config.url +
                '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CategoryService.prototype.getProductsByIdVendor = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url +
                '/wp-json/custom-api/v1/get_products_by_id?id_vendor=' + _this.values.customerId + '', _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.productsIds = data;
                console.log(_this.productsIds);
                resolve(_this.productsIds.toString());
            });
        });
    };
    CategoryService.prototype.getProductsByIdVendor2 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(_this.config.url +
                '/wp-json/custom-api/v1/get_products_by_id?id_vendor=' + _this.values.customerId + '', _this.config.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.productsIds = data;
                console.log(_this.productsIds);
                resolve(_this.productsIds);
            });
        });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"]])
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_billing_address_form_billing_address_form__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartPage = /** @class */ (function () {
    function CartPage(nav, service, values, params, functions) {
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.addProduct = true;
        this.disableSubmit = false;
        this.buttonCoupon = false;
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.Checkout = "Checkout";
        this.quantity = 1;
        this.options = [];
        this.obj = params.data;
    }
    CartPage.prototype.gohomep = function () {
        this.nav.parent.select(0);
    };
    CartPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCartInit(results); });
    };
    CartPage.prototype.handleCartInit = function (results) {
        this.cart = results;
        this.shipping = results.zone_shipping;
        this.chosen_shipping = results.chosen_shipping;
    };
    CartPage.prototype.handleCart = function (results) {
        this.cart = results;
    };
    CartPage.prototype.delete = function (key) {
        var _this = this;
        this.service.deleteItem(key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        this.disableSubmit = true;
        this.Checkout = "PleaseWait";
        this.service.checkout()
            .then(function (results) { return _this.handleBilling(results); });
    };
    CartPage.prototype.handleBilling = function (results) {
        this.disableSubmit = false;
        this.Checkout = "Checkout";
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */], results);
    };
    CartPage.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        if (Object.keys(this.cart.cart_contents).length == 1) {
            if (this.cart.cart_contents[key].quantity == 1) {
                this.cart.cart_contents = {};
                console.log(this.cart);
            }
            ;
        }
        this.service.deleteFromCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.addToCart = function (id, key) {
        var _this = this;
        this.service.addToCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.updateCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.handleAddToCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.submitCoupon = function () {
        var _this = this;
        if (this.cart.coupon != undefined) {
            this.disableSubmitCoupon = true;
            this.Apply = "Apply";
            this.service.submitCoupon(this.cart.coupon)
                .then(function (results) { return _this.handleCoupon(results); });
        }
    };
    CartPage.prototype.removeCoupon = function () {
        var _this = this;
        this.service.removeCoupon(this.cart.applied_coupons)
            .then(function (results) { return _this.handleCoupon(results); });
    };
    CartPage.prototype.handleCoupon = function (results) {
        var _this = this;
        console.log(results);
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.functions.showAlert("STATUS", results._body);
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.handleResults = function (a) {
        if (a.message.status == 'success') {
            this.functions.showAlert(a.message.status, a.message.text);
        }
        else {
            this.functions.showAlert(a.message.status, a.message.text);
        }
    };
    CartPage.prototype.updateShipping = function (method) {
        var _this = this;
        this.chosen_shipping = method;
        this.service.updateShipping(method)
            .then(function (results) { return _this.handleShipping(results); });
    };
    CartPage.prototype.gohome = function () {
        this.nav.parent.select(1);
    };
    CartPage.prototype.handleShipping = function (results) {
        this.cart = results;
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\cart\cart.html"*/'<!-- <ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Cart"| translate}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only light class="has-icon icon-only has-badge">\n\n        <ion-icon name="md-basket" class="item-icon">\n\n        </ion-icon>\n\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n\n        </ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-header>\n\n  <ion-toolbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img (click)="gohomep();" style="max-width: 150px;" src="{{values.avatar}}" />\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="cart">\n\n  <ion-spinner *ngIf="!cart" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="cart">\n\n        <div class="empty" *ngIf="cart.cart_contents.length == 0"> \n\n            <ion-icon name="md-basket"></ion-icon>\n\n            <h4 color="side-heading-color" text-center no-lines>{{"Your cart is empty" | translate}}!</h4>\n\n            <h5 text-center no-lines>{{"Add some products available in our menu to checkout" | translate}}</h5> \n\n            <button ion-button class="butt" item-center medium color="button-color" text-uppercase (click)="gohome()">{{"Continue Booking" | translate}}</button> \n\n        </div>\n\n    <div *ngIf="cart?.cart_contents">\n\n\n\n      <div class="cart-items">\n\n      <ion-list>\n\n        <div class="cart-list" *ngFor="let item of cart.cart_contents | keys">\n\n          <ion-item no-lines *ngIf="item.value.quantity != 0">\n\n            <ion-thumbnail item-left>\n\n              <img src="{{item.value.thumb}}">\n\n            </ion-thumbnail>\n\n            <h2 wrap-text>{{item.value.name}}\n\n            </h2>\n\n            <h3 wrap-text > {{"Price" | translate}}: {{item.value.price | currency:values.currency:true:\'1.2-2\'}}\n\n            </h3>\n\n            <h3 wrap-text> {{"Totals" | translate}}: {{1*item.value.line_subtotal | currency:values.currency:true:\'1.2-2\'  }}\n\n            </h3>\n\n            <a (click)="delete( item.key )">\n\n              <ion-icon name="trash">\n\n              </ion-icon>\n\n            </a>\n\n            <!-- <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="deleteFromCart(item.value.product_id, item.key)">\n\n              <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n\n              </ion-icon>\n\n            </button>\n\n            <button ion-button item-right color="button-color" clear>{{item.value.quantity}}\n\n            </button>\n\n            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="addToCart(item.value.product_id, item.key)">\n\n              <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n\n              </ion-icon>\n\n            </button> -->\n\n          </ion-item>\n\n        </div>\n\n      </ion-list>\n\n      </div>\n\n\n\n      <div *ngIf="cart.cart_contents.length != 0">\n\n        <ion-list *ngIf="shipping" no-margin text-wrap radio-group [(ngModel)]="chosen_shipping" (ngModelChange)="updateShipping(chosen_shipping)" class="shipping-methods">\n\n          <ion-item-divider>\n\n            <h2>{{"Select shipping method" | translate}}\n\n            </h2>\n\n          </ion-item-divider>\n\n          <ion-item *ngFor="let method of shipping | keys" >\n\n            <ion-label>{{method.value.method_title}} \n\n              <span *ngIf="method.value.cost">{{ 1*method.value.cost | currency:values.currency:true:\'1.2-2\'}}\n\n              </span> \n\n            </ion-label>\n\n            <ion-radio value="{{method.value.id + \':\' + method.value.instance_id}}" >\n\n            </ion-radio>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n        <form #f="ngForm" class="coupon">\n\n          <ion-item>\n\n            <ion-label>{{"Coupon Code" | translate}}</ion-label>\n\n            <ion-input type="text" [(ngModel)]="cart.coupon" name="coupon">\n\n            </ion-input>\n\n            <h2 item-right>\n\n              <button ion-button color="button-color" block type="submit" text-uppercase [disabled]=\'disableSubmitCoupon\' (click)="submitCoupon()"> {{Apply | translate}}\n\n              </button>\n\n            </h2>\n\n          </ion-item>\n\n        </form>\n\n\n\n        <ion-list class="totals" *ngIf="cart.cart_totals">\n\n          <!--ion-item-divider>\n\n            <h2>{{"Totals" | translate}}\n\n            </h2>\n\n          </ion-item-divider-->\n\n          <ion-row>\n\n            <ion-col width-75>\n\n              <ion-label>{{"SubTotal" | translate}}\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-right>\n\n              <ion-label>{{1*cart.cart_totals.subtotal | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>  \n\n\n\n          <ion-row *ngIf="cart.cart_totals.cart_contents_total != 0">\n\n            <ion-col width-75>\n\n              <ion-label>{{"Subtotal ex tax" | translate}}\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-right>\n\n              <ion-label>{{1*cart.cart_totals.cart_contents_total | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>  \n\n\n\n          <ion-row *ngIf="cart.cart_totals.tax_total != 0">\n\n            <ion-col width-75>\n\n              <ion-label>{{"Tax total" | translate}}\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-right>\n\n              <ion-label>{{1*cart.cart_totals.total_tax | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf="cart.cart_totals.discount_total && cart.cart_totals.discount_total != 0"> \n\n            <ion-col width-75 class="remove-coupon">\n\n              <ion-label>{{"Coupons" | translate}} - {{cart.applied_coupons}} \n\n                <a (click)="removeCoupon()"> (Remove)\n\n                </a>\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-right>\n\n              <ion-label>- {{1*cart.cart_totals.discount_total | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf="cart.cart_totals.shipping_total != 0"> \n\n            <ion-col width-75>\n\n              <ion-label>{{"Shipping" | translate}}\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-right>\n\n              <ion-label >{{1*cart.cart_totals.shipping_total | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-col width-75>\n\n              <ion-label>\n\n                <b> {{"Grand Total" | translate}}\n\n                </b>\n\n              </ion-label>\n\n            </ion-col >\n\n            <ion-col width-25 text-right>\n\n              <ion-label>{{1*cart.cart_totals.total | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        </ion-list>\n\n        \n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<div *ngIf="cart">\n\n  <ion-footer *ngIf="cart.cart_contents.length != 0" class="footer-cart">\n\n    <button style="font-weight: 600;" ion-button color="button-color" text-uppercase [disabled]=\'disableSubmit\' (click)="checkout()">{{Checkout | translate}}\n\n    </button>\n\n  </ion-footer>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__md5__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductPage = /** @class */ (function () {
    function ProductPage(translate, nav, service, params, functions, values) {
        var _this = this;
        this.translate = translate;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.product = {};
        this.disableSubmit = true;
        this.wishlistIcon = false;
        this.usedVariationAttributes = [];
        this.mon = [];
        this.month = 1;
        this.disableWeekDays = [];
        this.daysConfig = [];
        this.optionsMulti = {
            pickMode: 'single',
            daysConfig: this.daysConfig,
            disableWeeks: this.disableWeekDays,
        };
        this.NoBlockAvailable = 'NoBlockAvailable';
        this.WhatTime = 'WhatTime';
        this.lan = {};
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true,
        };
        this.options = [];
        this.optionss = [];
        this.quantity = '1';
        this.BookNow = 'BookNow';
        if (params.data.id) {
            this.selectedService = null;
            console.log(params);
            this.product.product = params.data;
            this.id = params.data.id;
            console.log('producto', this.product.product);
            this.options.product_id = this.id;
            console.log('Product: ', this.product.product.resources_full);
            this.usedVariationAttributes = this.product.product
                .resources_full.map(function (item) { return item; });
            console.log('usedVariationAttributes:', this.usedVariationAttributes);
            this.loadDataProduct();
        }
        else {
            // this.options.product_id = this.id
            this.service
                .getProduct(params.data)
                .then(function (results) { return _this.handleProductResults(results); });
        }
        this.getReviews();
    }
    ProductPage_1 = ProductPage;
    ProductPage.prototype.loadDataProduct = function () {
        var _this = this;
        //según el horario, deshabilitamos los dias de la semana que no están definidos en el Available
        this.disableWeekDays = [0, 1, 2, 3, 4, 5, 6];
        this.product.product.availability.forEach(function (element) {
            var day = Number(element.type.split(':')[1]);
            console.log({ day: day });
            var index = _this.disableWeekDays.indexOf(day);
            if (index > -1) {
                _this.disableWeekDays.splice(index, 1);
            }
        });
        console.log('this.daysConfig', this.daysConfig);
        console.log('this.disableWeekDays', this.disableWeekDays);
        //Ponemos los dias as marked (para que aparezcan de un color azul) 6 meses hacia adelante
        for (var index = 0; index < 180; index++) {
            var cur_day = __WEBPACK_IMPORTED_MODULE_7_moment___default()()
                .add(index, 'days')
                .toDate()
                .getDay();
            var index_cur_day = this.disableWeekDays.indexOf(cur_day);
            if (index_cur_day > -1) {
                this.daysConfig.push({
                    date: __WEBPACK_IMPORTED_MODULE_7_moment___default()()
                        .add(index, 'days')
                        .toDate(),
                    disable: true,
                });
            }
            this.daysConfig.push({
                date: __WEBPACK_IMPORTED_MODULE_7_moment___default()()
                    .add(index, 'days')
                    .toDate(),
                marked: true,
            });
        }
        //Por defecto iniciamos con el booking deshabilitado
        this.disableSubmit = true;
    };
    ProductPage.prototype.handleProductResults = function (results) {
        this.selectedService = null;
        this.product.product = results;
        this.id = results.id;
        console.log('producto', this.product.product);
        this.options.product_id = this.id;
        console.log('Product: ', this.product.product.resources_full);
        this.usedVariationAttributes = this.product.product
            .resources_full.map(function (item) { return item; });
        console.log('usedVariationAttributes:', this.usedVariationAttributes);
        this.loadDataProduct();
        // this.product = results
        // this.usedVariationAttributes = this.product.product.attributes.filter(
        //   function(attribute) {
        //     return attribute.variation == true
        //   },
        // )
    };
    ProductPage.prototype.getProduct = function (id) {
        this.nav.push(ProductPage_1, id);
        console.log(id);
    };
    ProductPage.prototype.addToCart = function () {
        var _this = this;
        // if (!this.values.isLoggedIn) {
        //   this.functions.showAlert(
        //     'Options',
        //     'Please login or create an account to continue',
        //   )
        //   this.nav.push(AccountLogin)
        // }
        //Validamos se el producto contiene resources
        if (this.product.product.resources_full.length > 0 &&
            !this.selectedService) {
            this.functions.showAlert('Options', 'Select a service and booking information');
            return;
        }
        var resource_id = !this.selectedService
            ? null
            : this.selectedService.resource_id
                ? this.selectedService.resource_id
                : null;
        var date = __WEBPACK_IMPORTED_MODULE_7_moment___default()(this.selectedTime);
        var year = date.year();
        var month = date.month();
        var day = date.day();
        this.disableSubmit = true;
        this.BookNow = 'PleaseWait';
        this.service
            .addToCart(resource_id, month, day, year, this.selectedTime, this.product.product)
            .then(function (results) {
            _this.updateCart(results);
        });
        // }
    };
    ProductPage.prototype.setVariations = function () {
        var _this = this;
        this.product.product.attributes.forEach(function (item) {
            if (item.selected) {
                _this.options['variation[attribute_pa_' + item.name + ']'] =
                    item.selected;
            }
        });
        for (var i = 0; i < this.product.product.attributes.length; i++) {
            console.log(this.product.product.attributes[i].name);
            if (this.product.product.attributes[i].variation &&
                this.product.product.attributes[i].selected == undefined) {
                this.functions.showAlert('Options', 'Please Select Product ' +
                    this.product.product.attributes[i].name +
                    ' Option');
                return false;
            }
        }
        return true;
    };
    ProductPage.prototype.onSelect = function ($event, id) {
        var _this = this;
        var date = new Date($event.time);
        console.log({ date: date });
        this.month = date.getUTCMonth() + 1; //months from 1-12
        this.day = date.getUTCDate();
        this.year = date.getUTCFullYear();
        //si cambiamos la fecha reseteamos los horarios
        this.schedule = null;
        this.selectedTime = null;
        this.disableSubmit = true;
        if (this.product.product.resources_full &&
            this.product.product.resources_full.length > 0 &&
            !this.selectedService) {
            this.functions.showAlert('error', this.lan.pleaseSelect);
            return;
        }
        var resource_id = !this.selectedService
            ? null
            : this.selectedService.resource_id
                ? this.selectedService.resource_id
                : null;
        // if (this.values.isLoggedIn) {
        this.service
            .getBlocks(this.day, this.month, this.year, id, resource_id)
            .then(function (results) {
            var res = results;
            var find = '<li class="block"';
            var regex = new RegExp(find, 'g');
            res = res.replace(regex, '<li class="block" ng-click="selectSchedule()" ');
            console.log('schedule', res);
            var match = res.match(/data-value="(.*?)"/gi);
            if (!match) {
                _this.schedule = null;
                return;
            }
            match.forEach(function (el, i, arr) {
                arr[i] = el.replace('data-value=', '').replace(/"/g, '');
            });
            _this.schedule = match;
        });
    };
    ProductPage.prototype.update_blocks = function (a) {
        if (a.success == 'Success') {
            //this.functions.showAlert(a.success, a.message);
            this.values.blockslistId[this.product.product.id] = true;
        }
        else {
            this.functions.showAlert('error', 'error');
        }
    };
    ProductPage.prototype.updateCart = function (a) {
        console.log('a:', a);
        this.disableSubmit = false;
        this.values.count += parseInt(this.quantity);
        this.BookNow = 'BookNow';
        this.getCart();
    };
    ProductPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    ProductPage.prototype.getReviews = function () {
        var _this = this;
        this.service.getReviews(this.id).then(function (results) { return _this.handleReview(results); });
    };
    ProductPage.prototype.handleReview = function (a) {
        this.reviews = a;
        for (var item in this.reviews.product_reviews) {
            this.reviews.product_reviews[item].avatar = Object(__WEBPACK_IMPORTED_MODULE_5__md5__["a" /* md5 */])(this.reviews.product_reviews[item].reviewer_email);
        }
    };
    ProductPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.service.addToWishlist(id).then(function (results) { return _this.update(results); });
        }
        else {
            this.functions.showAlert('Warning', 'You must login to add product to wishlist');
        }
    };
    ProductPage.prototype.update = function (a) {
        if (a.success == 'Success') {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[this.product.product.id] = true;
        }
        else {
            this.functions.showAlert('error', 'error');
        }
    };
    ProductPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductPage.prototype.updateWish = function (results, id) {
        if (results.status == 'success') {
            this.values.wishlistId[id] = false;
        }
    };
    ProductPage.prototype.chooseVariationOne = function () {
        this.chooseVariation(this.optionss);
    };
    ProductPage.prototype.chooseVariation = function (option) {
        var _this = this;
        console.log(option);
        console.log(this.selectedService);
        if (this.selectedService) {
            this.selectedService = null;
            this.product.product.price = this.product.product.minPrice;
        }
        this.product.product.resources_full.forEach(function (item) {
            if (item.resource_id == option.resource_id) {
                _this.selectedService = option;
                _this.product.product.price = _this.selectedService.price;
                _this.disableSubmit =
                    (_this.product.product.resources_full.length > 0 &&
                        !_this.selectedService) ||
                        !_this.selectedTime;
            }
        });
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
    };
    ProductPage.prototype.selectTime = function (time) {
        this.selectedTime = time;
        this.disableSubmit =
            (this.product.product.resources_full.length > 0 &&
                !this.selectedService) ||
                !this.selectedTime;
    };
    ProductPage.prototype.getTime = function (item) {
        return __WEBPACK_IMPORTED_MODULE_7_moment___default()(item).format('hh:mm a');
    };
    ProductPage.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get(['Please select a service']).subscribe(function (translations) {
            _this.lan.pleaseSelect = translations['Please select a service'];
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], ProductPage.prototype, "content", void 0);
    ProductPage = ProductPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\product\product.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <ion-title *ngIf="product?.product?.title">\n\n      <span [innerHTML]="product.product.title"></span>\n\n    </ion-title>\n\n    <ion-title *ngIf="product?.product?.name">\n\n      <span [innerHTML]="product.product.name"></span>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button\n\n        ion-button\n\n        icon-only\n\n        light\n\n        class="has-icon icon-only has-badge"\n\n        (click)="getCart()"\n\n      >\n\n        <ion-icon name="md-basket" class="item-icon"></ion-icon>\n\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n\n          {{values.count}}\n\n        </ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="product-page">\n\n\n\n  <!-- <ion-fab bottom right slot="fixed">\n\n    <button ion-fab>\n\n      <ion-icon name="chatboxes"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="left">\n\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.messenger.com/t/thehexchange">\n\n        <ion-icon style="background: #2196f3;" name="custom-facebook"></ion-icon>\n\n      </a>\n\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.instagram.com/thehexchange/">\n\n        <ion-icon style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);" name="custom-instagram"></ion-icon>\n\n      </a>\n\n    </ion-fab-list>\n\n  </ion-fab> -->\n\n\n\n  <ion-spinner *ngIf="!product?.product" name="crescent"></ion-spinner>\n\n  <div *ngIf="product.product" class="product-details">\n\n    <div *ngIf="product.product.images">\n\n      <ion-slides autoplay="500" loop="true" speed="6000" pager="true">\n\n        <ion-slide *ngFor="let item of product.product.images">\n\n          <img\n\n            [style.height.px]="values.dimensions.imageProductViewHeight - 50"\n\n            src="{{item.src}}"\n\n          />\n\n          <!-- <h2 *ngIf="!product.product.in_stock" item-right class="stock" color="danger">{{"OUTOFSTOCK" | translate}}       </h2> -->\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <ion-item class="product-name">\n\n      <ion-label *ngIf="product?.product?.name">\n\n        {{product.product.name}}\n\n      </ion-label>\n\n      <ion-label *ngIf="product?.product?.title">\n\n        {{product.product.title}}\n\n      </ion-label>\n\n      <span item-right *ngIf="product.product.average_rating" class="rating">\n\n        <span *ngIf="product.product.rating_count > 0">\n\n          ({{product.product.rating_count}})\n\n        </span>\n\n        <span\n\n          class="star-icon"\n\n          [ngClass]="{full: product.product.average_rating >= 1, half: product.product.average_rating == 0.5}"\n\n        >\n\n          &#x2605;\n\n        </span>\n\n        <span\n\n          class="star-icon"\n\n          [ngClass]="{full: product.product.average_rating >= 2, half: product.product.average_rating == 1.5}"\n\n        >\n\n          &#x2605;\n\n        </span>\n\n        <span\n\n          class="star-icon"\n\n          [ngClass]="{full: product.product.average_rating >= 3, half: product.product.average_rating == 2.5}"\n\n        >\n\n          &#x2605;\n\n        </span>\n\n        <span\n\n          class="star-icon"\n\n          [ngClass]="{full: product.product.average_rating >= 4, half: product.product.average_rating == 3.5}"\n\n        >\n\n          &#x2605;\n\n        </span>\n\n        <span\n\n          class="star-icon"\n\n          [ngClass]="{full: product.product.average_rating >= 5, half: product.product.average_rating == 4.5}"\n\n        >\n\n          &#x2605;\n\n        </span>\n\n      </span>\n\n    </ion-item>\n\n    <ion-item class="stock-label" no-lines>\n\n      <ion-label class="price-regular" *ngIf="!product.product.sale_price">\n\n        {{1*product.product.price | currency:values.currency:true:\'1.2-2\'}}\n\n      </ion-label>\n\n      <ion-label class="price-special" *ngIf="product.product.sale_price">\n\n        <span>\n\n          {{1*product.product.sale_price |\n\n          currency:values.currency:true:\'1.2-2\'}}\n\n        </span>\n\n        <span class="price-delete">\n\n          <del>\n\n            {{1*product.product.regular_price |\n\n            currency:values.currency:true:\'1.2-2\'}}\n\n          </del>\n\n        </span>\n\n\n\n        <span text-wrap class="price-off-tag">\n\n          {{(product.product.regular_price - product.product.sale_price) /\n\n          product.product.regular_price*100 | number : \'1.0-0\'}}% {{"OFF" |\n\n          translate}}\n\n        </span>\n\n      </ion-label>\n\n\n\n      <h2\n\n        *ngIf="values.wishlistId[product.product.id]"\n\n        item-right\n\n        class="wishlist"\n\n        color="danger"\n\n        (click)="removeFromWishlist(product.product.id)"\n\n      >\n\n        <ion-icon name="md-heart"></ion-icon>\n\n      </h2>\n\n      <h2\n\n        *ngIf="!values.wishlistId[product.product.id]"\n\n        item-right\n\n        class="wishlist"\n\n        color="danger"\n\n        (click)="addToWishlist(product.product.id)"\n\n      >\n\n        <ion-icon name="md-heart-outline"></ion-icon>\n\n      </h2>\n\n    </ion-item>\n\n\n\n    <!--variation product starts-->\n\n     <!-- <div class="variation-block">\n\n      <div *ngIf="usedVariationAttributes" class="variation-product">\n\n        <div class="option-box">\n\n          <button\n\n            class="option-button"\n\n            ion-button\n\n            outline\n\n            color="light"\n\n            *ngFor="let option of usedVariationAttributes"\n\n            (click)="chooseVariation(option)"\n\n            [ngClass]="{\'selected-option\': selectedService && option && option.resource_id == selectedService.resource_id }"\n\n          >\n\n            {{option.name}}\n\n          </button>\n\n        </div>\n\n      </div>\n\n    </div>  -->\n\n\n\n\n\n    <!--Select Service product-->\n\n      <div class="select-services" *ngIf="usedVariationAttributes" class="variation-product">\n\n      <!-- <ion-item class="variation-title">\n\n        <strong>{{"Select Service"| translate}}\n\n        </strong>\n\n      </ion-item> -->\n\n      <ion-item>\n\n        <ion-label>\n\n          {{"Please select a service" | translate}}\n\n        </ion-label>\n\n        <ion-select style="max-width: 80%;"\n\n        [(ngModel)]="optionss" (ngModelChange)="chooseVariationOne()" >\n\n          <div *ngFor="let optionss of usedVariationAttributes ; let i = index">\n\n\n\n               <ion-option\n\n               [ngClass]="{\'selected-option\': selectedService && optionss && optionss.resource_id == selectedService.resource_id }"\n\n              [value]="optionss">\n\n              {{i+1}} - {{optionss.name}}\n\n              </ion-option>\n\n          </div>\n\n        </ion-select>\n\n      </ion-item>\n\n    </div>\n\n\n\n  <!--variation product starts-->\n\n    <!--div *ngIf="product?.product?.variations.length" class="variation-product">\n\n      <ion-item class="variation-title">\n\n        <strong>{{"Options"| translate}}\n\n        </strong>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>\n\n          {{"Variation" | translate}}\n\n        </ion-label>\n\n        <ion-select [(ngModel)]="options[0]" (ngModelChange)="chnageProduct()">\n\n          <div *ngFor="let option of product.product.variations">\n\n            <div *ngIf="option.attributes.length == 1">\n\n              <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option}}">{{option.attributes[0].option | uppercase}} - {{option.price | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-option>\n\n            </div>\n\n            <div *ngIf="option.attributes.length == 2">\n\n              <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option + \':variation[attribute_pa_\'+ option.attributes[1].name +\']:\' + option.attributes[1].option}}">{{option.attributes[0].option | uppercase}} - {{option.attributes[1].option | uppercase}} - {{option.price | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-option>\n\n            </div>\n\n            <div *ngIf="option.attributes.length == 3">\n\n              <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option + \':variation[attribute_pa_\'+ option.attributes[1].name +\']:\' + option.attributes[1].option + \':variation[attribute_pa_\'+ option.attributes[2].name +\']:\' + option.attributes[2].option}}">{{option.attributes[0].option | uppercase}} - {{option.attributes[1].option | uppercase}} - {{option.attributes[2].option | uppercase}} - {{option.price_inc_tax | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-option>\n\n            </div>\n\n          </div>\n\n        </ion-select>\n\n      </ion-item>\n\n    </div-->\n\n\n\n    <!-- <div>\n\n      <button style="width:350px;background-color:white;color:black;" item-right ion-button class="positioButton" *ngIf="product.product.type==\'booking\'">\n\n        <i icon-medium class=" icon-calendar"></i>\n\n        <span *ngIf="dateOfevent" ></span>\n\n         <ion-datetime displayFormat="DD MMM YYYY"  pickerFormat="DD MMM YYYY"  [(ngModel)]="dateOfevent" cancelText ="Cancelar" doneText="Ok"></ion-datetime>\n\n      </button>\n\n    </div>  -->\n\n\n\n    <ion-calendar\n\n      [options]="optionsMulti"\n\n      (onSelect)="onSelect($event,product.product.id)"\n\n      [type]="type"\n\n      [format]="\'MM-DD-YYYY\'"\n\n    ></ion-calendar>\n\n\n\n    <div *ngIf="schedule;else no_schedule">\n\n      <h4 class="container flex text-center full-width">\n\n        {{WhatTime | translate}}\n\n      </h4>\n\n\n\n      <ul class="block-picker flex row">\n\n        <li *ngFor="let item of schedule" class="block">\n\n          <a\n\n            href="#"\n\n            ng-model="item"\n\n            (click)="selectTime(item)"\n\n            [ngClass]="{\'selected\' : selectedTime == item}"\n\n          >\n\n            {{getTime(item)}}\n\n          </a>\n\n        </li>\n\n      </ul>\n\n    </div>\n\n    <ng-template #no_schedule>\n\n      <div class="container flex text-center full-width">\n\n        {{NoBlockAvailable | translate}}\n\n      </div>\n\n    </ng-template>\n\n    <div class="add-to-cart-button">\n\n      <button\n\n        ion-button\n\n        full\n\n        color="button-color"\n\n        text-uppercase\n\n        [disabled]="disableSubmit"\n\n        (click)="addToCart(product.product.id)"\n\n      >\n\n        {{BookNow | translate}}\n\n      </button>\n\n    </div>\n\n    <div *ngIf="product.product.short_description">\n\n      <ion-item no-lines class="item-background">\n\n        {{"ShortDescription" | translate}} :\n\n      </ion-item>\n\n      <ion-item text-wrap no-lines>\n\n        <div [innerHTML]="product.product.short_description"></div>\n\n      </ion-item>\n\n    </div>\n\n    <div *ngIf="product.product.description">\n\n      <ion-item no-lines class="item-background">\n\n        {{"Description" | translate}} :\n\n      </ion-item>\n\n      <ion-item text-wrap no-lines>\n\n        <div [innerHTML]="product.product.description"></div>\n\n      </ion-item>\n\n    </div>\n\n    <div *ngIf="reviews?.product_reviews.length">\n\n      <ion-row class="item-background">\n\n        <ion-col>\n\n          <!--button ion-button  *ngIf="!reviews" color="button-color" button small clear (click)="getReviews()" style="margin-bottom:0px">{{"ShowReviews" | translate}}\n\n          </button-->\n\n          <button\n\n            ion-button\n\n            *ngIf="reviews"\n\n            color="button-color"\n\n            button\n\n            small\n\n            clear\n\n            class="review-title"\n\n          >\n\n            {{"Reviews" | translate}}\n\n          </button>\n\n        </ion-col>\n\n        <ion-col></ion-col>\n\n      </ion-row>\n\n      <div *ngFor="let item of reviews.product_reviews" class="reviews">\n\n        <ion-item no-lines>\n\n          <ion-avatar item-start style="margin:8px">\n\n            <img src="https://www.gravatar.com/avatar/{{item.avatar}}" />\n\n          </ion-avatar>\n\n          <h3 style="margin-bottom:6px;font-size:15px">\n\n            {{item.reviewer_name}}\n\n            <span class="rating review-star">\n\n              <span\n\n                class="star-icon"\n\n                [ngClass]="{full: item.rating >= 1, half: item.rating == 0.5}"\n\n              >\n\n                &#x2605;\n\n              </span>\n\n              <span\n\n                class="star-icon"\n\n                [ngClass]="{full: item.rating >= 2, half: item.rating == 1.5}"\n\n              >\n\n                &#x2605;\n\n              </span>\n\n              <span\n\n                class="star-icon"\n\n                [ngClass]="{full: item.rating >= 3, half: item.rating == 2.5}"\n\n              >\n\n                &#x2605;\n\n              </span>\n\n              <span\n\n                class="star-icon"\n\n                [ngClass]="{full: item.rating >= 4, half: item.rating == 3.5}"\n\n              >\n\n                &#x2605;\n\n              </span>\n\n              <span\n\n                class="star-icon"\n\n                [ngClass]="{full: item.rating >= 5, half: item.rating == 4.5}"\n\n              >\n\n                &#x2605;\n\n              </span>\n\n            </span>\n\n          </h3>\n\n\n\n          <!--h3 style="color:#9e9898">{{item.email}}</h3-->\n\n          <h3 style="color:#9e9898;margin-bottom:4px">\n\n            {{item.created_at | date:\'medium\'}}\n\n          </h3>\n\n        </ion-item>\n\n        <p text-wrap>{{item.review}}</p>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <br />\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], ProductPage);
    return ProductPage;
    var ProductPage_1;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsCondition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsCondition = /** @class */ (function () {
    function TermsCondition(nav) {
        this.nav = nav;
    }
    TermsCondition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\checkout\terms-condition\terms-condition.html"*/'<ion-header>\n\n   <ion-navbar color="header">\n\n      <ion-title>{{"TermsConditions" | translate}}</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="terms-condition">\n\n   <div class="terms">\n\n      \n\n      <p><strong>Acceptable use policy </strong></p>\n\n      <p>HEXchange is committed to making services safe and accessible for everyone. In order to comply with this, we are providing a document, which explains the rules for using HEXchange. Thank you for reading, and for helping us deliver an excellent healthcare experience.</p>\n\n      <p>This Acceptable Use Policy (&ldquo;AUP&rdquo;) is incorporated by reference into HEXchange, Inc.&rsquo;s (&ldquo;HEXchange,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;) <strong>Terms of Use </strong>and governs your use of the Site and Services (as such terms are denied in the Terms of Use). Any capitalized term used but not denied in this AUP shall have the meaning in our Terms of Use. <u>BY USING OR OTHERWISE ACCESSING THE SERVICES, AND/OR BY REGISTERING WITH US, YOU ACKNOWLEDGE AND AGREE THAT YOU HAVE READ THIS AUP, UNDERSTAND ITS TERMS, AND AGREE TO BE LEGALLY BOUND BY ITS TERMS. IF YOU DO NOT AGREE WITH THIS AUP, YOU CANNOT USE THE SERVICES. </u></p>\n\n      <ol>\n\n      <li><strong> Prohibited uses </strong></li>\n\n      </ol>\n\n      <p>You agree not to use the Services in any unlawful, infringing, tortious or harmful manner; in any way that violates another party\'s intellectual property, privacy or other rights; or in any way that otherwise interferes with the operation, use or enjoyment of any service, system or other property.</p>\n\n      <p>Without limiting any of the foregoing, you agree that you shall not (and you agree not to allow any third party to):</p>\n\n      <p>translate, modify, adapt, copy, or reverse engineer any content (as defined in the Terms of Use) or portion of the site, its content or materials and/or the services; remove any copyright, trademark or other proprietary rights notices contained in or on the site and/or the services or in or on any content;</p>\n\n      <p>use any robot, spider, site search/retrieval application, or other automated device, process or means to access, retrieve or index any portion of the Site and/or the Services;<br /> access or retrieve any content or portion of the site and/or the services for purposes of constructing or populating a searchable database of reviews or other content related to the healthcare industry or Healthcare Providers (as defined in the Terms of Use);</p>\n\n      <p>&nbsp;</p>\n\n      <p>reformat or frame any content or portion of the web pages that are part of the site and/or the services;<br /> fraudulently or intentionally misuse the services, including without limitation scheduling an appointment with a Healthcare Provider which you do not intend to keep, or scheduling an appointment for Designated Provider Services (as defined in the Additional Terms)</p>\n\n      <p>&nbsp;</p>\n\n      <p>which you do not intend to pay using the Transaction Processing Services (as defined in the Additional Terms). Create user accounts, book appointments or submit posted information by automated means or under false or fraudulent pretenses;<br /> collect or store personal data about other users in connection with the prohibited activities described in this paragraph; or use any means, including software means, to conduct web scraping of any portion of the site, its content or materials and/or the services.</p>\n\n      <p><strong>NO SPAM.</strong></p>\n\n      <p>You may not use contact information provided by our users or Healthcare Providers, or harvest such information for the purpose of sending, or to facilitate the sending of, unsolicited bulk communications, such as SPAM. You may not allow others to use your account to violate the terms of this section. We may immediately terminate your registration or access to the services and take other legal action if you or anyone using your credentials violates these provisions.</p>\n\n      <ol start="2">\n\n      <li><strong> USER CONTENT </strong></li>\n\n      </ol>\n\n      <p>Pursuant to the <strong>Terms of Use</strong>, you may submit feedback, submit inquiries and to participate in the other interactive and community features of the site (collectively &ldquo;Posted Information&rdquo;). In providing feedback, please give clear, honest information about the Healthcare Provider and your experiences, but do not use <strong>inappropriate language, make gratuitous personal criticisms or comments or provide information that others could use to determine your identity</strong>. When participating in interactive or community aspects of the service, please do not post any information that another user or Healthcare Provider may use to individually identify you, but please do include all relevant information in a concise manner to help us provide you with a helpful response.</p>\n\n      <p><strong>&nbsp;</strong></p>\n\n      <p><strong>We reserve the right to publish your Posted Information as part of the Services and to also remove your Posted Information for any reason.</strong> We are not, however, responsible for any failure or delay in posting or removing Posted Information. Keep in mind that the Posted Information of others is simply opinion and should not be relied on.</p>\n\n      <p>Without limiting the generality of the foregoing:</p>\n\n      <p>You are solely responsible for any Posted Information that you submit, publish or display through the services or transmit to other members and/or other users of the site.<br /> You may not post, distribute, or reproduce in any way any copyrighted material, trademarks, or other proprietary information without obtaining the prior written consent of the owner of such proprietary rights. You may not submit any content or material that infringes, misappropriates or violates the intellectual property, publicity, privacy or other rights of any party.</p>\n\n      <p>You may not provide any Posted Information that falsely expresses or implies that such content or material is sponsored or endorsed by HEXchange.<br /> You may not provide any Posted Information that is unlawful or that promotes or encourages illegal activity.</p>\n\n      <p>You understand and agree that HEXchange may (but is not obligated to) review and delete any Posted Information that in the sole judgment of HEXchange violates the Terms of Use or this AUP, or which might be offensive, illegal, or that might violate the rights of, harm, or threaten the safety of other users or members of the Services and/or other website users.</p>\n\n      <p>You agree that you will only provide Posted Information that you believe to be true. You may not submit Posted Information that:</p>\n\n      <ul>\n\n      <li>is false, deceptive or misleading;</li>\n\n      <li>harasses or advocates harassment of another person;</li>\n\n      <li>involves the transmission of unsolicited mass mailing or "spamming";</li>\n\n      <li>violates, infringes or misappropriates the intellectual property or other rights of any person;</li>\n\n      <li>violates antitrust, competition, or consumer protection laws;</li>\n\n      <li>is threatening, abusive, obscene, defamatory or libelous; or</li>\n\n      <li>is pornographic or sexually explicit in nature.</li>\n\n      </ul>\n\n      <p>The foregoing is a partial list of the kind of content and communications that are illegal or prohibited on/through the site. HEXchange reserves the right to investigate and take appropriate legal action in accordance with the <strong>Terms of Use</strong>.</p>\n\n      <ol start="3">\n\n      <li><strong> COPYRIGHT DISPUTE POLICY </strong></li>\n\n      </ol>\n\n      <p>HEXchange adopts the general policy toward copyright infringement in accordance with the Digital Millennium Copyright Act (DMCA) (<strong>http://www.lcweb.loc.gov/copyright/legislation/dmca.pdf</strong>). The address of HEXchange&rsquo;s Designated Agent to receive notification of claimed infringement ("Designated Agent") is provided at the bottom of this section.</p>\n\n      <p><strong>HEXchange Policy. </strong></p>\n\n      <p>Our policy is to (a) block access to or remove material that it believes in good faith to be copyrighted material that has been illegally copied and distributed by any of our advertisers, affiliates, content providers, members or other users; and (b) remove and discontinue Service to repeat offenders.</p>\n\n      <p><strong>Procedure for Reporting Copyright Infringements.</strong></p>\n\n      <p>If you believe that material or content residing on or accessible through the site or the services infringes a copyright, please send a notice of copyright infringement containing the following information to the Designated Agent listed below ("Proper Bona Fide Infringement Notification"):</p>\n\n      <p>A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright that has been allegedly infringed;<br /> Identification of works or materials being infringed;<br /> Identification of the material that is claimed to be infringing including information regarding the location of the infringing materials that the copyright owner seeks to have removed, with sufficient detail so that HEXchange is capable of finding and verifying its existence;</p>\n\n      <p>Contact information about the notifier including address, telephone number and, if available, email address;<br /> A statement that the notifier has a good faith belief that the material is not authorized by the copyright owner, its agent, or the law; and</p>\n\n      <p>A statement made under penalty of perjury that the information provided is accurate and the notifying party is authorized to make the complaint on behalf of the copyright owner.</p>\n\n      <p><strong>Upon Receipt of a Bona Fide Infringement Notification. </strong></p>\n\n      <p>Once a Proper Bona Fide Infringement Notification is received by the Designated Agent, it is HEXchange&rsquo;s policy:</p>\n\n      <p>to remove or disable access to the infringing material;<br /> to notify the content provider, member or user that it has removed or disabled access to the material; and<br /> for repeat offenders, to terminate such content to provider&rsquo;s, member\'s or user\'s access to the Service.</p>\n\n      <p><strong>Procedure to Supply a Counter-Notice to the Designated Agent. </strong></p>\n\n      <p>If the content provider, member or user believes that the material that was removed or to which access was disabled is either not infringing, or the content provider, member or user believes that it has the right to post and use such material from the copyright owner, the copyright owner\'s agent, or pursuant to the law, the content provider, member or user must send a counter-notice containing the following information to the Designated Agent listed below:</p>\n\n      <p>A physical or electronic signature of the content provider, member or user;</p>\n\n      <p>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or disabled;<br /> A statement that the content provider, member or user has a good faith belief that the material was removed or disabled as a result of mistake or a misidentification of the material; and</p>\n\n      <p>The content providers, members or user\'s name, address, telephone number, and, if available, email address and a statement that such person or entity consents to the jurisdiction of the Federal Court for the judicial district in which the content providers, members or user\'s address is located, or if the content providers, members or user\'s address is located outside the United States, for any judicial district in which HEXchange is located, and that such person or entity will accept service of process from the person who provided notification of the alleged infringement.</p>\n\n      <p><strong>Removal. </strong></p>\n\n      <p>If a counter-notice is received by the Designated Agent, HEXchange may send a copy of the counter-notice to the original complaining party informing that person that it may replace the removed material or cease disabling it in 10 business days. Unless the copyright owner les an action seeking a court order against the content provider, member or user, the removed material may be replaced or access to it restored in 10 to 14 business days or more after receipt of the counter-notice, at HEXchange&rsquo;s discretion.</p>\n\n      <p>Address for Designated Agent. Please contact HEXchange&rsquo;s Designated Agent to Receive Notification of Claimed Infringement at the following address:</p>\n\n      <p>Copyright Agent, HEXchange, 801 Brickell Ave, Suite 900, Miami, FL 33131</p>\n\n      <p>Phone: (305)913-2306<br /> Email to: <strong>info@</strong> <strong>HEXchange.com </strong></p>\n\n      <ol start="4">\n\n      <li><strong> UPDATES AND CHANGES TO THE ACCEPTABLE USE POLICY </strong></li>\n\n      </ol>\n\n      <p>The effective date of this Acceptable Use Policy is set forth at the top of this webpage. We will notify you of any material change by posting notice on this webpage. Your continued use of the Services after the effective date constitutes your acceptance of the amended Acceptable Use Policy. We encourage you to periodically review this page for the latest information on acceptable uses of the Services. The amended Acceptable Use Policy supersedes all previous versions. IF YOU DO NOT AGREE TO FUTURE CHANGES TO THIS ACCEPTABLE USE POLICY, YOU MUST STOP USING THE SERVICES AFTER THE EFFECTIVE DATE OF SUCH CHANGES.</p>\n\n      <p>&nbsp;</p>\n\n<br>\n\n<br>\n\n<br>\n\n\n\n<p><strong>Hexchange Privacy Authorization </strong></p>\n\n<p>HEXchange offers services, such as helping you to understand and learn about nearby healthcare providers, booking appointments with the healthcare provider(s) of your choice (each, &ldquo;Your Healthcare Provider&rdquo;) and managing and forwarding your health history forms and other health-related information to share with Your Healthcare Providers (&ldquo;HEXchange Services&rdquo;). As part of providing the HEXchange Services, HEXchange may collect, use, share, and exchange your health history forms and other health-related information with Your Healthcare Providers. Under a federal law called the Health Insurance Portability and Accountability Act (&ldquo;HIPAA&rdquo;), some of this health and health-related information may be considered &ldquo;protected health information&rdquo; or &ldquo;PHI&rdquo; if such information is received from or on behalf of Your Healthcare Providers.</p>\n\n<p><strong>Safeguards for PHI </strong></p>\n\n<p>HIPAA protects the privacy and security of your PHI by limiting the uses and disclosures of PHI by most healthcare providers and by health plans (called &ldquo;Covered Entities&rdquo;) as well as companies, like HEXchange, that provide certain types of assistance to Covered Entities (called &ldquo;Business Associates&rdquo;). Under certain circumstances described in HIPAA, an individual needs to sign an Authorization form before a Covered Entity, like Your Healthcare Provider(s), can disclose protected health information to a third party.</p>\n\n<p><strong>Non-Protected Health Information </strong></p>\n\n<p>As a condition of creating your HEXchange account, you are required to read and agree to HEXchange&rsquo;s <strong>Privacy Policy</strong>. HEXchange&rsquo;s Privacy Policy explains how HEXchange processes and shares information received from you that is not covered by HIPAA (&ldquo;Non-PHI&rdquo;).</p>\n\n<p><strong>&nbsp;</strong></p>\n\n<p><strong>Your PHI Authorization </strong></p>\n\n<p>The purpose of this HEXchange Authorization (&ldquo;Authorization&rdquo;) is to request your written permission to allow HEXchange to use and disclose your PHI in the same way as we use and disclose your Non-PHI. If HEXchange is a Business Associate of Your Healthcare Providers, HEXchange needs your Authorization to be able to use and disclose your PHI in the same way it can currently use and disclose your Non-PHI when HEXchange is not working on behalf of Your Healthcare Providers, but is instead working on its own behalf. Therefore, when HEXchange relies on this Authorization, and uses and discloses PHI as described in this Authorization, it is not working as a Business Associate and the HIPAA requirements that apply to Business Associates will not apply to such uses and disclosures.</p>\n\n<p>If you e-sign this Authorization, you give your permission to HEXchange to retain your PHI and to use and/or disclose your PHI in the same way that you have agreed that your Non-PHI can be used and disclosed.</p>\n\n<p>Specifically, you agree that HEXchange can use your PHI to:</p>\n\n<ul>\n\n<li>Enable and customize your use of the HEXchange Services</li>\n\n<li>Provide you alerts or other HEXchange Services regarding future appointments</li>\n\n<li>Notify you regarding providers we think you may be interested in learning more about</li>\n\n<li>Share information with you regarding services, products or resources about which we think you may be interested in learning more;<br /> provide you with updates and information about the HEXchange Services</li>\n\n<li>Market to you about HEXchange and third-party products and services;</li>\n\n<li>Conduct analysis for HEXchange&rsquo;s business purposes</li>\n\n<li>Support development of the HEXchange Services and</li>\n\n<li>Create de-identified information and then use and disclose this information in any way permitted by law, including to third parties in connection with their commercial and marketing eorts.</li>\n\n</ul>\n\n<p>You also agree that HEXchange can disclose your PHI to:</p>\n\n<ul>\n\n<li>Third parties assisting HEXchange with any of the uses described above</li>\n\n<li>Your Healthcare Providers to enable them to refer you to, and make appointments with, other providers on your behalf, or to perform an analysis on potential health issues or treatments, provided that you choose to use the applicable HEXchange Service</li>\n\n<li>A third party as part of a potential merger, sale or acquisition of HEXchange</li>\n\n<li>Our business partners who assist us by performing core services (such as hosting, billing, fulfillment, or data storage and security) related to the operation or provision of our services, even when HEXchange is no longer working on behalf of Your Healthcare Providers</li>\n\n<li>A provider of medical services, in the event of an emergency; and</li>\n\n<li>Organizations that collect, aggregate and organize your information so they can make it more easily accessible to your providers.</li>\n\n</ul>\n\n<p><strong>&nbsp;</strong></p>\n\n<p><strong>&nbsp;</strong></p>\n\n<p><strong>&nbsp;</strong></p>\n\n<p><strong>Redisclosure </strong></p>\n\n<p>If HEXchange discloses your PHI, HEXchange will require that the person or entity receiving your PHI agrees to only use and disclose your PHI to carry out its specific business obligations to HEXchange or for the permitted purpose of the disclosure (as described above). HEXchange cannot, however, guarantee that any such person or entity to which HEXchange discloses your PHI or other information will not re-disclose it in ways that you or we did not intend or permit.</p>\n\n<p><strong>Expiration and Revocation of Authorization </strong></p>\n\n<p>Your Authorization remains in effect until you provide written notice of revocation to HEXchange.</p>\n\n<p>YOU CAN CHANGE YOUR MIND AND REVOKE THIS AUTHORIZATION AT ANY TIME AND FOR ANY (OR NO) REASON.</p>\n\n<p>If you wish to revoke this Authorization, you must notify HEXchange by submitting a revocation through your account settings page. Your decision not to execute this Authorization or to revoke it at any time will not affect your ability to use certain of the HEXchange Services. A Revocation of Authorization is effective after you submit it to HEXchange, but it does not have any effect on HEXchange&rsquo;s prior actions taken in reliance on the Authorization before revoked.</p>\n\n<p>Once HEXchange receives your Revocation of Authorization, HEXchange can only use and disclose your PHI as permitted in HEXchange&rsquo;s agreements with Your Healthcare Provider(s). Your Revocation of Authorization does not affect HEXchange&rsquo;s use of your Non- PHI.</p>\n\n<p>We will make available to Your Healthcare Provider(s), current and past, your agreement to or revocation of this Authorization.</p>\n\n<p>&nbsp;</p>\n\n\n\n      \n\n   </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\checkout\terms-condition\terms-condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], TermsCondition);
    return TermsCondition;
}());

//# sourceMappingURL=terms-condition.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotten; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountForgotten = /** @class */ (function () {
    function AccountForgotten(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.reset = "reset";
        this.loadForgotten = null;
        this.forgottenData = [];
        this.service.passwordResetNonce()
            .then(function (results) { return _this.handleNonce(results); });
    }
    AccountForgotten.prototype.forgotten = function (email) {
        var _this = this;
        if (this.validateForm()) {
            this.reset = "resetting...";
            this.disableSubmit = true;
            this.service.passwordreset(email, this.nonce, this.url)
                .then(function (results) { return _this.handleResult(results, email); });
        }
    };
    AccountForgotten.prototype.validateForm = function () {
        if (this.forgottenData.email == undefined || this.forgottenData.email == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountForgotten.prototype.handleNonce = function (results) {
        this.nonce = results.nonce;
        this.url = results.url;
    };
    AccountForgotten.prototype.handleResult = function (results, email) {
        this.reset = "reset";
        this.disableSubmit = false;
        this.functions.showAlert("SUCCESS", "An email with password reset link has been sent to your mail address " + email);
        this.nav.pop();
    };
    AccountForgotten = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\forgotten\forgotten.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <ion-title>{{"ResetPassword" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="forgotten">\n\n  <div class="margin">\n\n    <form #f="ngForm">\n\n      <ion-item>\n\n        <ion-label floating>{{"Enteremailaddress"| translate}}\n\n        </ion-label>\n\n        <ion-input required type="email" [(ngModel)]="forgottenData.email" name="email">\n\n        </ion-input>\n\n      </ion-item>\n\n      <h2>{{"Forgot PasswordReset" | translate}}\n\n      </h2>\n\n      <button ion-button block color="button-color" class="button button-block button-default" [disabled]="disableSubmit" (click)="forgotten(forgottenData.email)">{{reset | translate}}\n\n      </button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\forgotten\forgotten.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], AccountForgotten);
    return AccountForgotten;
}());

//# sourceMappingURL=forgotten.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Post = /** @class */ (function () {
    function Post(service, values, params) {
        var _this = this;
        this.service = service;
        this.values = values;
        this.id = params.data.data;
        this.title = params.data.title;
        this.service.getPage(this.id)
            .then(function (results) {
            return _this.post = results;
        });
    }
    Post = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\post\post.html"*/'<ion-header class="settings-header">\n\n    <ion-navbar color="header"> \n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <!-- <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title> -->\n\n        <ion-title >\n\n            <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="post" padding>\n\n    <div class="sub-header">\n\n        <h1 *ngIf="title">{{ title }}</h1>\n\n    </div>\n\n    <ion-spinner *ngIf="!post" name="crescent"> </ion-spinner>\n\n    <ion-card style="margin-top: 100px;">\n\n        <!-- <ion-card-header>\n\n            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n\n            <ion-card-title>Card Title</ion-card-title>\n\n        </ion-card-header> -->\n\n        <ion-card-content *ngIf="post"> \n\n          <div [innerHTML]="post"></div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n   \n\n</ion-content>'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\post\post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], Post);
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_socket_io__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_product_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orders_detail_orders_detail__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_modal__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = /** @class */ (function () {
    function OrdersPage(socket, navCtrl, navParams, values, productService, modalCtrl) {
        this.socket = socket;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.values = values;
        this.productService = productService;
        this.modalCtrl = modalCtrl;
        this.Lista = [];
        this.socket.connect();
        this.dataCount = [];
        // this.countDown(10,0)
    }
    OrdersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            _this.data = data;
            var duplicado = false;
            duplicado = _this.validateUnique(data);
            if (duplicado == false) {
                _this.Lista.push(data);
                // this.Lista[this.count] = data
                // this.count++;
            }
        });
        this.downCount();
    };
    OrdersPage.prototype.validateUnique = function (myObject) {
        return !!this.Lista.find(function (i) { return i.id === myObject.id; });
    };
    OrdersPage.prototype.changestate = function (order, state, onesignal) {
        var message = "";
        var title = "";
        this.productService.changestate({
            "order": order,
            "state": state
        });
        if (state === "solicitado") {
            title = "Solicitud Aceptada";
            message = "Tu proveedor de servicio te informa que tu servicio ha sido aceptado";
        }
        else if (state === "aceptado") {
            title = "Tu homer ha llegado";
            message = "Tu proveedor de servicio te informa que ha llegado al destino";
        }
        else if (state === "he llegado") {
            title = "El servicio ha iniciado";
            message = "Tu proveedor de servicio te informa que ha iniciado el servicio";
        }
        else if (state === "iniciado") {
            title = "Servicio iniciado";
            message = "Tu proveedor de servicio te informa que tu servicio ha sido finalizado";
        }
        this.productService.sendNotification({
            "title": title,
            "content": message,
            "onesignalid": onesignal
        });
        console.log(onesignal);
    };
    OrdersPage.prototype.changestatecancel = function (order, onesignal) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__modal_modal__["a" /* ModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data.result && data.message != '') {
                _this.productService.changestate({
                    "order": order,
                    "state": "cancelado",
                    "isCancel": data.message
                });
                _this.productService.sendNotification({
                    "title": "Servicio cancelado",
                    "content": "El homer ha cancelado el servicio el motivo " + data.message,
                    "onesignalid": onesignal
                });
            }
        });
    };
    OrdersPage.prototype.ionViewDidLoad = function () {
    };
    OrdersPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    OrdersPage.prototype.ngOnInit = function () {
    };
    OrdersPage.prototype.openOrdersDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__orders_detail_orders_detail__["a" /* OrdersDetailPage */], { data: this.data });
    };
    OrdersPage.prototype.getData = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"](function (observer) {
            _this.socket.emit('getordersbyproviders', { id: _this.values.customerId });
            _this.socket.fromEvent('getordersbyproviders').subscribe(function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    OrdersPage.prototype.downCount = function () {
        var _this = this;
        this.socket.emit('getCountDown', { id: '' });
        this.socket.fromEvent('getCountDown').subscribe(function (data) {
            _this.counts = data;
            console.log(_this.counts);
        });
    };
    OrdersPage.prototype.openchat = function (order) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__chat_chat__["a" /* ChatPage */], { order: order });
    };
    OrdersPage.prototype.countDown = function (minutes, seconds) {
        var element, endTime, hours, mins, msLeft, time;
        function twoDigits(n) {
            return (n <= 9 ? "0" + n : n);
        }
        function updateTimer() {
            msLeft = endTime - (+new Date);
            if (msLeft < 1000) {
                console.log("Time is up!");
            }
            else {
                time = new Date(msLeft);
                hours = time.getUTCHours();
                mins = time.getUTCMinutes();
                console.log((hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds()));
                // this.count = ( hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds())
                setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
            }
        }
        endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
        updateTimer();
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orders',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\orders\orders.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="settings-header">\n  <ion-navbar color="header">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <!-- <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title> -->\n      <ion-title >\n          <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="sub-header">\n    <h1>Proximos Servicios</h1>\n  </div>\n  <div class="card" *ngFor="let orders of data">\n    <div class="card-body">\n      <div class="row-h2">\n        <h2>\n          <b>Booking # {{orders.id}}</b>\n        </h2>\n        <h2>\n         <b> {{orders.date | date: \'fullDate\' }}, {{orders.hour}} </b>\n        </h2>\n      </div>\n      <h2 style="text-align: right;">\n        <b style="text-transform: uppercase;">{{orders.status}}</b>\n      </h2>\n      <h2 style="text-align: center; font-size: 20px;">\n        <b>{{orders.productName}}</b>\n      </h2>\n      <h2 style="text-align: left;">\n        <ul>\n          <li><b>{{orders.location}}</b></li>\n        </ul>\n      </h2>\n      <h2 style="text-align: center;" *ngIf="orders.isCancel != \'\' ">\n        <b>{{orders.isCancel}}</b>\n      </h2>\n\n\n        <!-- <h2 style="text-align: center;" *ngIf="counts.order == orders.id">\n          <b>{{counts.count | async}}</b>\n        </h2> -->\n\n\n      <div class="row-button">\n        <button (click)="changestate(orders.id,orders.status, orders.onesignal)"  [attr.disabled]= "orders.status === \'SOLICITADO\' ? true:null" [attr.hidden]= "orders.status === \'finalizado\' ? true:null" text-center ion-button icon-left clear   icon-only class="has-icon icon-only" small text-uppercase >\n          <span *ngIf="orders.status ===  \'solicitado\'">Aceptar</span>\n          <span *ngIf="orders.status ===  \'aceptado\'">He llegado</span>\n          <span *ngIf="orders.status ===  \'he llegado\'">Iniciar</span>\n          <span *ngIf="orders.status ===  \'iniciado\'">Finalizar</span>\n        </button>\n        <button (click)="changestatecancel(orders.id, orders.onesignal)" [attr.hidden]= "orders.status === \'finalizado\' ? true:null" text-center ion-button icon-left clear color="button-color" icon-only class="has-icon icon-only" small text-uppercase >\n          Cancelar\n        </button>\n      </div>\n      <button (click)="openchat(orders.id)"  text-center ion-button icon-left clear color="button-color" icon-only class="has-icon icon-only" small text-uppercase >\n        Chatear\n      </button>\n      <button (click)="openOrdersDetail()"  text-center ion-button icon-left clear color="button-color" icon-only class="has-icon icon-only" small text-uppercase >\n        Ver detalles\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ngx_socket_io__["a" /* Socket */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation_ngx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersDetailPage = /** @class */ (function () {
    function OrdersDetailPage(navCtrl, navParams, params, values, nativeGeocoder, platform, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.values = values;
        this.nativeGeocoder = nativeGeocoder;
        this.platform = platform;
        this.geolocation = geolocation;
        this.miLatitude = 0;
        this.miLongitude = 0;
        this.data = [];
        var orders = params.data;
        this.lat = Number(orders.data[0].lat);
        this.lng = Number(orders.data[0].lng);
        this.data.push(orders.data[0]);
        this.platform.ready().then(function () {
            // const subscription = this.geolocation.watchPosition()
            //   .filter((p) => p.coords !== undefined) //Filter Out Errors
            //   .subscribe(position => {
            //     this.miLatitude = position.coords.latitude;
            //     this.miLongitude = position.coords.longitude;
            //     console.log("miLocation=" + position.coords.latitude + ' ' + position.coords.longitude);
            //   });
            var subscription = _this.geolocation.watchPosition().subscribe(function (position) {
                if (position.coords != undefined) {
                    var geoposition = position;
                    _this.miLatitude = geoposition.coords.latitude;
                    _this.miLongitude = geoposition.coords.longitude;
                    console.log('Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);
                }
                else {
                    var positionError = position;
                    console.log('Error ' + positionError.code + ': ' + positionError.message);
                }
            });
        });
    }
    OrdersDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersDetailPage');
    };
    OrdersDetailPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        mapboxgl.accessToken = 'pk.eyJ1Ijoicm9sYXM5MSIsImEiOiJja2l5YjZkbTUwdDlyMnltNmZmdmhuNGxsIn0.zShdGlc5rvqi1nxslqD7WA';
        var map = new mapboxgl.Map({
            style: 'mapbox://styles/mapbox/light-v10',
            center: [this.lng, this.lat],
            zoom: 15.5,
            pitch: 45,
            bearing: -17.6,
            container: 'map',
            antialias: true
        });
        map.on('load', function () {
            map.resize();
            new mapboxgl.Marker()
                .setLngLat([_this.lng, _this.lat])
                .addTo(map);
            map.addSource('route', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            [_this.miLongitude, _this.miLatitude],
                            [_this.lng, _this.lat]
                        ]
                    }
                }
            });
            map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#ff0000',
                    'line-width': 8
                }
            });
            // Insert the layer beneath any symbol layer.
            var layers = map.getStyle().layers;
            var labelLayerId;
            for (var i = 0; i < layers.length; i++) {
                if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                    labelLayerId = layers[i].id;
                    break;
                }
            }
            map.addLayer({
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',
                    // use an 'interpolate' expression to add a smooth transition effect to the
                    // buildings as the user zooms in
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            }, labelLayerId);
        });
    };
    OrdersDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orders-detail',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\orders-detail\orders-detail.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="settings-header">\n  <ion-navbar color="header">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <!-- <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title> -->\n      <ion-title >\n          <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="sub-header">\n    <h1>Detalles del servicio</h1>\n  </div>\n  <div id=\'map\' style=\'width: 100%; height: 300px;\'></div>\n  <div class="card" *ngFor="let orders of data">\n    <div class="card-body">\n      <div class="row-h2">\n        <h2>\n          <b>Booking # {{orders.id}}</b>\n        </h2>\n        <h2>\n         <b> {{orders.date | date: \'fullDate\' }}, {{orders.hour}} </b>\n        </h2>\n      </div>\n      <h2 style="text-align: right;">\n        <b>{{orders.status}}</b>\n      </h2>\n      <h2 style="text-align: center; font-size: 20px;">\n        <b>{{orders.productName}}</b>\n      </h2>\n      <h2 style="text-align: left;">\n        <ul>\n          <li><b>{{orders.location}}</b></li>\n        </ul>\n      </h2>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\orders-detail\orders-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation_ngx__["a" /* Geolocation */]])
    ], OrdersDetailPage);
    return OrdersDetailPage;
}());

//# sourceMappingURL=orders-detail.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.message = '';
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.acept = function () {
        this.viewCtrl.dismiss({ result: true, message: this.message });
    };
    ModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss({ result: false, message: '' });
    };
    ModalPage.prototype.selectMessage = function (event) {
        this.message = event;
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\modal\modal.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="settings-header">\n  <ion-navbar color="header">\n      <ion-buttons left>\n        <button ion-button icon-left (click)="close()" >\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n      <!-- <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title> -->\n      <ion-title >\n        cancelar servicio\n          <!-- <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" /> -->\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content style="width: 100%;">\n  <div class="sub-header">\n    <h1>Motivo de la cancelación</h1>\n  </div>\n  <ion-list radio-group (ionChange)="selectMessage($event)" style="margin: 100px auto 10px ; width: 90%;">\n      <ion-list-header>\n          <ion-label>\n            Seleccione por favor una de las opciones\n          </ion-label>\n      </ion-list-header>\n\n      <ion-item  style="margin-top:10px; border-radius: 5px;" class="card2">\n        <ion-label  class="heading text-center" style="font-size: 18px; font-weight: 900;">\n          El cliente quiere que realice otros servicios\n        </ion-label>\n        <ion-radio item-center color="dark" value="El cliente quiere que realice otros servicios"></ion-radio>\n      </ion-item>\n\n      <ion-item  style="margin-top:10px; border-radius: 5px;" class="card2">\n        <ion-label  class="heading text-center" style="font-size: 18px; font-weight: 900;">\n          El cliente no me proporciona los productos de limpieza\n        </ion-label>\n        <ion-radio item-center color="dark" value="El cliente no me proporciona los productos de limpieza"></ion-radio>\n      </ion-item>\n\n      <ion-item  style="margin-top:10px; border-radius: 5px;" class="card2">\n        <ion-label  class="heading text-center" style="font-size: 18px; font-weight: 900;">\n          Otros\n        </ion-label>\n        <ion-radio item-center color="dark" value="Otros"></ion-radio>\n      </ion-item>\n  </ion-list>\n  <div style="width:100%;">\n    <div style="margin:0 auto; width: 50%; display:flex;">\n      <button ion-button style="font-family: \'Courier New\', Courier, monospace;" (click)="acept()">Aceptar</button>\n      <button ion-button style="font-family: \'Courier New\', Courier, monospace;" (click)="cancel()">Cancelar</button>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_endorders__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EndOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EndOrdersPage = /** @class */ (function () {
    function EndOrdersPage(values, navCtrl, navParams, endOrdersServices) {
        this.values = values;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.endOrdersServices = endOrdersServices;
        this.orders = [];
    }
    EndOrdersPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.endOrdersServices.getEndOrders({ provider: this.values.customerId }).then(function (response) {
            for (var _i = 0, _a = response.data; _i < _a.length; _i++) {
                var orders = _a[_i];
                _this.orders.push(orders);
            }
        });
    };
    EndOrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EndOrdersPage');
    };
    EndOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-end-orders',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\end-orders\end-orders.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="settings-header">\n  <ion-navbar color="header">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <!-- <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title> -->\n      <ion-title >\n          <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="sub-header">\n    <h1>Servicios Pasados</h1>\n  </div>\n  <div class="card" *ngFor="let order of orders">\n    <div class="card-body">\n      <div class="row-h2">\n        <h2>\n          <b>Booking # {{order.id}}</b>\n        </h2>\n        <h2>\n         <b> {{order.date | date: \'fullDate\' }}, {{order.hour}} </b>\n        </h2>\n      </div>\n      <h2 style="text-align: right;">\n        <b>{{order.status}}</b>\n      </h2>\n      <h2 style="text-align: center; font-size: 20px;">\n        <b>{{order.productName}}</b>\n      </h2>\n      <h2 style="text-align: left;">\n        <ul>\n          <li><b>{{order.location}}</b></li>\n        </ul>\n      </h2>\n      <!-- <button  text-center ion-button icon-left clear color="button-color" icon-only class="has-icon icon-only" small text-uppercase >\n        Ver detalles\n      </button> -->\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\end-orders\end-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_endorders__["a" /* EndOrdesService */]])
    ], EndOrdersPage);
    return EndOrdersPage;
}());

//# sourceMappingURL=end-orders.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndOrdesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EndOrdesService = /** @class */ (function () {
    function EndOrdesService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
        this.header = new Headers();
    }
    EndOrdesService.prototype.getEndOrders = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.header.append('Content-Type', 'application/json');
            _this.http
                .post(_this.config.urlApi + '/orders/endorders', {
                "provider": data.provider,
            }, _this.header)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    EndOrdesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]])
    ], EndOrdesService);
    return EndOrdesService;
}());

//# sourceMappingURL=endorders.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Address = /** @class */ (function () {
    function Address(nav, service, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.service.getAddress()
            .then(function (results) { return _this.addresses = results; });
    }
    Address.prototype.editAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__["a" /* EditAddressForm */], this.addresses.customer);
    };
    Address = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\address\address.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title text-wrap text-center>{{"AddressBook" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="account-address">\n\n<ion-spinner *ngIf="!addresses" name="crescent" style="display:block; margin-left: auto; margin-right:auto; margin-top: 5px; margin-bottom:5px" ></ion-spinner>\n\n   <div *ngIf="addresses" class="address">\n\n      <div *ngIf="addresses.customer.billing_address">\n\n      <ion-card>\n\n        <ion-card-header style="background-color: #f9f9f9">\n\n          {{"BillingAddress" | translate}}\n\n        </ion-card-header>\n\n        <ion-card-content style="margin-top: 10px">\n\n          {{addresses.customer.billing_address.first_name}} {{addresses.customer.billing_address.last_name}}<br *ngIf="addresses.customer.billing_address.first_name">\n\n          {{addresses.customer.billing_address.address_1}}<br *ngIf="addresses.customer.billing_address.address_1">\n\n          {{addresses.customer.billing_address.address_2}}<br *ngIf="addresses.customer.billing_address.address_2">\n\n          {{addresses.customer.billing_address.city}} {{addresses.customer.billing_address.state}}<br *ngIf="addresses.customer.billing_address.city">\n\n          {{addresses.customer.billing_address.phone}}<br *ngIf="addresses.customer.billing_address.phone">\n\n          {{addresses.customer.billing_address.email}}<br *ngIf="addresses.customer.billing_address.email">\n\n          {{addresses.customer.billing_address.country}} {{addresses.customer.billing_address.postcode}}<br *ngIf="addresses.customer.billing_address.postcode">\n\n        </ion-card-content>\n\n      </ion-card>\n\n      </div>\n\n      <div *ngIf="addresses.customer.shipping_address">\n\n      <ion-card>\n\n        <ion-card-header style="background-color: #f9f9f9">\n\n          {{"ShippingAddress" | translate}}\n\n        </ion-card-header>\n\n        <ion-card-content style="margin-top: 10px">\n\n          {{addresses.customer.shipping_address.first_name}} {{addresses.customer.shipping_address.last_name}}<br *ngIf="addresses.customer.shipping_address.first_name">\n\n          {{addresses.customer.shipping_address.address_1}}<br *ngIf="addresses.customer.shipping_address.address_1">\n\n          {{addresses.customer.shipping_address.address_2}}<br *ngIf="addresses.customer.shipping_address.address_2">\n\n          {{addresses.customer.shipping_address.city}} {{addresses.customer.shipping_address.state}}<br *ngIf="addresses.customer.shipping_address.city">\n\n          {{addresses.customer.shipping_address.phone}}<br *ngIf="addresses.customer.shipping_address.phone">\n\n          {{addresses.customer.shipping_address.email}}<br *ngIf="addresses.customer.shipping_address.email">\n\n          {{addresses.customer.shipping_address.country}} {{addresses.customer.shipping_address.postcode}}<br>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      </div>\n\n      <div class="margin">\n\n         <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase (click)="editAddress()">{{"EditAddress" | translate}}</button>\n\n      </div>\n\n   </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\address\address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], Address);
    return Address;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_order_details__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Orders = /** @class */ (function () {
    function Orders(nav, service, values, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.page = 1;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.filter['filter[customer_id]'] = this.values.customerId.toString();
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    }
    Orders.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Orders.prototype.handleMore = function (results, infiniteScroll) {
        this.filter.page += 1;
        if (results.orders != undefined) {
            for (var i = 0; i < results.orders.length; i++) {
                this.orders.orders.push(results.orders[i]);
            }
            ;
        }
        if (results.orders.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    Orders.prototype.getOrderDetails = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__order_details_order_details__["a" /* OrderDetails */], id);
    };
    Orders.prototype.cancelOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "order": {
                "status": "cancelled"
            }
        }, id)
            .then(function (results) { return _this.handleCancelOrder(results); });
    };
    Orders.prototype.handleCancelOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been cancelled");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    Orders.prototype.reOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "order": {
                "status": "pending"
            }
        }, id)
            .then(function (results) { return _this.handleReOrder(results); });
    };
    Orders.prototype.handleReOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been placed successfully");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    Orders = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\orders\orders.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title  text-center>{{"LastOrders" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="account-order">\n\n  <ion-spinner *ngIf="!orders" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orders">\n\n\n\n    <div class="no-orders">\n\n    <h4 *ngIf="orders.orders.length == 0" text-center no-lines>\n\n      <button ion-button full clear text-uppercase color="header">{{"Therearenoorders." | translate}}\n\n      </button>\n\n    </h4>\n\n    </div>\n\n\n\n    <div *ngIf="orders.orders.length">\n\n      <ion-item *ngFor="let item of orders.orders">\n\n        <h2>\n\n          <b>{{"Order" | translate}} #:\n\n          </b> {{item.order_number}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Orderdate" | translate}} :\n\n          </b> {{item.created_at | date:\'medium\'}}\n\n        </h2>\n\n        <!-- <h2>\n\n          <b>{{"Shipto" | translate}} :\n\n          </b> {{item.shipping_address.first_name}} {{item.shipping_address.last_name}}, {{item.shipping_address.address_1}}, {{item.shipping_address.address_2}}, {{item.shipping_address.city}}, {{item.shipping_address.state}}, {{item.shipping_address.country}}, {{item.shipping_address.postcode}}\n\n        </h2> -->\n\n        <h2>\n\n          <b>{{"Status" | translate}} :\n\n          </b> {{item.status}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Quantity" | translate}} :\n\n          </b> {{item.total_line_items_quantity}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"SubTotal" | translate}} :\n\n          </b> {{1*item.subtotal | currency:values.currency:true:\'1.2-2\' }}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Totals" | translate}} :\n\n          </b> {{1*item.total | currency:values.currency:true:\'1.2-2\' }}\n\n        </h2>\n\n        <ion-row class="row-buttons">\n\n          <ion-col no-padding width-50>\n\n            <button ion-button icon-left clear no-margin color="button-color" small text-uppercase icon-only class="has-icon icon-only" (click)="getOrderDetails(item.id)">\n\n              <ion-icon name="ios-eye">\n\n              </ion-icon>\n\n              {{"ViewDetails" | translate}} \n\n            </button>\n\n          </ion-col>\n\n          <ion-col no-padding width-50>\n\n            <button *ngIf="item.status != \'cancelled\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="cancelOrder(item.id)">		\n\n              <ion-icon ios="ios-close" md="md-close">\n\n              </ion-icon>  		\n\n              {{"Cancel" | translate}} \n\n            </button>\n\n            <button *ngIf="item.status == \'cancelled\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="reOrder(item.id)">\n\n              <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n\n              </ion-icon>		  		\n\n              {{"Reorder" | translate}} \n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </div> \n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n      <ion-infinite-scroll-content\n\n      loadingSpinner="crescent"\n\n      loadingText="{{\'Loading more items..\' | translate}}">\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], Orders);
    return Orders;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountRegister = /** @class */ (function () {
    function AccountRegister(nav, service, functions, oneSignal, values, platform) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.oneSignal = oneSignal;
        this.values = values;
        this.platform = platform;
        this.disableSubmit = false;
        this.Register = "Register";
        this.registerData = {};
        this.registerVendorData = {};
        this.countries = {};
        this.registerData.billing_address = {};
        this.registerData.shipping_address = {};
        this.service.getNonce()
            .then(function (results) { return _this.handleResults(results); });
    }
    AccountRegister.prototype.handleResults = function (results) {
        this.countries = results;
    };
    AccountRegister.prototype.getBillingRegion = function (countryId) {
        this.billing_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.getShippingRegion = function (countryId) {
        this.shipping_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.validateForm = function () {
        if (this.registerData.first_name == undefined || this.registerData.firstname == "") {
            this.functions.showAlert("ERROR", "Please Enter First Name");
            return false;
        }
        if (this.registerData.last_name == undefined || this.registerData.lastname == "") {
            this.functions.showAlert("ERROR", "Please Enter Last Name ");
            return false;
        }
        if (this.registerData.email == undefined || this.registerData.email == "") {
            this.functions.showAlert("ERROR", "Please Enter Email ID");
            return false;
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            this.functions.showAlert("ERROR", "Please Enter Password");
            return false;
        }
        this.registerData.username = this.registerData.email;
        this.registerData.billing_address.email = this.registerData.email;
        this.registerData.billing_address.first_name = this.registerData.first_name;
        this.registerData.billing_address.last_name = this.registerData.last_name;
        this.registerData.shipping_address.first_name = this.registerData.first_name;
        this.registerData.shipping_address.last_name = this.registerData.last_name;
        this.registerData.shipping_address.company = this.registerData.billing_address.company;
        this.registerData.shipping_address.address_1 = this.registerData.billing_address.address_1;
        this.registerData.shipping_address.address_2 = this.registerData.billing_address.address_2;
        this.registerData.shipping_address.city = this.registerData.billing_address.city;
        this.registerData.shipping_address.state = this.registerData.billing_address.state;
        this.registerData.shipping_address.postcode = this.registerData.billing_address.postcode;
        this.registerData.shipping_address.country = this.registerData.billing_address.country;
        return true;
    };
    AccountRegister.prototype.validateFormVendor = function () {
        if (this.registerVendorData.first_name == undefined || this.registerVendorData.firstname == "") {
            this.functions.showAlert("ERROR", "Please Enter First Name");
            return false;
        }
        if (this.registerVendorData.last_name == undefined || this.registerVendorData.lastname == "") {
            this.functions.showAlert("ERROR", "Please Enter Last Name ");
            return false;
        }
        if (this.registerVendorData.email == undefined || this.registerVendorData.email == "") {
            this.functions.showAlert("ERROR", "Please Enter Email ID");
            return false;
        }
        if (this.registerVendorData.password == undefined || this.registerVendorData.password == "") {
            this.functions.showAlert("ERROR", "Please Enter Password");
            return false;
        }
        if (this.registerVendorData.phone == undefined || this.registerVendorData.phone == "") {
            this.functions.showAlert("ERROR", "Please Enter Phone");
            return false;
        }
        return true;
    };
    AccountRegister.prototype.registerCustomer = function () {
        var _this = this;
        this.errors = "";
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.service.registerCustomer(this.registerData)
                .then(function (results) { return _this.handleRegister(results); });
        }
    };
    AccountRegister.prototype.registerVendor = function () {
        var _this = this;
        this.errors = "";
        if (this.validateFormVendor()) {
            this.disableSubmit = true;
            this.service.registerVendor(this.registerVendorData)
                .then(function (results) { return _this.handleRegisterVendor(results); });
        }
    };
    AccountRegister.prototype.handleRegisterVendor = function (results) {
        var _this = this;
        console.log('result', results);
        console.log('error ', results.errors);
        if (!results.errors) {
            this.countries.checkout_login;
            this.service.login(this.registerVendorData)
                .then(function (results) { return _this.loginStatus = results; });
            if (this.platform.is('cordova')) {
                this.oneSignal.getIds().then(function (data) {
                    _this.service.subscribeNotification(data);
                });
                this.oneSignal.sendTags({ email: this.registerVendorData.email, phone: this.registerVendorData.phone, namevendor: this.registerData.firstname });
            }
            this.functions.showAlert('Verificación', '¡Se ha creado su cuenta! Por favor revise su correo electrónico');
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
        }
        else if (results.errors) {
            this.errors = results.errors;
            this.disableSubmit = false;
            this.functions.showAlert('Verificación', this.errors.existing_user_email);
            // this.service.getNonceResendKey(this.registerVendorData.email).then((results) => this.handleResultsNonce(results));
        }
    };
    AccountRegister.prototype.handleResultsNonce = function (results) {
        this.countries = results;
        this.resultResendKey = this.service.resendKey(this.registerVendorData.email, this.countries.resend_key_nonce);
        //this.service.resendKey(this.registerVendorData.email, this.countries.resend_key_nonce).then(results => (this.resultResendKey = results))
        console.log(this.resultResendKey);
        this.disableSubmit = false;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* AccountLogin */]);
    };
    AccountRegister.prototype.handleRegister = function (results) {
        var _this = this;
        console.log(results.errors);
        this.disableSubmit = false;
        if (!results.errors) {
            this.countries.checkout_login;
            this.service.login(this.registerData)
                .then(function (results) { return _this.loginStatus = results; });
            if (this.platform.is('cordova')) {
                this.oneSignal.getIds().then(function (data) {
                    _this.service.subscribeNotification(data);
                });
                this.oneSignal.sendTags({ email: this.registerData.email, pincode: this.registerData.billing_address.postcode, city: this.registerData.billing_address.city });
            }
            this.functions.showAlert('Verificación', '¡Se ha creado su cuenta! Por favor revise su correo electrónico');
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
        }
        else if (results.errors) {
            this.errors = results.errors;
        }
    };
    AccountRegister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\register\register.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Register" | translate}}\n\n    </ion-title> \n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="account-register">\n\n  <div>\n\n    <form #f="ngForm">\n\n      <ion-list>\n\n        <ion-list-header>\n\n          <b primary>{{"AccountInfo" | translate}}\n\n          </b>\n\n        </ion-list-header>\n\n        <ion-item>\n\n          <ion-label floating>{{"FirstName" | translate}}\n\n          </ion-label>\n\n          <ion-input type="text" [(ngModel)]="registerVendorData.first_name" name="firstname">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"LastName" | translate}}\n\n          </ion-label>\n\n          <ion-input type="text" [(ngModel)]="registerVendorData.last_name" name="lastname">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Email" | translate}}\n\n          </ion-label>\n\n          <ion-input type="email" [(ngModel)]="registerVendorData.email" name="Email">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"password" | translate}}\n\n          </ion-label>\n\n          <ion-input type="password" [(ngModel)]="registerVendorData.password" name="password">\n\n          </ion-input>\n\n        </ion-item>\n\n        \n\n          <!-- <ion-input hidden type="text" [(ngModel)]="registerData.billing_address.company" name="billing_company">\n\n          </ion-input> -->\n\n       \n\n        <ion-item>\n\n          <ion-label floating>{{"Phone" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="number" [(ngModel)]="registerVendorData.phone" name="billing_phone">\n\n          </ion-input>\n\n        </ion-item>\n\n        <!-- <ion-item>\n\n          <ion-label floating>{{"StreetAddress" | translate}} 1\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.address_1" name="billing_address_1">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"StreetAddress" | translate}} 2\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.address_2" name="billing_address_2">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"City" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.city" name="billing_city">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Postcode" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.postcode" name="postcode">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="countries.country">     \n\n          <ion-label>  \n\n            {{"Country" | translate}}\n\n          </ion-label>   \n\n          <ion-select [(ngModel)]="registerData.billing_address.country" (ngModelChange)="getBillingRegion(registerData.billing_address.country)" name="country">\n\n            <div *ngFor="let field of countries.country.countries | keys">\n\n              <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span></ion-option>\n\n            </div>\n\n          </ion-select>      \n\n        </ion-item>\n\n        <ion-item *ngIf="billing_states">  \n\n          <ion-label>  \n\n            {{"State" | translate}}\n\n          </ion-label>   \n\n          <ion-select [(ngModel)]="registerData.billing_address.state" name="state">\n\n            <div *ngFor="let field of billing_states | keys">\n\n              <ion-option value="{{field.key}}">{{field.value}}\n\n              </ion-option>\n\n            </div>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="!billing_states">\n\n          <ion-label floating>{{"State" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.state" name="state">\n\n          </ion-input>\n\n        </ion-item> -->\n\n      </ion-list>\n\n\n\n        <div *ngIf="errors" class="error-message">\n\n            <h2 *ngFor="let item of errors | keys">{{item.value.message}}\n\n            </h2>\n\n        </div>\n\n\n\n      <div class="margin"> \n\n        <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="registerVendor()">{{Register | translate}}\n\n        </button>\n\n      </div>\n\n    </form>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]])
    ], AccountRegister);
    return AccountRegister;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_post__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation_ngx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabs_tabs__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


var ProductsListPage = /** @class */ (function () {
    function ProductsListPage(platform, geolocation, nativeGeocoder, zone, toastCtrl, nav, service, values) {
        var _this = this;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.HiddenList = true;
        this.HiddenListCat = true;
        this.HiddenSearchLocation = false;
        this.HideRadius = false;
        this.HideBtnSearch = false;
        this.radius = 0;
        this.miLatitude = 0;
        this.miLongitude = 0;
        this.has_more_items = true;
        this.loading = true;
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.items = [];
        this.options = [];
        this.service.getProducts();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.autocompleteCat = { input: '' };
        this.itemsCategory = [];
        this.lat = '';
        this.long = '';
        platform.ready().then(function () {
            // const subscription = this.geolocation.watchPosition()
            //   .filter((p) => p.coords !== undefined) //Filter Out Errors
            //   .subscribe(position => {
            //     this.miLatitude = position.coords.latitude;
            //     this.miLongitude = position.coords.longitude;
            //     console.log("miLocation=" + position.coords.latitude + ' ' + position.coords.longitude);
            //   });
            var subscription = _this.geolocation.watchPosition().subscribe(function (position) {
                if (position.coords != undefined) {
                    var geoposition = position;
                    _this.miLatitude = geoposition.coords.latitude;
                    _this.miLongitude = geoposition.coords.longitude;
                    // console.log('Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);
                }
                else {
                    var positionError = position;
                    console.log('Error ' + positionError.code + ': ' + positionError.message);
                }
            });
        });
    }
    ProductsListPage.prototype.ionSelected = function () {
        console.log("productlist Page has been selected");
        // do your stuff here
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__tabs_tabs__["a" /* TabsPage */]);
        this.pageTop.scrollToTop();
    };
    ProductsListPage.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    ProductsListPage.prototype.getCart = function () {
        this.nav.parent.select(2);
    };
    ProductsListPage.prototype.clickSearch = function () {
        this.autocompleteCat.input = ' ';
        this.getItemsCat();
        console.log(this.autocompleteCat.input);
    };
    ProductsListPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.service.load().then(function (results) {
            _this.handleService(results);
            refresher.complete();
        });
    };
    ProductsListPage.prototype.handleService = function (results) {
        // 
    };
    ProductsListPage.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], this.items);
    };
    ProductsListPage.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    ProductsListPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    ProductsListPage.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    ProductsListPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductsListPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    ProductsListPage.prototype.getSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    ProductsListPage.prototype.getId = function () {
        var i;
        if (this.options.length >= 1)
            var resa = this.options[0].split(":");
        if (this.options.length >= 2)
            var resb = this.options[1].split(":");
        if (this.options.length >= 1)
            for (i = 0; i < this.product.product.variations.length; i++) {
                if (this.product.product.variations[i].attributes[0].option == resa[1]) {
                    if (this.options.length == 1) {
                        break;
                    }
                    else if (this.product.product.variations[i].attributes[1].option == resb[1]) {
                        break;
                    }
                }
            }
    };
    ProductsListPage.prototype.goto = function (data) {
        var _this = this;
        if (data.description == "product") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], data.url);
        }
        else if (data.description == "category") {
            this.items.id = data.url;
            this.items.name = data.title;
            this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(_this.items.id); });
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], this.items);
        }
        else if (data.description == "post") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__post_post__["a" /* Post */], data.url);
        }
    };
    ProductsListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.service.loadMore().then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    ProductsListPage.prototype.handleMore = function (results, infiniteScroll) {
        if (!results) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    ProductsListPage.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], item);
    };
    ProductsListPage.prototype.hideLoading = function () {
        this.loading = false;
    };
    ProductsListPage.prototype.getSubCategories = function (id) {
        var results = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        return results;
    };
    ProductsListPage.prototype.getAddressFromCoords = function () {
        var _this = this;
        console.log("getAddressFromCoords " + this.miLatitude + " " + this.miLongitude);
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(this.miLatitude, this.miLongitude, options)
            .then(function (result) {
            console.log(JSON.stringify(result[0]));
            _this.autocomplete.input = result[0].locality + ', ' + result[0].administrativeArea + ', ' + result[0].countryName;
        })
            .catch(function (error) {
            _this.address = "Address Not Available!";
            console.log(error);
        });
        this.lat = this.miLatitude.toString();
        this.long = this.miLongitude.toString();
        // this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
        //   .then((result: NativeGeocoderReverseResult[]) => {
        //     this.address = "";
        //     let responseAddress = [];
        //     // for (let [key, value] of Object.entries(result[0])) {
        //     //   if(value.length>0)
        //     //   responseAddress.push(value); 
        //     // }
        //     responseAddress.reverse();
        //     for (let value of responseAddress) {
        //       this.address += value+", ";
        //     }
        //     this.address = this.address.slice(0, -2);
        //   })
        //   .catch((error: any) =>{ 
        //     this.address = "Address Not Available!";
        //   }); 
    };
    ProductsListPage.prototype.getCoordsFromAddress = function (Adrress) {
        var _this = this;
        console.log("getCoordsFromAddress " + Adrress);
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.forwardGeocode(Adrress, options)
            .then(function (result) {
            console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude);
            _this.lat = result[0].latitude;
            _this.long = result[0].longitude;
        })
            .catch(function (error) { return console.log(error); });
    };
    //FUNCTION SHOWING THE COORDINATES OF THE POINT AT THE CENTER OF THE MAP
    ProductsListPage.prototype.ShowCords = function () {
        alert('lat' + this.lat + ', long' + this.long);
    };
    //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
    ProductsListPage.prototype.UpdateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            this.lat = '';
            this.long = '';
            this.HiddenList = false;
            this.HideBtnSearch = false;
            this.HideRadius = false;
            return;
        }
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input, types: ['(cities)'], componentRestrictions: { country: 'es' } }, function (predictions, status) {
            _this.autocompleteItems = [];
            _this.zone.run(function () {
                predictions.forEach(function (prediction) {
                    _this.autocompleteItems.push(prediction);
                    _this.HiddenList = true;
                    _this.HideBtnSearch = true;
                    _this.HideRadius = true;
                });
            });
        });
    };
    //wE CALL THIS FROM EACH ITEM.
    ProductsListPage.prototype.SelectSearchResult = function (item) {
        ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
        // alert(JSON.stringify(item))      
        this.placeid = item.place_id;
        this.autocomplete.input = item.description;
        var description;
        description = item.description;
        this.getCoordsFromAddress(description);
        this.HiddenList = false;
        this.HideBtnSearch = false;
        this.HideRadius = false;
    };
    //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
    ProductsListPage.prototype.ClearAutocomplete = function () {
        this.autocompleteItems = [];
        this.autocomplete.input = '';
        this.HideBtnSearch = false;
        this.HideRadius = false;
        this.lat = '';
        this.long = '';
    };
    //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
    ProductsListPage.prototype.GoTo = function () {
        return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' + this.placeid;
    };
    ProductsListPage.prototype.ClearAutocompleteCat = function () {
        this.itemsCategory = [];
        this.items = [];
        this.autocompleteCat.input = '';
        this.HiddenSearchLocation = false;
        this.HideBtnSearch = false;
        this.HideRadius = false;
    };
    ProductsListPage.prototype.SelectSearchResultCat = function (item) {
        ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
        // alert(JSON.stringify(item))      
        this.autocompleteCat.input = item.name;
        this.selectedCategory = item.slug;
        this.items.id = item.id;
        this.items.slug = item.slug;
        this.items.name = item.name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(item.id); });
        this.HiddenListCat = false;
        this.HiddenSearchLocation = false;
        this.HideBtnSearch = false;
        this.HideRadius = false;
    };
    ProductsListPage.prototype.getItemsCat = function () {
        // const target = ev.target as HTMLTextAreaElement;
        // let val = target.value;
        var _this = this;
        if (this.autocompleteCat.input == '') {
            this.itemsCategory = [];
            this.HiddenListCat = false;
            this.HiddenSearchLocation = false;
            this.HideBtnSearch = false;
            this.HideRadius = false;
            this.items = [];
            return;
        }
        this.itemsCategory = this.service.mainCategories;
        // if the value is an empty string don't filter the items
        // if (this.autocompleteCat.input && this.autocompleteCat.input.trim() != '') {
        console.log('entra');
        this.HiddenListCat = true;
        this.HiddenSearchLocation = true;
        this.HideBtnSearch = true;
        this.HideRadius = true;
        this.itemsCategory = this.itemsCategory.filter(function (itemsCategory) {
            return (itemsCategory.name.toLowerCase().indexOf(_this.autocompleteCat.input.toLowerCase()) > -1);
        });
        // }
    };
    ProductsListPage.prototype.searchProduct = function () {
        var _this = this;
        this.items.productslocation = '';
        if (this.radius > 0 && this.lat != '' && this.long != '') {
            var midata = this.service.getLocationFromProduct(this.lat, this.long, this.radius)
                .then(function (results) { return _this.handleLocationInit(results); });
        }
        else {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], this.items);
            console.log(this.miLatitude);
            //console.log("original=" + this.originalCoords + this.originalCoords.latitude + this.originalCoords.longitude);
        }
    };
    ProductsListPage.prototype.handleLocationInit = function (results) {
        var dataResult = results;
        this.items.productslocation = dataResult;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], this.items);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProductsListPage.prototype, "mapContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pageTop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], ProductsListPage.prototype, "pageTop", void 0);
    ProductsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-products-list",template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\products-list\products-list.html"*/'<!-- Header -->\n\n<ion-header>\n\n  <ion-toolbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title >\n\n      <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button\n\n        ion-button\n\n        icon-only\n\n        light\n\n        class="has-icon icon-only has-badge"\n\n        (click)="getCart()"\n\n      >\n\n        <ion-icon class="ion-ios-cart item-icon"></ion-icon>\n\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n\n          {{values.count}}\n\n        </ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<!-- <ion-content padding>\n\n  <ion-list>\n\n    <ion-item text-wrap *ngFor="let category of categories" (click)="openCategoryPage(category)">\n\n      <ion-thumbnail item-start >\n\n         <img-loader *ngIf="category.image.length != 0" useImg src="{{category.image.src}}" useImg></img-loader>\n\n      </ion-thumbnail>\n\n\n\n      <h2> {{ category.name }} </h2>\n\n      <p> {{ category.description }}</p>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content> -->\n\n\n\n<ion-content #pageTop>\n\n\n\n\n\n  <!-- <ion-fab bottom right slot="fixed">\n\n    <button ion-fab>\n\n      <ion-icon name="chatboxes"></ion-icon>\n\n    </button>\n\n  \n\n    <ion-fab-list side="left">\n\n  \n\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.messenger.com/t/thehexchange">\n\n        <ion-icon style="background: #2196f3;" name="custom-facebook"></ion-icon>\n\n      </a>\n\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.instagram.com/thehexchange/">\n\n        <ion-icon style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);"\n\n          name="custom-instagram"></ion-icon>\n\n      </a>\n\n  \n\n    </ion-fab-list>\n\n  </ion-fab> -->\n\n\n\n  <!-- <ion-slides autoplay=\'3000\' loop=\'true\' autoHeight=\'true\' pager=\'true\'>\n\n    <ion-slide *ngFor="let number of [1,2,3]">\n\n       <img-loader src="./assets/images/1.jpg" useImg></img-loader>\n\n    </ion-slide>\n\n  </ion-slides> -->\n\n\n\n  <ion-slides initialSlide="0" speed="3000" loop="false" pager="true" dir="rtl">\n\n    <ion-slide>\n\n      <div class="overlay">\n\n        <!-- <img src="../../assets/image/1.jpg" class="slider-img"> -->\n\n        <img src="{{values.slider}}" />\n\n      </div>\n\n      <!--overlay-->\n\n      <div class="title-home-banner">\n\n        Su proveedor de servicios para el hogar\n\n      </div>\n\n      <!-- <div class="card-search">\n\n        <ion-searchbar (click)="getSearch()" placeholder="{{\'Search\' | translate}}"></ion-searchbar>\n\n      </div> -->\n\n\n\n      <div class="card-search">\n\n        \n\n      </div>\n\n\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <ion-card class="card-filter-home">\n\n    <ion-card-header>\n\n      <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->\n\n      <ion-card-title>Busca Nuestros Servicios</ion-card-title>\n\n    </ion-card-header>\n\n  \n\n    <ion-card-content>\n\n\n\n      <div style="margin: 0 10px 0 5px;">\n\n        <button style="width:100%;background-color:white;color:black;height: 2em;border-radius: 5px;" ion-button class="positionCalendar">\n\n          <ion-icon name="calendar" (click)=\'getAddressFromCoords()\'></ion-icon>\n\n\n\n           <ion-datetime placeholder="Fecha" displayFormat="DD MMM YYYY"  pickerFormat="DD MMM YYYY"  [(ngModel)]="dateOfevent" cancelText ="Cancelar" doneText="Seleccionar"></ion-datetime>\n\n        </button>\n\n      </div>\n\n\n\n      <ion-searchbar (click)="clickSearch()" class="searchbar-category" [(ngModel)]="autocompleteCat.input" (ionInput)="getItemsCat()"\n\n        (ionClear)="ClearAutocompleteCat()" placeholder="{{\'Category\' | translate}}"></ion-searchbar>\n\n      <ion-list class="list-category" [hidden]="!HiddenListCat">\n\n        <ion-item *ngFor="let item of itemsCategory" (click)="SelectSearchResultCat(item)">\n\n          {{ item.name }}\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <!-- <ion-searchbar class="searchbar-category" \n\n        (ionClear)="ClearAutocompleteCat()" placeholder="Fecha y Hora"></ion-searchbar>\n\n        <ion-searchbar class="searchbar-category" \n\n        (ionClear)="ClearAutocompleteCat()" placeholder="Frecuencia"></ion-searchbar> -->\n\n\n\n        \n\n  \n\n      <ion-searchbar [hidden]="HiddenSearchLocation" class="searchbar-location" [(ngModel)]="autocomplete.input"\n\n        (ionInput)="UpdateSearchResults()" placeholder="{{\'Location\' | translate}}" (ionClear)="ClearAutocomplete()">\n\n      </ion-searchbar>\n\n      <ion-icon item-end name="locate" [hidden]="HiddenSearchLocation"  class="passwordIcon" (click)=\'getAddressFromCoords()\'></ion-icon>\n\n  \n\n      <ion-list class="list-location" [hidden]="!HiddenList">\n\n        <ion-item *ngFor="let item of autocompleteItems" tappable (click)="SelectSearchResult(item)">\n\n          {{ item.description }}\n\n        </ion-item>\n\n      </ion-list>\n\n  \n\n      <div class="range-radius" [hidden]="HideRadius">\n\n        <ion-label class="label-radius">{{"RADIUS" | translate}}</ion-label>\n\n        <ion-range pin="true" min="0" max="100" [(ngModel)]="radius " color="secondary">\n\n          <ion-label style="color: black;" range-left>0</ion-label>\n\n          <ion-label style="color: black;" range-right>100</ion-label>\n\n        </ion-range>\n\n      </div>\n\n  \n\n      <div class="btn-search-product" [hidden]="HideBtnSearch">\n\n        <button ion-button item-center medium color="button-color" text-uppercase\n\n          (click)="searchProduct()">{{"Search" | translate}}\n\n        </button>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-grid>\n\n    <!-- <div *ngIf="service.categories" class="category-name">\n\n      <ion-item tappable full menuClose *ngFor="let item of service.mainCategories" (click)="getCategory(item.id, item.slug, item.name)">\n\n        <ion-icon item-right class="ion-ios-arrow-forward item-icon">\n\n        </ion-icon>\n\n        <span [innerHTML]="item.name"></span>\n\n      </ion-item>\n\n    </div>  -->\n\n\n\n    <h2 class="full-width text-center">{{\'Encuentra y reserva la manera más segura de cuidar tu hogar.\' | translate}}</h2>\n\n\n\n    <ion-row *ngIf="service.categories" class="category-name">\n\n      <ion-col col-12 class="flex-center" *ngFor="let item of service.mainCategories"\n\n        (click)="getCategory(item.id, item.slug, item.name)">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-thumbnail>\n\n                  <img src="{{item.image.src}}" />\n\n                </ion-thumbnail>\n\n              </ion-row>\n\n            </ion-grid>\n\n\n\n            <ion-grid>\n\n              <ion-row item-left lbl-category>\n\n                <p class="heading text-center">{{item.name}}</p>\n\n                <!-- <p>{{item.description}}</p> -->\n\n              </ion-row>\n\n            </ion-grid>\n\n\n\n            <ion-grid>\n\n              <ion-row item-left lbl-category>\n\n                <button class="btn-reservar" ion-button item-center medium color="button-color" text-uppercase\n\n                  >{{"Reserva Ahora" | translate}}\n\n                </button>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <ion-slides class="testimonial" initialSlide="0" autoplay=\'500\' loop="true" speed="6000" pager="true">\n\n    <ion-slide>\n\n      <div class="testimonial-content">\n\n        <p>\n\n          "Tenemos varios apartamentos en toda la ciudad y siempre nos cubren todas las necesidades al momento."\n\n        </p>\n\n        <ion-label>Mariam Lopez.</ion-label>\n\n      </div>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <div class="testimonial-content">\n\n        <p>\n\n          "Homer me ayudo a encontrar diferentes servicios en un mismo lugar de un día para otro."\n\n        </p>\n\n        <ion-label>Jose Martinez.</ion-label>\n\n      </div>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <div class="testimonial-content">\n\n        <p>\n\n          "Una app muy accesible fácil de usar para momentos puntuales donde requería limpieza y servicio de canguro."\n\n        </p>\n\n        <ion-label>Juana Garcia.</ion-label>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <ion-card class="comunicated">\n\n        <p style="text-align: left;margin: 15px;">\n\n          Para prestar sus servicios, todos los proveedores tienen que pasar sus consiguientes pruebas psicologicas, entrevistas,\n\nrevision de antecedentes y validacion de identidad de domicilio.\n\n        </p>\n\n  </ion-card>\n\n\n\n  <ion-footer>\n\n\n\n    <ion-list class="item-footer">\n\n      <div class="footer-content">\n\n        <ion-item>\n\n          <h3 style="text-decoration: underline;">INFORMACION DE CONTACTO</h3>\n\n        </ion-item>\n\n        <ion-item>\n\n          <h2>902 333-333</h2>\n\n          <h2>info@homer.com</h2>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n          <ion-icon class="icon-facebook icon-social" name="logo-facebook"></ion-icon>\n\n          <ion-icon class="icon-twitter icon-social" name="logo-twitter"></ion-icon>\n\n          <ion-icon class="icon-linkedin icon-social" name="logo-linkedin"></ion-icon>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n          <img class="icon-payment" style="max-width: 20%;" src="../../assets/icon/visa.svg">\n\n          <img class="icon-payment" style="max-width: 20%;" src="../../assets/icon/mastercard.svg">\n\n          <img class="icon-payment" style="max-width: 22%;" src="../../assets/icon/american.png">\n\n          <img class="icon-payment" style="max-width: 22%;" src="../../assets/icon/paypal.png">\n\n          \n\n        </ion-item>\n\n      </div>\n\n    </ion-list>\n\n\n\n  </ion-footer>\n\n\n\n  <!-- <ion-card>\n\n    <ion-list>\n\n      <ion-item>\n\n        <p>{{\'Contact Us\' | translate}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <a button href="https://wa.me/{{values.settings.whatsapp_number}}?text=hello i need a medical consultation." clear\n\n    item-left style="text-decoration: none;">\n\n    <ion-card>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-icon class="icon-whatsapp" name="logo-whatsapp"></ion-icon>\n\n          {{\'Chat on whatsapp\' | translate}}\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card>\n\n  </a>\n\n\n\n  <a button href="tel:+3059132306" clear item-left style="text-decoration: none;">\n\n    <ion-card>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-icon name="call"></ion-icon>\n\n          {{\'Call us\' | translate}}\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card>\n\n  </a> -->\n\n\n\n  <!-- <ion-card *ngFor="let category of categories">\n\n    <ion-list>\n\n      <ion-item (click)="openCategoryPage(category)">\n\n        <ion-thumbnail item-left>\n\n          <img src="{{category.image.src}}">\n\n        </ion-thumbnail>\n\n        <p class="heading">{{category.name}}</p>\n\n        <p>{{category.description}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card> -->\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\products-list\products-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation_ngx__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], ProductsListPage);
    return ProductsListPage;
}());

//# sourceMappingURL=products-list.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { LoadingController } from 'ionic-angular';




var WishlistService = /** @class */ (function () {
    function WishlistService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    WishlistService.prototype.loadWishlist = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.addToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("quantity", "1");
        params.append("product_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cartData = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(data.cart);
                resolve(_this.cartData);
            });
        });
    };
    WishlistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */]])
    ], WishlistService);
    return WishlistService;
}());

//# sourceMappingURL=wishlist-service.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersVendor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_order_details__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__booking_vendor_booking_vendor__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrdersVendor = /** @class */ (function () {
    function OrdersVendor(nav, service, values, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.page = 1;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.filter['id'] = this.values.customerId.toString();
        this.service.getOrdersVendor(this.filter)
            .then(function (results) { return _this.orders = results; });
    }
    OrdersVendor.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getOrdersVendor(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    OrdersVendor.prototype.handleMore = function (results, infiniteScroll) {
        this.filter.page += 1;
        if (results.orders != undefined) {
            for (var i = 0; i < results.orders.length; i++) {
                this.orders.orders.push(results.orders[i]);
            }
            ;
        }
        if (results.orders.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    OrdersVendor.prototype.getOrderDetails = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__order_details_order_details__["a" /* OrderDetails */], id);
    };
    OrdersVendor.prototype.viewBooking = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__booking_vendor_booking_vendor__["a" /* BookingVendor */]);
    };
    OrdersVendor.prototype.cancelOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "order": {
                "status": "cancelled"
            }
        }, id)
            .then(function (results) { return _this.handleCancelOrder(results); });
    };
    OrdersVendor.prototype.handleCancelOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been cancelled");
        this.service.getOrdersVendor(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    OrdersVendor.prototype.reOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "order": {
                "status": "pending"
            }
        }, id)
            .then(function (results) { return _this.handleReOrder(results); });
    };
    OrdersVendor.prototype.handleReOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been placed successfully");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    OrdersVendor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\orders-vendor\orders-vendor.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title  text-center>{{"Customer Orders" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="account-order">\n\n  <ion-spinner *ngIf="!orders" name="crescent">\n\n  </ion-spinner>\n\n  <div *ngIf="orders">\n\n\n\n    <div class="no-orders">\n\n    <h4 *ngIf="orders.orders.length == 0" text-center no-lines>\n\n      <button ion-button full clear text-uppercase color="header">{{"Therearenoorders." | translate}}\n\n      </button>\n\n    </h4>\n\n    </div>\n\n\n\n    <div *ngIf="orders.orders.length">\n\n      <ion-item *ngFor="let item of orders.orders">\n\n        <h2>\n\n          <b>{{"Order" | translate}} # :\n\n          </b> {{item.order_id}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Booking" | translate}} # :\n\n          </b> {{item.bookingId}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Orderdate" | translate}} :\n\n          </b> {{item.date_created.date | date:\'medium\'}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Customer" | translate}} :\n\n          </b> {{item.billing_address.first_name}} {{item.billing_address.last_name}}, {{item.billing_address.address_1}}, {{item.billing_address.address_2}}, {{item.billing_address.city}}, {{item.billing_address.state}}, {{item.billing_address.country}}, {{item.billing_address.postcode}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Status" | translate}} :\n\n          </b> {{item.order_status}}\n\n        </h2>\n\n        <h2>\n\n          <b>{{"Quantity" | translate}} :\n\n          </b> {{item.qty}}\n\n        </h2>\n\n        <!-- <h2>\n\n          <b>{{"SubTotal" | translate}} :\n\n          </b> {{1*item.subtotal | currency:values.currency:true:\'1.2-2\' }}\n\n        </h2> -->\n\n        <h2>\n\n          <b>{{"Totals" | translate}} :\n\n          </b> {{1*item.total | currency:values.currency:true:\'1.2-2\' }}\n\n        </h2>\n\n        <ion-row class="row-buttons">\n\n          <ion-col no-padding width-50>\n\n            <button ion-button icon-left clear no-margin color="button-color" small text-uppercase icon-only class="has-icon icon-only" (click)="getOrderDetails(item.order_id)">\n\n              <ion-icon name="ios-eye">\n\n              </ion-icon>\n\n              {{"ViewDetails" | translate}} \n\n            </button>\n\n          </ion-col>\n\n          <ion-col no-padding width-50>\n\n            <button text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="viewBooking()">		\n\n              <ion-icon name="ios-calendar">\n\n              </ion-icon>  		\n\n              {{"View Booking" | translate}}\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </div> \n\n    <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n      <ion-infinite-scroll-content\n\n      loadingSpinner="crescent"\n\n      loadingText="{{\'Loading more items..\' | translate}}">\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll> -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\account\orders-vendor\orders-vendor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], OrdersVendor);
    return OrdersVendor;
}());

//# sourceMappingURL=orders-vendor.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IframePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation_ngx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


var IframePage = /** @class */ (function () {
    function IframePage(http, platform, geolocation, nativeGeocoder, zone, toastCtrl, nav, service, values) {
        var _this = this;
        this.http = http;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.HiddenList = true;
        this.HiddenListCat = true;
        this.HiddenSearchLocation = false;
        this.HideRadius = false;
        this.HideBtnSearch = false;
        this.radius = 0;
        this.miLatitude = 0;
        this.miLongitude = 0;
        this.has_more_items = true;
        this.loading = true;
        this.items = [];
        this.options = [];
        this.service.getProducts();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.autocompleteCat = { input: '' };
        this.itemsCategory = [];
        this.lat = '';
        this.long = '';
        platform.ready().then(function () {
            // const subscription = this.geolocation.watchPosition()
            //   .filter((p) => p.coords !== undefined) //Filter Out Errors
            //   .subscribe(position => {
            //     this.miLatitude = position.coords.latitude;
            //     this.miLongitude = position.coords.longitude;
            //     console.log("miLocation=" + position.coords.latitude + ' ' + position.coords.longitude);
            //   });
            var subscription = _this.geolocation.watchPosition().subscribe(function (position) {
                if (position.coords != undefined) {
                    var geoposition = position;
                    _this.miLatitude = geoposition.coords.latitude;
                    _this.miLongitude = geoposition.coords.longitude;
                    // console.log('Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);
                }
                else {
                    var positionError = position;
                    console.log('Error ' + positionError.code + ': ' + positionError.message);
                }
            });
        });
    }
    IframePage.prototype.ngAfterViewInit = function () {
        //   const iframDoc = this.myIframe.nativeElement.contentWindow.document;
        //  console.log(iframDoc)
        // // iframDoc.head.appendChild('style.css');
        // var z = document.createElement('p'); // is a node
        // z.innerHTML = 'test satu dua tiga';
        // document.body.appendChild(z);
        // iframDoc.head.innerHTML = '<style type="text/css" id="wp-custom-css-fuck">.site-header .header-main .site-title img{display: none;}.mierda{display:none}</style>';
        // //document.body.appendChild(z);
        // iframDoc.head.appendChild(z);
        // const iframDoc = this.myIframe.nativeElement.contentWindow.document;
        // // var elmnt = iframe.nativeElement.contentWindow.document.getElementsByClassName("w3schools-logo")[0];
        // let floorElements = this.myIframe.nativeElement.contentWindow.document.getElementsByClassName("header-main") as HTMLCollectionOf<HTMLElement>;
        // var cssLink = document.createElement("link") 
        // cssLink.href = "file://path/to/style.css"; 
        // cssLink .rel = "stylesheet"; 
        // cssLink .type = "text/css"; 
        // cssLink .id = "mierda"; 
        // iframDoc.head.innerHTML = cssLink;
        // console.log(iframDoc)
        // let iframe = document.getElementById("myIframe");
        // console.log(iframe) 
        // let element = (<HTMLIFrameElement>iframe).contentWindow.document.getElementsByTagName("h1")[0];
        // console.log(element)
    };
    IframePage.prototype.ionViewDidEnter = function () {
        // let iframe = document.getElementById("iframeHomer");
        // let iframeWindow = (<HTMLIFrameElement>iframe).contentWindow;
        // let iframeDocument = (<HTMLIFrameElement>iframe).contentDocument;
        // let ver = iframeWindow.document.getElementById("main");
        // var textnode = document.createTextNode("Water");         // Create a text node
        // ver.appendChild(textnode); 
        // setTimeout(() => {
        //     this.searchbar.setFocus();
        // }, 0);
        // setTimeout(() => {
        //   let iframe = document.getElementById("iframeHomer");
        //   let iframeWindow = (<HTMLIFrameElement>iframe).contentWindow;
        //   let iframeDocument = (<HTMLIFrameElement>iframe).contentDocument;
        //   let ver = iframeWindow.document.getElementsByClassName("site-main");
        //   // var textnode = document.createTextNode("Rolando Jose Sanchez");
        //   // console.log('trextnode',textnode)
        //   // ver.appendChild(textnode); 
        //   // let iframe = document.getElementById("myIframe");
        //   // // let iframeWindow = (<HTMLIFrameElement>iframe).contentWindow;
        //   // let iframeDocument = (<HTMLIFrameElement>iframe);
        //   // let iframeHeader = iframeDocument.querySelectorAll
        //   //  //iframeHeader.textContent = "hola mundo";
        //   // console.log('iframeDocument:',iframeDocument)
        //   // console.log('iframeHeader:',iframeHeader)
        //   // var cssLink = document.createElement("style") 
        //   // cssLink .id = "mierda"; 
        //   // cssLink.innerHTML = '.header-main{display:none!important}';
        //   // console.log('meh:',iframeDocument.appendChild(cssLink))
        // }, 3000)
    };
    IframePage.prototype.ionSelected = function () {
        console.log("productlist Page has been selected");
        // do your stuff here
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
        this.pageTop.scrollToTop();
    };
    IframePage.prototype.gohome = function () {
        this.nav.parent.select(0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], IframePage.prototype, "mapContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pageTop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], IframePage.prototype, "pageTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myIframe'),
        __metadata("design:type", Object)
    ], IframePage.prototype, "myIframe", void 0);
    IframePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-iframe",template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\iframe\iframe.html"*/'<ion-header>\n\n  <ion-toolbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title >\n\n      <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content #pageTop>\n\n  <!-- <div class="button-bar">\n\n    <a class="button button-positive">1</a>\n\n    <a class="button button-assertive">2</a>\n\n    <a class="button button-energized">3</a>\n\n    <a class="button">4</a>\n\n  </div> -->\n\n  <!-- https://dev.digitalfactory.tech/demos/homer/wp-admin/admin-ajax.php?action=mstoreapp-redirectToDashboard&username=bonod49459?showElement=false -->\n\n \n\n  <iframe id="iframeHomer" class="iframe-full" src="https://dev.digitalfactory.tech/demos/homer/dashboard?showElement=false" style="height: 100%; width: 100%;" #myIframe></iframe>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\iframe\iframe.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation_ngx__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], IframePage);
    return IframePage;
}());

//# sourceMappingURL=iframe.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesSupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_post_post__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PagesSupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagesSupportPage = /** @class */ (function () {
    function PagesSupportPage(navCtrl, values, navParams, emailComposer) {
        this.navCtrl = navCtrl;
        this.values = values;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
    }
    PagesSupportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagesSupportPage');
    };
    PagesSupportPage.prototype.post = function (id, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_post_post__["a" /* Post */], { data: id, title: title });
    };
    PagesSupportPage.prototype.contact = function () {
        var email = {
            to: this.values.settings.support_email,
            subject: '',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    PagesSupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pages-support',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\pages-support\pages-support.html"*/'<ion-header class="settings-header">\n\n  <ion-navbar color="header"> \n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <!-- <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title> -->\n\n      <ion-title >\n\n          <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n\n      </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="support" padding [content]="content">\n\n  <div class="sub-header">\n\n    <h1>Soporte</h1>\n\n  </div>\n\n  <ion-card style="margin-top: 100px;">\n\n  <ion-card-content *ngIf="post"> \n\n  <ion-list>\n\n  \n\n        <ion-item tappable menuClose *ngIf="values.data?.pages?.about && values.data?.pages?.about != \'0\'"\n\n          (click)="post(values.data?.pages?.about,\'Acerca de Nosotros\')">\n\n          {{"About Us" | translate}}\n\n          <ion-icon name="ios-information-circle" item-left></ion-icon>\n\n        </ion-item>\n\n   \n\n  \n\n        <ion-item tappable menuClose *ngIf="values.data?.pages?.about && values.data?.pages?.privacy != \'0\'"\n\n          (click)="post(values.data?.pages?.privacy, \'Politicas de Privacidad\')">\n\n          {{"Politica de privacidad" | translate}}\n\n          <ion-icon name="ios-lock" item-left></ion-icon>\n\n        </ion-item>\n\n    \n\n\n\n        <ion-item tappable menuClose *ngIf="values.data?.pages?.about && values.data?.pages?.terms != \'0\'"\n\n          (click)="post(values.data?.pages?.terms, \'Terminos y Condiciones\')">\n\n          {{"Terminos & Condiciones" | translate}}\n\n          <ion-icon name="ios-bookmarks" item-left></ion-icon>\n\n        </ion-item>\n\n  \n\n        <ion-item tappable menuClose (click)="contact()">\n\n          {{"Contacta con nosotros" | translate}}\n\n          <ion-icon name="ios-call" item-left></ion-icon>\n\n        </ion-item>\n\n\n\n  </ion-list>\n\n</ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\pages-support\pages-support.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], PagesSupportPage);
    return PagesSupportPage;
}());

//# sourceMappingURL=pages-support.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer_ngx__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_products_providers_pages_products_providers__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { ImagePicker } from '@ionic-native/image-picker';
// import { Camera, CameraOptions } from '@ionic-native/camera';

// interface Day {
//   name:string;
// }
// interface Availability{
//   type:string ;
//   bookable:string;
//   priority:number,
//   from:string;
//   to:string;
//   from_date:string;
//   to_date:string;
// }
/**
 * Generated class for the NewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewProductPage = /** @class */ (function () {
    // days:Day[] = [
    //   {
    //     name:"MONDAY"
    //   },
    //   {
    //     name:"TUESDAY"
    //   },
    //   {
    //     name:"WEDNESDAY"
    //   },
    //   {
    //     name:"THURSDAY"
    //   },
    //   {
    //     name:"FRIDAY"
    //   },
    //   {
    //     name:"SATURDAY"
    //   },
    //   {
    //     name:"SUNDAY"
    //   }
    // ];
    function NewProductPage(nav, navParams, values, alert, service, config, transfer) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.values = values;
        this.alert = alert;
        this.service = service;
        this.config = config;
        this.transfer = transfer;
        this.imageIndex = 0;
        this.form = { type: 'simple', status: 'pending', in_stock: true, images: [], purchasable: true, manage_stock: true, shipping_required: true, sold_individually: false };
        this.uploadingImageSpinner = false;
        this.data = [];
        this.status = "publish";
        this.featured = false;
        this.catalog_visibility = "visible";
        this.sku = "";
        this.price_html = "Desde: <span class=\"woocommerce-Price-amount amount\"><span class=\"currency\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span></span>70<span class=\"decimals\">.00</span></span>";
        this.on_sale = false;
        this.purchasable = true;
        this.virtual = false;
        this.downloadable = false;
        this.downloads = [];
        this.download_limit = -1;
        this.download_expiry = -1;
        this.external_url = "";
        this.button_text = "";
        this.tax_status = "taxable";
        this.tax_class = "";
        this.manage_stock = false;
        this.stock_status = "instock";
        this.backorders = "no";
        this.backorders_allowed = false;
        this.backordered = false;
        this.sold_individually = true;
        this.weight = "";
        this.shipping_required = true;
        this.shipping_taxable = true;
        this.shipping_class = "";
        this.shipping_class_id = 0;
        this.reviews_allowed = true;
        this.average_rating = "1.00";
        this.rating_count = 1;
        this.upsell_ids = [];
        this.cross_sell_ids = [];
        this.parent_id = 0;
        this.purchase_note = "";
        this.categories = [];
        this.tags = [];
        this.images = [
            {
                "id": 5489,
                "date_created": "2020-08-17T02:37:55",
                "date_created_gmt": "2020-08-17T10:37:55",
                "date_modified": "2020-11-05T16:32:01",
                "date_modified_gmt": "2020-11-06T00:32:01",
                "src": "https://dev.digitalfactory.tech/demos/homer/wp-content/uploads/2020/06/unnamed-7.png",
                "name": "unnamed (7)",
                "alt": ""
            }
        ];
        this.attributes = [];
        this.default_attributes = [];
        this.variations = [];
        this.grouped_products = [];
        this.menu_order = 0;
        this.availability = [];
        this.buffer_period = 0;
        this.calendar_display_mode = "always_visible";
        this.cancel_limit_unit = "day";
        this.cancel_limit = 1;
        this.check_start_block_only = false;
        this.duration_type = "fixed";
        this.duration_unit = "hour";
        this.duration = 1;
        this.enable_range_picker = true;
        this.first_block_time = "";
        this.has_person_cost_multiplier = false;
        this.has_person_qty_multiplier = false;
        this.has_person_types = false;
        this.has_persons = false;
        this.has_resources = false;
        this.max_date_value = 6;
        this.max_date_unit = "month";
        this.max_duration = 1;
        this.max_persons = 0;
        this.min_date_value = 0;
        this.min_date_unit = "month";
        this.min_duration = 1;
        this.min_persons = 0;
        this.person_types = [];
        this.pricing = [];
        this.qty = 1;
        this.requires_confirmation = false;
        this.resource_label = "Services";
        this.resources_assignment = "customer";
        this.restricted_days = "";
        this.can_be_cancelled = true;
        this.user_can_cancel = true;
        this.availability = [];
        this.categories = [];
        this.service.getCategories(1);
        navParams.data.availability;
        this.getCategory = this.service.mainCategories;
        console.log(navParams.data);
        if (navParams.data.id) {
            this.name = navParams.data.name;
            this.description = navParams.data.description.replace(/<[^>]*>?/gm, ' ');
            this.short_description = navParams.data.short_description.replace(/<[^>]*>?/gm, ' ');
            this.cost = navParams.data.cost;
            this.block_cost = navParams.data.block_cost;
            this.display_cost = navParams.data.display_cost;
            navParams.data.availability.map(function (result) {
                _this.availability.push({
                    type: result.type,
                    bookable: result.bookable,
                    priority: result.priority,
                    from: result.from,
                    to: result.to,
                    from_date: result.from_date,
                    to_date: result.to_date
                });
            });
            navParams.data.categories.map(function (result) {
                _this.categories.push({
                    id: result.id,
                    name: result.name
                });
            });
        }
    }
    NewProductPage.prototype.ngAfterViewInit = function () {
        // this.indicator.nativeElement.style.width = this.tabs_control.nativeElement.children[0].clientWidth + "px";
        // for(let i=0; i < this.tabs_control.nativeElement.children.length; i++){
        //   this.renderer.listen( this.tabs_control.nativeElement.children[i],'click',this.handleClick);
        // }
    };
    //   picker() {
    //     let options = {
    //         //maximumImagesCount: 1, //Comment for multi images
    //     }
    //     this.photos = new Array < string > ();
    //     this.imagePicker.getPictures(options).then((results : any) => {
    //         // For Single select, crop and upload images
    //         //this.reduceImages(results).then((results) => this.handleUpload(results));
    //         // For multi image upload
    //         for (var i = 0; i < results.length; i++) {
    //            this.upload(results[i]);
    //         }
    //     }, (err) => {
    //         console.log(err)
    //     });
    // }
    NewProductPage.prototype.upload = function (image) {
        var _this = this;
        this.uploadingImageSpinner = true;
        var fileTransfer = this.transfer.create();
        var headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        var options = {
            chunkedMode: false,
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {
                headers: headers
            }
        };
        fileTransfer.upload(image, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_admin_upload_image', options).then(function (data) {
            _this.uploadingImageSpinner = false;
            _this.imageresult = JSON.parse(data.response);
            _this.form.images[_this.imageIndex] = {};
            _this.form.images[_this.imageIndex].src = _this.imageresult.url;
            _this.imageIndex = _this.imageIndex + 1;
        }, function (err) {
            _this.err = err;
            //this.functions.showAlert("error", err.error);
        });
    };
    // upload2()
    // {
    //   let options = {
    //     quality: 100
    //   };
    //   this.camera.getPicture(options).then((imageData) => {
    //     // imageData is either a base64 encoded string or a file URI
    //     // If it's base64:
    //       const fileTransfer: FileTransferObject = this.transfer.create();
    //         let options1: FileUploadOptions = {
    //           fileKey: 'file',
    //           fileName: 'name.jpg',
    //           headers: {}
    //         }
    //     fileTransfer.upload(imageData, 'https://localhost/ionic/upload.php', options1)
    //     .then((data) => {
    //       // success
    //       alert("success");
    //     }, (err) => {
    //       // error
    //       alert("error"+JSON.stringify(err));
    //     });
    //  });
    // }
    NewProductPage.prototype.deleteTipoServicio = function (id) {
        var index = this.categories.map(function (result) { return result.id; }).indexOf(id);
        if (index > -1) {
            this.categories.splice(index, 1);
        }
    };
    NewProductPage.prototype.deleteAvailability = function (item) {
        var index = this.availability.map(function (result) { return result.from_date; }).indexOf(item);
        if (index > -1) {
            this.availability.splice(index, 1);
        }
    };
    NewProductPage.prototype.updateProduct = function () {
        this.data = {
            name: this.name,
            description: this.description,
            short_description: this.short_description,
            cost: this.cost,
            block_cost: this.block_cost,
            display_cost: this.display_cost,
            availability: this.availability,
            categories: this.categories
        };
        if (this.name != undefined && this.description != undefined && this.short_description != undefined &&
            this.cost != undefined && this.block_cost != undefined && this.categories.length != 0 && this.availability.length != 0) {
            this.service.updateProduct(this.data, this.navParams.data.id);
            this.showAlert('Actualizado correctamente', '<strong>Exito:</strong> Has actualizado este producto correctamente');
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_products_providers_pages_products_providers__["a" /* PagesProductsProvidersPage */]);
        }
        else {
            this.showAlert('Ha ocurrido un error', '<strong>Por favor</strong> llena todos los campos');
        }
    };
    NewProductPage.prototype.sendProduct = function () {
        this.data = {
            name: this.name,
            slug: this.slug,
            status: this.status,
            featured: this.featured,
            catalog_visibility: this.catalog_visibility,
            description: this.description,
            short_description: this.short_description,
            sku: this.sku,
            price: this.price,
            regular_price: this.regular_price,
            sale_price: this.sale_price,
            date_on_sale_from: this.date_on_sale_from,
            date_on_sale_from_gmt: this.date_on_sale_from_gmt,
            date_on_sale_to: this.date_on_sale_to,
            date_on_sale_to_gmt: this.date_on_sale_to_gmt,
            price_html: this.price_html,
            on_sale: this.on_sale,
            purchasable: this.purchasable,
            virtual: this.virtual,
            downloadable: this.downloadable,
            downloads: this.downloads,
            download_limit: this.download_limit,
            download_expiry: this.download_expiry,
            external_url: this.external_url,
            button_text: this.button_text,
            tax_status: this.tax_status,
            tax_class: this.tax_class,
            manage_stock: this.manage_stock,
            stock_quantity: this.stock_quantity,
            stock_status: this.stock_status,
            backorders: this.backorders,
            backorders_allowed: this.backorders_allowed,
            backordered: this.backordered,
            sold_individually: this.sold_individually,
            weight: this.weight,
            shipping_required: this.shipping_required,
            shipping_taxable: this.shipping_taxable,
            shipping_class: this.shipping_class,
            shipping_class_id: this.shipping_class_id,
            reviews_allowed: this.reviews_allowed,
            average_rating: this.average_rating,
            rating_count: this.rating_count,
            upsell_ids: this.upsell_ids,
            cross_sell_ids: this.cross_sell_ids,
            parent_id: this.parent_id,
            purchase_note: this.purchase_note,
            categories: this.categories,
            tags: this.tags,
            images: this.images,
            attributes: this.attributes,
            default_attributes: this.default_attributes,
            variations: this.variations,
            grouped_products: this.grouped_products,
            menu_order: this.menu_order,
            apply_adjacent_buffer: this.apply_adjacent_buffer,
            availability: this.availability,
            block_cost: this.block_cost,
            buffer_period: this.buffer_period,
            calendar_display_mode: this.calendar_display_mode,
            cancel_limit_unit: this.cancel_limit_unit,
            cancel_limit: this.cancel_limit,
            check_start_block_only: this.check_start_block_only,
            cost: this.cost,
            display_cost: this.display_cost,
            duration_type: this.duration_type,
            duration_unit: this.duration_unit,
            duration: this.duration,
            enable_range_picker: this.enable_range_picker,
            first_block_time: this.first_block_time,
            has_person_cost_multiplier: this.has_person_cost_multiplier,
            has_person_qty_multiplier: this.has_person_qty_multiplier,
            has_person_types: this.has_person_types,
            has_persons: this.has_persons,
            has_resources: this.has_resources,
            max_date_value: this.max_date_value,
            max_date_unit: this.max_date_unit,
            max_duration: this.max_duration,
            max_persons: this.max_persons,
            min_date_value: this.min_date_value,
            min_date_unit: this.min_date_unit,
            min_duration: this.min_duration,
            min_persons: this.min_persons,
            person_types: this.person_types,
            pricing: this.pricing,
            qty: this.qty,
            requires_confirmation: this.requires_confirmation,
            resource_label: this.resource_label,
            resources_assignment: this.resources_assignment,
            restricted_days: this.restricted_days,
            can_be_cancelled: this.can_be_cancelled,
            user_can_cancel: this.user_can_cancel
        };
        if (this.name != undefined && this.description != undefined && this.short_description != undefined &&
            this.cost != undefined && this.block_cost != undefined && this.categories.length != 0 && this.availability.length != 0) {
            this.service.addProduct(this.data);
            this.showAlert('Registrado correctamente', '<strong>Exito:</strong> Has registrado un producto correctamente');
            this.nav.pop();
        }
        else {
            this.showAlert('Ha ocurrido un error', '<strong>Por favor</strong> llena todos los campos');
        }
    };
    NewProductPage.prototype.onChange = function (evt) {
        if (this.categories.length == 0) {
            this.categories.push({ id: evt.id, name: evt.name });
            this.categoriesValue = [];
        }
        else {
            if (this.categories.id != evt) {
                this.categories.push({ id: evt.id, name: evt.name });
                this.categoriesValue = [];
            }
        }
        this.categoriesValue = [];
    };
    NewProductPage.prototype.addAvailability = function () {
        if (this.availability.length == 0) {
            if (this.from_date != undefined && this.from_date != '' && this.to_date != undefined && this.to_date != '' && this.from != undefined && this.from != '' && this.to != undefined && this.to != '') {
                this.availability.push({
                    type: "time:range",
                    bookable: "yes",
                    priority: 10,
                    from: this.from,
                    to: this.to,
                    from_date: this.from_date,
                    to_date: this.to_date
                });
                this.from = '';
                this.to = '';
                this.from_date = '';
                this.to_date = '';
            }
            else {
                this.showAlert('No sea seleccionado ninguna opción', '<strong>Error:</strong> Por favor selecciona todos los campos');
            }
        }
        else {
            for (var i in this.availability) {
                if (this.availability[i].from_date == this.from_date) {
                    this.showAlert(this.from_date + " ya fue agregado", '<strong>Error:</strong> Por favor selecciona otra disponibilidad.');
                    break;
                }
                else {
                    if (this.from_date != undefined && this.from_date != '' && this.to_date != undefined && this.to_date != '' && this.from != undefined && this.from != '' && this.to != undefined && this.to != '') {
                        this.availability.push({
                            type: "time:range",
                            bookable: "yes",
                            priority: 10,
                            from: this.from,
                            to: this.to,
                            from_date: this.from_date,
                            to_date: this.to_date
                        });
                        this.from = '';
                        this.to = '';
                        this.from_date = '';
                        this.to_date = '';
                    }
                    else {
                        this.showAlert('No sea seleccionado ninguna opción', '<strong>Error:</strong> Por favor selecciona todos los campos');
                        break;
                    }
                }
            }
        }
    };
    NewProductPage.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK'],
        });
        alert.present();
    };
    NewProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-product',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\new-product\new-product.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img style="max-width: 150px;" src="{{values.avatar}}" />\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <div class="card2"> -->\n    <ion-list>\n    <form #f="ngForm" >\n        <!-- <div   item-left style="margin-left:16px; margin-right: 16px; display: inline-flex;">\n          <img tappable *ngFor="let item of form.images; let i = index;" src="{{item.src}}" style="width: 80px; height: 80px; padding: 3px; display: inline; border: 1px solid #f5fdff" (click)="replaceImage(i)">\n          <div class="spinner"><ion-spinner *ngIf="uploadingImageSpinner" name="circles" class="add-image-icon"></ion-spinner></div>\n          <ion-icon *ngIf="!uploadingImageSpinner" color="medium" name="add-circle-outline" class="add-image-icon" (click)="picker()"></ion-icon>\n        </div> -->\n        <!-- *ngIf="service.options.vendors_write_product_fields?.includes(\'images\')" -->\n        <div   item-left style="margin-left:16px; margin-right: 16px; display: inline-flex;">\n          <img tappable *ngFor="let item of form.images; let i = index;" src="{{item.src}}" style="width: 80px; height: 80px; padding: 3px; display: inline; border: 1px solid #f5fdff" (click)="replaceImage(i)">\n          <div class="spinner"><ion-spinner *ngIf="uploadingImageSpinner" name="circles" class="add-image-icon"></ion-spinner></div>\n          <ion-icon *ngIf="!uploadingImageSpinner" color="medium" name="add-circle-outline" class="add-image-icon" (click)="picker()"></ion-icon>\n        </div>\n\n        <!-- <button (click)="upload2()" ion-button>Take Pic & Upload </button> -->\n\n        <ion-item>\n          <!-- <ion-label>Nombre servicio</ion-label> -->\n           <ion-input placeholder="Nombre servicio" type="text"  [(ngModel)]="name" name="product_name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n           <ion-textarea placeholder="Descripcion del servicio"  [(ngModel)]="description" name="description"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n           <ion-textarea placeholder="Descripcion corta del servicio" [(ngModel)]="short_description" name="short_description"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n           <ion-input placeholder="Costo Base" type="text" [(ngModel)]="cost" name="cost"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="Costo por Bloque" type="number" [(ngModel)]="block_cost" name="block_cost"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input placeholder="Visualización de costo" type="number" [(ngModel)]="display_cost" name="display_cost"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Tipo de servicio</ion-label>\n          <ion-select  [(ngModel)]="categoriesValue" (ngModelChange)="onChange($event)" name="categories" interface="action-sheet">\n            <ion-option *ngFor="let item of getCategory" [value]="{id:item.id, name:item.name}">{{item.name}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <div style="display: contents; max-width: 350px;">\n          <ion-chip *ngFor="let item of categories" >\n            <ion-label color="secondary">{{item.name}}</ion-label>\n            <button ion-button clear color="dark" (click)="deleteTipoServicio(item.id)">\n              <ion-icon name="close-circle"></ion-icon>\n            </button>\n          </ion-chip>\n        </div>\n\n\n        <!-- <ion-item>\n          <ion-label>Select</ion-label>\n          <ion-select class="custom-options" [(ngModel)]="categoryValue"  interface="action-sheet" name="category">\n            <ion-select-option *ngFor="let item of getCategory" [value]="item.name">{{item.name}}</ion-select-option>\n          </ion-select>\n        </ion-item> -->\n        <!-- <ion-item>\n            <ion-select style="max-width: 80%;"\n          [(ngModel)]="categoryValue" >\n            <div *ngFor="let item of getCategory"">\n                <ion-option\n                [value]="item.name">\n                  {{item.name}}\n                </ion-option>\n            </div>\n          </ion-select>\n        </ion-item> -->\n\n        <br>\n        <div class="card2">\n          <!-- <ion-item>\n            <ion-label>Select</ion-label>\n            <ion-select class="custom-options" [(ngModel)]="selectDay"  interface="action-sheet" name="selDay">\n              <ion-option value="{{item.name}}" *ngFor="let item of days" >{{item.name}}</ion-option>\n            </ion-select>\n          </ion-item> -->\n\n          <ion-item>\n            <ion-label>Fecha Inicia</ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD" display-timezone="utc" [(ngModel)]="from_date" name="iniDate"></ion-datetime>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Fecha Finaliza</ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD" display-timezone="utc" [(ngModel)]="to_date" name="endDate"></ion-datetime>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Hora Inicia</ion-label>\n            <ion-datetime displayFormat="HH:mm" display-timezone="utc" [(ngModel)]="from" name="iniHour" minuteValues="0,30"></ion-datetime>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Hora Finaliza</ion-label>\n            <ion-datetime displayFormat="HH:mm" display-timezone="utc" [(ngModel)]="to" name="endHour" minuteValues="0,30"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <button ion-button (click)="addAvailability()">\n              <ion-icon name="save"></ion-icon> Agregar Disponibilidad\n            </button>\n          </ion-item>\n          <ion-grid >\n            <ion-row class="ion-align-items-center">\n              <ion-col style="background-color:#76a7ab; color: #fff; margin-right: 1px;">\n                 <div style="margin: 0 auto;  text-align: center">Rango</div>\n              </ion-col>\n              <ion-col style="background-color:#76a7ab; color: #fff;">\n                <div style="margin: 0 auto;text-align: center;">To</div>\n              </ion-col>\n              <ion-col style="background-color:#76a7ab; color: #fff;  margin-left: 1px;">\n                <div style="margin: 0 auto;  border:1px;"></div>\n              </ion-col>\n            </ion-row>\n            <ion-row class="ion-align-items-center" *ngFor="let item of availability"  style="border-bottom: 1px solid #ddd;">\n                <ion-col style="margin-right: 1px;">\n                  <div style="margin: 0 auto; width: 100%;">\n                    <span>{{item.from_date}}</span>\n                    <span>{{item.from}}</span>\n                  </div>\n              </ion-col>\n              <ion-col>\n                <div style="margin: 0 auto; width: 100%;">\n                    <span>{{item.to_date}}</span>\n                    <span>{{item.to}}</span>\n                </div>\n              </ion-col>\n              <ion-col style="margin-right: 1px;">\n                <div style="margin: 0 auto; width: 100%; text-align: center;">\n                  <button\n                  ion-button\n                  (click)="deleteAvailability(item.from_date)"\n                  class="has-icon icon-only button" style="height: 1.0em!important; width: 0.1em!important;">\n                    <ion-icon class="ion-ios-close item-icon"></ion-icon>\n                  </button>\n                </div>\n              </ion-col>\n           </ion-row>\n          </ion-grid>\n\n          <!-- <div style="width: 100%; margin-top: 20px; background: #76a7ab; text-align: center; padding: 10px; color: white; cursor: pointer;">\n\n          </div> -->\n        </div>\n\n\n\n\n      <!-- <div class="availability">\n        <div><span>Tipo Rango</span></div>\n        <div><span>Rango</span></div>\n      </div>\n      <div class="availability2">\n        <ion-item><ion-input placeholder="Date Range" type="text" name="product_name"></ion-input></ion-item>\n        <ion-item>\n          <ion-datetime\n            placeholder="Desde" displayFormat="HH:mm" name="desde"\n            value="{{desde | date:\'yyyy-MM-dd\'}}"></ion-datetime>\n        </ion-item>\n      </div>\n     <div style="width: 100%; margin-top: 20px; background: #76a7ab; text-align: center; padding: 10px; color: white; cursor: pointer;">\n        <span>Guardar servicio</span>\n     </div> -->\n     <!-- <ion-grid >\n       <ion-row>\n         <ion-col>\n          <button  style="font-size: x-small;font-weight: bold; color:#999; padding:5px; margin-top: 10px;" text-uppercase\n          >{{"Agregar Rango" | translate}}\n          </button>\n         </ion-col>\n       </ion-row>\n       <ion-row class="ion-align-items-center">\n         <ion-col style="background-color:#76a7ab; color: #fff; margin-right: 1px;">\n            <div style="margin: 0 auto; width: 50%;">Tipo Rango</div>\n         </ion-col>\n         <ion-col style="background-color:#76a7ab; color: #fff;">\n           <div style="margin: 0 auto; width: 50%; border:1px;">Rango</div>\n        </ion-col>\n       </ion-row>\n       <ion-row class="ion-align-items-center">\n        <ion-col style="margin-right: 1px;">\n           <div style="margin: 0 auto; width: 100%;">\n            <ion-item>\n              <ion-label>Select</ion-label>\n              <ion-select class="custom-options" [(ngModel)]="selectDay"  interface="action-sheet" name="day">\n                <ion-select-option *ngFor="let item of days" [value]="item.name">{{item.name}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div style="margin: 0 auto; width: 100%;">\n            <ion-item>\n              <ion-label>Select</ion-label>\n              <ion-datetime displayFormat="HH:mm" display-timezone="utc"></ion-datetime>\n            </ion-item>\n          </div>\n       </ion-col>\n      </ion-row>\n     </ion-grid> -->\n     </form>\n    </ion-list>\n  <!-- </div> -->\n\n  <!-- <div class="card tabs-container">\n    <nav #tabs_control class="tabs-control">\n      <a href="#info">Informacion</a>\n      <a href="#details">Detalle</a>\n      <a href="#lorem">Lorem Ipsum</a>\n      <div id="indicator" #indicator class="indicator"></div>\n    </nav>\n    <div  #tabs class="tabs">\n      <div class="container">\n        <div  #tab class="tab" id="info">\n          <p>Lorem ipsum dolor sit amet consectetur\n             adipisicing elit. Nostrum, facilis vitae dolores consectetur nesciunt reiciendis impedit mollitia, odio, aut quibusdam quos eius earum odit reprehenderit illo ad autem velit tempore!</p>\n        </div>\n        <div  class="tab" id="details">\n          <p>Lorem ipsum dolor sit amet consectetur\n             adipisicing elit. Nostrum, facilis vitae dolores consectetur nesciunt reiciendis impedit mollitia, odio, aut quibusdam quos eius earum odit reprehenderit illo ad autem velit tempore!</p>\n        </div>\n        <div  class="tab" id="lorem">\n          <p>Lorem ipsum dolor sit amet consectetur\n             adipisicing elit. Nostrum, facilis vitae dolores consectetur nesciunt reiciendis impedit mollitia, odio, aut quibusdam quos eius earum odit reprehenderit illo ad autem velit tempore!</p>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <div>\n    <div *ngIf="navParams.data.id" style="margin:0 auto; width: 220px;">\n      <button ion-button style="font-family: \'Courier New\', Courier, monospace;" (click)="updateProduct()">Update Servicio</button>\n    </div>\n    <div *ngIf="!navParams.data.id" style="margin:0 auto; width: 220px;">\n      <button ion-button style="font-family: \'Courier New\', Courier, monospace;" (click)="sendProduct()">Guardar Servicio</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\new-product\new-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer_ngx__["a" /* FileTransfer */]])
    ], NewProductPage);
    return NewProductPage;
}());

//# sourceMappingURL=new-product.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_category_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_products_providers_pages_products_providers__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CategoryServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryServicePage = /** @class */ (function () {
    function CategoryServicePage(navCtrl, navParams, values, service, alert, categoryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.values = values;
        this.service = service;
        this.alert = alert;
        this.categoryService = categoryService;
        this.HiddenList = true;
        this.HiddenListCat = true;
        this.HiddenSearchLocation = false;
        this.HideRadius = false;
        this.HideBtnSearch = false;
        this.radius = 0;
        this.miLatitude = 0;
        this.miLongitude = 0;
        this.checked = false;
        this.has_more_items = true;
        this.loading = true;
        this.items = [];
        this.options = [];
        this.service.getProducts();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.autocompleteCat = { input: '' };
        this.itemsCategory = [];
        this.lat = '';
        this.long = '';
        this.category = [];
    }
    CategoryServicePage.prototype.gohome = function () {
        this.navCtrl.parent.select(0);
    };
    CategoryServicePage.prototype.addServicio = function (e, cat) {
        this.category.push({ id: cat });
        // let index;
        // if(this.category.length != 0){
        //   for(let i in this.category){
        //     console.log('hi',this.category[i].id, cat);
        //     if(this.category[i].id == cat){
        //       console.log('elimino ');
        //       index = this.category.map(result => result.id).indexOf(cat);
        //       if ( index > -1 ) {
        //         this.category.splice( index, 1 );
        //       }
        //     }else if(this.category[i].id != cat){
        //       this.category.push({id:cat});
        //     }
        //   }
        // }else{
        //   this.category.push({id:cat});
        // }
        // let index;
        // if(this.category.length != 0){
        //   index = this.category.map(result => result.from_date).indexOf(cat);
        //   console.log((index));
        //   if ( index > -1 ) {
        //       this.category.splice( index, 1 );
        //   }
        // }else{
        //   this.category.push({id:cat})
        // }
    };
    CategoryServicePage.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK'],
        });
        alert.present();
    };
    CategoryServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryServicePage');
    };
    CategoryServicePage.prototype.updateCategory = function () {
        this.data = {
            categories: this.category
        };
        this.service.updateProduct(this.data, this.setProduct);
        this.showAlert('Actualizado correctamente', '<strong>Exito:</strong> Has actualizado las categorías correctamente');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_products_providers_pages_products_providers__["a" /* PagesProductsProvidersPage */]);
    };
    CategoryServicePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.categoryService.getProductsByIdVendor()
            .then(function (resultsByVendor) {
            _this.setProduct = resultsByVendor;
        });
    };
    CategoryServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-category-service',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\category-service\category-service.html"*/'<ion-header class="settings-header">\n\n  <ion-navbar color="header">\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <!-- <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title> -->\n\n      <ion-title >\n\n          <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n\n      </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="support" padding [content]="content">\n\n  <div class="sub-header">\n\n    <h1>Mis Servicios</h1>\n\n  </div>\n\n  <ion-list *ngIf="service.categories" style="margin-top: 100px;">\n\n    <ion-item *ngFor="let item of service.mainCategories" style="margin-top:10px; border-radius: 5px;" class="card2">\n\n      <ion-thumbnail item-left>\n\n        <img src="{{item.image.src}}" />\n\n      </ion-thumbnail>\n\n      <ion-label  class="heading text-center" style="font-size: 18px; font-weight: 900;">\n\n        {{item.name}}\n\n      </ion-label>\n\n\n\n      <ion-checkbox item-right color="dark" (click)="addServicio($event,item.id)"></ion-checkbox>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n  <div>\n\n    <div style="margin:0 auto; width: 220px;">\n\n      <button ion-button style="font-family: \'Courier New\', Courier, monospace;" (click)="updateCategory()">Actualiza Tus Servicios</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\category-service\category-service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_4__providers_service_category_service__["a" /* CategoryService */]])
    ], CategoryServicePage);
    return CategoryServicePage;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(579);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_post_post__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_orders_vendor_orders_vendor__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_booking_vendor_booking_vendor__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_booking_details_booking_details__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_test_test__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_iframe_iframe__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_account_register_register__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_account_wishlist_wishlist__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_account_account_account__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_dash_proveedor_dash_proveedor__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_chat_chat__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_new_product_new_product__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cart_cart__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_checkout_billing_address_form_billing_address_form__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_checkout_order_summary_order_summary__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_checkout_terms_condition_terms_condition__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_product_product__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_products_products__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_search_search__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_products_list_products_list__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_pages_support_pages_support__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_services_services__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_pages_products_providers_pages_products_providers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_category_service_category_service__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_orders_orders__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_end_orders_end_orders__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_orders_detail_orders_detail__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_modal_modal__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_status_bar__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_splash_screen__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_in_app_browser__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_native_storage__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_service_cart_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_service_wishlist_service__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_service_category_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_service_checkout_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_service_config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_service_product_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_service_search_service__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_pipe_pipe__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_service_endorders__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_call_number__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_email_composer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_app_rate__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_social_sharing__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_common_http__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ngx_translate_core__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ngx_translate_http_loader__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_onesignal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ionic_native_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66_ion2_calendar__ = __webpack_require__(929);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_66_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ionic_native_geolocation_ngx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ionic_native_native_geocoder__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ionic_native_background_mode__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70_ngx_socket_io__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__ionic_native_file_transfer_ngx__ = __webpack_require__(568);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































/*------------------------Providers----------------------------------*/

















//import { PhotoViewer } from '@ionic-native/photo-viewer';













// import {ImagePicker} from '@ionic-native/image-picker';

// import socket io


// const config:SocketIoConfig  = { url:'http://localhost:3001', options:{}}
var config = { url: 'https://websockethomer.herokuapp.com/', options: {} };
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_63__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_orders_vendor_orders_vendor__["a" /* OrdersVendor */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_booking_vendor_booking_vendor__["a" /* BookingVendor */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_booking_details_booking_details__["a" /* BookingDetails */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_test_test__["a" /* test */],
                __WEBPACK_IMPORTED_MODULE_15__pages_iframe_iframe__["a" /* IframePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_post_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_16__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_17__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_account_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_24__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_25__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_26__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_products_list_products_list__["a" /* ProductsListPage */],
                __WEBPACK_IMPORTED_MODULE_54__providers_pipe_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_31__pages_pages_support_pages_support__["a" /* PagesSupportPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_dash_proveedor_dash_proveedor__["a" /* DashProveedorPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_pages_products_providers_pages_products_providers__["a" /* PagesProductsProvidersPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_new_product_new_product__["a" /* NewProductPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_category_service_category_service__["a" /* CategoryServicePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_end_orders_end_orders__["a" /* EndOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_37__pages_orders_detail_orders_detail__["a" /* OrdersDetailPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_modal_modal__["a" /* ModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_60__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_66_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_61__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_70_ngx_socket_io__["b" /* SocketIoModule */].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_62__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_62__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_60__angular_common_http__["a" /* HttpClient */]],
                    },
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_orders_vendor_orders_vendor__["a" /* OrdersVendor */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_booking_vendor_booking_vendor__["a" /* BookingVendor */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_booking_details_booking_details__["a" /* BookingDetails */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_test_test__["a" /* test */],
                __WEBPACK_IMPORTED_MODULE_15__pages_iframe_iframe__["a" /* IframePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_post_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_16__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_17__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_account_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_24__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_25__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_26__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_products_list_products_list__["a" /* ProductsListPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_pages_support_pages_support__["a" /* PagesSupportPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_dash_proveedor_dash_proveedor__["a" /* DashProveedorPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_pages_products_providers_pages_products_providers__["a" /* PagesProductsProvidersPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_new_product_new_product__["a" /* NewProductPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_category_service_category_service__["a" /* CategoryServicePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_end_orders_end_orders__["a" /* EndOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_37__pages_orders_detail_orders_detail__["a" /* OrdersDetailPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_modal_modal__["a" /* ModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_71__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_44__providers_service_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_45__providers_service_wishlist_service__["a" /* WishlistService */],
                __WEBPACK_IMPORTED_MODULE_46__providers_service_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_47__providers_service_checkout_service__["a" /* CheckoutService */],
                __WEBPACK_IMPORTED_MODULE_48__providers_service_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_49__providers_service_functions__["a" /* Functions */],
                __WEBPACK_IMPORTED_MODULE_50__providers_service_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_51__providers_service_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_52__providers_service_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_53__providers_service_values__["a" /* Values */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_59__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_58__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_56__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_65__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_67__ionic_native_geolocation_ngx__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_68__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_69__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_71__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_55__providers_service_endorders__["a" /* EndOrdesService */],
                __WEBPACK_IMPORTED_MODULE_69__ionic_native_background_mode__["a" /* BackgroundMode */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicErrorHandler"] },
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsPage = /** @class */ (function () {
    function ProductsPage(nav, popoverCtrl, service, params, values, functions) {
        var _this = this;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.listview = false;
        this.shouldShowCancel = true;
        this.showFilters = false;
        this.sort = 0;
        this.data = {};
        this.filter = {};
        this.q = '';
        if (params.data.slug != '') {
            this.filter['filter[category]'] = params.data.slug;
            this.filter.id = params.data.id;
        }
        if (params.data.productslocation != '') {
            this.filter['include'] = params.data.productslocation;
        }
        this.categoryName = params.data.name;
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.subCategories = [];
        this.items = [];
        this.quantity = '1';
        this.subCategories = params.data.categories;
        this.service.load(this.filter).then(function (results) {
            _this.products = results;
            var _loop_1 = function (index) {
                var element = _this.products[index];
                var resources = element.resource_block_costs;
                var prices = new Array();
                for (var key in resources) {
                    prices = prices.concat([resources[key]]);
                }
                if (Object.keys(resources).length) {
                    var minPrice_1 = Math.min.apply(Math, prices);
                    _this.products.map(function (element) {
                        return (element.minPrice = minPrice_1);
                    });
                }
            };
            // this.products.forEach((element,index,arr) => {
            //   if(element.wc_variations){
            //     arr[index].wc_variations = JSON.parse(element.wc_variations)
            //   }
            // });
            for (var index = 0; index < _this.products.length; index++) {
                _loop_1(index);
            }
        });
    }
    ProductsPage_1 = ProductsPage;
    ProductsPage.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.categories;
        this.nav.push(ProductsPage_1, this.items);
    };
    ProductsPage.prototype.parseText = function (id, count, offset, obj2) {
        var text = '{';
        text += '"category' + '":"' + id + '"}';
        var obj1 = JSON.parse(text);
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    };
    ProductsPage.prototype.getProducts = function (item) {
        this.nav.push(ProductsPage_1, item);
    };
    ProductsPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
    };
    ProductsPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    ProductsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service
            .loadMore(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    ProductsPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
        }
        console.log('resultados', results);
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    ProductsPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    ProductsPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    ProductsPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id).then(function (results) { return (_this.status = results); });
    };
    ProductsPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id).then(function (results) { return (_this.status = results); });
    };
    ProductsPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
        }
        else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(':');
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then(function (results) { return _this.updateCart(results); });
        }
    };
    ProductsPage.prototype.updateCart = function (a) { };
    ProductsPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter['filter[q]'] = $event.srcElement.value;
        console.log(this.filter['filter[q]']);
        this.service.search(this.filter).then(function (results) { return (_this.products = results); });
    };
    ProductsPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    ProductsPage.prototype.getFilter = function () {
        this.showFilters = true;
        this.has_more_items = false;
    };
    ProductsPage.prototype.cancel = function () {
        this.showFilters = false;
        this.has_more_items = true;
    };
    ProductsPage.prototype.chnageFilter = function (sort) {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        // if (sort == 0) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'date'
        // }
        // if (sort == 1) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'name'
        // } else if (sort == 2) {
        //   this.filter['filter[order]'] = 'DESC'
        //   this.filter['filter[orderby]'] = 'name'
        // } else if (sort == 3) {
        //   this.filter['filter[order]'] = 'ASC'
        //   this.filter['filter[orderby]'] = 'meta_value_num'
        //   this.filter['filter[orderby_meta_key]'] = '_price'
        // } else if (sort == 4) {
        //   this.filter['filter[order]'] = 'DESC'
        //   this.filter['filter[orderby]'] = 'meta_value_num'
        //   this.filter['filter[orderby_meta_key]'] = '_price'
        // }
        // FILTROS SHIT EN FUNCION
        if (sort == 5) {
            this.filter['orderby'] = 'menu_order';
        }
        else if (sort == 6) {
            this.filter['orderby'] = 'popularity';
        }
        else if (sort == 7) {
            this.filter['orderby'] = 'rating';
        }
        else if (sort == 8) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'asc';
        }
        else if (sort == 9) {
            this.filter['orderby'] = 'date';
            this.filter['order'] = 'desc';
        }
        else if (sort == 10) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'asc';
        }
        else if (sort == 11) {
            this.filter['orderby'] = 'price';
            this.filter['order'] = 'desc';
        }
        else if (sort == 12) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'asc';
        }
        else if (sort == 13) {
            this.filter['orderby'] = 'title';
            this.filter['order'] = 'desc';
        }
        /*this.filter['filter[meta_query][key]'] = "_price";
            this.filter['filter[meta_query][value]'] = '[0,10]';
            this.filter['filter[meta_query][compare]'] = "BETWEEN";*/
        this.service.load(this.filter).then(function (results) { return (_this.products = results); });
    };
    ProductsPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.functions.showAlert('Warning', 'You must login to add product to wishlist');
        }
    };
    ProductsPage.prototype.update = function (results, id) {
        if (results.success == 'Success') {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[id] = true;
        }
        else {
        }
    };
    ProductsPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductsPage.prototype.updateWish = function (results, id) {
        if (results.status == 'success') {
            this.values.wishlistId[id] = false;
        }
    };
    ProductsPage = ProductsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-products',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\products\products.html"*/'<!-- <ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="categoryName">\n\n      <span [innerHTML]="categoryName"></span>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button\n\n        ion-button\n\n        icon-only\n\n        light\n\n        class="has-icon icon-only has-badge"\n\n        (click)="getCart()"\n\n      >\n\n        <ion-icon\n\n          color="icon-color"\n\n          name="md-basket"\n\n          class="item-icon"\n\n        ></ion-icon>\n\n        <ion-badge class="badge badge-light" *ngIf="values.count">\n\n          {{values.count}}\n\n        </ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-header>\n\n  <ion-toolbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img style="max-width: 150px;" src="{{values.avatar}}" />\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="products">\n\n\n\n  <!-- <ion-fab bottom right slot="fixed">\n\n    <button ion-fab>\n\n      <ion-icon name="chatboxes"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="left">\n\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.messenger.com/t/thehexchange">\n\n        <ion-icon style="background: #2196f3;" name="custom-facebook"></ion-icon>\n\n      </a>\n\n      <a button ion-fab style="background-color: #ffffff;" href="https://www.instagram.com/thehexchange/">\n\n        <ion-icon style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);" name="custom-instagram"></ion-icon>\n\n      </a>\n\n    </ion-fab-list>\n\n  </ion-fab> -->\n\n\n\n  <ion-slides initialSlide="0" speed="3000" loop="false" pager="true" dir="rtl">\n\n    <ion-slide>\n\n      <div class="overlay">\n\n        <img src="{{values.slider}}" />\n\n      </div>\n\n      <div class="title-home-banner">\n\n        {{\'Proveedores de Servicios\' | translate}}\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <ion-row>\n\n    <ion-col col-9> \n\n      <ion-searchbar class="searchbar-category" placeholder="Seleccionar Categoria"></ion-searchbar>\n\n    </ion-col>\n\n    <ion-col col-3 style="align-self: center;font-weight: bold;padding: 0;">\n\n      \n\n      <button class="btn-filter" (click)="getFilter()">\n\n        Filtrar<img src="../../assets/icon/filter.svg" alt="">\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div *ngIf="showFilters" class="filter">\n\n    <ion-list\n\n      radio-group\n\n      [(ngModel)]="sort"\n\n      (ngModelChange)="chnageFilter(sort)"\n\n    >\n\n      <ion-list-header>\n\n        <b>\n\n          {{"Sort" | translate}}\n\n        </b>\n\n      </ion-list-header>\n\n      \n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Default" | translate}}</ion-label>\n\n        <ion-radio value="5"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by popularity" | translate}}</ion-label>\n\n        <ion-radio value="6"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by average rating" | translate}}</ion-label>\n\n        <ion-radio value="7"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by date: ASC" | translate}}</ion-label>\n\n        <ion-radio value="8"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by date: DESC" | translate}}</ion-label>\n\n        <ion-radio value="9"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by price: low to high" | translate}}</ion-label>\n\n        <ion-radio value="10"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by price: high to low" | translate}}</ion-label>\n\n        <ion-radio value="11"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by name: ASC" | translate}}</ion-label>\n\n        <ion-radio value="12"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label text-wrap>{{"Sort by name: DESC" | translate}}</ion-label>\n\n        <ion-radio value="13"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="button-color" (click)="cancel()">\n\n      {{"CANCEL" | translate}}\n\n    </button>\n\n  </div>\n\n\n\n  <div *ngIf="!showFilters">\n\n    <!-- <ion-searchbar\n\n      placeholder="Cuido, Niñera, Profesional"\n\n      [(ngModel)]="q"\n\n      [showCancelButton]="shouldShowCancel"\n\n      (ionInput)="onInput($event)"\n\n      (ionCancel)="onCancel($event)"\n\n    ></ion-searchbar>\n\n    <div *ngIf="!this.filter[\'filter[q]\'] || this.filter[\'filter[q]\'] == \'\'">\n\n      <div *ngIf="subCategories" class="category">\n\n        <ion-item *ngIf="subCategories.length" no-lines class="category-name">\n\n          <ion-label text-uppercase>{{"Categories" | translate}}</ion-label>\n\n        </ion-item>\n\n        <div class="sub-category">\n\n          <ion-item *ngFor="let item of subCategories">\n\n            <ion-thumbnail item-left>\n\n              <a (click)="getCategory(item.id, item.slug)">\n\n                <img *ngIf="item.image?.src" src="{{item.image.src}}" />\n\n              </a>\n\n            </ion-thumbnail>\n\n            <a (click)="getCategory(item.id, item.slug)">\n\n              <h2>\n\n                <span [innerHTML]="item.name"></span>\n\n              </h2>\n\n            </a>\n\n            <ion-icon\n\n              item-right\n\n              ios="ios-arrow-forward"\n\n              md="md-arrow-forward"\n\n              (click)="getCategory(item.id, item.slug, item.name)"\n\n            ></ion-icon>\n\n          </ion-item>\n\n        </div>\n\n      </div>\n\n    </div> -->\n\n\n\n    <ion-spinner *ngIf="!products" name="crescent"></ion-spinner>\n\n    <div *ngIf="products">\n\n      <h2\n\n        *ngIf="!products.length"\n\n        style="font-size: 15px;text-align: center;margin-top: 30px"\n\n      >\n\n        No products found!.\n\n      </h2>\n\n    </div>\n\n    <div *ngIf="products !== undefined" class="products-listing">\n\n      <div *ngIf="products.length">\n\n        <div *ngIf="values.listview">\n\n          <!-- <ion-item no-lines class="item-name">\n\n            <ion-label text-uppercase>{{"Providers" | translate}}</ion-label>\n\n          <button ion-button icon-only item-right clear color="button-color" (click)="getFilter()">\n\n            <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-only item-right clear color="button-color" (click)="setGridView()">\n\n            <ion-icon ios="ios-grid" md="md-grid"></ion-icon>\n\n          </button>\n\n          </ion-item> -->\n\n          <ion-list>\n\n            <div class="item-list" *ngFor="let item of products">\n\n              <ion-item class="left-padding" no-lines>\n\n                <ion-thumbnail item-left class="stock-list">\n\n                  <img\n\n                    [style.height.rem]="values.dimensions.imageListViewHeight"\n\n                    tappable\n\n                    (click)="getProduct(item)"\n\n                    src="{{item.images[0].src}}"\n\n                  />\n\n                  <button\n\n                    class="out-of-stock-button"\n\n                    ion-button\n\n                    color="danger"\n\n                    *ngIf="item.stock_status !== \'instock\'"\n\n                  >\n\n                    {{"OUTOFSTOCK" | translate}}\n\n                  </button>\n\n                </ion-thumbnail>\n\n\n\n                <!--div tappable (click)="getProduct(item.id)"-->\n\n                <div class="product-name-top">\n\n                  <ion-row>\n\n                    <ion-col width-80 class="product-label">\n\n                      <div tappable (click)="getProduct(item)">\n\n                        <h2 *ngIf="item.title">{{item.title}}</h2>\n\n                        <h2 *ngIf="item.name">{{item.name}}</h2>\n\n                      </div>\n\n                    </ion-col>\n\n                    <ion-col width-20 class="wishlist-label">\n\n                      <ion-icon\n\n                        name="md-heart"\n\n                        color="icon-color"\n\n                        class="wishlist-button"\n\n                        *ngIf="values.wishlistId[item.id]"\n\n                        (click)="removeFromWishlist(item.id)"\n\n                      ></ion-icon>\n\n                      <ion-icon\n\n                        name="md-heart-outline"\n\n                        color="icon-color"\n\n                        class="wishlist-button"\n\n                        *ngIf="!values.wishlistId[item.id]"\n\n                        (click)="addToWishlist(item.id)"\n\n                      ></ion-icon>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <p\n\n                    tappable\n\n                    (click)="getProduct(item)"\n\n                    class="max-lines"\n\n                    [innerHTML]="item.description"\n\n                  ></p>\n\n                </div>\n\n\n\n                <div class="price-bottom-list">\n\n                  <h3 class="price-regular" *ngIf="!item.minPrice">\n\n                    Starting from {{1*item.price |\n\n                    currency:values.currency:true:\'1.2-2\'}}\n\n                  </h3>\n\n\n\n                  <h3 class="price-regular" *ngIf="item.minPrice">\n\n                    Starting from {{1*item.minPrice |\n\n                    currency:values.currency:true:\'1.2-2\'}}\n\n                  </h3>\n\n                  <!-- <h3 class="price-special" *ngIf="item.sale_price">\n\n                    {{1*item.sale_price |\n\n                    currency:values.currency:true:\'1.2-2\'}}\n\n                  </h3>\n\n                  <h3 class="price-del" *ngIf="item.sale_price">\n\n                    <del>\n\n                      {{1*item.regular_price |\n\n                      currency:values.currency:true:\'1.2-2\'}}\n\n                    </del>\n\n                  </h3> -->\n\n                </div>\n\n                <!--/div-->\n\n\n\n                <div class="bottom-right-button">\n\n                  <!-- <button\n\n                    ion-button\n\n                    [disabled]="item.stock_status !== \'instock\'"\n\n                    text-uppercase\n\n                    color="button-color"\n\n                    item-right\n\n                    outline\n\n                    *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0"\n\n                    (click)="addToCart(item.id)"\n\n                  >\n\n                    {{"Add" | translate}}\n\n                  </button> -->\n\n                  <button\n\n                    ion-button\n\n                    icon-only\n\n                    item-right\n\n                    clear\n\n                    color="button-color"\n\n                    *ngIf="values.cart[item.id] >= 1"\n\n                    (click)="deleteFromCart(item.id)"\n\n                  >\n\n                    <ion-icon\n\n                      ios="ios-remove-circle-outline"\n\n                      md="ios-remove-circle-outline"\n\n                    ></ion-icon>\n\n                  </button>\n\n                  <button\n\n                    ion-button\n\n                    item-right\n\n                    color="button-color"\n\n                    clear\n\n                    *ngIf="values.cart[item.id] >= 1"\n\n                  >\n\n                    {{values.cart[item.id]}}\n\n                  </button>\n\n                  <button\n\n                    ion-button\n\n                    icon-only\n\n                    item-right\n\n                    clear\n\n                    color="button-color"\n\n                    *ngIf="values.cart[item.id] >= 1"\n\n                    (click)="updateToCart(item.id)"\n\n                  >\n\n                    <ion-icon\n\n                      ios="ios-add-circle-outline"\n\n                      md="ios-add-circle-outline"\n\n                    ></ion-icon>\n\n                  </button>\n\n                </div>\n\n              </ion-item>\n\n            </div>\n\n          </ion-list>\n\n        </div>\n\n        <div *ngIf="!values.listview">\n\n          <!-- <ion-item no-lines class="item-name">\n\n            <ion-label text-uppercase>{{"Providers" | translate}}</ion-label>\n\n            <button ion-button icon-only item-right clear color="button-color" (click)="getFilter()">\n\n              <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only item-right clear color="button-color" (click)="setListView()">\n\n              <ion-icon ios="ios-list-box" md="ios-list-box"></ion-icon>\n\n            </button>\n\n          </ion-item> -->\n\n          <div class="card-background-page grid">\n\n            <ion-row class="row unlimited-items">\n\n              <ion-col class="col" *ngFor="let item of products">\n\n                <ion-card class="item-product">\n\n                  <ion-card-content class="stock">\n\n                    <img\n\n                      [style.height.px]="values.dimensions.imageGridViewHeight"\n\n                      tappable\n\n                      src="{{item.images[0].src}}"\n\n                      (click)="getProduct(item)"\n\n                    />\n\n                    <button\n\n                      ion-button\n\n                      color="danger"\n\n                      *ngIf="item.stock_status !== \'instock\'"\n\n                    >\n\n                      {{"OUTOFSTOCK" | translate}}\n\n                    </button>\n\n                    <ion-icon\n\n                      name="md-heart"\n\n                      color="icon-color"\n\n                      class="wishlist-button-grid"\n\n                      *ngIf="values.wishlistId[item.id]"\n\n                      (click)="removeFromWishlist(item.id)"\n\n                    ></ion-icon>\n\n                    <ion-icon\n\n                      name="md-heart-outline"\n\n                      color="icon-color"\n\n                      class="wishlist-button-grid"\n\n                      *ngIf="!values.wishlistId[item.id]"\n\n                      (click)="addToWishlist(item.id)"\n\n                    ></ion-icon>\n\n                  </ion-card-content>\n\n                  <div tappable (click)="getProduct(item)" class="card-name">\n\n                    <ion-label *ngIf="item.title">{{item.title}}</ion-label>\n\n                    <ion-label *ngIf="item.name">{{item.name}}</ion-label>\n\n                  </div>\n\n\n\n                    <ion-item no-padding no-lines class="item-background">\n\n                      {{"Descripción" | translate}} :\n\n                    </ion-item>\n\n                    <ion-item class="description" text-wrap no-lines>\n\n                      <div [innerHTML]="item.description"></div>\n\n                    </ion-item>\n\n\n\n                    <ion-item no-padding no-lines class="item-background">\n\n                      {{"Categoria" | translate}} : {{item.categories[0].name}}\n\n                    </ion-item>\n\n\n\n                    <ion-item no-padding>\n\n                      <span item-left *ngIf="item.average_rating" class="rating">\n\n                        <!-- <span *ngIf="item.rating_count > 0">\n\n                          ({{item.rating_count}})\n\n                        </span> -->\n\n                        <span\n\n                          class="star-icon"\n\n                          [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}"\n\n                        >\n\n                          &#x2605;\n\n                        </span>\n\n                        <span\n\n                          class="star-icon"\n\n                          [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}"\n\n                        >\n\n                          &#x2605;\n\n                        </span>\n\n                        <span\n\n                          class="star-icon"\n\n                          [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}"\n\n                        >\n\n                          &#x2605;\n\n                        </span>\n\n                        <span\n\n                          class="star-icon"\n\n                          [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}"\n\n                        >\n\n                          &#x2605;\n\n                        </span>\n\n                        <span\n\n                          class="star-icon"\n\n                          [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}"\n\n                        >\n\n                          &#x2605;\n\n                        </span>\n\n                      </span>\n\n                    </ion-item>\n\n                    <ion-item no-padding no-lines class="item-background">\n\n                      <button style="font-weight: bold;" ion-button item-center medium color="button-color" text-uppercase\n\n                      (click)="getProduct(item)">{{"CONTRATAR" | translate}}\n\n                      </button>\n\n                    </ion-item>\n\n                  \n\n                </ion-card>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <ion-infinite-scroll\n\n        (ionInfinite)="doInfinite($event)"\n\n        *ngIf="has_more_items"\n\n      >\n\n        <ion-infinite-scroll-content\n\n          loadingSpinner="crescent"\n\n          loadingText="{{\'Loading more items..\' | translate}}"\n\n        ></ion-infinite-scroll-content>\n\n      </ion-infinite-scroll>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], ProductsPage);
    return ProductsPage;
    var ProductsPage_1;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_products_products__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_address_address__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_orders_orders__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_register_register__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_checkout_order_summary_order_summary__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_account_wishlist_wishlist__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_product_product__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_post_post__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_rate__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_email_composer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_storage__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_account_account_account__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_account_booking_vendor_booking_vendor__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_account_test_test__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_iframe_iframe__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_pages_support_pages_support__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_chat_chat__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_rxjs_observable_timer__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_pages_products_providers_pages_products_providers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_category_service_category_service__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_dash_proveedor_dash_proveedor__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























// import { OrdersVendor } from '../pages/account/orders-vendor/orders-vendor';










var MyApp = /** @class */ (function () {
    function MyApp(statusBar, splashScreen, alertCtrl, config, oneSignal, emailComposer, appRate, platform, service, values, translateService, socialSharing, nativeStorage) {
        var _this = this;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.oneSignal = oneSignal;
        this.emailComposer = emailComposer;
        this.appRate = appRate;
        this.platform = platform;
        this.service = service;
        this.values = values;
        this.translateService = translateService;
        this.socialSharing = socialSharing;
        this.nativeStorage = nativeStorage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_account_login_login__["a" /* AccountLogin */];
        this.items = {};
        this.buttonLanguagesSettings = false;
        this.showSplash = true;
        this.service.getCustomer()
            .then(function (results) { return _this.customers = results; });
        this.Languages = [];
        platform.ready().then(function () {
            statusBar.styleDefault();
            statusBar.backgroundColorByHexString('#f4f5f8');
            _this.splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_30_rxjs_observable_timer__["timer"])(2000).subscribe(function () { return _this.showSplash = false; });
            _this.service.load().then(function (results) { return _this.handleService(results); });
            _this.nativeStorage.getItem('blocks').then(function (data) {
                if (data) {
                    _this.service.blocks = data.blocks;
                    _this.values.settings = data.settings;
                    _this.values.calc(platform.width());
                }
            }, function (error) { return console.error(error); });
            _this.nativeStorage.getItem('categories').then(function (data) {
                if (data) {
                    _this.service.categories = data;
                    _this.service.mainCategories = [];
                    for (var i = 0; i < _this.service.categories.length; i++) {
                        if (_this.service.categories[i].parent == '0') {
                            _this.service.mainCategories.push(_this.service.categories[i]);
                        }
                    }
                }
            }, function (error) { return console.error(error); });
        });
    }
    MyApp.prototype.handleService = function (results) {
        var _this = this;
        if (this.values.settings.app_dir == 'rtl')
            this.platform.setDir('rtl', true);
        //cambiar luego en la configuracion del wordpress en el plugin
        this.translateService.setDefaultLang('spanish');
        // this.translateService.setDefaultLang(this.values.settings.language);
        this.values.calc(this.platform.width());
        if (this.values.isLoggedIn) {
            if (this.values.subscription.length > 0) {
                console.log('entro:', this.values.isLoggedIn);
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_29__pages_tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                console.log('entro:', this.values.isLoggedIn);
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_25__pages_account_test_test__["a" /* test */]);
            }
        }
        else {
            console.log('entro else:', this.values.isLoggedIn);
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_account_login_login__["a" /* AccountLogin */]);
        }
        if (this.platform.is('cordova')) {
            this.oneSignal.startInit(this.values.settings.onesignal_app_id, this.values.settings.google_project_id);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            this.oneSignal.handleNotificationReceived().subscribe(function (result) {
                console.log(result);
            });
            this.oneSignal.handleNotificationOpened().subscribe(function (result) {
                if (result.notification.payload.additionalData.category) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_products_products__["a" /* ProductsPage */], { id: result.notification.payload.additionalData.category, slug: result.notification.payload.additionalData.slug, name: result.notification.payload.additionalData.name });
                }
                else if (result.notification.payload.additionalData.product) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */], { id: result.notification.payload.additionalData.product });
                }
                else if (result.notification.payload.additionalData.post) {
                    _this.post({ di: result.notification.payload.additionalData.post });
                }
                else if (result.notification.payload.additionalData.order) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_15__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */], { id: result.notification.payload.additionalData.order });
                }
            });
            this.oneSignal.getIds().then(function (identity) {
                console.log("agarro id", identity.userId, identity.userId);
                _this.values.pushToken = identity.pushToken;
                _this.values.userId = identity.userId;
            });
            this.oneSignal.endInit();
        }
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.getCategory = function (id, slug, name) {
        this.items = [];
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_products_products__["a" /* ProductsPage */], this.items);
    };
    MyApp.prototype.getCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.logout = function () {
        this.service.logout();
        this.values.wishlistId = [];
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_account_login_login__["a" /* AccountLogin */]);
    };
    MyApp.prototype.iframe = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_26__pages_iframe_iframe__["a" /* IframePage */]);
    };
    MyApp.prototype.chat = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_28__pages_chat_chat__["a" /* ChatPage */]);
    };
    MyApp.prototype.account = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_23__pages_account_account_account__["a" /* AccountPage */]);
    };
    MyApp.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_account_login_login__["a" /* AccountLogin */]);
    };
    MyApp.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_account_register_register__["a" /* AccountRegister */]);
    };
    MyApp.prototype.address = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_account_address_address__["a" /* Address */]);
    };
    MyApp.prototype.order = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_account_orders_orders__["a" /* Orders */]);
    };
    MyApp.prototype.orderVendor = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_29__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.pagesProductsProviders = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_31__pages_pages_products_providers_pages_products_providers__["a" /* PagesProductsProvidersPage */]);
    };
    MyApp.prototype.mycategories = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_32__pages_category_service_category_service__["a" /* CategoryServicePage */]);
    };
    MyApp.prototype.bookingVendor = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_24__pages_account_booking_vendor_booking_vendor__["a" /* BookingVendor */]);
    };
    MyApp.prototype.test = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_25__pages_account_test_test__["a" /* test */]);
    };
    MyApp.prototype.cart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.wishlist = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_account_wishlist_wishlist__["a" /* WishlistPage */]);
    };
    MyApp.prototype.shop = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_29__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.rateApp = function () {
        if (this.platform.is('cordova')) {
            this.appRate.preferences.storeAppURL = {
                ios: this.values.settings.rate_app_ios_id,
                android: this.values.settings.rate_app_android_id,
                windows: 'ms-windows-store://review/?ProductId=' + this.values.settings.rate_app_windows_id
            };
            this.appRate.promptForRating(true);
        }
    };
    MyApp.prototype.shareApp = function () {
        if (this.platform.is('cordova')) {
            var url = '';
            if (this.platform.is('android'))
                url = this.values.settings.share_app_android_link;
            else
                url = this.values.settings.share_app_ios_link;
            var options = {
                message: '',
                subject: '',
                // files: ['', ''],
                url: url,
                chooserTitle: ''
            };
            this.socialSharing.shareWithOptions(options);
        }
    };
    MyApp.prototype.setLang = function () {
        console.log(this.Languages);
        this.translateService.setDefaultLang(this.Languages);
    };
    MyApp.prototype.contact = function () {
        var email = {
            to: this.values.settings.support_email,
            subject: '',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    MyApp.prototype.support = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_27__pages_pages_support_pages_support__["a" /* PagesSupportPage */]);
    };
    MyApp.prototype.post = function (id) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_post_post__["a" /* Post */], id);
    };
    MyApp.prototype.dashboard = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_33__pages_dash_proveedor_dash_proveedor__["a" /* DashProveedorPage */]);
    };
    MyApp.prototype.openchat = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_28__pages_chat_chat__["a" /* ChatPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n  <div class="splashSpinner" style="background: url({{values.logoMenu}});"></div>\n</div>\n\n<ion-menu [content]="content" side="{{this.values?.settings?.app_dir}}">\n  <div class="menu-toolbar">\n    <ion-toolbar color="header">\n      <!-- <div class="profile-image">\n        <img src="{{values.logoMenu}}">\n        <div class="tittle-homer-provider">\n            Homer Proveedor\n        </div>\n      </div> -->\n\n      <ion-row>\n        <ion-col col-5 class="profile-image">\n          <img src="{{values.logoMenu}}">\n        </ion-col>\n        <ion-col col-7 style="align-self: center;font-weight: bold;padding: 0;">\n          <strong class="lbl-proveedor" *ngIf="!values.isLoggedIn">\n          Homer Proveedor\n          </strong>\n          <strong class="lbl-proveedor" *ngIf="values.isLoggedIn">\n            <h4 class="playername"> {{values.customerName}}</h4>\n          </strong>\n        </ion-col>\n      </ion-row>\n\n      <!--button ion-button full menuClose clear color="light" class="button-customername" *ngIf="values.isLoggedIn">\n        <strong>{{values.customerName}}\n        </strong>\n      </button>\n      <button ion-button full menuClose clear color="light" class="button-welcome" *ngIf="!values.isLoggedIn">\n        <strong>{{"Welcome" | translate}}\n        </strong>\n      </button-->\n    </ion-toolbar>\n  </div>\n  <ion-content class="sidemenugrad">\n    <ion-list class="menu-items-single" no-margin>\n\n      <!-- <div *ngIf="service.categories" class="category-name">\n        <ion-item tappable full menuClose *ngFor="let item of service.mainCategories" (click)="getCategory(item.id, item.slug, item.name)">\n          <ion-icon item-right class="ion-ios-arrow-forward item-icon">\n          </ion-icon>\n          <span [innerHTML]="item.name"></span>\n        </ion-item>\n      </div> -->\n\n    </ion-list>\n    <ion-list class="menu-items">\n      <!-- <ion-item tappable menuClose (click)="shop()">\n        <ion-icon item-left name="home"></ion-icon>\n        {{"Inicio"}}\n      </ion-item> -->\n      <ion-item tappable menuClose (click)="dashboard()" *ngIf="values.isLoggedIn">\n        <ion-icon  name="home" item-left>\n        </ion-icon>\n        {{"Inicio" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="account()" *ngIf="values.isLoggedIn">\n        <ion-icon  name="contact" item-left>\n        </ion-icon>\n        {{"Account" | translate}}\n      </ion-item>\n       <!-- chat -->\n       <!-- <ion-item tappable menuClose (click)="openchat()" >\n        <ion-icon  name="contact" item-left>\n        </ion-icon>\n        {{"Chat" | translate}}\n      </ion-item> -->\n      <!-- chat -->\n      <ion-item tappable menuClose (click)="login()" *ngIf="!values.isLoggedIn">\n        <ion-icon name="person" item-left>\n        </ion-icon>{{"Acceder" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="register()" *ngIf="!values.isLoggedIn">\n        <ion-icon item-left ios="ios-create" md="md-create">\n        </ion-icon>\n        {{"Register" | translate}}\n      </ion-item>\n      <!-- <ion-item tappable menuClose (click)="address()" *ngIf="values.isLoggedIn">\n        <ion-icon item-left name="locate">\n        </ion-icon>{{"Address" | translate}}\n      </ion-item> -->\n      <!-- <ion-item tappable menuClose (click)="order()" *ngIf="values.isLoggedIn">\n        <ion-icon item-left name="reorder">\n        </ion-icon>{{"Your Orders" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="wishlist()" *ngIf="values.isLoggedIn">\n        <ion-icon name="heart" item-left>\n        </ion-icon>{{"Wishlist" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="cart()">\n        <ion-icon ios="ios-cart" md="md-cart" item-left>\n        </ion-icon>\n        {{"Carrito" | translate}}\n      </ion-item>  -->\n      <!-- <ion-item tappable menuClose (click)="contact()">\n        {{"Contact Us" | translate}}\n        <ion-icon name="mail" item-left></ion-icon>\n      </ion-item>\n      <ion-item tappable menuClose *ngIf="values.data?.pages?.terms && values.data?.pages?.terms != \'0\'"\n        (click)="post(values.data?.pages?.terms)">\n        <ion-icon name="paper" item-left></ion-icon>\n        {{"Terms & Conditions" | translate}}\n      </ion-item> -->\n\n      <!-- <ion-item tappable menuClose no-line (click)="rateApp()">\n        <ion-icon name="thumbs-up" item-left></ion-icon>\n        {{"Rate App" | translate}}\n      </ion-item> -->\n\n\n      <ion-list *ngIf="values.isLoggedIn">\n        <ion-item *ngIf="values.vendor">\n          <label style="font-weight: bold;" for="">{{"Proveedor"}}</label>\n        </ion-item>\n        <!-- <ion-item tappable menuClose [href]="">\n          <ion-icon item-left name="people-outline">\n          </ion-icon>{{"My profile" | translate}}\n        </ion-item>\n        <ion-item tappable menuClose [href]="">\n          <ion-icon item-left name="people-outline">\n          </ion-icon>{{"Edit Profile" | translate}}\n        </ion-item>\n        <ion-item tappable menuClose [href]="">\n          <ion-icon item-left name="people-outline">\n          </ion-icon>{{"Ajustes de la tienda" | translate}}\n        </ion-item> -->\n        <ion-item tappable menuClose (click)="pagesProductsProviders()" *ngIf="values.isLoggedIn">\n          <ion-icon item-left name="briefcase">\n          </ion-icon>{{"Servicios" | translate}}\n        </ion-item>\n        <ion-item tappable menuClose (click)="mycategories()" *ngIf="values.isLoggedIn">\n          <ion-icon item-left name="list">\n          </ion-icon>{{"Categorias de servicios" | translate}}\n        </ion-item>\n        <ion-item tappable menuClose (click)="orderVendor()" *ngIf="values.vendor">\n          <ion-icon item-left name="reorder">\n          </ion-icon>{{"Customer Orders" | translate}}\n        </ion-item>\n        <ion-item tappable menuClose (click)="bookingVendor()" *ngIf="values.vendor">\n          <ion-icon item-left ios="ios-calendar" md="md-calendar">\n          </ion-icon>{{"Bookings" | translate}}\n        </ion-item>\n        <ion-item tappable menuClose (click)="test()" *ngIf="values.vendor">\n          <ion-icon item-left name="cart">\n          </ion-icon>Membresia\n        </ion-item>\n\n        <ion-item tappable menuClose\n        (click)="support()">\n          <ion-icon name="paper" item-left></ion-icon>\n          {{"Soporte" | translate}}\n        </ion-item>\n\n\n      <ion-item tappable menuClose no-line (click)="shareApp()">\n        <ion-icon name="share" item-left></ion-icon>\n        {{"Share App" | translate}}\n      </ion-item>\n\n        <ion-item tappable menuClose (click)="logout()" *ngIf="values.isLoggedIn">\n          <ion-icon item-left name="md-log-out">\n          </ion-icon>{{"Logout" | translate}}\n        </ion-item>\n      </ion-list>\n      <!-- <ion-item>\n        <ion-icon style="background-color: #e8453c" name="globe" item-left></ion-icon>\n        <ion-label>\n          {{"SelectLanguage" | translate}}\n        </ion-label>\n        <ion-select [(ngModel)]="Languages" (ngModelChange)="setLang()">\n          <ion-option value="english">{{"Eglish" | translate}} </ion-option>\n          <ion-option value="spanish">{{"Spanish" | translate}} </ion-option>\n        </ion-select>\n      </ion-item> -->\n    </ion-list>\n    <br>\n    <br>\n    <br>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false">\n</ion-nav>\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_6__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Values; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Values = /** @class */ (function () {
    function Values() {
        this.count = 0;
        this.filter = 10;
        this.isLoggedIn = false;
        this.vendor = false;
        this.subscription = [];
        this.customerName = "";
        this.customerId = null;
        this.isActive = false;
        this.listview = false;
        this.cart = [];
        this.filterUpdate = false;
        this.avatar = "assets/image/logo.png";
        this.logoMenu = "assets/image/logo-fondo-blanco.png";
        this.logoLogin = "assets/image/logoLogin.png";
        this.userIcon = "assets/image/user.png";
        this.lastIcon = "assets/image/last_service.png";
        this.nextIcon = "assets/image/next_service.png";
        this.oclockIcon = "assets/image/service-pending.png";
        this.slider = "assets/image/bghome.png";
        this.headerLogin = "assets/image/header-login.png";
        this.camarero = "assets/image/camarero.png";
        this.cuido = "assets/image/cuido.png";
        this.limpieza = "assets/image/limpieza.png";
        this.planchado = "assets/image/planchado.png";
        this.currency = "USD";
        this.dir = 'left';
        this.wishlistId = [];
        this.blockslistId = [];
        this.dimensions = { imageGridViewHeight: 100, imageProductViewHeight: 100, scrollProductHeight: 100, productSliderWidth: 42 };
        this.settings = { "show_featured": "1", "show_onsale": "1", "show_latest": "1", "pull_to_refresh": "1", "onesignal_app_id": "8ad1c280-92da-4d39-b49c-cf0a81e0d1fc", "google_project_id": "575406525034", "google_web_client_id": "575406529046-r69ss57ceip6vv9mm858qh2hg3j0sl7u.apps.googleusercontent.com", "rate_app_ios_id": "", "rate_app_android_id": "https://play.google.com/store/apps/details?id=numu.digital.homer", "rate_app_windows_id": "", "share_app_android_link": "https://play.google.com/store/apps/details?id=numu.digital.homer", "share_app_ios_link": "https://play.google.com/store/apps/details?id=numu.digital.homer", "support_email": "support@example.com", "image_height": "100", "product_slider_width": "42", "enable_product_chat": "", "enable_home_chat": "", "whatsapp_number": "+91XXXXXXXX", "app_dir": "left", "language": "spanish" };
        this.filter = {};
        this.logoutUrl = "";
    }
    Values.prototype.updateCart = function (crt) {
        console.log(crt);
        this.cartItem = crt.cart_contents;
        this.cart = [];
        this.count = 0;
        for (var item in crt.cart_contents) {
            this.cart[crt.cart_contents[item].product_id] = parseInt(crt.cart_contents[item].quantity);
            this.count += parseInt(crt.cart_contents[item].quantity);
        }
    };
    Values.prototype.updateCartTwo = function (crt) {
        console.log(crt);
        this.cart = [];
        this.count = 0;
        this.cartItem = crt;
        for (var item in crt) {
            this.cart[crt[item].product_id] = parseInt(crt[item].quantity);
            this.count += parseInt(crt[item].quantity);
        }
    };
    Values.prototype.calc = function (width) {
        var devide = this.getDevide(width);
        this.dimensions.imageGridViewHeight = this.settings.image_height / 100 * (width / devide);
        if (width >= 769) {
            this.dimensions.productSliderWidth = this.settings.product_slider_width * 0.7;
            this.dimensions.productSliderHeight = this.settings.imageGridViewHeight * 0.6;
            this.dimensions.imageProductViewHeight = (this.settings.image_height / 100 * 0.6) * width;
        }
        else {
            this.dimensions.imageProductViewHeight = this.settings.image_height / 100 * width;
            this.dimensions.productSliderWidth = this.settings.product_slider_width;
        }
        this.dimensions.productSliderHeight = this.settings.imageGridViewHeight * 0.6;
        this.dimensions.scrollProductHeight = this.settings.image_height / 100 * (width * this.dimensions.productSliderWidth / 100);
        this.dimensions.imageListViewHeight = (this.settings.image_height / 100 * 11);
    };
    Values.prototype.getDevide = function (width) {
        if (width >= 1025) {
            return 5;
        }
        if (width >= 769) {
            return 4;
        }
        if (width >= 481) {
            return 3;
        }
        else {
            return 2;
        }
    };
    Values = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Values);
    return Values;
}());

//# sourceMappingURL=values.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_list_products_list__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_account_wishlist_wishlist__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_account_account__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_orders_vendor_orders_vendor__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_booking_vendor_booking_vendor__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_test_test__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TabsPage = /** @class */ (function () {
    function TabsPage(nav, values, modalCtrl) {
        this.nav = nav;
        this.values = values;
        this.modalCtrl = modalCtrl;
        this.Home = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* Home */];
        this.productListPage = __WEBPACK_IMPORTED_MODULE_2__products_list_products_list__["a" /* ProductsListPage */];
        this.WishlistPage = __WEBPACK_IMPORTED_MODULE_3__pages_account_wishlist_wishlist__["a" /* WishlistPage */];
        this.CartPage = __WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */];
        this.Values = __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */];
        this.AccountPage = __WEBPACK_IMPORTED_MODULE_6__pages_account_account_account__["a" /* AccountPage */];
        this.OrdersVendor = __WEBPACK_IMPORTED_MODULE_8__pages_account_orders_vendor_orders_vendor__["a" /* OrdersVendor */];
        this.BookingVendor = __WEBPACK_IMPORTED_MODULE_9__pages_account_booking_vendor_booking_vendor__["a" /* BookingVendor */];
        this.test = __WEBPACK_IMPORTED_MODULE_10__pages_account_test_test__["a" /* test */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\tabs\tabs.html"*/'<!-- <ion-tabs class="tabs-islogged" *ngIf="values.isLoggedIn">\n\n  <ion-tab [root]="productListPage" tabIcon="md-home"></ion-tab>\n\n  <ion-tab [root]="Home" tabIcon="md-search"></ion-tab>\n\n  <ion-tab [root]="CartPage"  tabIcon="md-cart"></ion-tab>\n\n  <ion-tab [root]="WishlistPage" tabIcon="md-heart"></ion-tab>\n\n  <ion-tab [root]="AccountPage" tabIcon="md-person"></ion-tab>\n\n</ion-tabs>\n\n<ion-tabs *ngIf="!values.isLoggedIn">\n\n  <ion-tab [root]="productListPage" tabIcon="md-home"></ion-tab>\n\n  <ion-tab [root]="Home" tabIcon="md-search"></ion-tab>\n\n  <ion-tab [root]="CartPage" tabIcon="md-cart"></ion-tab>\n\n</ion-tabs> -->\n\n\n\n<ion-tabs class="tabs-islogged" *ngIf="values.isLoggedIn">\n\n  <ion-tab [root]="OrdersVendor" tabIcon="reorder"></ion-tab>\n\n  <ion-tab [root]="BookingVendor" tabIcon="md-calendar"></ion-tab>\n\n  <ion-tab [root]="test"  tabIcon="md-cart"></ion-tab>\n\n  <ion-tab [root]="AccountPage" tabIcon="md-person"></ion-tab>\n\n</ion-tabs>\n\n<ion-tabs *ngIf="!values.isLoggedIn">\n\n  <ion-tab [root]="productListPage" tabIcon="md-home"></ion-tab>\n\n  <ion-tab [root]="Home" tabIcon="md-search"></ion-tab>\n\n  <ion-tab [root]="CartPage" tabIcon="md-cart"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["ModalController"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 401,
	"./af.js": 401,
	"./ar": 402,
	"./ar-dz": 403,
	"./ar-dz.js": 403,
	"./ar-kw": 404,
	"./ar-kw.js": 404,
	"./ar-ly": 405,
	"./ar-ly.js": 405,
	"./ar-ma": 406,
	"./ar-ma.js": 406,
	"./ar-sa": 407,
	"./ar-sa.js": 407,
	"./ar-tn": 408,
	"./ar-tn.js": 408,
	"./ar.js": 402,
	"./az": 409,
	"./az.js": 409,
	"./be": 410,
	"./be.js": 410,
	"./bg": 411,
	"./bg.js": 411,
	"./bm": 412,
	"./bm.js": 412,
	"./bn": 413,
	"./bn-bd": 414,
	"./bn-bd.js": 414,
	"./bn.js": 413,
	"./bo": 415,
	"./bo.js": 415,
	"./br": 416,
	"./br.js": 416,
	"./bs": 417,
	"./bs.js": 417,
	"./ca": 418,
	"./ca.js": 418,
	"./cs": 419,
	"./cs.js": 419,
	"./cv": 420,
	"./cv.js": 420,
	"./cy": 421,
	"./cy.js": 421,
	"./da": 422,
	"./da.js": 422,
	"./de": 423,
	"./de-at": 424,
	"./de-at.js": 424,
	"./de-ch": 425,
	"./de-ch.js": 425,
	"./de.js": 423,
	"./dv": 426,
	"./dv.js": 426,
	"./el": 427,
	"./el.js": 427,
	"./en-au": 428,
	"./en-au.js": 428,
	"./en-ca": 429,
	"./en-ca.js": 429,
	"./en-gb": 430,
	"./en-gb.js": 430,
	"./en-ie": 431,
	"./en-ie.js": 431,
	"./en-il": 432,
	"./en-il.js": 432,
	"./en-in": 433,
	"./en-in.js": 433,
	"./en-nz": 434,
	"./en-nz.js": 434,
	"./en-sg": 435,
	"./en-sg.js": 435,
	"./eo": 436,
	"./eo.js": 436,
	"./es": 437,
	"./es-do": 438,
	"./es-do.js": 438,
	"./es-mx": 439,
	"./es-mx.js": 439,
	"./es-us": 440,
	"./es-us.js": 440,
	"./es.js": 437,
	"./et": 441,
	"./et.js": 441,
	"./eu": 442,
	"./eu.js": 442,
	"./fa": 443,
	"./fa.js": 443,
	"./fi": 444,
	"./fi.js": 444,
	"./fil": 445,
	"./fil.js": 445,
	"./fo": 446,
	"./fo.js": 446,
	"./fr": 447,
	"./fr-ca": 448,
	"./fr-ca.js": 448,
	"./fr-ch": 449,
	"./fr-ch.js": 449,
	"./fr.js": 447,
	"./fy": 450,
	"./fy.js": 450,
	"./ga": 451,
	"./ga.js": 451,
	"./gd": 452,
	"./gd.js": 452,
	"./gl": 453,
	"./gl.js": 453,
	"./gom-deva": 454,
	"./gom-deva.js": 454,
	"./gom-latn": 455,
	"./gom-latn.js": 455,
	"./gu": 456,
	"./gu.js": 456,
	"./he": 457,
	"./he.js": 457,
	"./hi": 458,
	"./hi.js": 458,
	"./hr": 459,
	"./hr.js": 459,
	"./hu": 460,
	"./hu.js": 460,
	"./hy-am": 461,
	"./hy-am.js": 461,
	"./id": 462,
	"./id.js": 462,
	"./is": 463,
	"./is.js": 463,
	"./it": 464,
	"./it-ch": 465,
	"./it-ch.js": 465,
	"./it.js": 464,
	"./ja": 466,
	"./ja.js": 466,
	"./jv": 467,
	"./jv.js": 467,
	"./ka": 468,
	"./ka.js": 468,
	"./kk": 469,
	"./kk.js": 469,
	"./km": 470,
	"./km.js": 470,
	"./kn": 471,
	"./kn.js": 471,
	"./ko": 472,
	"./ko.js": 472,
	"./ku": 473,
	"./ku.js": 473,
	"./ky": 474,
	"./ky.js": 474,
	"./lb": 475,
	"./lb.js": 475,
	"./lo": 476,
	"./lo.js": 476,
	"./lt": 477,
	"./lt.js": 477,
	"./lv": 478,
	"./lv.js": 478,
	"./me": 479,
	"./me.js": 479,
	"./mi": 480,
	"./mi.js": 480,
	"./mk": 481,
	"./mk.js": 481,
	"./ml": 482,
	"./ml.js": 482,
	"./mn": 483,
	"./mn.js": 483,
	"./mr": 484,
	"./mr.js": 484,
	"./ms": 485,
	"./ms-my": 486,
	"./ms-my.js": 486,
	"./ms.js": 485,
	"./mt": 487,
	"./mt.js": 487,
	"./my": 488,
	"./my.js": 488,
	"./nb": 489,
	"./nb.js": 489,
	"./ne": 490,
	"./ne.js": 490,
	"./nl": 491,
	"./nl-be": 492,
	"./nl-be.js": 492,
	"./nl.js": 491,
	"./nn": 493,
	"./nn.js": 493,
	"./oc-lnc": 494,
	"./oc-lnc.js": 494,
	"./pa-in": 495,
	"./pa-in.js": 495,
	"./pl": 496,
	"./pl.js": 496,
	"./pt": 497,
	"./pt-br": 498,
	"./pt-br.js": 498,
	"./pt.js": 497,
	"./ro": 499,
	"./ro.js": 499,
	"./ru": 500,
	"./ru.js": 500,
	"./sd": 501,
	"./sd.js": 501,
	"./se": 502,
	"./se.js": 502,
	"./si": 503,
	"./si.js": 503,
	"./sk": 504,
	"./sk.js": 504,
	"./sl": 505,
	"./sl.js": 505,
	"./sq": 506,
	"./sq.js": 506,
	"./sr": 507,
	"./sr-cyrl": 508,
	"./sr-cyrl.js": 508,
	"./sr.js": 507,
	"./ss": 509,
	"./ss.js": 509,
	"./sv": 510,
	"./sv.js": 510,
	"./sw": 511,
	"./sw.js": 511,
	"./ta": 512,
	"./ta.js": 512,
	"./te": 513,
	"./te.js": 513,
	"./tet": 514,
	"./tet.js": 514,
	"./tg": 515,
	"./tg.js": 515,
	"./th": 516,
	"./th.js": 516,
	"./tk": 517,
	"./tk.js": 517,
	"./tl-ph": 518,
	"./tl-ph.js": 518,
	"./tlh": 519,
	"./tlh.js": 519,
	"./tr": 520,
	"./tr.js": 520,
	"./tzl": 521,
	"./tzl.js": 521,
	"./tzm": 522,
	"./tzm-latn": 523,
	"./tzm-latn.js": 523,
	"./tzm.js": 522,
	"./ug-cn": 524,
	"./ug-cn.js": 524,
	"./uk": 525,
	"./uk.js": 525,
	"./ur": 526,
	"./ur.js": 526,
	"./uz": 527,
	"./uz-latn": 528,
	"./uz-latn.js": 528,
	"./uz.js": 527,
	"./vi": 529,
	"./vi.js": 529,
	"./x-pseudo": 530,
	"./x-pseudo.js": 530,
	"./yo": 531,
	"./yo.js": 531,
	"./zh-cn": 532,
	"./zh-cn.js": 532,
	"./zh-hk": 533,
	"./zh-hk.js": 533,
	"./zh-mo": 534,
	"./zh-mo.js": 534,
	"./zh-tw": 535,
	"./zh-tw.js": 535
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 900;

/***/ }),

/***/ 920:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_booking_details_booking_details__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicesPage = /** @class */ (function () {
    function ServicesPage(values, navCtrl, navParams, service) {
        this.values = values;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.has_more_items = true;
        this.orders = [];
        this.title = navParams.data.title;
        this.status = navParams.data.status;
        this.unconfirm = navParams.data.unconfirm;
    }
    ServicesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.idVendor = this.values.customerId;
        this.filter['id'] = this.values.customerId.toString();
        this.service.getBookingsVendor(this.filter)
            .then(function (results) {
            _this.order_before_filter = results;
            _this.orders = [_this.order_before_filter.orders.filter(function (order) { return order.order_status === _this.status; })];
            console.log(_this.orders);
        });
    };
    ServicesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getBookingsVendor(this.filter)
            .then(function (results) {
            _this.order_before_filter = results;
            _this.orders = [_this.order_before_filter.orders.filter(function (order) { return order.order_status === _this.status; })];
            _this.handleMore(_this.orders, infiniteScroll);
        });
    };
    ServicesPage.prototype.handleMore = function (results, infiniteScroll) {
        this.filter.page += 1;
        if (results.orders != undefined) {
            for (var i = 0; i < results.orders.length; i++) {
                this.orders.orders.push(results.orders[i]);
            }
            ;
        }
        if (results.orders.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    ServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesPage');
    };
    ServicesPage.prototype.getBookingDetails = function (idOrder) {
        var idVendor = this.idVendor;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_booking_details_booking_details__["a" /* BookingDetails */], { idOrder: idOrder, idVendor: idVendor });
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-services',template:/*ion-inline-start:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\services\services.html"*/'<!--\n  Generated template for the ServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="settings-header">\n  <ion-navbar color="header">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <!-- <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title> -->\n      <ion-title >\n          <img  (click)="gohome();" style="max-width: 150px;" src="{{values.avatar}}" />\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="sub-header">\n    <h1>{{title}}</h1>\n  </div>\n  <ion-spinner *ngIf="!orders.length" name="crescent"></ion-spinner>\n  <div *ngIf="orders.length">\n    <div class="card" *ngFor="let item of orders[0]">\n      <div class="card-body">\n        <h2>\n          <b>{{"Details" | translate}} :\n          </b>{{"Booking" | translate }} # {{item.bookingId}}\n        </h2>\n\n        <h2>\n          <b>{{"Booked Product" | translate}} :\n          </b> <label style="color:#1e88e5e6;"> {{item.booked_product}}</label>\n        </h2>\n\n        <h2>\n          <b>{{"Booked By" | translate}} :\n          </b> {{item.booked_by}}\n        </h2>\n\n        <h2>\n          <b>{{"Start Date" | translate}} :\n          </b> {{item.start_date}}\n        </h2>\n\n        <h2>\n          <b>{{"End Date" | translate}} :\n          </b> {{item.end_date}}\n        </h2>\n\n        <h2>\n          <b>{{"Customer" | translate}} :\n          </b> {{item.billing_address.first_name}} {{item.billing_address.last_name}}, {{item.billing_address.address_1}}, {{item.billing_address.address_2}}, {{item.billing_address.city}}, {{item.billing_address.state}}, {{item.billing_address.country}}, {{item.billing_address.postcode}}\n        </h2>\n        <h2>\n          <b>{{"Status" | translate}} :\n          </b> {{item.statusbooking}}\n        </h2>\n        <div class="row-button">\n          <!-- <button *ngIf="item.row_actions.confirm" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="confirm(item.bookingId)">\n            <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n            </ion-icon>\n            {{"Aceptar Trabajo" | translate}}\n          </button> -->\n          <button   text-center ion-button icon-left clear   icon-only class="has-icon icon-only" small text-uppercase (click)="getBookingDetails(item.order_id)" >\n            <!-- <ion-icon name="ios-eye">\n            </ion-icon> -->\n            {{"Iniciar Servicio" | translate}}\n          </button>\n          <button  text-center ion-button icon-left clear color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="unconfirm(item.bookingId)">\n            <!-- <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n            </ion-icon> -->\n            {{"cancelar Servicio" | translate}}\n          </button>\n        </div>\n        <!-- <button *ngIf="item.row_actions.edit" text-center ion-button icon-left clear no-margin  icon-only class="has-icon icon-only" small text-uppercase (click)="getBookingDetails(item.order_id)">\n          <ion-icon name="ios-eye">\n          </ion-icon>\n          {{"Ver detalles del servicio" | translate}}\n        </button> -->\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lenovo\Desktop\numu\homer\homerproveedor\src\pages\services\services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'keys'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=pipe.js.map

/***/ })

},[574]);
//# sourceMappingURL=main.js.map