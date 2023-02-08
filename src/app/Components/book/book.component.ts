import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  public title;
  constructor(private router: Router, private routes: ActivatedRoute) {
    this.title = new BehaviorSubject<any>('Book');
  }

  ngOnInit() {
    this.router.navigate(['/book'], {
      queryParams: { orderBy: 'price', category: 'fiction' },
    });
    this.changeRoute();
  }

  changeRoute() {
    setTimeout(() => {
      this.title.next('E-Book');
      this.router.navigate(['e-book'], {
        queryParams: { name: 'sakshi' },
        queryParamsHandling: 'merge',
      });
    }, 3000);
  }
}
