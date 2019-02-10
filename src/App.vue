<template>
  <div id="app">
    <NavBar />
    <main class="as-main">
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  },

  created () {
    this.prepareProducts()
  },

  methods: {
    ...mapActions(['prepareProducts'])
  }
}
</script>

<style lang="scss">
#app {
  margin-top: 3rem;
}
</style>
