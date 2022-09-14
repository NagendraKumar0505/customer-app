import { Component, Injector } from '@angular/core';
import {Customer} from './CustomerApp.model';
import {BaseLogger} from '../Utilities/CustomerApp.Logger'
import {HttpClient} from '@angular/common/http';
@Component({
  // selector: 'app-root',
  templateUrl: './CustomerApp.CustomerView.html',
  // styleUrls: ['./app.component.css']
})
export class CustComponent {
  title = 'customer-app';
  customerModel : Customer = new Customer();
  logger : BaseLogger;
  customerModels : Array<Customer> = new Array<Customer>();
  disable : boolean = false;
  constructor(_inj:Injector, public http: HttpClient  ){
    this.logger= _inj.get('1');
    this.logger.log('inside CustComponent');
    this.getFromServer();
  }
  //this method is called when "Add Tempararily" button is clicked
  Add(){
    this.customerModels.push(this.customerModel);
    this.customerModel=new Customer();//clear text fields
  }
  //below is used for validation msgs
  hasError(controlName:string,validationName:string){
    return this.customerModel.formCustomerGroup.controls[controlName].hasError(validationName);
  }
  //below is called when "select" link is clicked
  selectCustomer(cust: any):void{
    this.customerModel= new Customer();
    this.customerModel.customerAmount=cust.customerAmount;
    this.customerModel.customerCode=cust.customerCode;
    this.customerModel.customerName=cust.customerName;
  }
  //this method is called when "Add Permenantly" button is clicked
  postToServer(){
    var custDto : any ={};
    custDto.customerName=this.customerModel.customerName;
    custDto.customerCode=this.customerModel.customerCode;
    custDto.customerAmount=this.customerModel.customerAmount;
    this.disable=true;
    this.http.post("http://localhost:3000/customers",custDto)
        .subscribe(res=>this.success(res),res=>this.failure(res))
        

  }
  //below method will get data from db.json
  getFromServer(){
    
    this.http.get("http://localhost:3000/customers")
        .subscribe(res=>this.successGet(res),res=>this.failure(res))
        
    
  }
  //callback method
  success(res:any){
    this.getFromServer();
  }
  //callback method
  successGet(res:any){
    this.customerModels = res;
    this.customerModel = new Customer();
    this.disable=false;
  }
  //callback method
  failure(res:any){
    console.error("Error from me::"+res);
  }
}
