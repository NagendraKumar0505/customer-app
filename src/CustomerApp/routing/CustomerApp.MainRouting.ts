import {HomeComponent} from '../home/CustomerApp.HomeComponent'
export const Mainroutes= [
    {path:"Home",component:HomeComponent},
    {path:"Customer",
    //lazy loading
    loadChildren:()  =>  import('../customer/CustomerApp.CustomerModule').then(m => m.CustomerModule)}    

    ,
    //lazy loading
    {path:"Supplier",
    loadChildren:()=> import('../supplier/CustomerApp.SupplierModule')
    .then(s=>s.SupplierModule)}
];