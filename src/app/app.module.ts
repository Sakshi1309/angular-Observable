import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HelloComponent } from './hello.component';
import { AppChild } from './child/child.component';
import { YourLocationComponent } from './your-location/your-location.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, AppChild, YourLocationComponent ],
  providers: [AppService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
