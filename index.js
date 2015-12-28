var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var app = express();
var router = express.Router();
var publicPath = path.join(__dirname, 'public');
var db = new sqlite3.Database(path.join(__dirname, 'db\\angular.db'));

console.log('dbpath:' + path.join(__dirname, 'db\\angular.db'));

app.use(express.static(publicPath));
console.log(publicPath);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  var filePath = "";
  var dir = fs.readdirSync(publicPath);
  var cts = '<div>';
  dir.filter(function (file) {
    filePath = publicPath + '\\' + file;
    return fs.statSync(filePath).isFile() && /.*\.html$/.test(filePath);
  }).forEach(function (file) {
    console.log(file);
    cts = cts + '<div><a href="' + file +  '">' + file + '</a></div>';
  });
  cts = cts + '</div>';

  res.send(cts);
});

app.get('/httptest', function (req, res) {
  console.log(req.query.name);

  res.send('こんにちは' + req.query.name + 'さん！');
});

router.get('/', function (req, res) {
  console.log('[GET]----------');
  console.log(req.params);
  db.serialize(function () {
    db.all('select isbn,title,price,publish,published from books;', function (err, rows) {
      if (err) {
        console.log(err);
      } else {
        console.log(rows);
        res.send(JSON.stringify(rows));
      }
    });
  });
});

router.get('/:isbn', function (req, res) {
  console.log('[GET isbn]----------');
  console.log(req.params);
  db.serialize(function () {
    db.all('select isbn,title,price,publish,published from books where isbn = $isbn',
      {$isbn: req.params.isbn}, function (err, rows) {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.stringify(rows[0]));
        res.send(JSON.stringify(rows[0]));
      }
    });
  });
});

router.put('/:isbn', function (req, res) {
  console.log('[PUT isbn]----------');
  console.log(req.body);
  db.run('update books set title = $title, price = $price, publish = $publish, published = $published where isbn = $isbn',
    {
      $title: req.body.title,
      $price: req.body.price,
      $publish: req.body.publish,
      $published: req.body.published,
      $isbn: req.body.isbn
    }, function (err, stat) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(stat);
      }
  });
  res.send(JSON.stringify({result: "OK"}));
});

router.post('/:isbn', function (req, res) {
  console.log('[POST isbn]----------');
  console.log(req.body);
  db.run('insert into books values($isbn, $title, $price, $publish, $published)',
    {
      $title: req.body.title,
      $price: req.body.price,
      $publish: req.body.publish,
      $published: req.body.published,
      $isbn: req.body.isbn
    }, function (err, stat) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(stat);
      }
  });
  res.send(JSON.stringify({result: "OK"}));
});

router.delete('/:isbn', function (req, res) {
  console.log('[DELETE isbn]----------');
  console.log(req.params);
  db.run('delete from books where isbn = $isbn;',
    {
      $isbn: req.params.isbn
    }, function (err, stat) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(stat);
      }
  });
  res.send(JSON.stringify({result: "OK"}));
});

app.use('/chap05', router);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
