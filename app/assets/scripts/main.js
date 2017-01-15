'use strict';

(function(){

  var userName = '',
      input = $('.search__field');

  app.setCustomScroll('body');

  function init() {
    userName = input.val();
    
    if( !userName.length ) { return; }

    app.getUser(userName);
    app.getOrg(userName);
    app.getRepo(userName);
    app.setCustomScroll('.repositorios');
    app.animation('[data-animate="true"]', 'pulse');
  }

  app.onEnterKey( init );
  $('.search__btn').click( init );

})();