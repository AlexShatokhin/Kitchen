let callBtn = document.getElementById('recall'),
	overlay = document.querySelector('.overlay'),
	formClose = document.querySelector('.form_close'),
	Viber = document.querySelector('.viber'),
	WhatsApp = document.querySelector('.whatsapp'),
	Telegram = document.querySelector('.telegram');
const anchors = document.querySelectorAll('a[href*="#"]');

callBtn.addEventListener('click', function(){
	overlay.style.display = 'block';
});

formClose.addEventListener('click', function(){
	overlay.style.display = 'none';
});

Viber.addEventListener('click', function(){
	Viber.classList.add('messenger_active');
	WhatsApp.classList.remove('messenger_active');
	Telegram.classList.remove('messenger_active');

});

WhatsApp.addEventListener('click', function(){
	WhatsApp.classList.add('messenger_active');
	Viber.classList.remove('messenger_active');
	Telegram.classList.remove('messenger_active');


});

Telegram.addEventListener('click', function(){
	Telegram.classList.add('messenger_active');
	WhatsApp.classList.remove('messenger_active');
	Viber.classList.remove('messenger_active');


});

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault()
	  
	  const blockID = anchor.getAttribute('href').substr(1)
	  
	  document.getElementById(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	  })
	})
  };

$(document).ready(function(){
    $('.main_quiz').slick({
        dots: false,
        speed:1500,
        prevArrow:'<a class="slick-prev">Вернуться назад</a>',
        nextArrow:'<button type="button" class="slick-next">Следующий вопрос</button>',
    });
  });
