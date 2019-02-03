import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  template: ''
})
export class ModalComponent implements OnInit {
  public show: boolean = false;
  public observable: Observable<any>;

  ngOnInit() {
    this.observable.subscribe(data => {
      if (data === 'close') {
        this.close(true);
      } else {
        this.open(data);
      }
    });
  }

  stopPropagation(event): void {
    event.stopPropagation();
  }

  close(closedByNavigation?: boolean) {
    document.body.style.overflow = 'visible';
    this.show = false;
  }

  open(data?: any) {
    document.body.style.overflow = 'hidden';
    this.show = true;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
}