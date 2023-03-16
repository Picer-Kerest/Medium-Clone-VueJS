<template>
  <div class="profile-page" v-if="profileData">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img class="user-img" :src="profileData.image" />
            <h4>{{ profileData.username }}</h4>
            <p>{{ profileData.bio }}</p>
            <div>
              <router-link
                  v-if="isCurrentUserProfile"
                  class="btn btn-sm btn-outline-secondary action-btn"
                  :to="{ name: 'settings' }"
              >
                Edit Profile Settings
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="article-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <router-link
                    :to="{ name: 'userProfile', params: { slug: profileData.username }}"
                    class="nav-link"
                    :class="{ active: routeName === 'userProfile' }"
                >
                  Your Posts
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                    v-if="currentUser.username === profileData.username"
                    :to="{ name: 'userProfileFavorites', params: { slug: profileData.username }}"
                    class="nav-link"
                    :class="{ active: routeName === 'userProfileFavorites' }"
                >
                  Favorites Posts
                </router-link>
              </li>
            </ul>
          </div>
          <Feed :url="apiUrl"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Feed from "@/components/Feed"

export default {
  name: "UserProfile",
  components: {
    Feed
  },
  mounted() {
    this.getUserProfile({ slug: this.userProfileSlug })
  },
  watch: {
    userProfileSlug() {
      this.getUserProfile({ slug: this.userProfileSlug })
    }
  },
  computed: {
    ...mapGetters('profile', ['profileData', 'isLoading', 'error', ]),
    ...mapGetters('auth', ['currentUser', ]),
    isCurrentUserProfile() {
      if (!this.currentUser || !this.profileData) {
        return false
      }
      return this.currentUser.username === this.profileData.username
    },
    apiUrl() {
      const isFavorite = this.$route.path.includes('favorites')
      return isFavorite
          ? `/articles?favorited=${ this.userProfileSlug }`
          : `/articles?author=${ this.userProfileSlug }`
    },
    userProfileSlug() {
      return this.$route.params.slug
    },
    routeName() {
      return this.$route.name
    }
  },
  methods: {
    ...mapActions('profile', ['getUserProfile', ]),
  },
}
</script>

<style scoped>

</style>
