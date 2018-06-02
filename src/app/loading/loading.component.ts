import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ShowModalService } from "../show-modal.service";

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss', '../modal/modal.component.scss']
})
export class LoadingComponent extends ModalComponent implements OnInit {

  constructor(private showModalService: ShowModalService) { super() }

  ngOnInit() {
    this.observable = this.showModalService.loading;
    super.ngOnInit();
  }

  open(show: boolean) {
    if (show) {
      super.open();
    } else {
      this.close();
    }
  }

  handleKeyboardEvent(event: KeyboardEvent) { }
}