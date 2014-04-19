$(document).ready(function() {
  function processImages(data) {
    // The variable "data" represents the information we got back.
    console.log("yay! I got some data!");
    console.log(data);
    for ( var i = 0; i < data.data.length; i++ ) {

      $('#images').append ('<img src="' + data.data[i].images.standard_resolution.url + '">');
    }
  }

  $("hashtag").keyup(function (e) {
    if (e.keyCode == 13) {
      $("#images").empty();
      var hashtag = $('#hashtag').val();
      url = "https://api.instagram.com/v1/tags/"+ hashtag +"/media/recent?access_token=295298.f59def8.72618abdb3c9433ca44e1a8e2490e403&callback=?";
      $.getJSON(url, processImages);
      onClick=_gaq.push(['_trackEvent', 'Buttons', 'Click', 'Searchfield']);  
    }
  });
//Click Search and your hashtag connects to Instagram //
$('#addTodoBtn').click(function(){
  $("#images").empty();
  var hashtag = $('#hashtag').val();
  url = "https://api.instagram.com/v1/tags/"+ hashtag +"/media/recent?access_token=295298.f59def8.72618abdb3c9433ca44e1a8e2490e403&callback=?";
  $.getJSON(url, processImages);
  onClick=_gaq.push(['_trackEvent', 'Buttons', 'Click', 'Searchbutton']);  
});

//Click button and text goes into the searchbar 
$("#valthorens").click(function() { 
  $('#hashtag').val('valthorens')
  $("#images").empty();
  var hashtag = $('#hashtag').val();
  url = "https://api.instagram.com/v1/tags/"+ hashtag +"/media/recent?access_token=295298.f59def8.72618abdb3c9433ca44e1a8e2490e403&callback=?";
  $.getJSON(url, processImages);
  onClick=_gaq.push(['_trackEvent', 'Buttons', 'Click', 'ValThorens']);  
});

$("#aspen").click(function() { 
  $('#hashtag').val('aspen')
  $("#images").empty();
  var hashtag = $('#hashtag').val();
  url = "https://api.instagram.com/v1/tags/"+ hashtag +"/media/recent?access_token=295298.f59def8.72618abdb3c9433ca44e1a8e2490e403&callback=?";
  $.getJSON(url, processImages);
  onClick=_gaq.push(['_trackEvent', 'Buttons', 'Click', 'Aspen']);  
});

$("#levifinland").click(function() { 
  $('#hashtag').val('levifinland')
  $("#images").empty();
  var hashtag = $('#hashtag').val();
  url = "https://api.instagram.com/v1/tags/"+ hashtag +"/media/recent?access_token=295298.f59def8.72618abdb3c9433ca44e1a8e2490e403&callback=?";
  $.getJSON(url, processImages);
  onClick=_gaq.push(['_trackEvent', 'Buttons', 'Click', 'Levi']);  
});

$("#zermatt").click(function() { 
  $('#hashtag').val('zermatt')
  $("#images").empty();
  var hashtag = $('#hashtag').val();
  url = "https://api.instagram.com/v1/tags/"+ hashtag +"/media/recent?access_token=295298.f59def8.72618abdb3c9433ca44e1a8e2490e403&callback=?";
  $.getJSON(url, processImages);
  onClick=_gaq.push(['_trackEvent', 'Buttons', 'Click', 'Zermatt']);  
});

$("#extremeskiing").click(function() { 
  $('#hashtag').val('extremeskiing')
  $("#images").empty();
  var hashtag = $('#hashtag').val();
  url = "https://api.instagram.com/v1/tags/"+ hashtag +"/media/recent?access_token=295298.f59def8.72618abdb3c9433ca44e1a8e2490e403&callback=?";
  $.getJSON(url, processImages);
  onClick=_gaq.push(['_trackEvent', 'Buttons', 'Click', 'Extremeskiing']);  
});


});

