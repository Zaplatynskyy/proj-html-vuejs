<template>
  <div id="app" class="debug">
    <Header/>
    <Hero/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/macro/Header.vue'
import Hero from './components/macro/Hero.vue'
import Main from './components/macro/Main.vue'
import Footer from './components/macro/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/style/global.scss'

</style>
