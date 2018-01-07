import { Component } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  constructor(private dataService: DataService) { }
}