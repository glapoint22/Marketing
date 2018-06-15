import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ShowModalService } from "../show-modal.service";

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss', '../modal/modal.component.scss']
})
export class ErrorComponent extends ModalComponent implements OnInit {
  public error: any;

  constructor(private showModalService: ShowModalService) { super(); }

  ngOnInit() {
    this.observable = this.showModalService.error;
    super.ngOnInit();
  }

  open(error: any) {
    this.error = error;
    super.open();
  }

  handleKeyboardEvent(event: KeyboardEvent) { }
}