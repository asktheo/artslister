import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app.routing-module';
import { DashboardComponent } from './dashboard.component';
import { UserListService } from './userlist.service';
import { BirdRecordService} from './birdrecord/birdrecord.service';
import { UserListComponent } from './userlist.component';
import { BirdRecordComponent } from './birdrecord/birdrecord.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600, passThruUnknownUrl: true })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UserListComponent,
    BirdRecordComponent
  ],
  providers: [UserListService, BirdRecordService],
  bootstrap: [AppComponent]
})


@NgModule({
  declarations: [
    AppComponent,
    BirdRecordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
