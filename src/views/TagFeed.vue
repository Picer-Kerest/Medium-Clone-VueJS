<template>
  <div class="home-page">
    <Banner/>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <FeedToggler :tagName="tagName"/>
          <Feed :url="apiUrl"/>
        </div>
        <div class="col-md-3">
          <PopularTags/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Feed from "@/components/Feed"
import PopularTags from "@/components/PopularTags"
import Banner from "@/components/Banner"
import FeedToggler from "@/components/FeedToggler"

export default {
  name: "TagFeed",
  components: {
    Feed,
    PopularTags,
    Banner,
    FeedToggler
  },
  computed: {
    tagName() {
      return this.$route.params.slug
    },
    apiUrl() {
      return `/articles?tag=${this.tagName}`
    }
  },
}
</script>

<style scoped>

</style>
