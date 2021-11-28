<template>
  <div id="app">
    <div v-if="isLogged">
      <Navbar/>
     <!--   <router-link to="/">Home</router-link> |
      <router-link to="/about" v-if="isLogged">About</router-link>
      <router-link to="/login" v-else>Login</router-link>
      <button type="button" @click="logout()" v-if="isLogged">
        Logout
      </button> -->
       <router-view/>
    </div>
    <div v-else>
      <Login/>
       <router-view/>
    </div>
   
  </div>
</template>

<script>
  import Navbar from './components/NavBar.vue'
  import Login from './views/Login.vue'
 
  import { mapGetters } from 'vuex'
  export default{
    components:{
      Navbar,Login
    },
    computed: {
    ...mapGetters([
      'isLogged'
    ])
  },

  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
  }
</script>


