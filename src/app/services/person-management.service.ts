import { Injectable } from '@angular/core';
import { Person } from '../classes-interfaces/person';
import { Information } from '../classes-interfaces/Information'
import { Meetings } from '../classes-interfaces/meetings';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PersonManagementService {
  //Uncomment for testing
  /*
  person: Person[] = [{
    "id": "hamdan alkasiri",
    "firstname": "hamdan",
    "lastname": "alkasiri",
    "meetings": [{
      "date": "19-06-2021",
      "time": "12:00 PM",
      "location": "N 3, 90427 Nuremberg, Germany"
    }, {
      "date": "23-06-2021",
      "time": "4:00 PM",
      "location": "unnamed road, 92287 Schmidmühlen, Germany"
    }]
  }, {
    "id": "test 1",
    "firstname": "test",
    "lastname": "1",
    "meetings": [{
      "date": "15-07-2021",
      "time": "8:00 PM",
      "location": "unnamed road, 94351 Feldkirchen, Germany"
    }]
  }, {
    "id": "John Doe",
    "firstname": "John",
    "lastname": "Doe",
    "meetings": [{
      "date": "13-08-2021",
      "time": "12:00 AM",
      "location": "unnamed road, 92249 Vilseck, Germany"
    }]
  }, {
    "id": "Jhon Doe2",
    "firstname": "Jhon",
    "lastname": "Doe2",
    "meetings": [{
      "date": "20-11-2021",
      "time": "12:00 AM",
      "location": "unnamed road, 93495 Maiering, Germany"
    }]
  }, {
    "id": "Jhon Doe3",
    "firstname": "Jhon",
    "lastname": "Doe3",
    "meetings": [{
      "date": "20-11-2021",
      "time": "12:00 AM",
      "location": "Jarošova chalupa, 384 25 Bavorov, Czechia"
    }, {
      "date": "20-11-2021",
      "time": "4:00 AM",
      "location": "unnamed road, 92249 Vilseck, Germany"
    }, {
      "date": "12-02-2022",
      "time": "4:00 AM",
      "location": "bamberg"
    }, {
      "date": "18-06-2022",
      "time": "4:00 AM",
      "location": "Jarošova chalupa, 384 25 Bavorov, Czechia"
    }, {
      "date": "13-08-2022",
      "time": "4:00 AM",
      "location": "Jarošova chalupa, 384 25 Bavorov, Czechia"
    }, {
      "date": "17-12-2022",
      "time": "4:00 AM",
      "location": "Jarošova chalupa, 384 25 Bavorov, Czechia"
    }, {
      "date": "20-05-2023",
      "time": "4:00 AM",
      "location": "Jarošova chalupa, 384 25 Bavorov, Czechia"
    }, {
      "date": "21-10-2023",
      "time": "4:00 AM",
      "location": "Jarošova chalupa, 384 25 Bavorov, Czechia"
    }]
  }, {
    "id": "loreum pixel",
    "firstname": "loreum",
    "lastname": "pixel",
    "meetings": [{
      "date": "17-07-2021",
      "time": "3:00 AM",
      "location": "Muckelbauer, Gundelsheimer Straße 69, 96052 Bamberg, Germany"
    }, {
      "date": "19-11-2021",
      "time": "3:00 AM",
      "location": "Muckelbauer, Gundelsheimer Straße 69, 96052 Bamberg, Germany"
    }, {
      "date": "12-02-2022",
      "time": "3:00 AM",
      "location": "Muckelbauer, Gundelsheimer Straße 69, 96052 Bamberg, Germany"
    }, {
      "date": "21-05-2022",
      "time": "3:00 AM",
      "location": "Muckelbauer, Gundelsheimer Straße 69, 96052 Bamberg, Germany"
    }, {
      "date": "17-09-2022",
      "time": "3:00 AM",
      "location": "Jarošova chalupa, 384 25 Bavorov, Czechia"
    }]
  }
  ];
    */
  person: Person[] = [];

  constructor() { }

  addPerson(personInformation: Information) {
    let meet: Meetings[] = []
    let identifier = `${personInformation.firstname} ${personInformation.lastname}`;
    let formDate = personInformation.date;
    let momentDateFormat;
    let date;
    momentDateFormat = moment(formDate);
    date = momentDateFormat.format("DD-MM-YYYY");
    meet.push({
      date: date,
      time: personInformation.time,
      location: personInformation.address
    });

    //Check if person already exists in the list
    //If exists then just add only the location, time and date as an additional meetings
    let nameExists = this.person.find(o => o.id === identifier);

    if (nameExists) {
      for (const i in this.person) {
        if (this.person[i].id === identifier) {
          this.person[i].meetings.push({
            date: date,
            time: personInformation.time,
            location: personInformation.address
          });
        }
      }
    }

    //if person doesn't exists then add as new user
    if (!nameExists) {
      this.person.push({
        id: identifier,
        firstname: personInformation.firstname,
        lastname: personInformation.lastname,
        meetings: meet
      });
    }
  }

  getPerson() {
    return this.person;
  }

}
