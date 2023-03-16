<template>
  <div>
    <Loading v-if="isLoading"/>
    <ArticleForm
        v-if="initialValues"
        :initialVal="initialValues"
        :errors="validationErrors"
        :isSubmit="isSubmitting"
        @articleSubmit="onSubmitHandler"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ArticleForm from "@/components/ArticleForm";
import Loading from "@/components/Loading";

export default {
  name: "EditArticle",
  components: {
    ArticleForm,
    Loading
  },
  // data() {
  //   return {
  //     initialValues: {
  //       title: '',
  //       description: '',
  //       body: '',
  //       tagList: []
  //     }
  //   }
  // },
  mounted() {
    this.getUArticle({ slug: this.$route.params.slug })
  },
  computed: {
    ...mapGetters('updateArticle', ['isSubmitting', 'validationErrors', 'isLoading', 'article', ]),
    initialValues() {
      if (!this.article) {
        return null
      }
      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body,
        tagList: this.article.tagList
      }
    }
  },
  methods: {
    ...mapActions('updateArticle', ['updateUArticle', 'getUArticle', ]),
    onSubmitHandler(articleInput) {
      const slug = this.$route.params.slug
      this.updateUArticle({ slug, articleInput }).then(article => {
        this.$router.push({ name: 'article', params: { slug: article.slug } })
      })
    }
  }
}
</script>

<style scoped>

</style>