import { Component, OnInit, VERSION } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name;
  // hello;

  constructor(private _as: AppService) {
    this._as.name.subscribe((userName) => {
      this.name = userName;
    });
  }

  ngOnInit() {
    this._as.fetchData().subscribe({
      next: (res) => {
        console.log(res);
        console.log('1');
        console.log('2');
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  changeName(name) {
    console.log(name.value);
    this._as.name.next(name.value);
  }
}
