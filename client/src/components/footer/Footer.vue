<template>
  <footer class="page-footer">
    <div class="container d-flex justify-content-between">
      <div>
        <span class="footer-text" style="cursor: pointer">
          {{ footerAbout }}
          <!-- <%= About %> -->
        </span>
        <span> | </span>
        <span class="footer-text" style="cursor: pointer">
          {{ footerSubmit }}
          <!-- <%= Submit %> -->
        </span>
        <span> | </span>
        <span class="footer-text" style="cursor: pointer">
          {{ footerContribute }}
          <!-- <%= Contribute %> -->
        </span>
      </div>

      <span class="footer-text">
        {{ copyrightText }}
        <!-- <%= CopyrightText %> -->
      </span>
      <div onclick="toggleDarkMode()" id="dark-mode-toggle">
        <span id="theme-icon">🌚</span>
        <span id="theme-label">
          {{ darkModeLabel }}
          <!-- <%= DarkMode %> -->
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'HomeFooter',
  data() {
    return {
      copyrightText: 'Copyright © 2020 JinriTV',
      footerAbout: 'About',
      footerSubmit: 'Submit your stream',
      footerContribute: 'Contribute to the project',
      darkModeLabel: 'dark mode?',
    };
  },
};
</script>

<style scoped></style>
