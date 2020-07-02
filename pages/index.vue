<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-seed
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <van-button type="primary" @click="$router.push('/about')">
        <svg-icon
          class="ns-svgicon"
          name="nuxt"
        />
        主要按钮
      </van-button>
      <div>
        <div>当前环境基础地址: {{ baseUrl }}</div>
        <div>计数君: {{ counter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Index",
  async fetch ({ store }) {
    await store.dispatch("todo/increment");
  },
  computed: {
    ...mapState("todo", ["counter"]),
    baseUrl () {
      return process.env.BASE_URL;
    },
  },
  // created () {
  //   this.$store.dispatch("todo/increment");
  // },
};
</script>

<style>
.ns-svgicon {
  width: 16px;
  height: 16px;
}

.container {
  display: flex;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.title {
  display: block;
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 100px;
  font-weight: 300;
  letter-spacing: 1px;
  color: #35495e;
}

.subtitle {
  padding-bottom: 15px;
  font-size: 42px;
  font-weight: 300;
  word-spacing: 5px;
  color: #526488;
}

.links {
  padding-top: 15px;
}
</style>
