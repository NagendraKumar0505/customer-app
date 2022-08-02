import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { SupplierRoutes } from '../routing/CustomerApp.SupplierRouting';
import { HttpClientModule } from '@angular/common/http';
import { UtilitiesModule } from '../Utilities/CustomerApp.UtilitiesModule';
import { GridComponent } from '../Utilities/CustomerApp.GridComponent';

@NgModule({
  declarations: [
    SupplierComponent  ,
      
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(SupplierRoutes),
    HttpClientModule,
    UtilitiesModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [SupplierComponent,GridComponent]
})
export class SupplierModule { }
