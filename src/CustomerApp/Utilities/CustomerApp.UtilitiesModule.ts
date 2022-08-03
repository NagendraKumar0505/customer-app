import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { Mainroutes } from '../routing/CustomerApp.MainRouting';
import { GridComponent } from './CustomerApp.GridComponent';
@NgModule({
  declarations: [
    GridComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(Mainroutes)
  ],
  exports:[GridComponent],
  providers: [
    
  ],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],
  // bootstrap: [GridComponent]
})
export class UtilitiesModule { }
