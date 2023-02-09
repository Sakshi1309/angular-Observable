import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public title = 'Product';
  public productId;
  public color;
  public productType;
  public productList = [
    { productId: '1', color: 'red', productType: 'TV' },
    { productId: '2', color: 'yellow', productType: 'AC' },
    { productId: '3', color: 'Blue', productType: 'Fridge' },
    { productId: '4', color: 'Green', productType: 'Mobile' },
  ];

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.productList.forEach((item, i) => {
      setTimeout(() => {
        this.router.navigate([
          'product',
          item.productId,
          item.color,
          item.productType,
        ]);
      }, i * 1000);
    });

    let productId = this.activatedRoute.snapshot.params.productId;
    console.log('Id', productId);
    let color = this.activatedRoute.snapshot.params.color;
    console.log('Color', color);
    let productType = this.activatedRoute.snapshot.params.productType;
    console.log('Type', productType);

    this.activatedRoute.paramMap.subscribe((param) => {
      this.productId = param.get('productId');
      console.log('ProductId', productId);
      this.color = param.get('color');
      console.log('ProductColor', color);
      this.productType = param.get('productType');
      console.log('ProductType', productType);
    });
  }
}
