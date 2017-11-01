import { Component } from '@angular/core';
import { VideoService } from "../video.service";

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {

  constructor(private videoService: VideoService) { }

  stopPropagation(event){
    event.stopPropagation();
  }

  showNextVideo(direction: number){
    this.videoService.setVideo(this.videoService.currentVideoIndex + direction);
  }

  showVideo(index: number){
    this.videoService.setVideo(index);
  }
}
