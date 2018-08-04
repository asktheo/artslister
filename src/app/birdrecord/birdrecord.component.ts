import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BirdRecordService } from './birdrecord.service';
import { BirdRecord } from './birdrecordtype';
import { Profile } from '../profiles/Profile';
import { EventEmitter } from '@angular/core';
import { ListModel } from './ListModel';

@Component({
  selector: 'app-birdrecord',
  templateUrl: './birdrecord.component.html',
  styleUrls: ['./birdrecord.component.css']
})
export class BirdRecordComponent implements OnInit {
  @Input() profile: Profile;
  public birdRecords: BirdRecord[];
  @Output() notify: EventEmitter<Array<BirdRecord>> = new EventEmitter<Array<BirdRecord>>();
  private model: ListModel;

  constructor(
    private service: BirdRecordService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.model = new ListModel();
    this.model.listType = "DK";
  }

  loadList(): void {
    let params : any = {
        list: this.model.listType,
        id: this.profile.profileId
    }
    this.service.getList(params)
      .subscribe((recs) => {
        this.birdRecords = recs;
        this.notify.emit(this.birdRecords);
      });
  }

}
