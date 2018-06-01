import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowModalService {
  public videoPlayer = new Subject<any>();
  public subscriptionForm = new Subject<any>();

  showVideoPlayer(videos, productName) {
    this.videoPlayer.next({
      videos: videos,
      productName: productName
    });
  }

  showSubscriptionForm(product) {
    this.subscriptionForm.next(product);
  }
}
