import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productSliders;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get('api/Products', [{key: 'customerId', value: 'EFFBAA8B00'}])
    .subscribe((response: any) => {
      this.productSliders = response;
      }, error => {
        this.dataService.data = error;
        this.router.navigate(['/error']);
      });
  }
}