import { Component, OnInit } from '@angular/core';
import { ObDataService } from '../services/ob-data.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  obDownloadURL: string = "https://datsan.openbroadcaster.pro/download.php?media_id=";

  public songs: any[]= []; /* = [
    { // SONG
    "title": "ʔEsgul Beŝ",
    "performer": "Bella Alphonse",
    "translator": "Bella Alphonse",
    "transcriber": "Bella Alphonse",
    "url": `${this.obDownloadURL}128`,
    "lyrics": "Beŝ be-whil nadalbenŝ"
  },

  { // SONG
    "title": "Bonnie",
    "performer": "Bella Alphonse",
    "translator": "Bella Alphonse",
    "transcriber": "Bella Alphonse",
    "url": `${this.obDownloadURL}129`,
    "lyrics": ""
  },

  { // SONG
    "title": "Cowboy-Jed",
    "performer": "Maryann Solomon",
    "translator": "Maryann Solomon",
    "transcriber": "Bella Alphonse",
    "url": `${this.obDownloadURL}521`,
    "lyrics": ""
  },

  { // SONG
    "title": "Happy Birthday",
    "performer": "Bella Alphonse",
    "translator": "Bella Alphonse",
    "transcriber": "Bella Alphonse",
    "url": `${this.obDownloadURL}151`,
    "lyrics": ""
  },

  { // SONG
    "title": "Humpty Dumpty",
    "performer": "Bella Alphonse",
    "translator": "Maryann Solomon",
    "transcriber": "Bella Alphonse",
    "url": `${this.obDownloadURL}162`,
    "lyrics": ""
  },

  { // SONG
    "title": "Naghunti",
    "performer": "Bella Alphonse",
    "translator": "Bella Alphonse",
    "transcriber": "Bella Alphonse",
    "url": `${this.obDownloadURL}127`,
    "lyrics": ""
  },

  { // SONG
    "title": "Nenduwh Gast’in ʔEsan",
    "performer": "Bella Alphonse",
    "translator": "Bella Alphonse",
    "transcriber": "Bella Alphonse",
    "url": `${this.obDownloadURL}133`,
    "lyrics": ""
  },

  { // SONG
    "title": "Nenduwh Gat’in",
    "performer": "Bella Alphonse",
    "translator": "Bella Alphonse",
    "transcriber": "Bella Alphonse",
    "url": `${this.obDownloadURL}126`,
    "lyrics": ""
  },

  { // SONG
    "title": "Nenqayni Neslin Hast’ih",
    "performer": "Bella Alphonse",
    "translator": "Bella Alphonse",
    "transcriber": "Bella Alphonse",
    "url": `${this.obDownloadURL}130`,
    "lyrics": ""
  },

  { // SONG
    "title": "Yedanx Shen",
    "performer": "Peyal Laceese",
    "translator": "Came to Peyal in a dream.",
    "transcriber": "No transcript.",
    "url": `${this.obDownloadURL}579`,
    "lyrics": ""
  }

  { // SONG
    "title": "Yaŝalhtɨg",
    "performer": "Sheila Gilpin and Perry Alexander",
    "translator": "",
    "transcriber": "",
    "url": `${this.obDownloadURL}516`,
    "lyrics": ""
  },

  { // SONG
    "title": "Happy and You Know It",
    "performer": "Sheila Gilpin and Perry Alexander",
    "translator": "",
    "transcriber": "",
    "url": `${this.obDownloadURL}518`,
    "lyrics": ""
  },

  { // SONG
    "title": "Setŝi",
    "performer": "Sheila Gilpin and Perry Alexander",
    "translator": "",
    "transcriber": "",
    "url": `${this.obDownloadURL}520`,
    "lyrics": ""
  },

  { // SONG
    "title": "Happy Birthday",
    "performer": "Maryann Solomon",
    "translator": "",
    "transcriber": "",
    "url": `${this.obDownloadURL}517`,
    "lyrics": ""
  } 

]; */

  constructor(private obdata: ObDataService) { }

  ngOnInit() {
    this.obdata.getAllKidsSongs().subscribe((data: any)=>{
      console.log(data);
      this.songs.push({
        "title": data.media[0].title,
        "performer": data.media[0].artist
      });
    });
  }

}
