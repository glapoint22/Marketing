import { Component } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  constructor(private dataService: DataService) {}
}
