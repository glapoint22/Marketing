import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DataService } from "../data.service";
import { ShowModalService } from '../show-modal.service';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
})
export class MailComponent implements OnInit {
  public html: SafeHtml;

  constructor(private dataService: DataService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router, private showModalService: ShowModalService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let emailId = queryParams.get('eid');

      this.dataService.get('api/Mail', [{ key: 'emailId', value: emailId }])
        .subscribe((response: any) => {
          if (response === null) {
            this.showModalService.showSubscriptionForm(null);
          } else {
            this.html = this.sanitizer.bypassSecurityTrustHtml(response);
          }
        });
    });
  }
}