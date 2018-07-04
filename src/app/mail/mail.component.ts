import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DataService } from "../data.service";

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
})
export class MailComponent implements OnInit {
  public html: SafeHtml;

  constructor(private dataService: DataService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let emailId = queryParams.get('eid'), customerId = queryParams.get('cid');

      this.dataService.get('api/Mail', [{ key: 'emailId', value: emailId }, { key: 'customerId', value: customerId }])
        .subscribe((response: any) => {
          this.html = this.sanitizer.bypassSecurityTrustHtml(response);
        });
    });
  }
}