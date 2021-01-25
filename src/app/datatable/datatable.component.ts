import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input() mainApiName;
  @Input() propertys;
  data;
  constructor() { }

  ngOnInit() {
    this.mainApiName(10,20).subscribe(res=>{
      this.data = res;
    })
  }

  actionInfo(apiName, id) {
    apiName(id).subscribe(res=>{
      this.data = [res];
    })
  }

}
