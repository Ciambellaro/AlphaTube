function stampaJson(){
	$(document).ready(function(){
		$.getJSON("video.json", function(data) {
	    	var n = '';
		 	$.each(data,function(key,value) {
		 		n+='<p> <strong> TITLE: </strong>'+value.title+'</p>';
		 		n+='<p> <strong> ARTIST: </strong>'+value.artist+'</p>';
		 		n+='<p> <strong> CATEGORY: </strong>'+value.title+'</p>';
		 		n+='<p> <strong> ID: </strong>'+value.videoID+'</p>';
		 	});
		 	$('#infoVideo').append(n);
		});
	});
}