<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <hello-again></hello-again>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello agains'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #e5e5e5;
}
</style>
