export class IndividualMeetings {
    id: string;
    name: string;
    date: string;
    time: string;
    location: string;

    constructor(id, name, date, time, location) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.time = time;
        this.location = location;
    }
}