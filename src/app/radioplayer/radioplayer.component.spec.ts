import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioplayerComponent } from './radioplayer.component';

describe('RadioplayerComponent', () => {
  let component: RadioplayerComponent;
  let fixture: ComponentFixture<RadioplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
