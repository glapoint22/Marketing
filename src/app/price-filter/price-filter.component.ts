import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['../filter/filter.component.scss', './price-filter.component.scss']
})
export class PriceFilterComponent extends FilterComponent implements OnInit {

  constructor(route: ActivatedRoute, router: Router) { super(route, router); }

  ngOnInit() {
  }

}
