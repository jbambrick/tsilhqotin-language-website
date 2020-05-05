import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObDataService {

  openBrodcasterURL: string = "https://datsan.openbroadcaster.pro/";
  openBroadcasterAPIURL: string = `${this.openBrodcasterURL}tools/stream/api.php`;
  openBroadcasterDownloadURL: string = `${this.openBrodcasterURL}tools/download.php`;

  private genre: object = {
    "kids-songs":3207,
    "public-videos": 3209
  }

  constructor(private http: HttpClient) { }

  public getAllKidsSongs(){
    let url: string = `${this.openBroadcasterAPIURL}?genre_id=${this.genre["kids-songs"]}`;
    console.log(`GET: ${url}`);
    return this.http.get(url);
  }

  public getKidsSongByID(id: string){
    return this.getAllKidsSongs().pipe(map((data:any)=>{
      return data.media.filter((item: any)=>{
        return item.id === id;
      });
    }));
  }

  public getAllVideos(){
    let url: string = `${this.openBroadcasterAPIURL}?genre_id=${this.genre["public-videos"]}`;
    console.log(`GET: ${url}`);
    return this.http.get(url);
  }

  public getVideoByID(id: string){
    return this.getAllVideos().pipe(map((data:any)=>{
      return data.media.filter((item: any)=>{
        return item.id === id;
      });
    }));
  }

}
