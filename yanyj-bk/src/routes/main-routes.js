import KoaRouter from 'koa-router';
import controllers from '../controllers/index.js';
import {addRouters} from '../tool/Common';

const router = new KoaRouter();

router
  .get('/public/get', function (ctx, next) {
    ctx.body = '禁止访问！';
  }) // 以/public开头则不用经过权限认证
  .all('/upload', controllers.upload.default);
//   .get('/api/:name', controllers.api.Get)
//   .post('/api/:name', controllers.api.Post)
//   .put('/api/:name', controllers.api.Put)
//   .del('/api/:name', controllers.api.Delect)
//   .post('/auth/:action', controllers.auth.Post);// .get('/test/:name', controllers.test.Get);
//
// router['get']('/test/:name', controllers.test.Get);
// // router['post']('/ticket/profits', controllers.ticket.profit.addNewProfit);
addRouters(router, controllers, ['ticket.profit']);

module.exports = router;
