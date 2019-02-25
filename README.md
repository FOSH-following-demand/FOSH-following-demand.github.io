# Hi!

This is the repo for developing the Build FOSH following demand [website](https://fosh-following-demand.github.io/en/home).

This repository is setup as a [Github.io page](https://pages.github.com/). It is the place for people to read all the information [about](https://fosh-following-demand.github.io/en/about) the project and find ways to [contribute](https://fosh-following-demand.github.io/en/collaborating), participate on the [survey](https://fosh-following-demand.github.io/en/survey) and advertise the project to others.

We try to be as open as possible, so everything is released under [GPL v3.0](https://github.com/FOSH-following-demand/FOSH-following-demand.github.io/blob/master/LICENSE).

Also to make sure all contributors and visitors have a good time while interacting with the project and with one another, we have a [code of conduct](https://github.com/FOSH-following-demand/FOSH-following-demand.github.io/blob/master/CODE_OF_CONDUCT.md), please make sure to take a look at it!



## Developer information

- Multilingual support is outlined in this [article](https://www.sylvaindurand.org/making-jekyll-multilingual/)

- Bootstrap navbar links are automatically generated from the language translation collection in `_config.yml`

- Infinite Scroll is used to lazy-load successive pages while scrolling. The navbar links will first load all the pages (in the same order that they appear in `_config.yml`) until it reaches the clicked link and then animate the scroll position to that section.

- Custom theme is based on [Landing Page Jekyll theme](https://github.com/swcool/landing-page-theme) updated to Bootstrap v4.0 and jQuery v3.3.1

- [jekyll-compress-html](https://github.com/penibelst/jekyll-compress-html) layout is to compress HTML without a plugin.


- ~~Because we want to use plugins that are not supported by github.io, we need
  to generate the pages of the website locally, and then push them to github.
  This is a bit counter-intuitive when considering how github.io pages is setup,
  but it allows to use many plugins, taking full advantage of Jekyll features.
  a nice explanation on how to do this is [here](https://www.sitepoint.com/jekyll-plugins-github/)~~
  + *[Supercharge GitHub Pages with Jekyll and Travis-CI](https://medium.com/@mcred/supercharge-github-pages-with-jekyll-and-travis-ci-699bc0bde075)*
  + *[Jekyll Minifier Plugin](https://github.com/digitalsparky/jekyll-minifier)*

## Useful documentation links:

- [Jekyll](https://jekyllrb.com/docs/)
- [Liquid Reference](https://help.shopify.com/en/themes/liquid)
- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- [Infinite Scroll](https://infinite-scroll.com/options.html)
- [jQuery Easing](http://gsgd.co.uk/sandbox/jquery/easing/)
- [jQuery](https://api.jquery.com/)
