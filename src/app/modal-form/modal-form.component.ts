import { Component } from '@angular/core';
import { DataService } from "../data.service";
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';

@Component({
  template: '',
})
export class ModalFormComponent extends ModalComponent {
  public data: any;
  public url: string;

  constructor(public dataService: DataService, public router: Router) { super(); }

  onSubmit(form): void {
    if (form.form.status !== 'VALID') return;
    this.show = false;
    this.setData();
  }

  postData() {
    this.dataService.isLoading = true;
    this.dataService.post(this.url, this.data)
      .subscribe((response: any) => {
        this.setResponse(response);
        this.nextAction(response);
        this.dataService.error = null;
        this.dataService.isLoading = false;
      }, error => {
        this.dataService.isLoading = false;
        this.dataService.error = error;
      });
  }

  setResponse(response) { }
  nextAction(response) { }
  setData() { }
}
