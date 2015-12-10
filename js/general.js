$('.nav').localScroll();

$('.top-scroll').localScroll();

$('.portfolio-buckets label').on('click', function () {
    $(window).scrollTo('#portfolio', 1000);
});