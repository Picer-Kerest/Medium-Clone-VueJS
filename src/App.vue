<template>
  <TopBar/>
  <router-view/>
</template>

<script>
import TopBar from "@/components/TopBar"

export default {
  name: 'App',
  components: {
    TopBar,
  },
}
</script>

<style>
</style>
