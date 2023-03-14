<template>
  <div>
    <Loading v-if="isLoading"/>
    <ErrorMessage v-if="error"/>
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
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";

export default {
  name: "PopularTags",
  components: {
    Loading,
    ErrorMessage
  },
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