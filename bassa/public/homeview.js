// QUESTO FILE SI OCCUPA DI RIEMPIRE LA HOMEPAGE CON I VIDEO DELLA
// LISTA VITALI. METTERE NELLA HOMEPAGE TUTTE LE THIMBNAILS DEI VIDEO
// CLICCANDO SULLA THUMB SI APRE IL PLAYER PER QUEL VIDEO
 
$(document).ready( function(){
	var printview = $('#indexview');
	printview.append("funziona js");

	$.ajax({
		type: "GET",
		dataType: "json",
		url: "http://site1825.tw.cs.unibo.it/video.json",
		success: function(data){
					var thumbimg = "";
					alert("DENTRO FUNCTION !");
					thumbimg = data[0].snippet.thumbnails.default.url;
    				alert(thumbimg);
    				//iview += "<img src= " + thumbimg +  ">";
		}
	})
})