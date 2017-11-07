const json = require('koa-json');
const Koa = require('koa');
const app = new Koa();

app.use(json());

app.use(ctx => {
  console.log('request received');
  ctx.body = { message: 'hello world' };
});

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');