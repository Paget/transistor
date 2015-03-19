//var fs = require('fs');
//var mm = require('musicmetadata');
//var EarPipe = require('ear-pipe');
var http = require('http');
var lame = require('lame');
var icecast = require('icecast');
//var Speaker = require('speaker');

//var request = require('request');
//
exports.index = function(req, res) {



// create a new parser from a node ReadStream


// URL to a known Icecast stream
var url = 'http://audio-mp3.ibiblio.org:8000/wxyc.mp3';
//			var url= 'http://wuogfm.serverroom.net:9076/;stream.mp3';
// connect to the remote stream
icecast.get(url, function (res) {

	// log the HTTP response headers
	console.error(res.headers);


	// log any "metadata" events that happen
	res.on('metadata', function (metadata) {
		var parsed = icecast.parse(metadata);
		console.error(parsed);
	});

	// Let's play the music (assuming MP3 data).
	// lame decodes and Speaker sends to speakers!
	res.pipe(new lame.Decoder()).send();
});


	//request.get('http://audio-mp3.ibiblio.org:8000/wxyc.mp3').pipe(new EarPipe)

			//var parser = mm(res.pipe(new EarPipe), function(err, metadata) {
			//
			//	console.log(metadata);
			//});




	//
	//var parser = mm(fs.createReadStream('http://audio-mp3.ibiblio.org:8000/wxyc.mp3'), function (err, metadata) {
	//	if (err) throw err;
	//	console.log(metadata);
	//});
	//
	//return res.send();

	//Thing.find(function (err, things) {
	//	if(err) { return handleError(res, err); }
	//	return res.json(200, things);
	//});
};
