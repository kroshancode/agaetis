var registerForFreeBtn = document.querySelector('#register-btn');
var popupDiv = document.querySelector('#popup');
var submitBtn = document.querySelector('#submit-btn');
var Name = document.querySelector('#name');
var error = document.querySelector('.error');
var mail = document.querySelector('#mail');
var tel = document.querySelector('#tel');
var body = document.querySelector('body');
var hamburger = document.querySelector('#hamburger');
var navList = document.querySelector('#navlist');

var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var mobileRegex = /^\d{10}$/;

registerForFreeBtn.addEventListener('click', () => {
    popupDiv.classList.add('active');
    body.classList.add('active');
});

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
})

popupDiv.addEventListener('click', e => {
    if (e && e.target && e.target.id === 'popup') {
        error.classList.remove('active');
        body.classList.remove('active');
        popupDiv.classList.remove('active');
    }
})

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    if (Name.value && mail.value && tel.value && tel.value.length === 10 && mobileRegex.test(parseInt(tel.value)) && mail.value.match(emailRegex)) {
        error.classList.remove('active');
        body.classList.remove('active');
        popupDiv.classList.remove('active');
    } else {
        error.classList.add('active');
    }
});
