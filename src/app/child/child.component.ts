import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class AppChild implements OnInit {
  name;

  constructor(private _as: AppService) {
    this._as.name.subscribe((userName) => {
      this.name = userName;
    });
  }

  ngOnInit() {
    const obsUsingCons = new Observable((observer) => {
      observer.next('Hello');
      observer.next('My name is');
      observer.next('Nikki');
      // observer.error('Wrong text');
      observer.complete();
    });

    obsUsingCons.subscribe({
      next: (msg) => {
        console.log(msg);
      },

      error: (err) => {
        console.log(err);
      },

      complete: () => {
        console.log('Observable completed');
      },
    });

    const promise = new Promise((resolve, reject) => {
      console.log('Promise begin');
      if (false) {
        resolve('resolve called');
      } else {
        reject('reject called');
      }
      console.log('Promise begin 2');
      setTimeout(() => {
        console.log('Promise begin 3');
      }, 1000);
    });

    promise
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
