//************** INFORMAZIONI VIDEO TRAMITE YT DATA API *********************

var idVid = 'rwmCcwVh62E';      
var titloVid="";
var datePub="";
var wTitle = $('#scrivititolo');

		$(document).ready( function(){
			alert("entra qua");
			$.ajax({
				type: "GET",
				dataType: "json",
				url: "https://www.googleapis.com/youtube/v3/videos?id= " + idVid + "&key=AIzaSyAh6dqWLmaRoAVRpy0j8cIJyWe4ZVpGC-Y&part=snippet,contentDetails,statistics,status",
				success: function(data){
    					titolovid = data.items[0].snippet.title;
    					datePub = data.items[0].snippet.publishedAt;
    					$('#scrivititolo').append( titolovid );
    					$('#scrividata').append( datePub );
  					}
			});
		})
