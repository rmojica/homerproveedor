import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashProveedorPage } from './dash-proveedor';

@NgModule({
  declarations: [
    DashProveedorPage,
  ],
  imports: [
    IonicPageModule.forChild(DashProveedorPage),
  ],
})
export class DashProveedorPageModule {}
