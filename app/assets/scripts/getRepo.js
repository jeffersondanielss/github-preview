app.getRepo = function( user ) {
  'use strict';

  var url = 'https://api.github.com/users/' + user + '/repos',
      typeRepo;

  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: function(data) {
      
      var current;

      if( data.length ) {
        for( current in data ) {
          typeRepo = data[current].fork;
          $('.repo-list').append('<li class="repo__item" data-repo="' + typeRepo + '"><i class="octicon"></i><a class="repo" href=' + data[current].html_url + ' target="_blank">' + data[current].name + '</a><i class="repo__item-last-update">' + data[current].updated_at + '</i></li>');
        }
      }

    }
  });
};