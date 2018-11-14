//  ********* GET PER RICAVARE I VIDEO CORRELATI *********
$(document).ready(function() {
    $.get('https://www.googleapis.com/youtube/v3/search', {
        part: 'snippet',
        key: 'AIzaSyB-M6EmiCP16GzQBp50_u8ElxTDZqwjqSQ',
        maxResults: 10,
        type: 'video',
        videoCategoryId: '10',    
        relatedToVideoId: videoObj.id.videoId  //id del video che intendo designare come video principale   
    }).done(function(data) {
        var createVideoList = "";
        for (var i = 0; i < 10; i++) {
            /*
            createVideoList += "<object width='500' height='350'><param name='movie' value='http://www.youtube.com/v/'" + videoObj.id.videoId + "></param><param name='allowFullScreen' value='true'></param><param name='allowscriptaccess' value='always'></param><embed id='id_vid'" + i + " src='http://www.youtube.com/v/'" + videoObj.id.videoId + " type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' width='500' height='350'></embed></object><br>";
            */

            createVideoList += "<iframe id='id_vid" + i + "' width='560' height='315' src='https://www.youtube.com/embed/" + data.items[i].id.videoId + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br>";
        }
        $('#containerRelated').append(createVideoList); //APPEND SU UN CERTO DIV PER CREARE LISTA DI VIDEO
    });
});