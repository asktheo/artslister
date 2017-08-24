import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdRecordComponent } from './birdrecord.component';

describe('BirdrecordComponent', () => {
  let component: BirdRecordComponent;
  let fixture: ComponentFixture<BirdRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
