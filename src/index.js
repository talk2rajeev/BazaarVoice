import './style/index.scss';


import { add, divide } from './components/BarChart';


function sayHello(){
    /*eslint-disable no-console */
    console.log("Allo! We are all set!");
    console.log("Arrow functions are working");
}


const editDom = () => {
    const main = document.getElementById('main');
    main.innerHTML = 'Hello World! ';

    const root = document.getElementById('root');
    root ? root.innerHTML = 'Hello World! ':null;
};

var  Rating = require('rating-gen');
var $ = require('../node_modules/jquery/dist/jquery');

var rating = new Rating({
    field: $('.rating-container'),
    defaultRating: 3,
    onSelect: function(rating) {
        alert(rating);
    }
}); 
rating.set(3.5);

$( ".toggle-btn" ).click(function() {
    $('.para').toggle(500);
});

function generateTable(){
    
    var arr = [[1,2,3], [4,5,6], [9,8,7]];
    
    var table = '<table>';

    arr.forEach((item)=>{
        table+='<tr>';
        item.forEach((a)=>{
            table = table + '<td>'+a+'</td>';
        });
        table+='</tr>';
    });
    
    $('#main').after(table);

    $( ".para" ).append(function() {
        return "<div>" + this.className + "</div>";
    });
}

sayHello();
editDom();
generateTable();
alert( divide(40, 5) + ' ' + add(1, 2));

