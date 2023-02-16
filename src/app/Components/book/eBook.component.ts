import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookComponent } from '../../Components/book/book.component';
import { BookService } from '../../Components/book/book.service';

@Component({
  selector: 'ebook',
  template: `<div class="container">
  <h5>This is a {{ title }} component which defines Query and Query Params</h5>
</div>`,
  styleUrls: ['./book.component.css'],
})
export class EBookComponent implements OnInit {
  public title = '...';
  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    public _bookService: BookService
  ) {
    this._bookService.title.subscribe((data) => {
      this.title = data;
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this._bookService.title.next('E-bookkkkkkkkkkkkkkkk');
    }, 1500);
  }
}
