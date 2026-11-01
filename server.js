const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml' };

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  let relative = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  if (relative.startsWith('source-images/') || relative.startsWith('ppt-images/') || relative.startsWith('ppt-sti-images/')) relative = path.join('public', relative);
  const file = path.normalize(path.join(root, relative));
  return file.startsWith(root) ? file : null;
}

const server = http.createServer((req, res) => {
  if ((req.url || '').split('?')[0] === '/manus-routes.json') {
    const manifest = path.join(root, 'public', 'manus-routes.json');
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-cache' });
    return fs.createReadStream(manifest).pipe(res);
  }
  const file = safePath(req.url || '/');
  if (!file) { res.writeHead(400); return res.end('Bad request'); }
  fs.stat(file, (err, stat) => {
    if (!err && stat.isFile()) {
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      return fs.createReadStream(file).pipe(res);
    }
    if ((req.url || '').split('?')[0] !== '/manus-routes.json') {
      const fallback = path.join(root, 'index.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' });
      return fs.createReadStream(fallback).pipe(res);
    }
    res.writeHead(404); res.end('Not found');
  });
});

server.listen(port, '0.0.0.0', () => console.log(`LearnLane listening on http://0.0.0.0:${port}`));
