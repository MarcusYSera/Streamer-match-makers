import { createApp } from 'vue';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animations.css';
import './assets/css/bootstrap-slider.css';
import './assets/css/quizstyle.css';
import './assets/css/themes.css';

import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');
