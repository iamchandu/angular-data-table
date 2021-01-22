import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input() mainApiName: string;
  @Input() propertys: string;
  data;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api[this.mainApiName]().subscribe(res=>{
      this.data = res;
    })
  }

  actionInfo(apiName, id) {
    this.api[apiName](id).subscribe(res=>{
      this.data = [res];
    })
  }

}
