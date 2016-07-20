<template>
  <div id="app">
    <search></search>

    <div class="wrapper">
      <!-- <hello></hello> -->

      <div class="col">
        <profile></profile>
        <orgs></orgs>
      </div>

      <div class="col">
        <repos></repos>
      </div>
    </div>

  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Profile from './components/Profile'
  import Search from './components/Search'
  import Orgs from './components/Orgs'
  import Repos from './components/Repos'

  export default {
    components: {
      Hello,
      Search,
      Orgs,
      Repos,
      Profile
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    margin: 0;
  }

  #app {
    height: 100%;
  }

  body {
    background-color: #f0f0f0;
  }

  .wrapper {
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }

  .col {
    float: left;
    width: 50%;
    height: 80%;
  }

  .col--blur {
    filter: blur(2px);
  }

</style>
