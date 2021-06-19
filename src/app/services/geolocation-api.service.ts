import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GeolocationApiService {

  constructor(private http: HttpClient) { }

  getAddressFromCoordinates(lat, lng) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=e2bbafc33de4454db00beda533bdbe16`;

    return this.http
      .get(
        url
      ).pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
          return throwError(err);    //Rethrow it back to component
        }),
        map(res => {
          let results = res['results'];
          let address = results[0].formatted;
          return address;
        }));
  }

}
