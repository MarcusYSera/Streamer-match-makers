<template>
  <main class="flex-container column">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </main>
</template>

<script>
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default {
  name: 'App',
  components: { Header, Footer },
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
.grid-container {
  display: grid;
}
.flex-container {
  display: flex;
}
.row {
  flex-direction: row;
}
.column {
  flex-direction: column;
}
* {
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
