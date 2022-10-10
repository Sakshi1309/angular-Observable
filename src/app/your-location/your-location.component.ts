import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-location',
  templateUrl: './your-location.component.html',
  styleUrls: ['./your-location.component.css'],
})
export class YourLocationComponent implements OnInit {
  constructor(private router: Router) {}

  lat: number;
  long: number;

  ngOnInit() {
    this.getLocation();
    // this.router.navigate(['www.google.com'])
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
