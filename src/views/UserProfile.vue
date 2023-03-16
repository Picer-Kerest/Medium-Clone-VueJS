<template>
  <div class="profile-page" v-if="profileData">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserProfile",
  computed: {
    ...mapGetters('profile', ['profileData', 'isLoading', 'error', ]),
  },
  methods: {
    ...mapActions('profile', ['getUserProfile', ]),
  },
}
</script>

<style scoped>

</style>