import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../services/operator.service';
import { OperatorModel } from '../../models/operator.model';
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-table-operator',
  templateUrl: './table-operator.component.html',
  styleUrls: ['./table-operator.component.scss']
})
export class TableOperatorComponent implements OnInit {

  public operatorsItem: OperatorModel[] = [];
  public isLoad = true;

  constructor(private operatorServices: OperatorService) { }

  ngOnInit(): void {
    this.getOperators();
  }

  private getOperators(): void {
    this.operatorServices.getOperators()
    .pipe(finalize(() => {
      this.isLoad = false;
    }))
    .subscribe(response => {
      this.operatorsItem = response;
    });
  }

}
