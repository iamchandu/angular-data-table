import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datatable1';
  data;
  apiName = 'getData';
  propertyes = {
    primaryKey: 'id',
    actions: ['view'],
      info: [
        {key:'id', value: 'ID'},
        {key:'title', value: 'Title'},
        {key:'completed', value: 'Status'},
      ]
  };
  propertyes1 = {
    primaryKey: 'id',
    actions: [{name: 'view', api:"getDataId"}],
      info: [
        {key:'id', value: 'ID'},
        {key:'title', value: 'Title'},
        {key:'completed', value: 'Status'},
      ]
  };
  constructor(public api: ApiService){
    this.api.getData().subscribe(res=>{
      this.data = res;
    });
  }

  /** ref */
  filterFunction($event) {
    console.log($event)
    this.api.getDataId($event.id).subscribe(res=>{
      this.data = [res];
    })
  }

}
