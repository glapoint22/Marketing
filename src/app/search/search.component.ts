import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let query = queryParams.get('query'), category = queryParams.get('cat_id');

      this.dataService.get('api/Products', [{ key: 'query', value: query }, { key: 'category', value: category }])
    .subscribe((response: any) => {
      response;
    }, error => {
      // this.dataService.data = error;
      // this.router.navigate(['/error']);
    });
      
    });
  }

}
