const ratingStar = [...document.getElementsByClassName('rating-star')];

// reference
// https://dev.to/leonardoschmittk/how-to-make-a-star-rating-with-js-36d3
ratingStar.map((item) => {
    starActive = 'rating-star rating-star-checked fas fa-star';
    starInactive = 'rating-star far fa-star';

    item.addEventListener('click', () => {
        let i = ratingStar.indexOf(item);
        if (item.className === starInactive) {
            for (i; i >= 0; i--) {
                ratingStar[i].className = starActive
            }
        } else {
            for (i; i < ratingStar.length; ++i) {
                ratingStar[i].className = starInactive
            };
        }
    })

})