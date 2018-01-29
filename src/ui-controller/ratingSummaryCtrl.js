import { HttpService } from '../services/HttpService';
import { REVIEW_LIST_URL } from '../config/constants';
import { ratingPercentageCal } from '../helper/ratingPercentageCal';
import { ratingSummary } from '../components/ratingSummary';


export function ratingSummaryCtrl($){
    //debugger;
    let ratingSummaryElements = document.querySelectorAll('.rating-summary-wrapper');
    
    ratingSummaryElements.forEach((item)=>{
        let id = item.id;
        let prod_id = item.dataset.id;
        ratingPercentageCal(3.7)
        let rs = ratingSummary( ratingPercentageCal(3) );
        $('#'+id).append(rs);
        //item.append(rs);
    });

    //if(listOfReviews){

    //}

}
