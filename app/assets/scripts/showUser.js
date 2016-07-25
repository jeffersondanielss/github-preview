app.showUser = function ( user ) {
  'use strict';

  var name = user.name,
      username = user.username,
      user_url = user.html_url,
      photo = user.avatar_url,
      login = user.login,
      company = user.company,
      blog = user.blog,
      location = user.location,
      email = user.email,
      created_at = new Date(user.created_at),
      followers = user.followers,
      following = user.following;

  

  app.clear();

  $('.image-user').attr('src', photo);
  $('.name').append(name);
  $('.username').append('<a href="' + user_url + '" target="_blank">' + login +'</a>');
  $('.company span').append(company);
  $('.blog span').append('<a href="' + blog + '" target="_blank">' + blog + '</a>');
  $('.localization span').append(location);
  $('.email span').append(email);
  $('.created-date span').append(created_at.toDateString());
  $('.followers span').append(followers);
  $('.following span').append(following);

  app.validateOutput(name, '.name');
  app.validateOutput(username, '.username');
  app.validateOutput(photo, '.image-user');
  app.validateOutput(company, '.company');
  app.validateOutput(blog, '.blog');
  app.validateOutput(location, '.localization');
  app.validateOutput(email, '.email');

  $('.no-user').fadeOut('slow');
};