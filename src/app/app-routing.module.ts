import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RadioComponent } from './radio/radio.component';
import { VideosComponent } from './videos/videos.component';
import { TeachersComponent } from './teachers/teachers.component';
import { LinksComponent } from './links/links.component';
import { DialectComponent } from './dialect/dialect.component';
import { AppsComponent } from './apps/apps.component';
import { ContactComponent } from './contact/contact.component';
import { FundersComponent } from './funders/funders.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { RadioplayerComponent } from './radioplayer/radioplayer.component';
import { SongsComponent } from './songs/songs.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'radio', component: RadioComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'links', component: LinksComponent},
  {path: 'dialect', component: DialectComponent},
  {path: 'apps', component: AppsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'funders', component: FundersComponent},
  {path: 'songs', component: SongsComponent },
  {path: 'song/:id', component: SongDetailComponent},
  {path: 'radioplayer', component: RadioplayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
