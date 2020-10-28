import {ElementRef ,Component, ViewChild, Renderer2 } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Values} from '../../providers/service/values';

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
  desde:Date = new Date();
  hacia:Date = new Date();
 
  constructor(public nav: NavController, public navParams: NavParams, public values: Values, private renderer:Renderer2) {
    
  }

  ngAfterViewInit() {
    // this.indicator.nativeElement.style.width = this.tabs_control.nativeElement.children[0].clientWidth + "px";
    
    // for(let i=0; i < this.tabs_control.nativeElement.children.length; i++){
    //   this.renderer.listen( this.tabs_control.nativeElement.children[i],'click',this.handleClick);
    // }
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
