app.getOrg = function( user ){
  'use strict';

  var url = 'https://api.github.com/users/' + user + '/orgs',
      current,
      orgs = $('.orgs'),
      empty = '<li class="box-repo info-request">' +
                '<span class="octicon octicon-organization"></span>' +
                '<p>This user not have organizations</p>' +
              '</li>';

  $.ajax({
    url: url,
    assync: false,
    dataType: 'json',

    // parametros: jqXHR
    beforeSend: function() {
      console.info('Iniciada a requisição ajax.');
    },

    success: function(data) {
      if ( data.length ) {

        orgs.empty();
        for( current in data) {
          orgs.append('<li class="orgs__wrapper"><a class="orgs__img" href="http://github.com/' + data[current].login + '" target="_blank"><img src="'+ data[current].avatar_url +'" title="' + data[current].login + '" alt="' + data[current].login + '" /> </a></li>');
        }

      } else {
        orgs.append(empty);
      }
    },

    // parametros: jqXHR, textStatus, errorThrown
    error: function () {
      console.error('Falha na requisição ajax.');
    },

    // parametros: jqXHR
    complete: function(){
      console.info('Requisição completa!');
    },
  });

};