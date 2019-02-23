---
---
// NOTE: Do not remove the frontmatter dashes above,
//       they allow Jekyll to process and write to this file

$(function() {
  // Only need the collapsed navbar height once
  var navbarHeight = $('.navbar').height();
  var infiniteScrollContainer = $('.infiniteScrollContainer')
  var activeLanguage = $('#languageDropdown .active').attr('id')
  var clickedAnchor = null;
  var scrollOffset = 32;

  // Initialize infiniteScroll
  infiniteScrollContainer.infiniteScroll({
    append: '.infiniteScrollContainer',
    history: false,
    path: pageList
  });

  // Resume page scroll by re-clicking after appending new items
  infiniteScrollContainer.on('append.infiniteScroll', function(event, response, path, items) {
    if (clickedAnchor) {
      clickedAnchor.click();
    }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll').click(function(event) {
    var $anchor = $(this);
    var scrollToElement = $($anchor.attr('href'));

    // Check if element exists on page yet
    if (scrollToElement && scrollToElement.offset()) {
      clickedAnchor = null

      $('html, body').stop().animate({
        scrollTop: scrollToElement.offset().top - navbarHeight - scrollOffset
      }, 1500, 'easeInOutExpo');
    } else {
      // Save a reference to this anchor and load the next page
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
    // Create an array from Jekyll of all the page name translations in _config.yml
    var jekyllPages = [
      {%- assign sortedPages = site.pages | sort: "ref" -%}
      {%- for page in sortedPages -%}
        {%- assign translation = site.t[page.lang][page.ref] -%}
        {%- if translation and page.ref != "home" -%}
          {
            lang: '{{ page.lang }}',
            url: '{{ translation.url | relative_url }}',
          },
        {%- endif -%}
      {%- endfor -%}
    ];

    // Get an array of page urls in the activeLanguage
    var pages = jekyllPages.filter(page => page.lang == activeLanguage).map(page => page.url)

    if (this.loadCount < pages.length) {
      return pages[this.loadCount];
    }
  }
});
