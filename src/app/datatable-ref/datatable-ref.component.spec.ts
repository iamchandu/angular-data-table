import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableRefComponent } from './datatable-ref.component';

describe('DatatableRefComponent', () => {
  let component: DatatableRefComponent;
  let fixture: ComponentFixture<DatatableRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
