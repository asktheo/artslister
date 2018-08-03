import { BirdRecord } from '../birdrecord/birdrecord';


export class Accessory {
  type: string;
  desc: string;
}

export class  ContactInfo {
  postalAddress?: string;
  postalCode?: string;
  postalDistrict?: string;
  address2?: string;
  country?: string;
  mobilephone?: string;
  email?: string;
}

export class  Profile {
  profileId: number;
  firstName: string;
  lastName: string;
  searchName?: string;
  initials?: string;
  nickName?: string;
  yearOfBirth?: number;
  work?: string;
  description?: string;
  dreamBirds?: string;
  accessories?: Array<Accessory>;
  contactInfo?: ContactInfo;
  birdRecords?: Array<BirdRecord>;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
  
}