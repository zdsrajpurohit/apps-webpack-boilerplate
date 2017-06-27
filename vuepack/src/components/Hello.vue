<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      userName: ''
    }
  },
  computed: {
    msg: function () {
      return 'Hello ' + this.userName + ', welcome to Zendesk Vue.js App.'
    }
  },
  methods: {
    getUser: function () {
      client.get('currentUser').then(
        data => { this.userName = data['currentUser']['name'] }
      )
    }
  },
  mounted: function () {
    this.getUser()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #bd322c;
}
</style>
