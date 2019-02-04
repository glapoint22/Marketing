import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent {

  constructor(private router: Router){}

  onHomeButtonClick(){
    this.router.navigate(['']);
  }
}