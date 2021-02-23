<template>
  <article id="main-container" role="main" class="container">
    <div id="welcome-banner" style="z-index:777;" class="welcome-container row">
      <div id="welcome-text" style="z-index:777; opacity: 0;" class="col-lg-6">
        <div class="row animated-words-container align-items-center">
          <span>
            <span id="animated-words-label" class="animated-words dark-text">
              {{ animatedWordsLabel }}
              <!-- <%- getText('animated-words-label') %>-->
            </span>
            <span class="animated-words" id="keyword"></span>
          </span>
        </div>
        <p class="info-text">
          {{ welcomeBannerTitle }}
          <!-- <%- getText('welcome-banner-title')%> -->
        </p>
        <span class="matches-made-text"
          ><span id="num-matches">2000</span>+
          {{ welcomeBannerMatchesMade }}
          <!-- <%-  getText('welcome-banner-matches-made') %> -->
        </span>
        <div class="row">
          <button
            type="button"
            onclick="openGeneratedQuizModal()"
            class="btn btn-start-quiz"
          >
            <span
              id="find-streamer-button"
              style="font-size: 1.5em; color: cornsilk;"
            >
              {{ findStreamerButton }}
              <!-- <%-  getText('find-streamer-button') %> -->
            </span>
          </button>
        </div>
      </div>
      <div style="z-index:777;" class="col-lg-6 justify-content-center">
        <div class="detective" style="opacity:0;">
          <img class="img_detective" src="assets/img/mascot.png" />
        </div>
      </div>
    </div>
    <div
      id="generated-result-page"
      style="z-index:500;"
      class="results-container"
    >
      <!-- <%- include("./partials/result_page", {getText}) %> -->
    </div>
    <!-- <%- include ("./partials/background") %> -->
    <Background></Background>
  </article>
</template>

<script>
import Background from './Background';

export default {
  name: 'HomeContent',
  components: { Background },
  data() {
    return {
      animatedWordsLabel: "Don't know who <br> to ",
      welcomeBannerTitle:
        'Twiri helps you discover new Twitch streamers<br>who are just your type.',
      welcomeBannerMatchesMade: 'matches made',
      findStreamerButton: 'Find a Streamer',
    };
  },
};
</script>

<style scoped></style>
