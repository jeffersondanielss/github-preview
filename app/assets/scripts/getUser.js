app.getUser = function ( user ) {
  'use strict';

  var url = 'https://api.github.com/users/' + user;

  $.ajax({
    url: url,
    assync: false,
    dataType: 'json',

    // parametros: jqXHR
    beforeSend: function() {},

    success: function(data) {
      app.showUser(data);
    },

    // parametros: jqXHR, textStatus, errorThrown
    error: function () {
      console.error('Falha na requisição ajax.');
    },

    // parametros: jqXHR
    complete: function(){},

  });

};