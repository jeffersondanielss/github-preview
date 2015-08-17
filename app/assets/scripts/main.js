'use strict';

var userName = '',
    clicks = 0;

$('.show-search').click( function(){
  $('.inputs').slideToggle();
});

function showUser(githubUser) {

  var name = githubUser.name,
      username = githubUser.username,
      user_url = githubUser.html_url,
      photo = githubUser.avatar_url,
      login = githubUser.login,
      company = githubUser.company,
      blog = githubUser.blog,
      location = githubUser.location,
      email = githubUser.email,
      created_at = githubUser.created_at,
      followers = githubUser.followers,
      following = githubUser.following,
      starred = githubUser.starred_url.length;

  $('.image-user').attr('src', photo);
  $('.name').empty().append(name);
  $('.username').empty().append('<a href="' + user_url + '" target="_blank">' + login +'</a>');
  $('.company span').empty().append(company);
  $('.blog span').empty().append('<a href="' + blog + '" target="_blank">' + blog + '</a>');
  $('.localization span').empty().append(location);
  $('.email span').empty().append(email);
  $('.created-date span').empty().append(created_at);
  $('.seguidores span').empty().append(followers);
  $('.favoritos span').empty().append(starred);
  $('.seguindo span').empty().append(following);

  function validateOutput(field, classe) {
    if(field === '' || field === null) {
      $(classe).hide();
    } else {
      $(classe).show();
    }
  }

  validateOutput(name, '.name');
  validateOutput(username, '.username');
  validateOutput(photo, '.image-user');
  validateOutput(company, '.company');
  validateOutput(blog, '.blog');
  validateOutput(location, '.localization');
  validateOutput(email, '.email');
}

function getUser(user) {
  $.ajax({
    url: 'https://api.github.com/users/' + user,
    assync: false,
    dataType: 'json',
    beforeSend: function(jqXHR) {
      $('.repo-list').empty()
    },
    success: function(data) {
      showUser(data);
      $('.container').show('slow');
    },

    error: function (jqXHR, textStatus, errorThrown) {
      console.error('Falha na requisição ajax.');
    },

    complete: function(jqXHR){
     
    },
  });
}

function getRepos(user) {
  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/' + user + '/repos',
    dataType: 'json',
    success: function(result) {
      var i;
      for( i in result ) {
        var typeRepo = result[i].fork;

        if(typeRepo) {
          $('.repo-list').eq(1).append('<li class="box-repo"><i class="octicon octicon-repo-forked"></i><a class="repo" href=' + result[i].html_url + ' target="_blank">' + result[i].name + '</a><i class="last-update">' + result[i].updated_at + '</i></li>');

        } else {
          $('.repo-list').eq(0).append('<li class="box-repo"><i class="octicon octicon-repo"></i><a class="repo" href=' + result[i].html_url + ' target="_blank">' + result[i].name + '</a><i class="last-update">' + result[i].updated_at + '</i></li>');

        }
      }

      var noFork = $('.repo-list:eq(1) li').length;
      var noRepo = $('.repo-list:eq(0) li').length;

      if (!noFork) {
        $('.repo-list').eq(1).append('<li class="box-repo info-request"><span class="octicon octicon-repo-forked"></span><p>This user not have forks.</p></li>');
      }

      if (!noRepo) {
        $('.repo-list').eq(0).append('<li class="box-repo info-request"><span class="octicon octicon-repo"></span><p>This user not have repos.</p></li>');
      }

    }
  });
}

function getOrgs(user){
  $.ajax({
    url: 'https://api.github.com/users/' + user + '/orgs',
    assync: false,
    dataType: 'json',
    beforeSend: function(jqXHR) {
      console.info('Iniciada a requisição ajax.');
    },
    success: function(data) {
      var e;
      for( e in data) {
        $('.repo-list').eq(2).append('<li class="code"><a class="org-img" href="http://github.com/' + data[e].login + '" target="_blank"><img src="'+ data[e].avatar_url +'" title="' + data[e].login + '" alt="' + data[e].login + '" /> </a></li>');
      }

      var childs = $('.repo-list:eq(2) li').length;

      if (!childs) {
        $('.repo-list').eq(2).append('<li class="box-repo info-request"><span class="octicon octicon-organization"></span><p>This user not have organizations</p></li>');
      }
    },

    error: function (jqXHR, textStatus, errorThrown) {
      console.error('Falha na requisição ajax.');
    },

    complete: function(jqXHR){
      console.info('Requisição completa!');
    },
  });
}

$('.request').click( function(){
  userName = $('.field').val();
  getUser(userName);
  getOrgs(userName);
  getRepos(userName);
  $('.inputs').slideToggle();
 

  if (clicks >= 1) {
    $('.numbers .ative').trigger('click');
  }

  clicks++

});

$('.fastslide').fastSlide({
  autoPlay: false,
  dots: true
});

$('[data-dot]').click(function(){
  $('.repositorios').show('slow');
});