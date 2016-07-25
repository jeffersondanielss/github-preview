'use strict';

app.clear = function() {
  var elements  = '.name, .username,';
      elements += '.company span,';
      elements += '.blog span,';
      elements += '.localization span,';
      elements += '.email span,';
      elements += '.created-date span,';
      elements += '.following span,';
      elements += '.followers span';
      
  $(elements).empty();
};

app.validateOutput = function (field, classe) {
  if(field === '' || field === null) {
    $(classe).hide();
  } else {
    $(classe).show();
  }
};

app.animation = function( elements, animation ) {
  $( elements ).addClass('animated blur ' + animation );

  window.setTimeout(function(){
    $( elements ).removeClass('animated blur ' + animation );
  }, 1000);
};

app.setCustomScroll = function( container ) {
  var ww = $(window).width();

  if( ww < 620 ) { return; }

    $( container ).perfectScrollbar({
      theme: 'github-preview',
      wheelPropagation: true,
      swipePropagation: true
    });
};

app.onEnterKey = function( callback ) {
  $(document).keypress(function(e) {
    if(e.which === 13) {
      callback();
    }
  });
};
