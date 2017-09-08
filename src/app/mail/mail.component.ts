import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, RequestOptions, URLSearchParams } from "@angular/http";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  public html: SafeHtml;

  constructor(private route: ActivatedRoute, private http: Http, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let emailId = queryParams.get('eid');
      let customerId = queryParams.get('cid');

      let params: URLSearchParams = new URLSearchParams();
      params.set('emailId', emailId);
      params.set('customerId', customerId);
      
      let requestOptions = new RequestOptions();
      requestOptions.search = params;
      

      this.http.get('api/Mail', requestOptions)
      .map((response: Response) => response.json())
      .subscribe((response) => {
          this.html = this.sanitizer.bypassSecurityTrustHtml(response) ;
        }
      );
    });
  }
}
