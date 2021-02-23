<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped></style>

<style>
body {
  margin: 0;
  height: 100vh;
}
#app {
  height: 100%;
}
* {
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
