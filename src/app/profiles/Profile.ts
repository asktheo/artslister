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
  initials?: string;
  nickName?: string;
  yearOfBirth?: number;
  work?: string;
  description?: string;
  dreamBirds?: string;
  accessories?: Array<Accessory>;
  contatInfo?: ContactInfo;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
  
}