//var http = require('http');

function vigenere(key, message) {

    var ret = '';

    while (key.length < message.length) {
        key = key + key;
    }

    if (key.length > message.length) {
        key = key.substring(0, message.length);
    }

    for (var j = 0; j < message.length; j++) {
        var intChar = ((message.charCodeAt(j) - 65) + (key.charCodeAt(j) - 65)) % 26;
        ret += String.fromCharCode(intChar + 65);
        console.log(intChar);
    }

    return ret
}

console.log(vigenere('REDDIT', 'TODAYISMYBIRTHDAY'))

//http.createServer(function (req, res) {
//    var answer = vigenere();
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end(answer);
//}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');

