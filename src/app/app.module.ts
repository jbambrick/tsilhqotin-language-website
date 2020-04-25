import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DialectComponent } from './dialect/dialect.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AppsComponent } from './apps/apps.component';
import { LinksComponent } from './links/links.component';
import { SongsComponent } from './songs/songs.component';
import { VideosComponent } from './videos/videos.component';
import { FundersComponent } from './funders/funders.component';
import { HttpClientModule } from '@angular/common/http';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { PlyrModule } from 'ngx-plyr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DialectComponent,
    TeachersComponent,
    ContactComponent,
    FooterComponent,
    AppsComponent,
    LinksComponent,
    SongsComponent,
    VideosComponent,
    FundersComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlyrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
