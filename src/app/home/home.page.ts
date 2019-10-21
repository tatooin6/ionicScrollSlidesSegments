import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() {}

  ngOnInit() {

  }

  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
    console.log('Segment changed', this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}
