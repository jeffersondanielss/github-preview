'use strict';

(function init(){

  var userName = '',
      input = $('.field');

  $('body').perfectScrollbar();

  $('.request').click( function(){
    userName = input.val();
    app.getUser(userName);
    app.getOrg(userName);
    app.getRepo(userName);
    $('.no-user').fadeOut('slow');
    $('.repositorios').perfectScrollbar();
  });
})();