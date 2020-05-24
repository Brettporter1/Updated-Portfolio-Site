$('.about-btn').on('click', function (event) {
  event.preventDefault();
  TweenLite.to(window, 1.5, { scrollTo: '#about' });
});

$('.page-links').on('click', 'li', function () {
  let myScrollPosition = this.getAttribute('data-scroll');
  TweenLite.to(window, 1, { scrollTo: myScrollPosition });
  console.log(`You clicked ${myScrollPosition}`);
});
$('.page-links-mobile-only').on('click', 'li', function () {
  let myScrollPosition = this.getAttribute('data-scroll');
  TweenLite.to(window, 1, { scrollTo: myScrollPosition });
  console.log(`You clicked ${myScrollPosition}`);
});
$('.back-to-top').on('click', function () {
  TweenLite.to(window, 1, { scrollTo: '#intro' });
});

$('.btn-container').mouseenter(function () {
  TweenLite.to(this, 1, { className: '+=active-category' });
});
$('.btn-container').mouseleave(function () {
  TweenLite.to(this, 1, { className: '-=active-category' });
});

let dropheight = $('.page-links-mobile-only').height();
$('.page-links-mobile').on('click', function () {
  TweenLite.to(this, 1, { className: '+=hide' });
  TweenLite.to('.page-links-mobile-only', 1, { y: dropheight });
});
$('.page-links-mobile-only').on('click', function () {
  TweenLite.to('.page-links-mobile', 1, { className: '-=hide' });
  TweenLite.to('.page-links-mobile-only', 1, { y: -dropheight });
});

// coming soon sections

$('.coming-soon').on('click', function () {
  TweenLite.to(window, 1, { scrollTo: '#intro' });
});
