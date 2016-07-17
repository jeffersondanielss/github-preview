<template>
  <div id="app">
    <search></search>
    <hello></hello>
    <profile></profile>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Profile from './components/Profile'
import Search from './components/Search'

export default {
  components: {
    Hello,
    Search,
    Profile
  }
}
</script>

<style>

  html, body {
    height: 100%;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    margin: 0;
  }

  body {
    background-color: #f0f0f0;
  }

</style>
