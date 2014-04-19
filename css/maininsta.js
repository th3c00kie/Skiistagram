$(document).ready(function() {
  function processImages(data) {
    // The variable "data" represents the information we got back.
    console.log("yay! I got some data!");
    console.log(data);
    for ( var i = 0; i < data.data.length; i++ ) {
   
    $('#images').append ('<img src="' + data.data[i].images.standard_resolution.url + '">');
    }
  }
  
$("#images").empty();
 var hashtag = $('#hashtag').val();
 
     url = "https://api.instagram.com/v1/tags/"+ hashtag +"/media/recent?access_token=YOUROWNCODEID&callback=?";
 $.getJSON(url, processImages);
});
});



//Click button and text goes into the searchbar //
$("#valthorens").on(function() {
 var valthorens = $('#valthorens').val();
     
});