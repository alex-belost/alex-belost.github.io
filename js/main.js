$(document).ready(function() {

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		singleItem : true,
		itemsScaleUp : false,
		rewindNav: false
	});
	$(".slider__button_next").click(function(){
		owl.trigger("owl.next");
	});
	$(".slider__button_prev").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$('.header__btn').click(function() {
		$('.nav').slideToggle();
	});

	//Плавный якорь
	$("#header, #top-button").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
   });

});