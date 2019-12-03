/* eslint global-require: 0 */
const { Router } = require('marko-router5');
require('../src/sass/pack.sass');
const routes = require('./routes');

const w = window.location;
  Router.render({
    routes,
    options: {
      defaultRoute: '/',
      initialRoute: w.pathname,
    },
    initialPath: w.pathname,
    noWrapper: true,
  }).then((render) => {
    render.appendTo(document.body);
  });
