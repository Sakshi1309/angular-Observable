import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookComponent } from '../../Components/book/book.component';

@Component({
  selector: 'ebook',
  template: `<div class="container">
  <h5>This is a {{ title }} component which defines Query and Query Params</h5>
</div>`,
  styleUrls: ['./book.component.css'],
})
export class EBookComponent implements OnInit {
  @ViewChild(BookComponent) parent: BookComponent;
  public title = '...';
  constructor(private router: Router, private routes: ActivatedRoute) {
    this.title = '......';
  }

  ngOnInit() {
    this.title = this.parent.title;
  }
}
