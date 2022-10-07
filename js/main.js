let ratingValues = [...document.querySelectorAll('.rating li')];
let lastIndexClicked = 0;
let actualIndex = -1;
let button = document.getElementById('button');
ratingValues.forEach( (iterator, index) => {
    iterator.addEventListener('click', () => {
        rate(index);
        iterator.classList.toggle('clicked');
        iterator.children[1].classList.toggle('color-txt-clicked');
    } ); 
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    let main = document.getElementsByTagName('main')[0];
    if( actualIndex > -1 ){
        console.log(actualIndex);
        main.innerHTML = '';
        main.innerHTML += `<div class="rating-component-container-results">
                                <div class="results-container">
                                    <img src="img/illustration-thank-you.svg" alt="" srcset="">
                                    <div class="rating-message"><div class="container"></div><p>You selected ${actualIndex + 1} out of 5</p></div>
                                </div>
                                <div class="container-message">
                                    <h1>Thank you!</h1>
                                    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                                </div>
                            </div>`; 
    }
} );

function rate( index ){
    actualIndex = index;
    if( ratingValues[lastIndexClicked].classList.contains('clicked')){
        ratingValues[lastIndexClicked].classList.toggle('clicked');
        ratingValues[lastIndexClicked].children[1].classList.toggle('color-txt-clicked');
    }
    lastIndexClicked = index;
}
