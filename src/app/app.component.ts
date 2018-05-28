import { Component } from '@angular/core';
import { VideoService } from "./video.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private videoService: VideoService) { }
}
