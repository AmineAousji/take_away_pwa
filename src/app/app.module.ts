import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursiersComponent } from './coursiers/coursiers.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { OrdersComponent } from './orders/orders.component';
import { NeworderComponent } from './neworder/neworder.component';
import { NewcoursierComponent } from './newcoursier/newcoursier.component';


@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, 
    CoursiersComponent, 
    NewcategoryComponent, 
    OrdersComponent,
    NeworderComponent,
    NewcoursierComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
