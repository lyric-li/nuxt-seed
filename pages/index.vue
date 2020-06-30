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
    </div>
    <van-button type="primary">
      主要按钮
    </van-button>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
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
