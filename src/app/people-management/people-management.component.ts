import { Marker } from './../classes-interfaces/marker';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonManagementService } from '../services/person-management.service';
import { GeolocationApiService } from '../services/geolocation-api.service';

@Component({
  selector: 'people-management',
  templateUrl: './people-management.component.html',
  styleUrls: ['./people-management.component.css']
})

export class PeopleManagementComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private personManagementService: PersonManagementService,
    private geoLocationAPI: GeolocationApiService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'date': [null, Validators.required],
      'time': [null, Validators.required],
      'address': [null]
    });
  }

  onSubmit(personInformation) {
    this.personManagementService.addPerson(personInformation);

  }

  getLocation(location: Marker) {
    this.geoLocationAPI.getAddressFromCoordinates(location.lat, location.lng).subscribe(
      address => {
        if (address != '' && address != undefined) {
          this.formGroup.get('address').setValue(address);
        }
        else {
          this.formGroup.get('address').setValue(`lat: ${location.lat}, lng: ${location.lng}`);
        }
      },
      error => {
        console.log(error.message);
      }
    );
  }

}