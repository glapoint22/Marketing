import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ShowModalService } from "../show-modal.service";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public customerId: string;

  constructor(private cookieService: CookieService, public showModalService: ShowModalService) { }

  ngOnInit() {
    this.customerId = this.cookieService.get('Customer');
  }
}