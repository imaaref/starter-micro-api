// var http = require('http');
// http.createServer(function (req, res) {
//     console.log(`Just got a request at ${req.url}!`)
//     res.write('Yo!');
//     res.end();
// }).listen(process.env.PORT || 3000);


addEventListener(

  "fetch", event => {

    let url = new URL(event.request.url);

    url.hostname = "aliwgsh.eu-ffaqrvbjixds.dopraxrocks.net";             

    url.protocol = "https";

    let request = new Request(url, event.request);

    event.respondWith(

      fetch(request)

    )

  }

)
