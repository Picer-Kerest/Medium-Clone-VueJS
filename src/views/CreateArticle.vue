<template>
  <ArticleForm
      :initialVal="initialValues"
      :errors="validationErrors"
      :isSubmit="isSubmitting"
      @articleSubmit="onSubmitHandler"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import ArticleForm from "@/components/ArticleForm"

export default {
  name: "CreateArticle",
  components: {
    ArticleForm
  },
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
  },
  computed: {
    ...mapGetters('createArticle', ['isSubmitting', 'validationErrors', ]),
  },
  methods: {
    ...mapActions('createArticle', ['createNewArticle', ]),
    onSubmitHandler(articleInput) {
      this.createNewArticle({ articleInput }).then(article => {
        this.$router.push({ name: 'article', params: { slug: article.slug } })
      })
    }
  }
}
</script>

<style scoped>

</style>
