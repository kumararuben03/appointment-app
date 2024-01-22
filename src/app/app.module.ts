import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, ReservationModule],
=======
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@NgModule({
  declarations: [AppComponent, AppointmentListComponent],
  imports: [BrowserModule, FormsModule],
>>>>>>> 427e3441ed06a59997752dfbdbfb098387df602b
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
