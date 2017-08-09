<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <hello-again></hello-again>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: 'hello again'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #000;
}
</style>
