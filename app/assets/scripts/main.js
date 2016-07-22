'use strict';

(function init(){

  var userName = '',
      input = $('.field');

  $('.request').click( function(){
    userName = input.val();
    app.getUser(userName);
    app.getOrg(userName);
    app.getRepo(userName);
  });

})();