import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';
import { VideosComponent } from './videos/videos.component';
import { StaffComponent } from './staff/staff.component';
import { TeachersComponent } from './teachers/teachers.component';
import { LinksComponent } from './links/links.component';
import { DialectComponent } from './dialect/dialect.component';
import { AppsComponent } from './apps/apps.component';
import { ContactComponent } from './contact/contact.component';
import { FundersComponent } from './funders/funders.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'songs', component: SongsComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'links', component: LinksComponent},
  {path: 'dialect', component: DialectComponent},
  {path: 'apps', component: AppsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'funders', component: FundersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
