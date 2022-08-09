import { CommonModule } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserModule, By } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"
import { HomeComponent } from "../home/CustomerApp.HomeComponent"
import { MasterPageComponent } from "../home/CustomerApp.MasterPageComponent"
import { Mainroutes } from "../routing/CustomerApp.MainRouting"
import { SupplierRoutes } from "../routing/CustomerApp.SupplierRouting"
import { GridComponent } from "../Utilities/CustomerApp.GridComponent"
import { BaseLogger, ConsoleLogger, DbLogger } from "../Utilities/CustomerApp.Logger"
import { UtilitiesModule } from "../Utilities/CustomerApp.UtilitiesModule"
import { SupplierComponent } from "./CustomerApp.SupplierComponent"

describe("when supplier clicks, add button is working",()=>{
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports:[
                BrowserModule,
    FormsModule,
    RouterModule.forRoot(Mainroutes),
    CommonModule,    
    ReactiveFormsModule,
    RouterModule.forChild(SupplierRoutes),
    HttpClientModule,
    UtilitiesModule
            ],
            providers:[
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
            declarations:[SupplierComponent,HomeComponent,
                MasterPageComponent  ]
        }).compileComponents();
    });
    it('shows row count more than 1 in grid',()=>{
        const fixture = TestBed.createComponent(SupplierComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        compiled.querySelector('#suppCode').value='4343';
        compiled.querySelector('#suppCode').dispatchEvent(new Event('input'));
        fixture.detectChanges();
        compiled.querySelector('#suppName').value='Nagendra';
        compiled.querySelector('#suppName').dispatchEvent(new Event('input'));
        fixture.detectChanges();
        compiled.querySelector('#suppAmt').value='9999';
        compiled.querySelector('#suppAmt').dispatchEvent(new Event('input'));
        fixture.detectChanges();

        compiled.querySelector('#btnadd').click();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            // const grid = fixture.debugElement.query(By.directive(GridComponent));
          
            expect(compiled.querySelector("#mytable").rows.length).toBeGreaterThan(1);
          });
    })
    it('increments the row count in grid',()=>{
        const fixture = TestBed.createComponent(SupplierComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        // var iniRowCount = 2;
        compiled.querySelector('#suppCode').value='4343';
        compiled.querySelector('#suppCode').dispatchEvent(new Event('input'));
        fixture.detectChanges();
        compiled.querySelector('#suppName').value='Nagendra';
        compiled.querySelector('#suppName').dispatchEvent(new Event('input'));
        fixture.detectChanges();
        compiled.querySelector('#suppAmt').value='9999';
        compiled.querySelector('#suppAmt').dispatchEvent(new Event('input'));
        
        fixture.detectChanges();
        
        var iniRowCount=0;
        console.log("iniRwCount"+iniRowCount)
        fixture.whenStable().then(()=>{
            iniRowCount = compiled.querySelector("#mytable").rows.length;
            console.log("iniRowCount"+iniRowCount)
        });
        
        console.log("iniRowCount"+iniRowCount)
        compiled.querySelector('#btnadd').click();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            const grid = fixture.debugElement.query(By.directive(GridComponent));
          
            expect(compiled.querySelector("#mytable").rows.length).toBeGreaterThanOrEqual(iniRowCount+ 1);
          });
    })
})