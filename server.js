require('isomorphic-fetch');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const dotenv = require('dotenv');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const send = require('koa-send');

dotenv.config();
const Router = require('koa-router');
const { installAgeVerification, updateAgeVerification, uninstallAgeVerification, checkVariables } = require('./server/router');


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, API_VERSION } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.use(session(server));
  server.use(bodyParser());
  server.keys = [SHOPIFY_API_SECRET_KEY];

  router.post('/updateAgeVerification', updateAgeVerification);
  router.post('/uninstallAgeVerification', uninstallAgeVerification);
  router.get('/checkVariables', checkVariables );
  
  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['read_themes', 'write_themes', 'read_script_tags', 'write_script_tags'],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        console.log(shop);
          ctx.cookies.set('shopOrigin', shop, { httpOnly: false });
        ctx.redirect('/');
        console.log('installing...');
        installAgeVerification(ctx, next);
      },
    }),
  );
    
  router.get('*', verifyRequest(), async (ctx) => {
    if ('/age-verification-with-email-capture.js' == ctx.path){
     await send(ctx, 'public/age-verification-with-email-capture.js', {"maxage":1209600000}); 
    } else {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;  
    }
  });
  
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});