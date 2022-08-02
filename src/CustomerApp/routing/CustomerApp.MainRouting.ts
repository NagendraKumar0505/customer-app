import {HomeComponent} from '../home/CustomerApp.HomeComponent'
export const Mainroutes= [
    {path:"Home",component:HomeComponent},
    {path:"Customer",
    loadChildren:()  =>  import('../customer/CustomerApp.CustomerModule').then(m => m.CustomerModule)}    

    ,

    {path:"Supplier",
    loadChildren:()=> import('../supplier/CustomerApp.SupplierModule')
    .then(s=>s.SupplierModule)}
];