import { HttpClient } from '@angular/common/http';
import { Component, Injector } from '@angular/core';
import { BaseLogger } from '../Utilities/CustomerApp.Logger';
import { Supplier } from './CustomerApp.SupplierModel';

@Component({
  // selector: 'app-root',
  templateUrl: './CustomerApp.SupplierView.html',
  // styleUrls: ['./app.component.css']
})
export class SupplierComponent {
  logger : BaseLogger;
  supplierModel: Supplier = new Supplier();
  supplierModels : Array<Supplier> = new Array<Supplier>();
  disable:boolean = false;
  constructor(_inj: Injector, public http:HttpClient){
    this.logger= _inj.get('2');
    this.logger.log('inside CustComponent');
    this.getFromServer();
  }
  //this method is called when "Add Tempararily" button is clicked
  add(){
    this.supplierModels.push(this.supplierModel);
    this.supplierModel=new Supplier();
  }
  //this method is called when "Add Permenantly" button is clicked
  postToServer(){
    var supDto: any ={};
    supDto.supplierName=this.supplierModel.supplierName;
    supDto.supplierAmount=this.supplierModel.supplierAmount;
    supDto.supplierCode=this.supplierModel.supplierCode;
    this.disable=true;
    this.http.post("http://localhost:3000/suppliers",supDto)
              .subscribe(res=>this.success(res),res=>this.failure(res));
  }
  //below is called when "select" link is clicked
  selectSupplier(selected:any){
    this.supplierModel=new Supplier();
    this.supplierModel.supplierAmount=selected.supplierAmount;
    this.supplierModel.supplierCode=selected.supplierCode;
    this.supplierModel.supplierName=selected.supplierName;
  }
  //below is used for validation msgs
  hasError(formControlName:string,validationName:string){
    return this.supplierModel.formSupplierGroup.controls[formControlName].hasError(validationName);
  }
  success(res: Object): void {
    this.getFromServer();
  }
  //below method will get data from db.json
  getFromServer() {
    this.http.get("http://localhost:3000/suppliers")
    .subscribe(res=>this.successGet(res),res=>this.failure(res))
  }
  failure(res: any): void {
    console.error('error while getting/posting suppliers::'+res);
  }
  successGet(res: any): void {
    this.supplierModels=res;
    this.supplierModel=new Supplier();
    this.disable=false;
  }
}
