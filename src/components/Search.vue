<template>
  <div class="search">
    <input type="text">
    <button>Procurar</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'search'
    }
  }
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
