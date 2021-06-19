import { Marker } from './../classes-interfaces/marker';
import { GeolocationApiService } from './../services/geolocation-api.service';
import { Component, OnInit, NgZone, Output, EventEmitter } from '@angular/core';
import { MouseEvent, MapsAPILoader } from "@agm/core";

@Component({
  selector: 'map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})

export class MapComponentComponent implements OnInit {

  zoom: number = 8;
  @Output() passLocationInformation = new EventEmitter<Object>();

  locationMarker = {
    lat: 0,
    lng: 0,
    draggable: true
  }

  constructor(
  ) {

  }

  ngOnInit(): void {
    this.getLocation.call(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    }
  }

  showPosition(position) {
    this.locationMarker.lat = position.coords.latitude;
    this.locationMarker.lng = position.coords.longitude;
    this.passLocationInformation.emit(this.locationMarker);
  }

  clickedMarker(marker: Marker) {
  }

  //Get location when mouse is clicked on a location in map.
  mapClicked($event: MouseEvent) {
    //console.log('mouse clicked: inside map clicked');
    this.locationMarker.lat = $event.coords.lat;
    this.locationMarker.lng = $event.coords.lng;
    this.passLocationInformation.emit(this.locationMarker);
  }

  //Get location when marker is drag and released.
  markerDragEnd($event: MouseEvent) {
    this.locationMarker.lat = $event.coords.lat;
    this.locationMarker.lng = $event.coords.lng;
    this.passLocationInformation.emit(this.locationMarker);
  }

}
