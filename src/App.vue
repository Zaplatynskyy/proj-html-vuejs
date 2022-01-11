<template>
  <div id="app" class="debug">
    <Header :elNav="headerNav"/>
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
  },
  data() {
    return {
      headerNav : [
        {
          element : 'Home',
          active : false
        },
        {
          element : 'Pages',
          active : false
        },{
          element : 'Courses',
          active : false
        },{
          element : 'Features',
          active : false
        },{
          element : 'Blog',
          active : false
        },{
          element : 'Shop',
          active : false
        },
      ]
    }
  }

}
</script>

<style lang="scss">
@import './assets/style/global.scss'

</style>
