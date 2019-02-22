var navbarHeight = $('.navbar').height();
// jQuery for page scrolling feature - requires jQuery Easing plugin
$('.page-scroll').click(function(event) {
  var $anchor = $(this);
  var scrollToElement = $($anchor.attr('href'));

  if (scrollToElement.offset()) {
    var offset = 32;

    $('html, body').stop().animate({
      scrollTop: scrollToElement.offset().top - navbarHeight - offset
    }, 1500, 'easeInOutExpo');
    // setTimeout(function() {
    // }, 300, 1)
  }

  event.preventDefault();
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-nav',
  offset: $('.navbar').height() + $('.navbar').height()
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggler:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
  var modal = this;
  var hash = modal.id;
  window.location.hash = hash;
  window.onhashchange = function() {
    if (!location.hash) {
      $(modal).modal('hide');
    }
  }
});

$('.infiniteScrollContainer').infiniteScroll({
  append: '.infiniteScrollContainer',
  history: false,
  prefill: true,
  path: function() {
    var inlinePageList = [
      'about',
      'collaborating',
      'map',
      'survey',
    ];

    if (this.loadCount < inlinePageList.length) {
      return inlinePageList[this.loadCount] + '.html';
    }
    return false;
  }
});
