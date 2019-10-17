var data = require('../mysqlconfig')
var ali = require('../alimysql')
module.exports = {
  hello: async (ctx, next) => {
    let res = await data.find(1)
    var nres = {
      img: ctx.origin + res[0].img
    }

    ctx.body = {
      error_code: 1,
      data: nres
    }
  },
  all: async (ctx, next) => {
    let res = await data.all()
    res = res.map(item => {
      item.img = item.img ? item.img.split(',').map(item => ctx.origin + item) : []
      return item
      // return {
      //   id: item.id,
      //   thumb: item.img || [],
      //   name: item.name
      // }
    })
    ctx.body = {
      error_code: 1,
      data: res
    }
  },
  ali: async (ctx, next) => {
    // 多表查询
    // post 查询数据
    // post 插入数据
    ctx.body = {
      data: await ali.resAll
    }
  }
}
