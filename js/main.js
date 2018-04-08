$(document).ready(function(){
    $('.yak').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000,); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });

});

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

(function () {
    $(document).on('click', '.search-button', function () {
        $(this).parent().parent().toggleClass('active');
    });
})();


$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.header').addClass("glide");
    }
    else{
         $('.header').removeClass("glide");
    }
});

var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json'
})  