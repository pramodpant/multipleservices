import { Component, OnInit } from '@angular/core';
import {HelloServiceService} from '../../services/hello-service.service';
import {HttpErrorResponse} from '@angular/common/http';
import {CustomerServiceService} from '../../services/customer-service.service';
import { Product } from './product.model';


// import { forkJoin } from 'rxjs';
// import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-multiple-services',
  templateUrl: './multiple-services.component.html',
  styleUrls: ['./multiple-services.component.scss']
})
export class MultipleServicesComponent implements OnInit {

  constructor(private _helloService:HelloServiceService, private _customerService:CustomerServiceService) { }
  public helloResponse:any;
  public customerResponse:any;
  public productResponse:Product[];

  ngOnInit(): void {
    console.log('multi service..ngOnInit called..');
    this._customerService.getProducts().subscribe (
      res=> this.productResponse=res, (
        err:HttpErrorResponse) => {
           console.error(err);
        }
        
    )
    console.log(this.productResponse);
  }

  // public saveProduct() {
  //   console.log("in save product");
  //    this._helloService.helloService().subscribe (res=>this.helloResponse=res);
  // }

  // public getReviews(productId) {
  //   console.log("getting reviews for "+productId);
  // }

}




   // make parallel calls
  //  forkJoin([this._helloService.helloService(),this._customerService.getCustomers()])
  //  .subscribe(response => {
  //         this.helloResponse = response[0];
  //         this.customerResponse = response[1];
  //    })
