<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <br />
    <button @click="fetchMessage()">Fetch</button>
  </div>
</template>

<script>
import sdk from '@/sdk'

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  computed: {
    message () {
      console.log('getting from store')
      let msg = this.$store.getters.msg
      console.log('got from store: ', msg)
      return msg
    }
  },
  methods: {
    async fetchMessage () {
      console.log('vue calling sdk')
      await sdk.updateMessage(this)
      console.log('sdk returned to vue')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
