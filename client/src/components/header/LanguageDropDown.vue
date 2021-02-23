<template>
  <!-- <% let languageOptions = Object.values(Languages.Tags); %> -->
  <div id="language-dropdown" class="btn-group dropdown">
    <button
      class="btn btn-dropdown dropdown-toggle"
      type="button"
      id="btn-dropdown"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <img
        class="dropdown-lang-icon"
        id="current-language-icon"
        src="/assets/img/globe.png"
      />
      <span class="language-dropdown-text" id="current-language-label">
        {{ selectedLanguage }}
        <!-- <%=Languages.Names[thisLang] %> -->
      </span>
    </button>
    <div class="dropdown-menu" aria-labelledby="btn-dropdown">
      <div
        v-for="(language, index) in Languages.Tags"
        v-bind:key="index"
        @click="updateLanguage(language)"
        class="dropdown-item language-dropdown language-dropdown-text"
      >
        {{ Languages.Names[language] }}
      </div>
      <!-- <% languageOptions.forEach((language) => { %>
      <a id=<%=`generated-dropdown-option-${language}`%> onclick="updateLanguage('<%=language%>')" class="dropdown-item language-dropdown language-dropdown-text" href="#"><%=Languages.Names[language] %></a>
      <%   }); %> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageDropDown',
  data() {
    return {
      selectedLanguage: 'English',
      Languages: {
        Tags: {
          ENGLISH: 'en-US',
          GERMAN: 'de-DE',
          FRENCH: 'fr-FR',
        },
        Icons: {
          'en-US':
            'https://cdn.betterttv.net/emote/566ca04265dbbdab32ec054a/1x',
        },
        Names: {
          'en-US': 'English',
          'de-DE': 'Deutsche',
          'fr-FR': 'Français',
        },
      },
    };
  },
  methods: {
    updateLanguage(language) {
      this.selectedLanguage = this.Languages.Names[language];
    },
  },
};
</script>

<style scoped></style>
