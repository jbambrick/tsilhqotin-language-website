import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ObDataService } from '../services/ob-data.service';
import { ActivatedRoute } from '@angular/router';
import { VideoDetailServiceStub } from './video-detail.service.mock';
import { from } from 'rxjs';

import { VideoDetailComponent } from './video-detail.component';

describe('VideoDetailComponent', () => {
  let component: VideoDetailComponent;
  let fixture: ComponentFixture<VideoDetailComponent>;
  let spy: jasmine.Spy;
  let obdata: ObDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDetailComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ObDataService, useClass: VideoDetailServiceStub},
        { provide: ActivatedRoute, useValue: { 'params': from([{ 'id': 129 }]) } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetailComponent);
    obdata = fixture.debugElement.injector.get(ObDataService);
    //ask fixture to detect changes
    fixture.detectChanges();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
