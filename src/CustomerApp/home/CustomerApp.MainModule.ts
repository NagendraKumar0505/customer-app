import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { Mainroutes } from '../routing/CustomerApp.MainRouting';
import { BaseLogger, ConsoleLogger, DbLogger } from '../Utilities/CustomerApp.Logger';
@NgModule({
  declarations: [
    
    HomeComponent,
    MasterPageComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Mainroutes)
  ],
  providers: [
    {
      provide : BaseLogger,
      useClass: ConsoleLogger
    },
    {
      provide:'1',
      useClass:DbLogger
    },
    {
      provide:'2',
      useClass:ConsoleLogger
    }
  ],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
