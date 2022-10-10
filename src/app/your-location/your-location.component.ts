import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-location',
  templateUrl: './your-location.component.html',
  styleUrls: ['./your-location.component.css'],
})
export class YourLocationComponent implements OnInit {
  constructor() {}

  lat: number;
  long: number;

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            this.lat = position.coords.latitude;
            this.long = position.coords.longitude;
            console.log(`Latitude ${this.lat} Longitude ${this.long}`);
          }
        },
        (error) => {
          console.log('Your browser does not support geolocation');
        }
      );
    }
  }
}
