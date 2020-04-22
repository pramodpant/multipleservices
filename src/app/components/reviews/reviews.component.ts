import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from 'src/app/services/reviews.service';
import { Reviews } from './review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  product_id: string;
  productReviews: Reviews[];

  constructor(private actRoute: ActivatedRoute, private reviewsService: ReviewsService) {
    console.log("in constructor");
    
    
  }

  ngOnInit(): void {
    console.log("in onInit");
    this.getProductReviews();
  }

  getProductReviews() {

    this.actRoute.params.subscribe( params => 
      {
         this.product_id = params["id"];
         console.log("in susbcribe..."+ this.product_id);
         this.reviewsService.getProductReviews(this.product_id).subscribe(resultReviews => this.productReviews = resultReviews);
         
      });
      

      console.log("in getmethod.."+this.product_id);
     

  }

}
