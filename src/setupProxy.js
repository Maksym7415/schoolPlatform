const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://api:8080',
      pathRewrite: { '^/api': '/api' },
      headers: { 'X-Forwarded-Prefix': '/' },
      changeOrigin: false,
    }),
  );
  app.use(
    '/tenant-api',
    createProxyMiddleware({
      target: 'http://tenant:8081',
      pathRewrite: { '^/tenant-api': '/api' },
      headers: { 'X-Forwarded-Prefix': '/' },
      changeOrigin: false,
    }),
  );
};
