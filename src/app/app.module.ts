import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HelloComponent } from './Components/hello.component';
import { AppChild } from './Components/child/child.component';
import { YourLocationComponent } from './Components/your-location/your-location.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ReversePipe } from './Pipes/demo.pipe';
import {
  HighlightDirctive,
  TruncateDirective,
} from './Directive/highlight.directive';

const routes: Routes = [
  { path: 'child', component: AppChild },
  { path: 'location', component: YourLocationComponent },
  { path: 'forms', component: HelloComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AppChild,
    YourLocationComponent,
    ReversePipe,
    HighlightDirctive,
    TruncateDirective,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
