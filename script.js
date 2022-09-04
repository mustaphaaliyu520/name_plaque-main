// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const buyNow = document.getElementsByClassName('buy-submit')[0];
const printLength  = document.querySelector('#printCharLength');
const buyArrow =document.getElementById("buyNowArrow")

// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
  if(onInput = 9){
    alert("CONGRATULATION, YOU GUESSED THE RIGHT NUMBER")
  }
}

const buyArrowFunc = (Arrow)=>{
  printLength.textContent = `BUYNOW: ${Arrow}`
}
//buyNowArrowFunction
buyNow.addEventListener('click', ()=>{
  const length = userInput.value.replace(' ', '').length
  buyArrowFunc(length)
  if(length == 0){
    alert("INPUT LETTERS  ")
    alert("INPUT CUSTOM TEXT")
  }

  else if(length >15){
    alert("YOU HAVE EXCEEDED YOU LIMIT; 15 CHARACTERS")
  }
})

// let myFunction = (this) => this;
//   document.getElementById("buyNowArrow").innerHTML += this;

