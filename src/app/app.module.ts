import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HelloComponent } from './Components/hello.component';
import { AppChild } from './Components/child/child.component';
import { BookComponent } from './Components/book/book.component';
import { EBookComponent } from './Components/book/eBook.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { YourLocationComponent } from './Components/your-location/your-location.component';
import { ProductComponent } from './Components/Product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ReversePipe } from './Pipes/demo.pipe';
import {
  HighlightDirctive,
  TruncateDirective,
} from './Directive/highlight.directive';

const routes: Routes = [
  // { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'child', component: AppChild, pathMatch: 'full' },
  { path: 'location', component: YourLocationComponent, pathMatch: 'full' },
  { path: 'forms', component: HelloComponent, pathMatch: 'full' },
  { path: 'sidebar', component: SidebarComponent, outlet: 'sidebar' },
  { path: 'book', component: BookComponent, pathMatch: 'full' },
  { path: 'e-book', component: EBookComponent, pathMatch: 'full' },
  {
    path: 'product/:productId/:color/:productType',
    component: ProductComponent,
  },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AppChild,
    YourLocationComponent,
    SidebarComponent,
    BookComponent,
    EBookComponent,
    ReversePipe,
    HighlightDirctive,
    TruncateDirective,
    ProductComponent,
  ],
  exports: [RouterModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
