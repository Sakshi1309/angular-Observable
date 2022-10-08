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
    const obsUsingConstructor = new Observable((observer) => {
      observer.next('1');
      observer.next('2');
      observer.next('3');
      observer.complete();
    });

    obsUsingConstructor.subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
}
