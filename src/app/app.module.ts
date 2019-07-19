import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchPipe } from './search.pipe';

import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, SearchPipe,ViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
