<template>
  <h1 class="profile__title">{{ user }}</h1>
 <!--  <div class="profile">
    <a href="{{ user.html_url }}" target="_blank">
      <p class="profile__name">{{ user.name }}</p>
    </a>
     <p class="profile__bio">{{ user.login }}</p>
    <img  v-bind:src="user.avatar_url" class="profile__image" />
    <div class="profile__info">
      <p class="profile__followers">{{ user.followers }}</p>
      <p class="profile__following">{{ user.following }}</p>
    </div>
    <p class="profile__company">{{ user.company }}</p>
    <p class="profile__blog">{{ user.blog }}</p>
    <p class="profile__localization">{{ user.localization }}</p>
    <p class="profile__email">{{ user.email }}</p> -->
  </div>
</template>

<script>
import { getUser } from '../vuex/actions'

export default {

  data () {
    return {
      user: this.name || 'dasda'
    }
  },

  vuex: {
    state: {
      user: function (state) {
        console.log(this.name)
        return state.user
      }
    },

    actions: {
      getUser
    }
  },

  created: function () {
    console.log(this.user)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .profile {
    background-color: #fff;
    padding: 5%;
    height: 70%;
  }

  .profile__image {
    display: block;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
  }

  .profile__info {
    background-color: #f5f5f5;
    border-top: 1px solid #CCC;
    border-bottom: 1px solid #CCC;
    float: left;
    width: 100%;
    margin: 20px 0;
  }

  .profile__followers {
    width: 50%;
    float: left;
    text-align: center;
  }

  .profile__following {
    width: 50%;
    float: left;
    text-align: center;
  }

  .profile__title {
    display: inline-block;
    font-size: 20px;
    margin: 40px 0 10px
  }

  .profile__name,
  .profile__bio,
  .profile__company,
  .profile__blog,
  .profile__localization,
  .profile__email {
    text-align: center;
  }

</style>
