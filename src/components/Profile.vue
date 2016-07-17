<template>
  <div class="profile">
    <img  v-bind:src="user.avatar_url" class="profile__image" />
    <a href="{{ user.html_url }}" target="_blank">
      <p class="profile__name">{{ user.name }}</p>
    </a>
    <p class="profile__bio">{{ user.login }}</p>
    <p class="profile__followers">{{ user.followers }}</p>
    <p class="profile__following">{{ user.following }}</p>
    <p class="profile__company">{{ user.company }}</p>
    <p class="profile__blog">{{ user.blog }}</p>
    <p class="profile__localization">{{ user.localization }}</p>
    <p class="profile__email">{{ user.email }}</p>
  </div>
</template>

<script>
export default {

  data () {
    return {
      msg: 'dadas',
      user: {
        'login': 'jeffersondanielss',
        'id': 6460622,
        'avatar_url': 'https://avatars.githubusercontent.com/u/6460622?v=3',
        'gravatar_id': '',
        'url': 'https://api.github.com/users/jeffersondanielss',
        'html_url': 'https://github.com/jeffersondanielss',
        'followers_url': 'https://api.github.com/users/jeffersondanielss/followers',
        'following_url': 'https://api.github.com/users/jeffersondanielss/following{/other_user}',
        'gists_url': 'https://api.github.com/users/jeffersondanielss/gists{/gist_id}',
        'starred_url': 'https://api.github.com/users/jeffersondanielss/starred{/owner}{/repo}',
        'subscriptions_url': 'https://api.github.com/users/jeffersondanielss/subscriptions',
        'organizations_url': 'https://api.github.com/users/jeffersondanielss/orgs',
        'repos_url': 'https://api.github.com/users/jeffersondanielss/repos',
        'events_url': 'https://api.github.com/users/jeffersondanielss/events{/privacy}',
        'received_events_url': 'https://api.github.com/users/jeffersondanielss/received_events',
        'type': 'User',
        'site_admin': false,
        'name': 'Jefferson Daniel',
        'company': 'dbr.ag',
        'blog': 'jeffersondanielss.github.io',
        'location': 'São Paulo - Brasil',
        'email': 'jeffersondanielss@gmail.com',
        'hireable': null,
        'bio': 'Self-taught Developer :books:',
        'public_repos': 22,
        'public_gists': 4,
        'followers': 15,
        'following': 61,
        'created_at': '2014-01-21T13:26:13Z',
        'updated_at': '2016-07-16T19:43:44Z'
      }
    }
  }

  // ready () {
  //   var self = this;
  //   this.$http.get('https://api.github.com/users/jeffersondanielss').then((response) => {
  //    this.$set('user', response.json())
  //   }, (response) => {
  //     console.log('error');
  //   });
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .profile {
    background-color: #fff;
    width: 30%;
    margin: 0 auto;
    box-shadow: 0 2px 5px #CCC;
    padding: 20px;
  }

  .profile__image {
    display: block;
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }

  .profile__name, .profile__bio {
    text-align: center;
  }

</style>
