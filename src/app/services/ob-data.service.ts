import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObDataService {

  openBrodcasterURL: string = "https://datsan.openbroadcaster.pro/tools/stream/api.php";

  private genre: object = {
    "Kids' Songs":3207
  }

  constructor(private http: HttpClient) { }

  public getAllKidsSongs(){
    let url: string = `${this.openBrodcasterURL}?genre_id=${this.genre["Kids' Songs"]}`;
    console.log(`Calling url: ${url}`);
    return this.http.get(url);
  }
}
