import {Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector:"grid-ui",
    templateUrl:"./CustomerApp.Grid.html"
})
export class GridComponent{

    gridColumns : Array<any> = new Array<any>();
    gridData : Array<any> = new Array<any>();
    typeOfData :string ="";

    @Input("type-of-data")
    public set setTypeOfData(v : string) {
        this.typeOfData = v;
    }
    

    @Input("grid-columns")
    public set setGridColumns(_gc : Array<any>) {
        this.gridColumns = _gc;
    }
    @Input("grid-data")
    public set setGridData(_gc : Array<any>) {
        this.gridData = _gc;
    }
    @Output("grid-selected")
    eventEmitter: EventEmitter<any> = new EventEmitter<any>();
    
    selectGrid(_selected:any){
        this.eventEmitter.emit(_selected);
    }
}