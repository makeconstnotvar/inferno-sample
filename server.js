const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const apps = ['admin', 'manager', 'secure', ];

let folder = 'build', i = process.argv.indexOf('--folder');
if(i > -1) {
  folder = process.argv[i+1];
  console.log(' --- folder:', folder);
}
apps.forEach(x => {
  app.use(`/${x}/favicon`, express.static(path.join(__dirname, `${folder}/${x}/favicon`)));
  app.use(`/${x}/scripts`, express.static(path.join(__dirname, `${folder}/${x}/scripts`)));
  app.use(`/${x}/styles`, express.static(path.join(__dirname, `${folder}/${x}/styles`)));
  app.use(`/${x}/fonts`, express.static(path.join(__dirname, `${folder}/${x}/fonts`)));
  app.use(`/${x}/img`, express.static(path.join(__dirname, `${folder}/${x}/img`)));
  app.get(`/${x}/matomo/matomo.js`, (req, res) => res.status(200).send(""));
});

app.use('/favicon', express.static(path.join(__dirname, `${folder}/reports/favicon`)));
app.use('/scripts', express.static(path.join(__dirname, `${folder}/reports/scripts`)));
app.use('/styles', express.static(path.join(__dirname, `${folder}/reports/styles`)));
app.use('/fonts', express.static(path.join(__dirname, `${folder}/reports/fonts`)));
app.use('/worker', express.static(path.join(__dirname, `${folder}/reports/worker`)));
app.use('/img', express.static(path.join(__dirname, `${folder}/reports/img`)));
app.get('/matomo/matomo.js', (req, res) => res.status(200).send(''));


app.get(['/login', '/logout',], (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, `${folder}/secure`)});
});

app.get(['/admin','/admin/*'], (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, `${folder}/admin`)});
});

app.get(['/manager','/manager/*'], (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, `${folder}/manager`)});
});

app.use(function (req, res, next) {
  console.error(`404 ${req.url}`);
  res.status(404);
  res.sendFile('index.html', {root: path.join(__dirname, `build`)});
});

app.use(function (err, req, res, next) {
  err.userMessage = err.userMessage || 'На сервере произошла ошибка';
  res.status(500).send(err.userMessage);
});

server.listen(8080, function () {
  console.log('Приложение запущено http://localhost:8080');
});

