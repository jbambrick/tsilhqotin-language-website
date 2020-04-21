import { Component, OnInit } from '@angular/core';
import { ObDataService } from '../services/ob-data.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  obDownloadURL: string = "https://datsan.openbroadcaster.pro/";
//
  public songs: any[]= []; 

  constructor(private obdata: ObDataService) { }

  ngOnInit() {
    this.obdata.getAllKidsSongs().subscribe((data: any)=>{
      console.log(data);
      this.songs = data.media.map((mediaItem: any)=>{
        let reformattedMediaArray: any;
        reformattedMediaArray = {
          "title": mediaItem.title,
          "performer": mediaItem.artist,
          "url": `${this.obDownloadURL}${mediaItem.download}`,
          "comments": mediaItem.comments
        }
        return reformattedMediaArray;
      })
    });
  }

}
