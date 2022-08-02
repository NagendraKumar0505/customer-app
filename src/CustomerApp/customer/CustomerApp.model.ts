import { NgForm,
            FormGroup,
                FormControl,
                    Validators,
                    FormBuilder} from "@angular/forms";
//create the validation object model
//connect  the validation to the UI
//check if it is valid or not
export class Customer{
    customerCode : string="";
    customerName : string="";
    customerAmount : number=0;

    formCustomerGroup: FormGroup;
    constructor(){
        var _builder = new FormBuilder();
        this.formCustomerGroup = _builder.group({});
        this.formCustomerGroup.addControl('CustomerNameControl',
                        new FormControl('',Validators.required));
        var validationcollections = [];
        validationcollections.push(Validators.required);
        validationcollections.push(Validators.pattern("^[0-9]{4,4}$"));
        
        
        this.formCustomerGroup.addControl('CustomerCodeControl', 
                new FormControl('',Validators.compose(validationcollections)));

    } 
}