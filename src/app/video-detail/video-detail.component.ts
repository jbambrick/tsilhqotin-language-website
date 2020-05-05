import { Component, OnInit, ViewChild, ɵPlayer } from '@angular/core';
import { ObDataService } from '../services/ob-data.service';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { map, switchMap, filter } from 'rxjs/operators';
import { Observable, ObservableInput } from 'rxjs';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

   // get the component instance to have access to plyr instance
   @ViewChild(PlyrComponent, { static: true })
   plyr: PlyrComponent;
 
 
   public videoSources = []; 
 
   obDownloadURL: string = "https://datsan.openbroadcaster.pro/";
   public video: any = {};
   public videoID: string = ""; // use magic number temporarily as we scaffold
 
   constructor(private obdata: ObDataService, private route: ActivatedRoute, private router: Router) { 
     this.route.params
       .pipe(map(params => params['id'])) 
       .pipe(switchMap((id: string): ObservableInput<any>=>{
         this.videoID = id;
         console.log(`Searching for one video by id: ${this.videoID}`);
         return this.obdata.getVideoByID(this.videoID);
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
         this.video = reformattedMediaJSON;
         this.videoSources.push({
           "src": this.video.url,
           "type": "audio/mp3"
         });
       })
     }

   ngOnInit(): void{ 
     
   }
 
   played(event: Plyr.PlyrEvent) {
     console.log('played', event);
   }
}
