//  ********* GET PER RICAVARE I VIDEO RANDOM *********
$(document).ready(function() {
    var videoObj = ''; //Oggetto video che mi serve per catturare i dati del video principale
    var start = new Date(2010, 0, 1); //inizio intervallo data di ricerca
    var end = new Date(); //fine intervallo data di ricerca
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    var rfcDateBefore = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + 'T01:00:00Z' //data in formato RFC
    var rfcDateAfter = date.getFullYear() + '-' + parseInt(date.getMonth() - 1) + '-' + date.getDate() + 'T01:00:00Z'
    //alert(rfcDateBefore);
    //alert(rfcDateAfter);

    //  ********* GET PER RICAVARE I VIDEO RANDOM *********
    $.get('https://www.googleapis.com/youtube/v3/search', {
        part: 'snippet',
        key: 'AIzaSyB-M6EmiCP16GzQBp50_u8ElxTDZqwjqSQ',
        maxResults: 50,
        type: 'video',
        videoCategoryId: '10', //10 = categoria musica
        videoEmbeddable: true,
        publishedAfter: rfcDateAfter,
        publishedBefore: rfcDateBefore,
        region: 'IT'
    }).done(function(data) {
        var nRandom = Math.round(Math.random() * 100 % 50) + 1; //numero random da 1 a 50
        videoObj = data.items[nRandom];
        var urlvid = "https://www.youtube.com/embed/" + videoObj.id.videoId; //url video completo 
        $("#id_vid").attr('src', urlvid);
        $('#song_name_container').append(videoObj.snippet.title);
    });
});