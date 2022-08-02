import {  NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustComponent } from './CustomerApp.CustComponent';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { CustRoutes } from '../routing/CustomerApp.CustomerRouting';
import {HttpClientModule} from '@angular/common/http'
import { UtilitiesModule } from '../Utilities/CustomerApp.UtilitiesModule';
import { GridComponent } from '../Utilities/CustomerApp.GridComponent';
@NgModule({
  declarations: [
    CustComponent ,
      
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CustRoutes),
    HttpClientModule,
    UtilitiesModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [CustComponent,GridComponent]
})
export class CustomerModule { }
