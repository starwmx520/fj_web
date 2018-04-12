var express =require('express');
var app = express();



app.use(express.static('public'));

app.use(function(req,res,next){
	console.log(req.originalUrl,req.method)

	next();
})


//温度 2.2-2.6 随机  
//证照放大


var server = app.listen(8092, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});