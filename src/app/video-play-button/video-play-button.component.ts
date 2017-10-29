import { Component, Input } from '@angular/core';
import { WindowService } from "../window.service";

@Component({
  selector: 'video-play-button',
  templateUrl: './video-play-button.component.html',
  styleUrls: ['./video-play-button.component.scss']
})
export class VideoPlayButtonComponent {
  @Input() videos: Array<string>;
  @Input() productTitle: string;

  constructor(private windowService: WindowService) { }
}
