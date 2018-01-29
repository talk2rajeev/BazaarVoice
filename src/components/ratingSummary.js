import { readOnlyRatingStar } from './readOnlyRatingStar';


export function ratingSummary(rating){
    return `<div class="rating-summary">
                <div class="">
                    <div class="pull-left">${readOnlyRatingStar(rating)}</div>
                    <div class="pull-left"> 3.7 </div>
                    <div class="pull-left"> (29) </div>
                    <div class="pull-left"> <a href="#">write a review</a> </div>
                </div>
               
           </div>`;
}

function ratingSummaryPopHover(){
    return `
    <div class="rt-summary-popover">
    ${ratingSummaryPopHover()}
    </div>`;
}