import { Component } from '@angular/core';
import { BaseLogger } from '../Utilities/CustomerApp.Logger';
@Component({
  // selector: 'app-root',
  templateUrl: './CustomerApp.HomepageView.html',
  // styleUrls: ['./app.component.css']
})
export class HomeComponent {
  logger : BaseLogger;
  constructor(_logger:BaseLogger){
    this.logger= _logger;
    this.logger.log('inside CustComponent');
  }
}
