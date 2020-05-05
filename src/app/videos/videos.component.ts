import { Component, OnInit } from '@angular/core';
import { ObDataService } from '../services/ob-data.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  obDownloadURL: string = "https://datsan.openbroadcaster.pro/";
  //
    public videos: any[]= []; 
  
    constructor(private obdata: ObDataService) { }
  
    ngOnInit() {
      this.obdata.getAllVideos().subscribe((data: any)=>{
        console.log(data);
        this.videos = data.media.map((mediaItem: any)=>{
          let reformattedMediaArray: any;
          reformattedMediaArray = {
            "title": mediaItem.title,
            "performer": mediaItem.artist,
            "url": `${this.obDownloadURL}${mediaItem.download}`,
            "comments": mediaItem.comments,
            "id": mediaItem.id
          }
          return reformattedMediaArray;
        })
      });
    }
}
