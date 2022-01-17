<template>
  <div id="app">
    <Header :elNav="headerNav"/>
    <Hero/>
    <Main/>
    <Footer :links="footerNav" :contacts="contacts"/>
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
      ],

      footerNav : [
        {
          title : 'Explore',
          elements : [
            {
              name : 'Start here',
              link : '#'
            },
            {
              name : 'Blog',
              link : '#'
            },
            {
              name : 'About us',
              link : '#'
            }
          ] 
        },
        {
          title : 'Contacts',
          elements : [
            {
              name : 'Success story',
              link : '#'
            },
            {
              name : 'Courses',
              link : '#'
            },
            {
              name : 'Contact us',
              link : '#'
            }
          ] 
        },
        {
          title : 'Information',
          elements : [
            {
              name : 'Membership',
              link : '#'
            },
            {
              name : 'Purchase guide',
              link : '#'
            },
            {
              name : 'Privacy policy',
              link : '#'
            },
            {
              name : 'Term of service',
              link : '#'
            }
          ] 
        },
      ],

      contacts : {
        title : 'Address',
        address : '382 NE 191st St # 87392 Miami, FL 33179-3899',
        tel : '+1(305)547-9909(9am - 5pm EST, Monday - Friday)',
        mail : 'support@maxcoach.com'
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/style/global.scss';

</style>
