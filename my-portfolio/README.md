# Portfolio site - file map

Built with Jekyll. Run it with `bundle exec jekyll serve`, open http://localhost:4000.
After changing `_config.yml`, stop the server (Ctrl+C) and start it again.

## What to edit for common changes

| I want to change...                                   | Edit                                             |
|-------------------------------------------------------|--------------------------------------------------|
| My name, tagline, email, site description             | `_config.yml` (section 1)                        |
| Colors of the whole site                              | `_config.yml` (section 3)                        |
| The round link buttons (email, GitHub, itch, LinkedIn)| `_config.yml` (`footer_links`, section 4)        |
| The picture in the home header                        | replace `img/profile.png`                        |
| Add a project                                         | copy `_projects/project-1.md`, add a picture to `img/portfolio/` |
| Add an article                                        | copy `_posts/2026-02-10-my-first-article.md`, rename it `YYYY-MM-DD-title.md`, add a picture to `img/articles/` |
| Tag colors and labels                                 | `_data/tags.yml`                                 |
| Menu entries                                          | `_includes/nav.html` (bottom of the file)        |
| How many cards the home page shows                    | `_includes/projects_preview.html`, `articles_preview.html` (`limit=3`) |
| Font, page size (zoom), footer behavior               | top of `_includes/css/main.css` (section 1)      |
| Any other look: sizes, spacing, hover effects         | `_includes/css/main.css` (each section is labeled) |

## What every file is

    _config.yml              site settings, colors, link buttons          -> affects the whole site
    _data/tags.yml           look of each tag                              -> tags on cards, pages, Tags page
    _projects/               one file per project                          -> cards + a page each
    _posts/                  one file per article                          -> cards + a page each
    img/                     profile.png, portfolio/ (projects), articles/ -> pictures
    _layouts/default.html    frame of every page (menu, content, footer)
    _layouts/project.html    layout of one project page
    _layouts/post.html       layout of one article page
    _layouts/style.css       glues bootstrap.min.css + main.css into /style.css
    _includes/head.html      <head>: title, fonts, stylesheet
    _includes/nav.html       top bar + slide-out menu
    _includes/header.html    home header (picture, name, tagline)
    _includes/card.html      ONE card (used for projects and articles)
    _includes/tags.html      the tag pills on a card / page
    _includes/*_grid.html    a grid of project / article cards
    _includes/*_preview.html the Projects / Articles sections on the home page
    _includes/contact.html   the contact buttons
    _includes/footer.html    footer + scroll-to-top button
    _includes/js.html        loads js/site.js on every page
    _includes/css/main.css   ALL of this site's own styling (read its table of contents)
    _includes/css/bootstrap.min.css   Bootstrap/Flatly (third-party; leave alone)
    index.html               home page
    projects/ articles/ contact/ tags/   the other pages (each has an index.html)
    js/site.js               opens/closes the slide-out menu
    js/tags.js               tag filter on the Tags page
    css/font-awesome/        icon font (email, GitHub, ... icons)
    feed.xml                 RSS feed of the articles
    style.css                builds /style.css (see _layouts/style.css)
    Gemfile, Gemfile.lock    Ruby packages needed to build the site
