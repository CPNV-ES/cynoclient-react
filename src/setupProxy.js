const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      pathRewrite: {
        '^/api/': '/'
      },
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
};
