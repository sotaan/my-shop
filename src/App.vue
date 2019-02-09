<template>
  <div id="app">
    <NavBar />
    <main class="as-main">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  margin-top: 3rem;
}
</style>
