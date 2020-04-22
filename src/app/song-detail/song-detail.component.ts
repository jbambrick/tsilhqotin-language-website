import { Component, OnInit } from '@angular/core';
import { ObDataService } from '../services/ob-data.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
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
      this.audioPlayer.src = this.song.url;
    });
  }

  public playAudio(){
    this.audioPlayer.play();
  }

}
