class Review {

    stars
    review
    constructor(stars?: number  ) {
if (stars) {
    this.stars = stars
    this.review = true
}

else{
    this.review = false
}
    }
}


const review = new Review(6)

console.log(review);

function userReview(review:Review) {

if (review.review) {

if (review.stars! > 0 && review.stars! <= 5 ) {
    console.log(`A nota do usuario foi ${review.stars}`);
    
}
else{
    console.log("A nota do review deve ser de 0 a 5");
    
}

        
    } else{
    console.log(`Usuario não realizou o review`);
    }
    
}
userReview(review)


