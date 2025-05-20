<template>
  <Topbar />
  <main class="bg-gray-50 min-h-screen">
    <router-view />
  </main>
</template>

<script>
import Topbar from './Topbar.vue'
export default {
  name: 'SideMenu',
  components: {
    Topbar
  }
}
</script>

<style>
</style>