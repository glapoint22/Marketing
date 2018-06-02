import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { ShowModalService } from "../show-modal.service";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public name: string;
  public email: string;
  public subject: string;
  public message: string;
  public messageSent: boolean;

  constructor(private dataService: DataService, private showModalService: ShowModalService) { }

  ngOnInit() {
  }

  onSubmit(form): void {
    if (form.form.status !== 'VALID') return;
    this.showModalService.showLoading(true);
    let contact = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    }
    this.dataService.post('api/Contact', contact)
      .subscribe((response: any) => {
        this.showModalService.showLoading(false);
        this.messageSent = true;
      });
  }

}
