import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { EBookComponent } from '../../Components/book/eBook.component';
@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  public title = 'Book';

  @ViewChild(EBookComponent) child: EBookComponent;
  constructor(private router: Router, private routes: ActivatedRoute) {
    // this.title = new BehaviorSubject<string>('Book');
  }

  ngOnInit() {
    this.router.navigate(['/book'], {
      queryParams: { orderBy: 'price', category: 'fiction' },
    });
    this.changeRoute();
  }

  changeRoute() {
    setTimeout(() => {
      this.child.title = 'E-Book';
      this.router.navigate(['e-book'], {
        queryParams: { name: 'sakshi' },
        queryParamsHandling: 'merge',
      });
    }, 3000);
  }
}
