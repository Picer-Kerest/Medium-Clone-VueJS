<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="articleData">
        <h1>{{ articleData.title }}</h1>
        <div class="article-meta">
          <router-link :to="{ name: 'userProfile', params: { slug: articleData.author.username } }">
            <img :src="articleData.author.image" />
          </router-link>
          <div class="info">
            <router-link :to="{ name: 'userProfile', params: { slug: articleData.author.username } }">
              {{ articleData.author.username }}
            </router-link>
            <span class="date">{{ articleData.createdAt }}</span>
          </div>
          <span v-if="isAuthor">
            <router-link class="btn btn-outline-secondary btn-sm" :to="{ name: 'editArticle', params: { slug: articleData.slug } }">
              <i class="ion-edit" />
              Edit Article
            </router-link>
            <button class="btn btn-outline-danger btn-sm" @click="onClickDelete">
              <i class="ion-trash-a" />
              Delete Article
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <Loading v-if="isLoading"/>
      <ErrorMessage v-if="error" :message="error"/>
      <div class="row article-content" v-if="articleData">
        <div class="col-xs-12">
          <div>
            <p>{{ articleData.body }}</p>
          </div>
          <TagList :tags="articleData.tagList"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import Loading from "@/components/Loading"
import ErrorMessage from "@/components/ErrorMessage"
import TagList from "@/components/TagList"

export default {
  name: "Article",
  components: {
    ErrorMessage,
    Loading,
    TagList
  },
  mounted() {
    this.getArticle({ slug: this.$route.params.slug })
  },
  computed: {
    ...mapGetters('article', ['articleData', 'isLoading', 'error', ]),
    ...mapGetters('auth', ['currentUser', ]),
    isAuthor() {
      if (!this.currentUser || !this.articleData) {
        return false
      }
      return this.currentUser.username === this.articleData.author.username
    }
  },
  methods: {
    ...mapActions('article', ['getArticle', 'deleteArticle', ]),
    onClickDelete() {
      this.deleteArticle({
        slug: this.$route.params.slug
      }).then(() => {
        this.$router.push({ name: 'home' })
      //  Перенаправление пользователя на главную страницу после удаления
      })
    }
  }
}
</script>

<style scoped>

</style>
