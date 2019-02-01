import { Component } from '@angular/core';
import { DataService } from "../data.service";
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { ShowModalService } from "../show-modal.service";

@Component({
  template: '',
})
export class ModalFormComponent extends ModalComponent {
  public data: any;
  public url: string;

  constructor(public dataService: DataService, public router: Router, public showModalService: ShowModalService) { super(); }

  onSubmit(form): void {
    if (form.form.status !== 'VALID') return;
    this.show = false;
    this.setData();
  }

  postData() {
    this.dataService.post(this.url, this.data)
      .subscribe((response: any) => {
        // this.setResponse(response);
        this.nextAction(response);
      });
  }

  // setResponse(response) { }
  nextAction(response) { }
  setData() { }
}
