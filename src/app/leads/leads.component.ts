import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from "../data.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
  public mainStyle: SafeHtml;
  public image: string;
  public text: SafeHtml;
  public textStyle: SafeHtml;
  public barStyle: SafeHtml;
  public barText: string;
  public buttonStyle: SafeHtml;
  public buttonText: string;
  public formButtonText: string;
  public leadMagnet: string;
  // public isLoading: boolean = false;
  public nicheId: number;
  public caption: string;

  constructor(private router: Router, private dataService: DataService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      let leadPage = param.get('leadPage');

      //Get the lead page
      this.dataService.get('api/Leads', [{ key: 'leadPage', value: leadPage }])
        .subscribe((response: any) => {
          this.mainStyle = this.sanitizer.bypassSecurityTrustStyle(response.mainStyle);
          this.image = response.image;
          this.text = this.sanitizer.bypassSecurityTrustHtml(response.text);
          this.textStyle = this.sanitizer.bypassSecurityTrustStyle(response.textStyle);
          this.barStyle = this.sanitizer.bypassSecurityTrustStyle(response.barStyle);
          this.barText = response.barText;
          this.buttonStyle = this.sanitizer.bypassSecurityTrustStyle(response.buttonStyle);
          this.buttonText = response.buttonText;
          this.formButtonText = response.formButtonText;
          this.leadMagnet = response.leadMagnet;
          this.nicheId = response.nicheId;
          this.caption = 'Enter your name and email below to get the ' + this.leadMagnet + '!'
        }, error => {
          this.dataService.data = error;
          this.router.navigate(['/error']);
        });
    })
  }
}