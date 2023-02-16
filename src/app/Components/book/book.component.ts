import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookService } from '../../Components/book/book.service';
import { EBookComponent } from './eBook.component';
@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, AfterViewInit, OnDestroy {
  public name = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public _bookService: BookService
  ) {
    this._bookService.title.subscribe((data) => {
      this.name = data;
    });
  }

  ngOnInit() {
    this.router.navigate(['book'], {
      queryParams: { orderBy: 'price', category: 'fiction' },
    });
    setTimeout(() => {
      this._bookService.title.next('Bookkkkkkkkkkkkk');
    }, 1000);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.router.navigate(['e-book'], {
        queryParams: { name: 'sakshi' },
        queryParamsHandling: 'merge', //preserve
      });
    }, 3000);
  }

  ngOnDestroy() {
    this.activatedRoute.queryParams.subscribe((item) => {
      console.log('QueryParams', item);
    });
  }
}
