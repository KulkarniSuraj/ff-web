import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App).use(router);

app.use(router);
//tbd: edits for transition support
app.mount('#app');
