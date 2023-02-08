import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(private router: Router, private routes: ActivatedRoute) {}

  ngOnInit() {
    this.router.navigate(['/book'], { queryParams: { orderBy: 'price' } });
    // this.routes.sub
  }
}
