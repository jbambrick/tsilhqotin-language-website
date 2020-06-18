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

  mimeCodec: string = "audio/mpeg";
  mediaSource: MediaSource = new MediaSource();
  sourceBuffer: SourceBuffer;
  readyState: boolean;
  stream$: any;

  constructor(private obdata: ObDataService, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // var sourceBuffer = this.mediaSource.addSourceBuffer(this.mimeCodec);
    this.obdata.pipeStreamToBuffer(sourceBuffer);
    console.log(`On init fired.`);
    this.renderer.setProperty(this.playerReference.nativeElement, 'src', URL.createObjectURL(this.mediaSource));
    this.stream$ = fromEvent<any>(this.playerReference.nativeElement,'sourceopen');
    // this.playerReference.nativeElement.src = URL.createObjectURL(this.mediaSource);
    this.stream$.subscribe(_=>{
    console.log(`this.readyState = ${this.readyState}`); // open
    var sourceBuffer = this.mediaSource.addSourceBuffer(this.mimeCodec);
    this.obdata.pipeStreamToBuffer(sourceBuffer);
    })
  }
/*
  sourceOpen(_){
    console.log(`this.readyState = ${this.readyState}`); // open
    var sourceBuffer = this.mediaSource.addSourceBuffer(this.mimeCodec);
    this.obdata.pipeStreamToBuffer(sourceBuffer);
  } */

  pipeStream(buf){
    console.log(`Checking mediaSource.state: ${this.mediaSource.readyState}`);
      this.sourceBuffer ? this.sourceBuffer.appendBuffer(buf) : console.error("Streaming failed: sourceBuffer does not exist.");
  }

}
