import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public isError: boolean;

  ngAfterContentChecked() {
    this.isError = document.getElementById('error') !== null;
  }
}