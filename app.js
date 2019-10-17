var Koa = require('koa')
var app = new Koa()

const middleWare = require('./middleware')
const router = require('./router')
// var Router = require('koa-router')
// var router = new Router()

// router.get('/', (ctx, next) => {
//   ctx.body = {
//     title: 'hello wold'
//   }
// })
// app.use(router.routes())


middleWare(app)
router(app)

app.listen(3000, () => {
  console.log('http://localhost:' + 3000);

})
