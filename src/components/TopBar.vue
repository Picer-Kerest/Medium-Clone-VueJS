<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="{ name: 'home' }">Medium Clone</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" to="{ name: 'home' }">Home</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TopBar",
  computed: {
    ...mapGetters('auth', ['currentUser', 'isLoggedIn', ]),
  }
}
</script>

<style scoped>

</style>