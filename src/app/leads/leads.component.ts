import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DataService } from "../data.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
  @ViewChild('subscriptionForm') subscriptionForm;
  public leadMagnetTitle: string;
  public nicheId: number;
  public caption: string;
  public leadPage: SafeHtml;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      let pageTitle = param.get('leadPage');

      //Get the lead page
      this.dataService.get('api/LeadPages', [{ key: 'pageTitle', value: pageTitle }])
        .subscribe((response: any) => {
          this.leadPage = this.sanitizer.bypassSecurityTrustHtml(response.body.replace(/title="[a-zA-Z0-9-.]+"/g, ''));
          this.leadMagnetTitle = response.title;
          this.nicheId = response.nicheId;
          this.caption = 'Enter your name and email below to get your free ' + this.leadMagnetTitle + '!';
        });
    })
  }

  @HostListener('document:click', ['$event'])
  onClick(event) {
    if (event.target.id === 'button' || (event.target.parentElement && event.target.parentElement.id === 'button')) {
      this.dataService.post('api/Subscriptions', { nicheId: this.nicheId, leadMagnet: this.leadMagnetTitle })
        .subscribe((response: any) => {
          if (response === null) {
            this.subscriptionForm.open();
          } else {
            this.subscriptionForm.nextAction(response);
          }
        });
    }
  }
}