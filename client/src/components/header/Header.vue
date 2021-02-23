<template>
  <header>
    <div class="page-header">
      <div class="container d-flex justify-content-between" id="logo-container">
        <a href="/" class="navbar-brand d-flex align-items-center">
          <img
            src="/assets/img/logo.svg"
            style="width:45px;height:45px;margin-right:10px;"
            id="TwiriLogo"
          />
          <!-- <span id="logoText"><%= BrandName %></span> -->
          <span id="logoText">{{ BrandName }}</span>
        </a>
        <div
          id="generated-language-dropdown"
          class="navbar-brand d-flex align-items-center"
        >
          <LanguageDropDown></LanguageDropDown>
          <!-- <%- include("./language_dropdown", { thisLang, Languages }) %> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LanguageDropDown from './LanguageDropDown';
export default {
  name: 'HomeHeader',
  components: { LanguageDropDown },
  data() {
    return {
      BrandName: 'Twiri, Stream seeker',
    };
  },
};
</script>

<style scoped></style>
