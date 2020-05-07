import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ObDataService } from '../services/ob-data.service';
import { ActivatedRoute } from '@angular/router';
import { SongDetailServiceStub } from './song-detail.service.mock';
import { from } from 'rxjs';

import { SongDetailComponent } from './song-detail.component';

describe('SongDetailComponent', () => {
  let component: SongDetailComponent;
  let fixture: ComponentFixture<SongDetailComponent>;
  let obdata: ObDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongDetailComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ObDataService, useClass: SongDetailServiceStub},
        { provide: ActivatedRoute, useValue: { 'params': from([{ 'id': 129 }]) } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDetailComponent);
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
