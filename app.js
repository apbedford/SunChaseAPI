$(document).ready(function () {

  //var getImages = function(access_parameters) {}
  function getImages(access_parameters) { 
  }

// the parameters we need to pass in our request to Instagrams's API
  var result = $.ajax({
    url: "https://api.instagram.com/v1/tags/sunset/media/recent?client_id=878ba6d5363242fcb0b06b0ac1f883c6",
    dataType: "jsonp", 
    type: "GET",
    });

    //loop the image responses to view multiple images
    result.done(function(msg){
      for (var i = 0; i < msg.data.length; i++) {
        msg.data.length[i]
      };

      $("#target").html(msg.data[0].images.standard_resolution.url);
      console.log(msg);
    });
  
    $('#target').append('');
  
  /*initialize oath library w.client ID
  OAuth.initialize('878ba6d5363242fcb0b06b0ac1f883c6');

  OAuth.popup('instagram', function(err, res) {
    console.log(err);
    res.get('/v1/tags/sunset/media/recent').done(function(data) {
      console.log(data);
    });
  });*/
});
