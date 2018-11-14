// WEB SERVER ***(SFRUTTA NODE E EXPRESS)***
const express = require('express');
const app = express();
const request = require('request');

app.listen(4444, function(){
    console.log("Il server è in ascolto sulla porta 4444");
})

app.use(express.static('public')); // se c'è bisogno di un file statico (html, javascript ecc.. li va a prendere nella cartella public)

// GET /   (root - contiene lista iniziale dei video quindi index.html)
app.get('/', function (req, res) {
    res.sendfile('index.html'); // utilizza il file index.html come template della visivo della pagina
});

  // GET  videoPlayer 
  app.get('/player', function(req, res){
      res.sendfile('playerTemplate.html'); 
      // istruzioni che si occupano di fare una get alla API di YT ed estrapolano le info del video dal json
      var options ={
        url: "https://www.googleapis.com/youtube/v3/videos?id=rwmCcwVh62E&key=AIzaSyAh6dqWLmaRoAVRpy0j8cIJyWe4ZVpGC-Y&part=snippet,contentDetails,statistics,status",
        method: 'GET',
        header: {
          'Accept': 'json',
          'Accept-Charset': 'utf-8'
        } 
      };
        request(options, function(err, res, body){
            let json = JSON.parse(body);
            var titolovid = json.items[0].snippet.title;
            console.log(titolovid);
        }) // chiusura request 
                        } //chiusura function dentro palyer
    );  // chiusura get player 

// GET /category
/*app.get('/category', function(req, res){ 
    res.sendfile(''); 
});*/
