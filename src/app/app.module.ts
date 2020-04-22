import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MultipleServicesComponent } from './components/multiple-services/multiple-services.component';

import {HelloServiceService} from './services/hello-service.service';
import {CustomerServiceService} from './services/customer-service.service';
import{HttpClientModule} from '@angular/common/http';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatCardModule} from '@angular/material/card';
import {MatDividerModule} from  '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { NopageComponent } from './components/nopage/nopage.component'
import { multicast } from 'rxjs/operators';


 const routes: Routes = [
  { path: 'products', component: MultipleServicesComponent},
    // children: [
    //     { path: 'reviews/:id',component: ReviewsComponent}
    // ]
    { path: 'reviews/:id', component: ReviewsComponent},
 ];


@NgModule({
  declarations: [
    AppComponent,
    MultipleServicesComponent,
    ReviewsComponent,
    NopageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule, BrowserAnimationsModule,MatDividerModule,MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HelloServiceService,CustomerServiceService],
  bootstrap: [MultipleServicesComponent]
})
export class AppModule { }

