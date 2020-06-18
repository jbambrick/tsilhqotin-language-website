import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObDataService {

  private openBrodcasterURL: string = "https://datsan.openbroadcaster.pro/";
  private openBroadcasterAPIURL: string = `${this.openBrodcasterURL}tools/stream/api.php`;
  private openBroadcasterDownloadURL: string = `${this.openBrodcasterURL}tools/download.php`;
  private icecastURL: string = "http://datsan.openbroadcaster.pro:8000/datsan";

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

  public getIcecastStream(){
    return this.http.get(this.icecastURL, {responseType: "arraybuffer"});
  }

  public async pipeStreamToBuffer(sourceBuffer) {
    console.log(`Piping stream to buffer`);
    const fetchedResource = await fetch(this.icecastURL);
    const reader = await fetchedResource.body.getReader();

    reader.read().then(function processText({ done, value }) {
      if (done) {
        console.log('Stream finished. Content received:');
        return;
      }
      sourceBuffer.appendBuffer(value);
      return reader.read().then(processText);
    });
    
  }

}
