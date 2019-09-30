var http = require('https'),
    fs = require('fs');



    const options = {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
      };




fs.readFile('./mappa.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    https.createServer(options, function (req, res) {
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});