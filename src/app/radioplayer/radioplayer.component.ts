import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ObDataService } from '../services/ob-data.service';
import { Source } from 'plyr';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-radioplayer',
  templateUrl: './radioplayer.component.html',
  styleUrls: ['./radioplayer.component.css']
})
export class RadioplayerComponent implements OnInit {
  @ViewChild('player') playerReference: ElementRef;

  mediaSource: MediaSource = new MediaSource();
  icecastURL: string;

  constructor(private obdata: ObDataService, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.icecastURL = this.obdata.getIcecastURL();
    this.renderer.setProperty(this.playerReference.nativeElement, 'src', this.icecastURL);
  }
}
