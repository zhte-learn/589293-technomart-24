var link = document.querySelector(".contacts-link");
    
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
    
var form = popup.querySelector("form");
var yourname = popup.querySelector("[name=yourname]");
var email = popup.querySelector("[name=email]");
    
var isStorageSupport = true;
var storage = "";
  
try{
    storage = localStorage.getItem("yourname");
    storage = localStorage.getItem("email");
} catch (err){
    isStorageSupport = false;
    }
    
link.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
        
    if (storage){
        yourname.value = storage;
        email.focus();   
    } else{
        yourname.focus();       
    }
});
    
close.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
    
form.addEventListener("submit", function (evt){
    if (!yourname.value || !email.value){
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else{
        if (isStorageSupport) {
            localStorage.setItem("yourname", yourname.value);
            localStorage.setItem("email", email.value);
        }
    }
});
    
window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27){
        evt.preventDefault();
        if (popup.classList.contains("modal-show")){
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
    
var mapLink = document.querySelector(".button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
    
mapLink.addEventListener("click", function (evt){
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt){           
    if (evt.keyCode === 27) {
        evt.preventDefault();   
        if (mapPopup.classList.contains("modal-show")){
            mapPopup.classList.remove("modal-show");
        }
    }
});
    

var sliderBtnsRight = document.querySelectorAll(".slider-right");
var slider = document.querySelectorAll(".slider-item");
    
for(var j = 0; j < sliderBtnsRight.length; j++){
    sliderBtnsRight[j].addEventListener("click", function (evt){
        for(var i = 0; i < slider.length; i++){
            if (slider[i].classList.contains("slider-active")){
                slider[i].classList.remove("slider-active");
                if (i < slider.length - 1){
                    slider[i + 1].classList.add("slider-active");
                } else{
                    slider[0].classList.add("slider-active");
                } break;
            }
        }
    })
}
    
var sliderBtnsLeft = document.querySelectorAll(".slider-left");
    
for(var j = 0; j < sliderBtnsLeft.length; j++){
    sliderBtnsLeft[j].addEventListener("click", function (evt){
        for(var i = 0; i < slider.length; i++){
            if (slider[i].classList.contains("slider-active")){
                slider[i].classList.remove("slider-active");
                if (i == 0){
                    slider[slider.length - 1].classList.add("slider-active");
                } else{
                    slider[i - 1].classList.add("slider-active");
                } break;
            }
        }
    })
    }
    
var guaranteeButton = document.querySelector(".button-guarantee");
var deliveryButton = document.querySelector(".button-delivery");
var creditButton = document.querySelector(".button-credit");
var creditSlider = document.querySelector(".slider-credit");
var deliverySlider = document.querySelector(".slider-delivery");
var guaranteeSlider = document.querySelector(".slider-guarantee");
    
guaranteeButton.addEventListener("click", function (evt){
    guaranteeButton.classList.add("services-button-active");
    deliveryButton.classList.remove("services-button-active");
    creditButton.classList.remove("services-button-active");

    guaranteeSlider.classList.add("services-slider-active");
    deliverySlider.classList.remove("services-slider-active");
    creditSlider.classList.remove("services-slider-active"); 
})
    
deliveryButton.addEventListener("click", function (evt){
    deliveryButton.classList.add("services-button-active");
    creditButton.classList.remove("services-button-active");
    guaranteeButton.classList.remove("services-button-active");
        
    deliverySlider.classList.add("services-slider-active");
    guaranteeSlider.classList.remove("services-slider-active");
    creditSlider.classList.remove("services-slider-active"); 
})
    
creditButton.addEventListener("click", function (evt){
    creditButton.classList.add("services-button-active");
    deliveryButton.classList.remove("services-button-active");
    guaranteeButton.classList.remove("services-button-active");
        
    creditSlider.classList.add("services-slider-active");
    guaranteeSlider.classList.remove("services-slider-active");
    deliverySlider.classList.remove("services-slider-active");
})