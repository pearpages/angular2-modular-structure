import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {UsersModule} from './users/users.module';
import {HousesModule} from './houses/houses.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    HousesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
