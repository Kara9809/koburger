let topImage = document.querySelector("#top");
let bottomImage = document.querySelector("#bottom");
let priceValue = document.querySelector("#price-value");

const meatPrice = 5;
const eggPrice = 3;
const ketchupPrice = 1;
const lettucePrice = 1.5;
const mayonnaisePrice = 0.5;
const onionPrice = 2;
const tomatoPrice = 1;


function changePrice(num) {
    priceValue.textContent = Number(priceValue.textContent) + num;
}

function meatToAdd(){
    let meatImage = document.createElement("img");
    meatImage.src = "./meat.png";
    meatImage.alt = "meat"
    meatImage.classList = "meat-image";
    topImage.after(meatImage);
    changePrice(meatPrice)
}

function meatToRemove(){
    let meatImages = document.querySelectorAll('.meat-image')
    if (meatImages.length > 0) {
        const firstMeatImage = meatImages[0];
        firstMeatImage.parentNode.removeChild(firstMeatImage);
        changePrice(-meatPrice);    
    }
}

function eggToAdd(){
    let eggImage = document.createElement("img");
    eggImage.src = "./egg.png";
    eggImage.alt = "egg"
    eggImage.classList = "egg-image";
    topImage.after(eggImage);
    changePrice(eggPrice)
}

function eggToRemove(){
    let eggImages = document.querySelectorAll('.egg-image')
    if(eggImages.length>0){
        const firstEggImage = eggImages[0];
        firstEggImage.parentNode.removeChild(firstEggImage);
        changePrice(-eggPrice);
    }
}

function ketchupToAdd(){
    let ketchupImage = document.createElement("img");
    ketchupImage.src = "./ketchup.png";
    ketchupImage.alt = "ketchup"
    ketchupImage.classList = "ketchup-image";
    topImage.after(ketchupImage);
    changePrice(ketchupPrice)
}

function ketchupToRemove(){
    let ketchupImages = document.querySelectorAll('.ketchup-image')
    if(ketchupImages.length>0){
        const firstKetchupImage = ketchupImages[0];
        firstKetchupImage.parentNode.removeChild(firstKetchupImage);
        changePrice(-ketchupPrice);
    }
}

function lettuceToAdd(){
    let lettuceImage = document.createElement("img");
    lettuceImage.src = "./lettuce.png";
    lettuceImage.alt = "lettuce"
    lettuceImage.classList = "lettuce-image";
    topImage.after(lettuceImage);
    changePrice(lettucePrice)
}

function lettuceToRemove(){
    let lettuceImages = document.querySelectorAll('.lettuce-image')
    if(lettuceImages.length>0){
        const firstLettuceImage = lettuceImages[0];
        firstLettuceImage.parentNode.removeChild(firstLettuceImage);
        changePrice(-lettucePrice);
    }
}

function mayonnaiseToAdd(){
    let mayonnaiseImage = document.createElement("img");
    mayonnaiseImage.src = "./mayonnaise.png";
    mayonnaiseImage.alt = "mayonnaise"
    mayonnaiseImage.classList = "mayonnaise-image";
    topImage.after(mayonnaiseImage);
    changePrice(mayonnaisePrice)
}

function mayonnaiseToRemove(){
    let mayonnaiseImages = document.querySelectorAll('.mayonnaise-image')
    if(mayonnaiseImages.length>0){
        const firstMayonnaiseImage = mayonnaiseImages[0];
        firstMayonnaiseImage.parentNode.removeChild(firstMayonnaiseImage);
        changePrice(-mayonnaisePrice);
    }
}

function onionToAdd(){
    let onionImage = document.createElement("img");
    onionImage.src = "./onion.png";
    onionImage.alt = "onion"
    onionImage.classList = "onion-image";
    topImage.after(onionImage);
    changePrice(onionPrice)
}

function onionToRemove(){
    let onionImages = document.querySelectorAll('.onion-image')
    if(onionImages.length>0){
        const firstOnionImage = onionImages[0];
        firstOnionImage.parentNode.removeChild(firstOnionImage);
        changePrice(-onionPrice);
    }
}

function tomatoToAdd(){
    let tomatoImage = document.createElement("img");
    tomatoImage.src = "./tomato.png";
    tomatoImage.alt = "tomato"
    tomatoImage.classList = "tomato-image";
    topImage.after(tomatoImage);
    changePrice(tomatoPrice)
}

function tomatoToRemove(){
    let tomatoImages = document.querySelectorAll('.tomato-image')
    if(tomatoImages.length>0){
        const firstTomatoImage = tomatoImages[0];
        firstTomatoImage.parentNode.removeChild(firstTomatoImage);
        changePrice(-tomatoPrice);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var leftButton = document.getElementById('leftButton');
    var rightButton = document.getElementById('rightButton');

    // Adjust styles for left button
    leftButton.style.marginRight = 'auto'; // Pushes it to the left

    // Adjust styles for right button
    rightButton.style.marginLeft = 'auto'; // Pushes it to the right
  });

