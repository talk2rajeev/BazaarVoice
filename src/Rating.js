var  Rating = require('rating-gen');

export function mrating(targetClass, $){
   
    var rat = new Rating({
        field: $('.'+targetClass),
        defaultRating: 3,
        onSelect: function(rating) {
            alert(rating);
        }
    });

    this.rating = rat;
    
}

