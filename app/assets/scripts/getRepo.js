app.getRepo = function( user ) {
  'use strict';

  var url = 'https://api.github.com/users/' + user + '/repos',
      typeRepo,
      noFork,
      noRepo;

  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: function(result) {
      var i;
      for( i in result ) {
        typeRepo = result[i].fork;
        $('.repo-list').append('<li class="box-repo" data-repo="' + typeRepo + '"><i class="octicon"></i><a class="repo" href=' + result[i].html_url + ' target="_blank">' + result[i].name + '</a><i class="last-update">' + result[i].updated_at + '</i></li>');
      }

      noFork = $('.repo-list:eq(1) li').length;
      noRepo = $('.repo-list:eq(0) li').length;

      if (!noFork) {
        $('.repo-list').eq(1).append('<li class="box-repo info-request"><span class="octicon octicon-repo-forked"></span><p>This user not have forks.</p></li>');
      }

      if (!noRepo) {
        $('.repo-list').eq(0).append('<li class="box-repo info-request"><span class="octicon octicon-repo"></span><p>This user not have repos.</p></li>');
      }

    }
  });
};