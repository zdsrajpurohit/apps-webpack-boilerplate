<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <hello-again></hello-again>
  </div>
</template>

<script>
import HelloAgain from './HelloAgain'

export default {
  name: 'hello',
  data () {
    return {
      userName: ''
    }
  },
  components: {
    HelloAgain
  },
  computed: {
    msg: function () {
      return 'Hello ' + this.userName + ', welcome to Zendesk Vue App.'
    }
  },
  methods: {
    getUser: function () {
      client.get('currentUser').then(function (data) {
        this.userName = data['currentUser']['name']
      }.bind(this))
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
