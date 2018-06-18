## React/Webpack setup

Set up a webpack project to both serve a React site locally for development and build a bundle for production.

The development environment should include:

* Support for CSS Modules
* Hot Module Reloading
* Proxying of asset requests to a different URL (you do not need to implement a dev server to respond to proxied requests, if they 404 that will be good enough).

Your production build config should include:

* Dead code elimination
* Any necessary polyfills
* Code minification
* Source maps

Feel free to copy and paste from any previous webpack configs you've done, but please do not use a pre-built template like create-react-app or react-slingshot.

## Responsive Page

 Build the following page design to match the responsive.png mock-up as closely as you can. Use the React/webpack project set up in the last question. We don't have a mobile mock for this page, but be sure to build it mobile-first and make your own decisions about how to display the layout at that size.

 The page shown on the mock is the max-width - if a user's screen is wider than 1150px, the page should be the size shown and centered in the browser. 

 ## Deployed Link

 [Solution](https://havenly-responsive-4cdd6.firebaseapp.com/)
