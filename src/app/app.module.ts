import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing-module';
import { DashboardComponent } from './dashboard.component';
import { ProfileService } from './profiles/profiles.service';
import { BirdRecordService} from './birdrecord/birdrecord.service';
import { ProfilesComponent } from './profiles/profiles.component';
import { BirdRecordComponent } from './birdrecord/birdrecord.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    BirdRecordComponent,
    ProfilesComponent
  ],
  providers: [ProfileService, BirdRecordService],
  bootstrap: [AppComponent]
})

export class AppModule { }
