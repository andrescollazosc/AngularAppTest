import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOperatorComponent } from './table-operator.component';

describe('TableOperatorComponent', () => {
  let component: TableOperatorComponent;
  let fixture: ComponentFixture<TableOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
