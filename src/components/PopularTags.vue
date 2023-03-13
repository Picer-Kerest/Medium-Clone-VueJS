<template>
  <div>
    <div v-if="isLoading">Loading..</div>
    <div v-if="error">Something error</div>
    <div class="sidebar" v-if="tags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link v-for="tag in tags" :key="tag" :to="{ name: 'tag', params: {slug: tag}}" class="tag-default tag-pill">
          {{ tag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "PopularTags",
  computed: {
    ...mapGetters('popularTags', ['tags', 'isLoading', 'error', ]),
  },
  mounted() {
    this.getFeed()
    //  Метод mounted() в Vue.js вызывается один раз после того,
    //  как экземпляр компонента был создан и привязан к DOM.
  },
  methods: {
    ...mapActions('popularTags', ['getFeed', ]),
  }
}
</script>

<style scoped>

</style>