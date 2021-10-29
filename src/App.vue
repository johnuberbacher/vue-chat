<template>
<Login/>
  <Chat msg="Vue Chat bult with Firebase and TailwindCSS"/>
</template>

<script>
import Login from './screens/Login.vue'
import Chat from './screens/Chat.vue'

export default {
  name: 'App',
  components: {
    Chat,
    Login,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
