import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ShowModalService } from "./show-modal.service";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataService {
  public data: any = {};

  constructor(private http: HttpClient, private showModalService: ShowModalService) { }

  get(url: string, parameters?: Array<any>): Observable<any> {
    let params = new HttpParams();

    //Set the params
    if (parameters) parameters.forEach(x => params = params.set(x.key, x.value));


    //Get the data
    return this.http.get(url, { params: params })
      .pipe(
        catchError(this.handleError())
      );
  }


  post(url: string, body: any) {
    return this.http.post(url, body)
      .pipe(
        catchError(this.handleError())
      );
  }

  put(url: string, body: any) {
    return this.http.put(url, body)
      .pipe(
        catchError(this.handleError())
      );
  }

  handleError() {
    return (error) => {
      this.showModalService.showError(error);
      this.showModalService.showLoading(false);
      return of();
    }
  }
}