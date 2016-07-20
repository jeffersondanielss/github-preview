<template>
  <div class="search">
    <p>{{name}}</p>
    <input type="text" v-model="name">
    <button @click="setUser(name)">Procurar</button>
  </div>
</template>

<script>
import { setUser } from '../vuex/actions'

export default {
  data () {
    return {
      name: ''
    }
  },

  vuex: {
    actions: {
      setUser
    }
  },

  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search {
    background-color: #e5e5e5;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 2px #CCC;
  }

  input {
    width: 60%;
    display: inline-block;
  }

</style>
