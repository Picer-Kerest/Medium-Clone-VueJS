<template>
  <div>
    <Loading v-if="isLoading"/>
    <ErrorMessage v-if="error" :message="error"/>
    <div v-if="feedData">
      <div class="article-preview" v-for="(article, index) in feedData.articles" :key="index">
        <!--      v-for="()" значение ключ индекс -->
        <!--   v-for="()" ключ индекс -->
        <div class="article-meta">
          <router-link :to="{ name: 'userProfile', params: { slug: article.author.username } }">
            <img :src="article.author.image" />
          </router-link>
          <div class="info">
            <router-link :to="{ name: 'userProfile', params: { slug: article.author.username } }" class="author">
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <div class="pull-xs-right">
            <AddToFavorites
                :isFavorite="article.favorited"
                :articleSlug="article.slug"
                :favoriteCount="article.favoritesCount"
            />
          </div>
        </div>
        <router-link :to="{ name: 'article', params: { slug: article.slug } }" class="preview-link">
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more..</span>
          <TagList :tags="article.tagList"/>
        </router-link>
      </div>
      <Pagination :total="feedData.articlesCount" :limit="limit" :currentPage="currentPage" :url="dataUrl"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import queryString  from 'query-string'
import Pagination from "@/components/Pagination"
import Loading from "@/components/Loading"
import ErrorMessage from "@/components/ErrorMessage"
import TagList from "@/components/TagList"
import AddToFavorites from "@/components/AddToFavorites"

export default {
  name: "Feed",
  components: {
    AddToFavorites,
    Pagination,
    Loading,
    ErrorMessage,
    TagList
  },
  data: () => ({
    limit: 10,
  }),
  props: {
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters('feed', ['feedData', 'isLoading', 'error', ]),
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    dataUrl() {
      return this.$route.path
    },
    offset() {
      return this.currentPage * this.limit - this.limit
    }
  },
  watch: {
    currentPage: 'fetchPage',
    url() {
      this.fetchPage()
    }
  },
  mounted() {
    this.fetchPage()
  //  Метод mounted() в Vue.js вызывается один раз после того,
    //  как экземпляр компонента был создан и привязан к DOM.
  },
  methods: {
    ...mapActions('feed', ['getFeed', ]),
    fetchPage() {
      // parsedUrl: /articles, query {}
      // stringifyParams: limit=10&offset=0 + query
      // urlWithParams: /articles?limit=10&offset=0
      const parsedUrl = queryString.parseUrl(this.url)
      const stringifyParams = queryString.stringify({
        limit: this.limit,
        offset: this.offset,
        ...parsedUrl.query
      })
      const urlWithParams = `${parsedUrl.url}?${stringifyParams}`
      this.getFeed({
        apiUrl: urlWithParams
      })
    }
  }
}
</script>

<style scoped>

</style>
