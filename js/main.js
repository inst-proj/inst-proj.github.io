$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

(function () {
    const rContainer = $("#results-container");

    $(document).on('click', '.search-button', function () {
        $(this).parent().parent().toggleClass('active');
        rContainer.toggleClass('active');
    });
})();


if (window.matchMedia('(min-width: 992px)').matches)
{
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
            $('.header').addClass("glide");
        }
        else{
             $('.header').removeClass("glide");
        }
    });
}



var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json'
})  



///////////////////////////

$(document).ready(function () {

    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 700, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

if(window.location.pathname == "/") {
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.navbar-nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-nav ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
}
