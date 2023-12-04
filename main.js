// Switching photos for mobile/desktop screens

var heroImgHolder = document.querySelector('.hero-image-holder');
var img = document.querySelector('.hero-image-holder img');
var imgPlaceHolderDesktop = document.querySelector('.imgPlaceHolderDesktop');
var imgPlaceHolderMobile = document.querySelector('.imgPlaceHolderMobile');

(function() {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;

    if (myWidth >= 800) {
      img.setAttribute("src", "images/hero-desktop.jpg");
      imgPlaceHolderDesktop.appendChild(heroImgHolder);
    } else {
      img.setAttribute("src", "images/hero-mobile.jpg");
      imgPlaceHolderMobile.appendChild(heroImgHolder);
    }
  };


})();

// Email validation

var messegeInvalid = document.querySelector('#invalid-messege');
var inputInvalid = document.querySelector('#input-holder');

$("#submit").click(function(){       
  var rea = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  var Email = $("#Email").val();
  var x = rea.test(Email);
  if (!x) {
      //alert('Type Your valid Email');
      messegeInvalid.classList.add('activeMessege');
      inputInvalid.classList.add('input-holder-invalid');
      return false;
  }
  else{
    messegeInvalid.classList.remove('activeMessege');
    inputInvalid.classList.remove('input-holder-invalid');
  }
})
