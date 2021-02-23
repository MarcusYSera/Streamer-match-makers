<template>
  <div class="background-container confetti-container">
    <img
      v-for="num of streamerIndex"
      v-bind:key="num"
      :src="'assets/img/streamer' + num + '.png'"
      :class="'streamer-image profile-' + num"
    />
    {{ num }}
    <!-- <% var i; %> <% for (i = 1; i <= 8; i++) { %> <img src=<%= -->
    <!-- "/images/streamer" + i + ".png" %> class="streamer-image profile-<%= i %>"> -->
    <!-- <% } %> -->
    <div id="sm-circle" class="base-circle sphere-small"></div>
    <div id="md-circle" class="base-circle sphere-med"></div>
    <div id="lg-circle" class="base-circle sphere-lg"></div>
  </div>
</template>

<script>
export default {
  name: 'Background',
  data() {
    return {
      // keep an eye on this, might populate 9 items
      streamerIndex: 8,
    };
  },
};
</script>

<style scoped></style>
