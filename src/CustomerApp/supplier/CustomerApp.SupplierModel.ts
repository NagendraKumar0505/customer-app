import { NgForm,
            FormGroup,
                FormControl,
                    Validators,
                    FormBuilder} from "@angular/forms";

export class Supplier{
    supplierCode : string="";
    supplierName : string="";
    supplierAmount : number=0;

    formSupplierGroup: FormGroup;
    constructor(){
        var _builder = new FormBuilder();
        this.formSupplierGroup = _builder.group({});
        this.formSupplierGroup.addControl('SupplierNameControl',
                        new FormControl('',Validators.required));
        var validationcollections = [];
        validationcollections.push(Validators.required);
        validationcollections.push(Validators.pattern("^[0-9]{4,4}$"));
        
        
        this.formSupplierGroup.addControl('SupplierCodeControl', 
                new FormControl('',Validators.compose(validationcollections)));

    } 
}