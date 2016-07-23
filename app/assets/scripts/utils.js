'use strict';

app.clear = function() {
  var elements = '.name, .username, .company span, .blog span, .localization span, .email span, .created-date span, .seguidores span, .favoritos span, .seguindo span';
  $(elements).empty();
};

app.validateOutput = function (field, classe) {
  if(field === '' || field === null) {
    $(classe).hide();
  } else {
    $(classe).show();
  }
};