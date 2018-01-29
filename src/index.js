
import './style/index.css';
var $ = require('../node_modules/jquery/dist/jquery');


import { add, divide } from './components/BarChart';

function sayHello(){
    /*eslint-disable no-console */
    console.log("Allo! We are all set!");
    console.log("Arrow functions are working");
}



import { getReviewListByProdId } from './ui-controller/reviewList';
getReviewListByProdId($);

import { ratingSummaryCtrl } from './ui-controller/ratingSummaryCtrl';
ratingSummaryCtrl($);




import { mrating } from './Rating.js';

var a1 = new mrating('target-class', $);

a1.rating.set(4.5);



