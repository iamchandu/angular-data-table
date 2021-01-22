import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datatable-ref',
  templateUrl: './datatable-ref.component.html',
  styleUrls: ['./datatable-ref.component.css']
})
export class DatatableRefComponent implements OnInit {
  @Input() data;
  @Input() propertys;
  @Output() api: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  actionInfo(act, id) {
    this.api.emit({action:act, id: id})
  }

}
