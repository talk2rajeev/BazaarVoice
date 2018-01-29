//reviewList.js
import { reviewItem } from '../components/reviewItem';
import { HttpService } from '../services/HttpService';
import { REVIEW_LIST_URL } from '../config/constants';
import { ratingPercentageCal } from '../helper/ratingPercentageCal';

export function getReviewListByProdId($){
    
    var listOfReviews = document.getElementById('listOfReviews');
    debugger;
    if(listOfReviews){
        
        let PROD_ID =  listOfReviews.dataset.prodid;
        //let reviewList = getReviewList(PROD_ID);

        let hs = new HttpService();
        let promiseResult = hs.get(REVIEW_LIST_URL, {prodid: PROD_ID});

        promiseResult.then((res)=>{
            
            let reviewList = res.data.reviews;

            reviewList.forEach((item, i)=>{
                
                const starPercentageRounded = ratingPercentageCal(item.rating);
                var element = reviewItem(item, starPercentageRounded);
                $('.rating-list-wrapper').append(element);
            });

        });
    }
}

function getReviewList(prodid){

    
    
    resultFn().then((res)=>{
        console.log(JSON.stringify(res));
    });
    
    return [
        {rating: 4, by: 'Rajeev', date: '12/1/2018'},
        {rating: 3, by: 'Rj', date: '14/1/2018'}    
    ];
}
