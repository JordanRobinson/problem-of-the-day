//var http = require('http');
var fs = require('fs');
var lazy = require('./lazy');

function vigenereEncode(key, message) {

    var ret = '';

    key = makeKey(key, message);

    for (var j = 0; j < message.length; j++) {
        var intChar = ((message.charCodeAt(j) - 65) + (key.charCodeAt(j) - 65)) % 26;
        ret += String.fromCharCode(intChar + 65);
        console.log(intChar);
    }

    return ret;
}

function vigenereDecode(key, message) {
    var ret = '';

    key = makeKey(key, message);

    for (var j = 0; j < message.length; j++) {
        var intChar = 0;

        if (message.charCodeAt(j) - 65 < key.charCodeAt(j) - 65) {
           intChar = 26;
        }

        intChar = (message.charCodeAt(j) - key.charCodeAt(j)) + intChar;

        ret += String.fromCharCode(intChar + 65);
    }
    return ret;
}

function vigenereFrequency(message) {

}

function generateCombinations() {
    var fileString = '';
    var ret = '';

    for (var m = 0; m < 26; m++) {
        for (var l = 0; l < 26; l++) {
            for (var j = 0; j < 26; j++) {
                for (var k = 0; k < 26; k++) {
                    for (var i = 0; i < 26; i++) {
                        ret += String.fromCharCode(i + 65);
                        ret += String.fromCharCode(k + 65);
                        ret += String.fromCharCode(j + 65);
                        ret += String.fromCharCode(l + 65);
                        ret += String.fromCharCode(m + 65);
                        fileString += ret + '\n';
                        //console.log(ret);
                        //console.log(getFreq(vigenereDecode(ret, 'KSGDGBJQBEQKKLGDG')));
                        ret = '';
                    }
                }
            }
        }
    }

    //saving to file means we can do this in advance, and only once
    fs.writeFile('C:\\temp', fileString, function(err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('File saved.');
        }
    });
}

function parseFile () {
    var ret = '';
    new lazy(fs.createReadStream('C:\\temp', 'utf8'))
        .lines
        .forEach(function(line) {
            var possible = vigenereDecode(line, 'KSGDGBJQBEQKKLGDG');
            if (possible.match(/[E]+([T]|[A])+/)) {
                var possibleLine = getFreq(possible) + " -- " + line;
                //ret += possibleLine + '\n';
                console.log('\n' + possibleLine);
            }
            else {
                process.stdout.write('.');
            }
        });

    fs.writeFile('C:\\temp2', ret, function(err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('File saved.');
        }
    });
}

function getFreq (input) {
    var frequency = {};
    input.split("").forEach(function (position) {
        frequency[position] = frequency[position] || 0;
        frequency[position] += 1;
    });

    return JSON.stringify(frequency) + " -- " + input;
}

function makeKey(key, message) {

    while (key.length < message.length) {
        key = key + key;
    }

    if (key.length > message.length) {
        key = key.substring(0, message.length);
    }

    return key;
}


//console.log(vigenereEncode('REDDIT', 'TODAYISMYBIRTHDAY'))
//console.log(vigenereDecode('REDDIT', 'KSGDGBJQBEQKKLGDG'))
//console.log(getFreq('BANANA'))

//console.log(vigenereFrequency('KSGDGBJQBEQKKLGDG'))
//generateCombinations()
parseFile();


//http.createServer(function (req, res) {
//    var answer = vigenere();
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end(answer);
//}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');

