import {Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import {Values} from '../../providers/service/values';

interface Day {
  name:string;
}

interface Availability{
  date:string;
  inithour:string;
  endhour:string;
}

/**
 * Generated class for the NewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-new-product',
  templateUrl: 'new-product.html',
})
export class NewProductPage {
  // @ViewChild('indicator')indicator:ElementRef;
  // @ViewChild('tabs_control')tabs_control:ElementRef;
  // @ViewChild('tabs')tabs:ElementRef;
  // @ViewChild('tab')tab:ElementRef;

  name:string;
  description:string;
  short_description: string;
  base_cost:number;
  bloque_cost:number;
  view_cost:number;
  selectDay:string='';
  initH:string = '';
  endH:string = '';
  availability:Availability[];
  days:Day[] = [
    {
      name:"MONDAY"
    },
    {
      name:"TUESDAY"
    },
    {
      name:"WEDNESDAY"
    },
    {
      name:"THURSDAY"
    },
    {
      name:"FRIDAY"
    },
    {
      name:"SATURDAY"
    },
    {
      name:"SUNDAY"
    }
  ];

  constructor(public nav: NavController, public navParams: NavParams, public values: Values, public alert:AlertController) {
    this.availability = [];
  }

  ngAfterViewInit() {
    // this.indicator.nativeElement.style.width = this.tabs_control.nativeElement.children[0].clientWidth + "px";

    // for(let i=0; i < this.tabs_control.nativeElement.children.length; i++){
    //   this.renderer.listen( this.tabs_control.nativeElement.children[i],'click',this.handleClick);
    // }
  }
  OnChange(event){
    console.log(this.days)
    alert("selecciono "+ event.target.value)
  }

  onSubmit(){

  }
  addAvailability(){
      if(this.availability.length == 0 ){
        if(this.selectDay != '' && this.initH != '' && this.endH != ''){
          this.availability.push({
            date:this.selectDay,
            inithour:this.initH,
            endhour:this.endH
          });
          this.selectDay = '';
          this.initH = '';
          this.endH = '';
        }else{
          this.showAlert('No sea seleccionado ninguna opción', '<strong>Error:</strong> Por favor selecciona todos los campos');
        }
      }else{
        for( let i in this.availability ){
         if(this.availability[i].date == this.selectDay){
            this.showAlert(`${this.selectDay} ya fue agregado`, '<strong>Error:</strong> Por favor selecciona otra disponibilidad.');
            break;
          }else{
            if(this.selectDay != '' && this.initH != '' && this.endH != ''){
              this.availability.push({
                date:this.selectDay,
                inithour:this.initH,
                endhour:this.endH
              });
              this.selectDay = '';
              this.initH = '';
              this.endH = '';
            }else{
              this.showAlert('No sea seleccionado ninguna opción', '<strong>Error:</strong> Por favor selecciona todos los campos');
              break;
            }
          }
        }
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



  //  handleClick (ev){
  //   ev.preventDefault();
  //   let button = ev.currentTarget;
  //   let children = button.parentNode.children;

  //   for(var i=0; i<children.length; i++){
  //     let child = children[i];
  //     if(child == button) {
  //       console.log(i);

  //     };
  //   }
  //   console.log(this.tab);

  // }


}
