import { Component } from '@angular/core';
import { VideoService } from "./video.service";
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public videoService: VideoService, public dataService: DataService) { }
}
