<template>
  <div>
    Article
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Article",
  mounted() {
    this.getArticle({ slug: this.$route.params.slug })
  },
  computed: {
    ...mapGetters('article', ['articleData', 'isLoading', 'error', ]),
  },
  methods: {
    ...mapActions('article', ['getArticle', ]),
  }
}
</script>

<style scoped>

</style>