import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class DataService {
  public data: any;
  
  constructor(private http: Http) { }

  get(url: string, parameters: Array<any>): Observable<Response>{
    let params: URLSearchParams = new URLSearchParams(), 
        requestOptions: RequestOptions = new RequestOptions();
    
    //Loop through the parameters
    for(let i = 0; i < parameters.length; i++){
      params.set(parameters[i].key, parameters[i].value);
    }

    //Assign the params to the request options
    requestOptions.params = params;

    //Get the data
    return this.http.get(url, requestOptions)
    .map((response: Response) => response.json())
    .catch(this.handleError);
  }


  post(url: string, body: any): Observable<Response>{
    return this.http.post(url, body)
    .map((response: Response) => response.json())
    .catch(this.handleError);
  }

  put(url: string, body: any): Observable<Response>{
    return this.http.put(url, body)
    .map((response: Response) => response.json())
    .catch(this.handleError);
  }

  handleError(error: Response){
    console.log(error);
    return Observable.throw(error);
  }
}
