# MobileVis Pattern Guide

This repository contains the code that generates http://patterns.mobilev.is.
It is a collection of best practices for creating data visualization on mobile
devices. The findings are based on observations made from the examples submitted
to http://mobilev.is. Please submit examples there!


## Adding best practices

You could:

1. Submit a ticket with your suggestion.
2. Set up the dev environment and add a file describing it. See instructions below.

### Setting up Build Environment

Note that the build process relies on you having the other MobileVis repo
checked out somewhere on your machine (because they share styles and assets.)
Run `git clone git@github.com:bocoup/mobilevis` somewhere outside your repo and
save that path for the `--root` option below.


1. Clone this repository onto your machine by running `git clone git@github.com:bocoup/mobilevis-patterns`
2. Run `npm install` from the root
3. This application uses [Middleman](http://middlemanapp.com/) as a static site
generator. To get it you will need to have ruby installed on your machine. When
you do, run `bundle install` from the root to get all required gems.

When you're ready to do development, run:

1. `grunt dev --root="YourMobileVisGalleryPath"` in one terminal. It will watch for changes in various files.
2. `grunt middleman:server --root="YourMobileVisGalleryPath"` in another terminal.
This will start the middleman development server.

When you're ready to build your changes, run:

`grunt build --root="YourMobileVisGalleryPath"`

When sending in a pull request, don't check in `build/*` files.

### Adding best practices:

TBD



