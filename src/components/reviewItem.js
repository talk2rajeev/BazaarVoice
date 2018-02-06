import { readOnlyRatingStar } from './readOnlyRatingStar';

export function reviewItem(item, starPercentageRounded){
    var element = `<div class="review-item">
                    <div class="col-lg-1, col-md-1, col-sm-1 col-xs-2">
                        <img src="https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-256.png" alt="${item.reviwername}" class="img-circle"/>
                    </div>
                    <div class="col-lg-11, col-md-11, col-sm-11 col-xs-10">
                        ${readOnlyRatingStar(starPercentageRounded)}
                        <span class="reviewer-name  pull-left">${item.reviwername}</span>
                        <span class="review-date pull-left">${item.date}</span>
                        <div class="clearfix"></div>
                        <div class="review-title">${item.reviewtitle}</div>
                        <p class="review-text">${item.review}</p>
                        ${item.recommend ? iRecommend() : iDontRecommend()}
                        <div class="helpful-blk">Helpful? &nbsp; Yes: ${item.helpful.yes} &nbsp;|&nbsp; No:  ${item.helpful.no} &nbsp;&nbsp;&nbsp; Report</div>
                    </div>
                    <div class="clearfix"></div>
                   </div>`;
    return element;
}

function iRecommend(){
    return `<div class="recommendation"><span class="recommendation-icon"><i class="icon-yes"></i> Yes, </span> &nbsp; I recommend this product</div>`;
}

function iDontRecommend(){
    return `<div class="recommendation"><span class="recommendation-icon"><i class="icon-no"></i> No, </span> &nbsp; I don't recommend this product</div>`;    
}