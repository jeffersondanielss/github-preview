'use strict';

(function init(){

  var userName = '',
      input = $('.search__field');

  $('body').perfectScrollbar();

  $('.search__btn').click( function(){
    userName = input.val();
    app.getUser(userName);
    app.getOrg(userName);
    app.getRepo(userName);
    $('.no-user').fadeOut('slow');
    $('.repositorios').perfectScrollbar();
  });
})();