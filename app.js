var http = require('http');
var answer = 'YES';

var serverSite = http.createServer(function(req, res) {
  res.writeHead(200);
  if (req.method == 'POST'){
  if (req.url == '/YES'){
  answer='YES';
  }else{
  answer='NO';}

  }
   var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<p><b>Submit button:</b><Br>'+
    '<form action= "/YES" method="post">'+
   '<input type="submit" name="YES" value="YES"> '+
      '</form>'+
	'<form action= "/NO" method="post">'+
   '<input type="submit" name="NO" value="NO"> '+
    '</form>'+
    '<p> You answer is '+ answer+'</p>'+
      
    '</body>'+
    '</html>';

  res.end(body);
});

serverSite.listen(8888);
