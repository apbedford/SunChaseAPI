$(document).ready(function () {

    // the parameters we need to pass in our request to Instagrams's API
    var result = $.ajax({
    url: "https://api.instagram.com/v1/tags/sunset/media/recent?client_id=878ba6d5363242fcb0b06b0ac1f883c6",
    dataType: "jsonp", 
    type: "GET",
    });

    //loop the image responses to view multiple images
    result.done(function(msg){
    for (var i = 0; i < msg.data.length; i++) {
        $('#target').append('<img src="' + msg.data[i].images.standard_resolution.url + '" />');
    }
      })


    //Append load more to the div
    $("#more" ).click(function() {  
    var next_url = $(this).attr('next_url');
    loadEmUp(next_url);
    return false;
  });

  /*initialize oath library w.client ID
  OAuth.initialize('878ba6d5363242fcb0b06b0ac1f883c6');

  OAuth.popup('instagram', function(err, res) {
    console.log(err);
    res.get('/v1/tags/sunset/media/recent').done(function(data) {
      console.log(data);
    });
  });*/
});
