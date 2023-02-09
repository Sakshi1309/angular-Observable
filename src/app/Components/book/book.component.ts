import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { EBookComponent } from './eBook.component';
@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, AfterViewInit, OnDestroy {
  public title = 'Book';

  @ViewChild(EBookComponent) child: EBookComponent;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // this.title = new BehaviorSubject<string>('Book');
  }

  ngOnInit() {
    this.router.navigate(['/book'], {
      queryParams: { orderBy: 'price', category: 'fiction' },
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.router.navigate(['e-book'], {
        queryParams: { name: 'sakshi' },
        queryParamsHandling: 'merge',
      });
    }, 3000);
  }

  ngOnDestroy() {
    this.activatedRoute.queryParams.subscribe((item) => {
      console.log('QueryParams', item);
    });
  }
}
