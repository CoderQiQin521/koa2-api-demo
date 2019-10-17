const router = require('koa-router')()
const Controller = require('../controller')

module.exports = app => {
  app.use(router.routes())
  router.get('/', Controller.hello)
  router.get('/product_all', Controller.all)
  router.get('/ali', Controller.ali)
}
/*
首页
轮播图
站点配置
产品分类
产品分类列表
产品详情
二维码
*/
