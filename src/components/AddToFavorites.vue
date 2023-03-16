<template>
  <button @click="likeHandler" :class="{
    'btn': true,
    'btn-sm': true,
    'btn-primary': isFavoriteData,
    'btn-outline-primary': !isFavoriteData
  }">
    <i class="ion-heart"/>
    <span>&nbsp; {{ favoriteCountData }}</span>
  </button>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "AddToFavorites",
  props: {
    isFavorite: {
      type: Boolean,
      required: true
    },
    articleSlug: {
      type: String,
      required: true
    },
    favoriteCount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      // Props нельзя менять, поэтому определяем data
      isFavoriteData: this.isFavorite,
      favoriteCountData: this.favoriteCount
    }
  },
  methods: {
    ...mapActions('favorites', ['addToFavorite', ]),
    likeHandler() {
      this.addToFavorite({
        slug: this.articleSlug,
        isFavorite: this.isFavoriteData
      })
      if (this.isFavoriteData) {
        this.favoriteCountData -= 1
      } else {
        this.favoriteCountData += 1
      }
      this.isFavoriteData = !this.isFavoriteData

    }
  }
}
</script>

<style scoped>

</style>
