export class BirdRecord {
    profileId: number;
    speciesId: number;
    birdName: string;
    latinBirdName: string;
    date?: string;
    location?: string;
    latitude?: string;
    longitude?: string;
    map?: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}