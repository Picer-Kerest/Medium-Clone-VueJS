<template>
  <div class="home-page">
    BANNER
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <Feed :url="apiUrl" />
        </div>
        <div class="col-md-3">
          <PopularTags/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Feed from "@/components/Feed";
import PopularTags from "@/components/PopularTags";

export default {
  name: "GlobalFeed",
  components: {
    Feed,
    PopularTags
  },
  data: () => ({
    apiUrl: '/articles',
  }),
}
</script>

<style scoped>

</style>