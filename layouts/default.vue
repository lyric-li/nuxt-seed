<template>
  <div>
    <Nuxt
      :keep-alive-props="{
        include: include
      }"
      keep-alive
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      include: [
        "Index",
      ],
    };
  },
};
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  margin: 0;
  box-sizing: border-box;
}

.button--green {
  display: inline-block;
  padding: 10px 30px;
  color: #3b8070;
  text-decoration: none;
  border: 1px solid #3b8070;
  border-radius: 4px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  padding: 10px 30px;
  margin-left: 15px;
  color: #35495e;
  text-decoration: none;
  border: 1px solid #35495e;
  border-radius: 4px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
