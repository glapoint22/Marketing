import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  @Input() height: string = '100%';
  public subscriptions;
  public customer;
  public updatedSubscriptions: Array<any> = [];

  constructor(private dataService: DataService, private router: Router, private http: Http) { }

  ngOnInit() {
    if(this.dataService.data){
      this.subscriptions = this.dataService.data.subscriptions;
      this.customer = this.dataService.data.customer;
    }else{
      this.router.navigate(['']);
    }
  }

  updateSubscription(niche){
    let index = this.updatedSubscriptions.findIndex(x => x.id == niche.id);
    niche.isSubscribed = !niche.isSubscribed;
    
    if(index > -1){
      this.updatedSubscriptions.splice(index, 1);
    }else{
      this.updatedSubscriptions.push({
        id: niche.id,
        isSubscribed: niche.isSubscribed
      });
    }
    
  }

  onSubmit(form){
    //this.http.put()
  }

}
