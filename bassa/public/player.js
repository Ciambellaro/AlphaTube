// questo file contiene le funzioni per la creazione del player, le funzioi sono quelle dell'API YT.

// VIENE CARICATA L'API IFRAME IN MODO ASINCRONO (DICE COSì SUL SITO YT API)
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  


// CREAZIONE IFRAME 
var player;
var idVid = 'rwmCcwVh62E';
function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {    //creazione oggetto player
          height: '360',
          width: '640',
          videoId: idVid,   // CI VUOLE UNA F.NE CHE SI OCCUPA DI ESTARRE L'ID DEL VIDEO DAL FILE JSON
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

// QUANDO IL PLAYER è PRONTO IL VIDEO PARTE 
function onPlayerReady(event) {    //parte quando si verifica l'evento onReady
        event.target.playVideo();
      }

var done = false;
function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          //setTimeout(stopVideo, 6000);
          done = true;
        }
      } 

function stopVideo() {
        player.stopVideo();
      }     




    