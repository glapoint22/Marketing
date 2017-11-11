import { Component, OnInit } from '@angular/core';
import { VideoService } from "../video.service";
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss', '../modal/modal.component.scss']
})
export class VideoPlayerComponent extends ModalComponent implements OnInit {

  constructor(private videoService: VideoService) { super(); }

  ngOnInit() {
    this.videoService.showPlayer.subscribe(result => {
      this.show = result;
    });
  }

  showNextVideo(direction: number) {
    this.videoService.setVideo(this.videoService.currentVideoIndex + direction);
  }

  showVideo(index: number) {
    this.videoService.setVideo(index);
  }
}
