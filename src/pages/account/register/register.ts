import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Service } from '../../../providers/service/service';
import { Functions } from '../../../providers/service/functions';
import { Values } from '../../../providers/service/values';
import { OneSignal } from '@ionic-native/onesignal';
import { TabsPage } from '../../tabs/tabs';
import { AccountLogin } from '../login/login';

@Component({
    templateUrl: 'register.html'
})
export class AccountRegister {
    registerData: any;
    registerVendorData: any;
    loadRegister: any;
    countries: any;
    status: any;
    resultResendKey: any;
    public disableSubmit: boolean = false;
    errors: any;
    loginStatus: any;
    country: any;
    billing_states: any;
    shipping_states: any;
    Register: any;
    constructor(public nav: NavController, public service: Service, public functions: Functions, private oneSignal: OneSignal, public values: Values, public platform: Platform) {
        this.Register = "Register";
        this.registerData = {};
        this.registerVendorData = {};
        this.countries = {};
        this.registerData.billing_address = {};
        this.registerData.shipping_address = {};
        this.service.getNonce()
            .then((results) => this.handleResults(results));
    }
    handleResults(results) {
        this.countries = results;
    }
    getBillingRegion(countryId) {
        this.billing_states = this.countries.state[countryId];
    }
    getShippingRegion(countryId) {
        this.shipping_states = this.countries.state[countryId];
    }
    validateForm() {
        if (this.registerData.first_name == undefined || this.registerData.firstname == "") {
            this.functions.showAlert("ERROR", "Por favor ingrese su nombre");
            return false
        }
        if (this.registerData.last_name == undefined || this.registerData.lastname == "") {
            this.functions.showAlert("ERROR", "Por favor ingrese su apellido");
            return false
        }
        if (this.registerData.email == undefined || this.registerData.email == "") {
            this.functions.showAlert("ERROR", "Ingrese su correo electr??nico");
            return false
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            this.functions.showAlert("ERROR", "Por favor, ingrese contrase??a");
            return false
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
    }
    validateFormVendor() {
        if (this.registerVendorData.first_name == undefined || this.registerVendorData.firstname == "") {
            this.functions.showAlert("ERROR", "Por favor ingrese su nombre");
            return false
        }
        if (this.registerVendorData.last_name == undefined || this.registerVendorData.lastname == "") {
            this.functions.showAlert("ERROR", "Por favor ingrese su apellido");
            return false
        }
        if (this.registerVendorData.email == undefined || this.registerVendorData.email == "") {
            this.functions.showAlert("ERROR", "Ingrese su correo electr??nico");
            return false
        }
        if (this.registerVendorData.password == undefined || this.registerVendorData.password == "") {
            this.functions.showAlert("ERROR", "Por favor, ingrese contrase??a");
            return false
        }
        if (this.registerVendorData.phone == undefined || this.registerVendorData.phone == "") {
            this.functions.showAlert("ERROR", "Por favor, ingrese n??mero de tel??fono");
            return false
        }

        return true;
    }
    registerCustomer() {
        this.errors = "";
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.service.registerCustomer(this.registerData)
                .then((results) => this.handleRegister(results));
        }
    }
    registerVendor() {
        this.errors = "";
        if (this.validateFormVendor()) {
            this.disableSubmit = true;
            this.service.registerVendor(this.registerVendorData)
                .then((results) => this.handleRegisterVendor(results));
        }
    }
    handleRegisterVendor(results) {
      console.log('result', results);

      console.log('error ',results.errors);
        if (!results.errors) {
            this.countries.checkout_login;
            this.service.login(this.registerVendorData)
                .then((results) => this.loginStatus = results);
            if(this.platform.is('cordova')){
                this.oneSignal.getIds().then((data: any) => {
                    this.service.subscribeNotification(data);
                });
                this.oneSignal.sendTags({email: this.registerVendorData.email, phone: this.registerVendorData.phone, namevendor: this.registerData.firstname });
            }
            this.functions.showAlert('Verificaci??n', '??Se ha creado su cuenta! Por favor revise su correo electr??nico')
            this.nav.setRoot(TabsPage);
        }
        else if (results.errors) {
            this.errors = results.errors;
            this.disableSubmit = false;
            this.functions.showAlert('Verificaci??n', this.errors.existing_user_email)
            // this.service.getNonceResendKey(this.registerVendorData.email).then((results) => this.handleResultsNonce(results));
        }
    }
    handleResultsNonce(results) {
        this.countries = results;
        this.resultResendKey = this.service.resendKey(this.registerVendorData.email, this.countries.resend_key_nonce);
        //this.service.resendKey(this.registerVendorData.email, this.countries.resend_key_nonce).then(results => (this.resultResendKey = results))
        console.log(this.resultResendKey)
        this.disableSubmit = false;
        this.nav.setRoot(AccountLogin);
    }
    handleRegister(results) {
        this.disableSubmit = false;
        if (!results.errors) {
            this.countries.checkout_login;
            this.service.login(this.registerData)
                .then((results) => this.loginStatus = results);
            if(this.platform.is('cordova')){
                this.oneSignal.getIds().then((data: any) => {
                    this.service.subscribeNotification(data);
                });
                this.oneSignal.sendTags({email: this.registerData.email, pincode: this.registerData.billing_address.postcode, city: this.registerData.billing_address.city });
            }
            this.functions.showAlert('Verificaci??n', '??Se ha creado su cuenta! Por favor revise su correo electr??nico')
            this.nav.setRoot(TabsPage);
        }
        else if (results.errors) {
            this.errors = results.errors;
        }
    }
}
