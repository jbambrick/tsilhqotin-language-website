import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObDataService {

  openBrodcasterURL: string = "https://datsan.openbroadcaster.pro/";
  openBroadcasterAPIURL: string = `${this.openBrodcasterURL}tools/stream/api.php`;
  openBroadcasterDownloadURL: string = `${this.openBrodcasterURL}tools/download.php`;

  private genre: object = {
    "Kids' Songs":3207
  }

  constructor(private http: HttpClient) { }

  public getAllKidsSongs(){
    let url: string = `${this.openBroadcasterAPIURL}?genre_id=${this.genre["Kids' Songs"]}`;
    console.log(`GET: ${url}`);
    return this.http.get(url);
  }

  public getMediaItemByID(id: number){
    let url: string = `${this.openBroadcasterDownloadURL}?media_id=${id}`;
    console.log(`GET: ${url}`);
    return this.http.get(url);
  }
}
