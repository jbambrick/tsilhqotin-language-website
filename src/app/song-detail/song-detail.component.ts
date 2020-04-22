import { Component, OnInit, ViewChild, ɵPlayer } from '@angular/core';
import { ObDataService } from '../services/ob-data.service';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
    // get the component instance to have access to plyr instance
    @ViewChild(PlyrComponent, { static: true })
    plyr: PlyrComponent;

    player: Plyr;

    private audioSources = [{
      src: "https://datsan.openbroadcaster.pro/download.php?media_id=126",
      type: "audio/mp3"
    }
    ];

  obDownloadURL: string = "https://datsan.openbroadcaster.pro/";
  public song: any = {};
  public songID: string = "127"; // use magic number temporarily as we scaffold
  private audioPlayer:any = new Audio();

  constructor(private obdata: ObDataService) { }

  ngOnInit(): void {
    this.obdata.getAllKidsSongs().subscribe((data: any)=>{
      console.log(data);
      let songs: any = data.media
      .filter( (item: any)=>{
        console.log(`item.id: _${item.id}_ , songID- _${this.songID}_, same- ${item.id === this.songID}`);
        return item.id == this.songID;
      })
      .map((mediaItem: any)=>{
        let reformattedMediaArray: any;
        reformattedMediaArray = {
          "title": mediaItem.title,
          "performer": mediaItem.artist,
          "url": `${this.obDownloadURL}${mediaItem.download}`,
          "comments": mediaItem.comments,
          "id": mediaItem.id
        }
        console.log(`${this.obDownloadURL}${mediaItem.download}`);
        return reformattedMediaArray;
      });
      this.song = songs[0];
      this.audioSources.push({
        "src": this.song.url,
        "type": "audio/mp3"
      })
    });
  }

  public playAudio(){
    this.audioPlayer.play();
  }




  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  pause(): void {
    this.player.pause(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.stop()
  }


}
