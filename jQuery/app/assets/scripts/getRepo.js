app.getRepo = function( user ) {
  'use strict';

  var url = 'https://api.github.com/users/' + user + '/repos',
      repoList = $('.repo-list'),
      lastUpdate,
      typeRepo;

  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',

    beforeSend: function() {
      repoList.empty();
    },
    success: function(data) {
      
      var current;

      if( data.length ) {
        for( current in data ) {
          lastUpdate = new Date( data[current].updated_at );
          typeRepo = data[current].fork;
          repoList.append('<li class="repo__item" data-repo="' + typeRepo + '"><i class="octicon"></i><a class="repo" href=' + data[current].html_url + ' target="_blank">' + data[current].name + '</a><i class="repo__item-last-update">' + lastUpdate.toDateString() + '</i></li>');
        }
      }

    }
  });
};