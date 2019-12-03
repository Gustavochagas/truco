require('marko/node-require');

const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

const template = require('./src/index.marko');

app.use(serve('./public'));

app.use(async ctx => {
    ctx.type = 'html';
    ctx.body = template.stream({
        // Properties
        name: 'Frank',
        count: 30,
        colors: ['red', 'green', 'blue']
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));