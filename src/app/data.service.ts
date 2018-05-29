import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataService {
  public data: any = {};
  public searchBar: any = {};

  //isLoading
  private _isLoading: boolean = false;
  set isLoading(bool: boolean) {
    this._isLoading = bool;
    document.body.style.overflow = bool ? 'hidden' : 'visible';
  }
  get isLoading(): boolean { return this._isLoading; }


  //error
  private _error: any;
  set error(error: any) {
    this._error = error;
    document.body.style.overflow = error != null ? 'hidden' : 'visible';
  }
  get error(): any { return this._error; }


  constructor(private http: HttpClient) { }

  get(url: string, parameters?: Array<any>): Observable<any> {
    let params = new HttpParams();

    //Set the params
    if (parameters) parameters.forEach(x => params = params.set(x.key, x.value));


    //Get the data
    return this.http.get(url, { params: params })
      .pipe(
        catchError(error => {
          this.error = error;
          this.isLoading = false;
          return of();
        })
      );
  }


  post(url: string, body: any) {
    return this.http.post(url, body)
      .pipe(
        catchError(error => {
          this.error = error;
          this.isLoading = false;
          return of();
        })
      );
  }

  put(url: string, body: any) {
    return this.http.put(url, body)
      .pipe(
        catchError(error => {
          this.error = error;
          this.isLoading = false;
          return of();
        })
      );
  }
}