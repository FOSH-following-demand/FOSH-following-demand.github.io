---
---
// NOTE: Do not remove the frontmatter dashes above,
//       they allow Jekyll to process and write to this file

$(function() {
  // Only get the collapsed navbar height once
  var navbarHeight = $('.navbar').height();
  var clickedAnchor = null;
  var scrollOffset = 32;
  var infiniteScrollContainer = $('.infiniteScrollContainer')

  // initialize infiniteScroll
  infiniteScrollContainer.infiniteScroll({
    append: '.infiniteScrollContainer',
    history: false,
    path: pageList
  });

  // resumes page scroll after appending new items
  infiniteScrollContainer.on('append.infiniteScroll', function(event, response, path, items) {
    if (clickedAnchor) {
      clickedAnchor.click();
    }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll').click(function(event) {
    var $anchor = $(this);
    var scrollToElement = $($anchor.attr('href'));

    // check if element exists on page yet
    if (scrollToElement && scrollToElement.offset()) {
      clickedAnchor = null

      $('html, body').stop().animate({
        scrollTop: scrollToElement.offset().top - navbarHeight - scrollOffset
      }, 1500, 'easeInOutExpo');
    } else {
      // save a reference to this anchor and load the next page
      clickedAnchor = $anchor;
      infiniteScrollContainer.infiniteScroll('loadNextPage');
    }

    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-nav',
    offset: $('.navbar').height() + $('.navbar').height()
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggler:visible').click();
  });

  function pageList() {
    // Create a javascript object from Jekyll with all the pages in site.t
    var jekyllPages = [
      {%- for page in site.pages -%}
      {%- assign translation = site.t[page.lang][page.ref] -%}
      {%- if translation -%}
      {
        lang: '{{ page.lang }}',
        url: '{{ translation.url }}',
      },
      {%- endif -%}
      {%- endfor -%}
    ];

    var activeLanguage = $('#languageDropdown .active').attr('id')

    // Get an array of page urls in the activeLanguage
    var pages = jekyllPages.filter(page => page.lang == activeLanguage).map(page => page.url)

    if (this.loadCount < pages.length) {
      return pages[this.loadCount];
    }

    return false;
  }
});
