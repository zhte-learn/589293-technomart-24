var cartLinks = document.querySelectorAll(".buy");
    
var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".modal-close");
var continueShop = cartPopup.querySelector(".modal-cart-continue"); 
    
for(var j = 0; j < cartLinks.length; j++){
    cartLinks[j].addEventListener("click", function (evt){    
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
    });
}

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});

continueShop.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {             
    if (evt.keyCode === 27) {
        evt.preventDefault();   
        if (cartPopup.classList.contains("modal-show")) {
            cartPopup.classList.remove("modal-show");
        }
    }
});