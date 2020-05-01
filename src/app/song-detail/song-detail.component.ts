import { Component, OnInit, ViewChild, ɵPlayer } from '@angular/core';
import { ObDataService } from '../services/ob-data.service';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { map, switchMap, filter } from 'rxjs/operators';
import { Observable, ObservableInput } from 'rxjs';

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

  constructor(private obdata: ObDataService, private route: ActivatedRoute, private router: Router) { 
    this.route.params
      .pipe(map(params => params['id'])) 
      .pipe(switchMap((id: string): ObservableInput<any>=>{
        this.songID = id;
        console.log(`Searching for one song by id: ${this.songID}`);
        return this.obdata.getKidsSongByID(this.songID);
      })).subscribe((data: any)=>{
        let mediaItem = data[0];
        let reformattedMediaJSON: any;
        reformattedMediaJSON = {
          "title": mediaItem.title,
          "performer": mediaItem.artist,
          "url": `${this.obDownloadURL}${mediaItem.download}`,
          "comments": mediaItem.comments,
          "id": mediaItem.id,
          "lyrics": mediaItem.metadata_transcript
        };
        this.song = reformattedMediaJSON;
        this.audioSources.push({
          "src": this.song.url,
          "type": "audio/mp3"
        });
      })
    }
  ngOnInit(): void{ 
    
  }

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  goToSong(id:string): void{
      this.router.navigateByUrl(`/song/${id}`);
  }
}
