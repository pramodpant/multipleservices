import { Injectable } from '@angular/core';
import { Reviews } from '../components/reviews/review.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  /*
     reviewId: string;
    comments: string;
    reviewDate: Date;
  */
  
  reviews:Reviews[]=[
    {_id: 'R01', comments: 'I got this phone as a gift. I like the overall design of the phone and it feels like a premium phone.But when I use the camera on this device, I see flickering of the screen and it is extremely evident even in the video playback. This is ridiculous when you are marketing this device with one of the USP being a great camera.',reviewDate: new Date('2019-01-01'),reviewId:'R01'},
    {_id: 'R02', comments: 'I bought this phone on the first day of the sale,rear camera is below decent. No Ides if I got the defective piece',reviewDate: new Date('2019-01-01'),reviewId:'R02'},
    {_id: 'R03', comments: 'Excellant phone',reviewDate: new Date('2019-01-01'),reviewId:'R03'},
  ];
  
  constructor() { }
  
  getProductReviews(productId) : Observable<Reviews[]> {
    var pr;
    console.log("in review..."+productId);
    
    if(productId=='P05'){
       pr = this.reviews.slice(0,1);

    }else if(productId=='P04') {
      pr = this.reviews.slice(1,2);
    }else {
      pr = this.reviews.slice(2);
    }

    //return of(this.reviews);
    return of(pr);
  }

}
