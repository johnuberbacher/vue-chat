<template>
<Login/>
  <Chat msg="Vue Chat bult with Firebase and TailwindCSS"/>
</template>

<script>
import Chat from './screens/Chat.vue'

export default {
  name: 'App',
  components: {
    Chat,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
