import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public status: string;
  public statusText: string;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    if(this.dataService.data){
      this.status = this.dataService.data.status;
      this.statusText = this.dataService.data.statusText;
    }else{
      this.router.navigate(['']);
    }
  }

}
