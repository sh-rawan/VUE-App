<template>
  <div>
    <MainHeader/>
    <router-view/>
    <MainFooter/>
  </div>
</template>

<script>
// import HomeScreen from "./components/HomeScreen.vue";
import MainFooter from "./components/MainFooter.vue";
import MainHeader from "./components/MainHeader.vue"
export default {
  name: 'App',
  components: {
    MainHeader,
    // HomeScreen,
    MainFooter
},
  data(){
    return {
      myString: "Hello"
    }
  },
  created() {
  }
}
</script>



