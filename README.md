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
