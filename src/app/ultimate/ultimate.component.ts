import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'ultimate',
  templateUrl: './ultimate.component.html',
  styleUrls: ['./ultimate.component.scss']
})
export class UltimateComponent{
  public showForm: boolean = false;
  public name: string;
  public email: string;

  onSubmit(form): void{
    if(form.form.status === 'VALID'){
      this.showForm = false;
    }
  }

  stopPropagation(event): void{
    event.stopPropagation();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.key === 'Escape'){
      this.showForm = false;
    }
  }
}