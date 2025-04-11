// filepath: c:\EmEstudo\Marcelo\listaTarefaVuejs\src\main.js
import { createApp } from 'vue';
import App from './App.vue';
import BootstrapVue3 from 'bootstrap-vue-3';

// Importar estilos do Bootstrap e BootstrapVue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App);

app.use(BootstrapVue3); // Registrar o BootstrapVue 3
app.mount('#app');
