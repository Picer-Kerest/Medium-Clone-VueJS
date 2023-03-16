<template>
  <div class="settings-page" v-if="currentUser">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Settings</h1>
          <ValidationErrors v-if="validationErrors" :errors="validationErrors"/>
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="form.image"
                    placeholder="URL of profile picture"
                />
              </fieldset>

              <fieldset class="form-group">
                <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="form.username"
                    placeholder="Username"
                />
              </fieldset>

              <fieldset class="form-group">
                <textarea
                    class="form-control form-control-lg"
                    v-model="form.bio"
                    placeholder="Short bio about you"
                ></textarea>
              </fieldset>

              <fieldset class="form-group">
                <input
                    type="password"
                    class="form-control form-control-lg"
                    v-model="form.password"
                    placeholder="Password"
                />
              </fieldset>

              <fieldset class="form-group">
                <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="form.image"
                    placeholder="URL of profile picture"
                />
              </fieldset>
              <button
                  type="submit"
                  class="btn btn-lg btn-primary pull-xs-right"
                  :disabled="isSubmitting">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr/>
          <button class="btn btn-outline-danger" @click="logout" type="button">Or click here to logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ValidationErrors from "@/components/ValidationErrors";

export default {
  name: "Settings",
  components: {
    ValidationErrors
  },
  computed: {
    // ...mapGetters('settings', ['isSubmittingSettings', 'validationErrorsSettings', ]),
    ...mapGetters('auth', ['isSubmitting', 'currentUser', 'validationErrors', 'isLoggedIn', 'isAnonymous', ]),
    form() {
      // if (this.currentUser) {
      return {
        username: this.currentUser.username,
        bio: this.currentUser.bio,
        image: this.currentUser.image,
        email: this.currentUser.email,
        password: '',
      }
      // }
      // return {
      //   username: '',
      //   bio: '',
      //   image: '',
      //   email: '',
      //   password: '',
      // }
    }
  },
  methods: {
    ...mapActions('auth', ['updateCurrentUser', 'logoutUser', ]),
    onSubmit() {
      this.updateCurrentUser({ currentUserInput: this.form })
    },
    logout() {
      this.logoutUser().then(() => {
        this.$router.push({ name: 'home' })
      })
    }
  }
}
</script>

<style scoped>

</style>