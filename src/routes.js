/* eslint global-require: 0 */
module.exports = [
  {
    name: 'home',
    path: '/',
    component: require('./index.marko'),
    children: [
      // { name: 'public/:id', path: 'public/:id', component: require('./views/public/index.marko') },
    ],
  },
];
