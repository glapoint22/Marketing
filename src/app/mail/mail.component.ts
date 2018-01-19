import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  public html: SafeHtml;

  constructor(private dataService: DataService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let emailId = queryParams.get('eid'), customerId = queryParams.get('cid');
      this.dataService.isLoading = true;

      this.dataService.get('api/Mail', [{key: 'emailId', value: emailId}, {key: 'customerId', value: customerId}])
        .subscribe((response: any) => {
          this.html = this.sanitizer.bypassSecurityTrustHtml(response) ;
          this.dataService.error = null;
          this.dataService.isLoading = false;
        }, error => {
          this.dataService.isLoading = false;
          this.dataService.error = error;
        });
    });
  }
}