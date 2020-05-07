import { Component, OnInit, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-dialect',
  templateUrl: './dialect.component.html',
  styleUrls: ['./dialect.component.css']
})
export class DialectComponent implements OnInit {
  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent, { static: true })
  plyr: PlyrComponent;

  public audioSources = [{
    "src": "https://datsan.openbroadcaster.pro/download.php?media_id=1719",
    "type": "audio/mp3"
  }]; 
  constructor() { }

  ngOnInit() {
  }

}
