import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ShowModalService } from "../show-modal.service";
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss', '../modal/modal.component.scss']
})
export class ErrorComponent extends ModalComponent implements OnInit {
  public error: any;

  constructor(private showModalService: ShowModalService, private router: Router) { super(); }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.close();
      }
    });

    this.observable = this.showModalService.error;
    super.ngOnInit();
  }

  open(error: any) {
    if (typeof (error) === 'boolean') {
      this.close();
    } else {
      this.error = error;
      super.open();
    }
  }

  onButtonClick(){
    this.router.navigate(['']);
  }

  handleKeyboardEvent(event: KeyboardEvent) { }
}