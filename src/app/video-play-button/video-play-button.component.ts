import { Component, Input } from '@angular/core';
import { ShowModalService } from "../show-modal.service";

@Component({
  selector: 'video-play-button',
  templateUrl: './video-play-button.component.html',
  styleUrls: ['./video-play-button.component.scss']
})
export class VideoPlayButtonComponent {
  @Input() videos: Array<string>;
  @Input() productName: string;

  constructor(public showModalService: ShowModalService) { }
}
