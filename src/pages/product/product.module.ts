import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductPage } from '../product/product';


//Check it
// import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    ProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductPage)
    // IonicImageLoader.forRoot(),
  ],
})
export class ProductsPageModule {}
