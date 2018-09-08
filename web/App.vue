<template>
  <div id="app">
    <div>{{ $store.getters.stringify }}</div>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    increment () {
      this.$store.commit("increment");
    },
    decrement () {
      this.$store.commit("decrement");
    },
  },
  components: {}
}
</script>
