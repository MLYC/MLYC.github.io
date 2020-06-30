var spe_swipe = new Swiper('#spe_swiper', {
  speed: 500,
  autoplay: 4000,
  loop: true,
  paginationClickable: true
});
$('.agency-x .btn-l').click(function () {
  spe_swipe.swipePrev();
});
$('.agency-x .btn-r').click(function () {
  spe_swipe.swipeNext();
});
$('.agency-x .swiper-container').hover(function () {
  spe_swipe.stopAutoplay();
}, function () {
  spe_swipe.startAutoplay();
});
var hot_swipe = new Swiper('#hot_swiper', {
  speed: 500,
  autoplay: 4000,
  loop: true,
  paginationClickable: true
});
$('.hot-x .btn-l').click(function () {
  hot_swipe.swipePrev();
});
$('.hot-x .btn-r').click(function () {
  hot_swipe.swipeNext();
});
$('.hot-x .swiper-container').hover(function () {
  hot_swipe.stopAutoplay();
}, function () {
  hot_swipe.startAutoplay();
});
var tab_swipe = new Swiper('#tab_swiper', {
  speed: 500,
  autoplay: 4000,
  loop: true,
  mode: 'vertical',
  paginationClickable: true,
  onSlideChangeStart: function (swiper) {
    $('#reg_x .tab-p-li').eq(swiper.activeLoopIndex).addClass('active').siblings().removeClass('active');
  }
});
$('#reg_x .tab-p-li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
  tab_swipe.swipeTo($(this).index(), 500, false);
});
$('.reg-x').hover(function () {
  tab_swipe.stopAutoplay();
}, function () {
  tab_swipe.startAutoplay();
});
$('.age-li .btn').on('click', function () {
  $(this).parents('.age-li').toggleClass('active').siblings().removeClass('active');
});