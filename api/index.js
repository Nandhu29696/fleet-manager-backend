// Vercel entry point: the Express app is the request handler, so there is no app.listen() here.
// vercel.json rewrites every path to this function; Express still sees the original URL.
const app = require('../app');

module.exports = app;
