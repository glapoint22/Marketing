import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  template: '',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public show: boolean = false;

  stopPropagation(event): void {
    event.stopPropagation();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  close(){
    this.show = false;
  }
}
