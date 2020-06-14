import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { OperatorModel } from '../models/operator.model';
import { environment } from '../../environments/environment';
import { ApiConstants } from '../constans/api.constanst';


@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  private API = { ...ApiConstants.APIS };
  private BASE_URL = `${ environment.main_path }${ this.API.NAME }`;

  constructor(private http: HttpClient) { }

  public getOperators(): Observable<OperatorModel[]> {
    return this.http.get<OperatorModel[]>(`${ this.BASE_URL }${ this.API.ENDP_OINTS.OPERATORS }`);
  }

}
