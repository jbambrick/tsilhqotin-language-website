import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-plyr',
  templateUrl: './plyr.component.html',
  styleUrls: ['./plyr.component.css']
})
export class PlyrComponent implements OnInit {

  // get the component instance to have access to plyr instance
@ViewChild(PlyrComponent)
plyr: PlyrComponent;

/*
videoSources: Plyr.Source[] = [
  {
    src: 'bTqVqk7FSmY',
    provider: 'youtube',
  },
]; */

audioSources: Plyr.Source[] = [
  {
    src: 'https://datsan.openbroadcaster.pro/download.php?media_id=126',
    type: 'audio/mp3'
  },
];

played(event: Plyr.PlyrEvent) {
  console.log('played', event);
}

play(): void {
  this.plyr.play(); // or this.plyr.player.play()
}

pause(): void {
  this.plyr.pause(); // or this.plyr.player.play()
}

stop(): void {
  this.plyr.stop(); // or this.plyr.player.stop()
}

  constructor() { }

  ngOnInit(): void {
  }

}
