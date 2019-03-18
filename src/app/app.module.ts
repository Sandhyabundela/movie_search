import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// client server communication
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule // for search, filter
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
