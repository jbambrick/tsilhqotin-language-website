import { Component, OnInit, ViewChild, ɵPlayer } from '@angular/core';
import { ObDataService } from '../services/ob-data.service';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';
import { ActivatedRoute } from "@angular/router";
import { map, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent, { static: true })
  plyr: PlyrComponent;


  public audioSources = []; 

  obDownloadURL: string = "https://datsan.openbroadcaster.pro/";
  public song: any = {};
  public songID: string = ""; // use magic number temporarily as we scaffold

  constructor(private obdata: ObDataService, private route: ActivatedRoute) { 
    this.route.params
      .pipe(map(params => params['id']))
      .pipe(switchMap((id: string)=>{
        this.songID = id;
        console.log(`SEt songid to : ${this.songID}`);
        return this.obdata.getAllKidsSongs();
      })).pipe(map((data: any)=>{
        let mediaItem = data.media.filter((item:any)=>{return item.id === this.songID});
        let reformattedMediaJSON: any;
        reformattedMediaJSON = {
          "title": mediaItem[0].title,
          "performer": mediaItem[0].artist,
          "url": `${this.obDownloadURL}${mediaItem[0].download}`,
          "comments": mediaItem[0].comments,
          "id": mediaItem[0].id
        };
        console.log(`${this.obDownloadURL}${mediaItem.download}`);
        console.log(reformattedMediaJSON.title);
        return reformattedMediaJSON;
      })) 
      .subscribe((data:any)=>{
        this.song = data;
        console.log(`returned data: ${data.url}`);
        this.audioSources.push({
          "src": this.song.url,
          "type": "audio/mp3"
        });
        this.plyr.plyrSources = [{
          "src": 'https://datsan.openbroadcaster.pro/download.php?media_id=126',
          "type": "audio/mp3"
        }];//this.audioSources;
      });
    
  }

  ngOnInit(): void { 
    
  }

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }
}
