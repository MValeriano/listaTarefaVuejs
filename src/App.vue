<template>
  <div>
    <cabecalho></cabecalho>
    <div>
      <Cadastrotarefa></Cadastrotarefa>
    </div>
    <Rodape></Rodape>
  </div>
</template>

<script>

import Cabecalho from './components/Cabecalho.vue';
import Rodape from './components/Rodape.vue';
import Cadastrotarefa from './components/Cadastrotarefa.vue';
export default {
  name: 'CabecalhoComponent',
  components: {
    Cabecalho, // Registro correto do componente
    Rodape,
    Cadastrotarefa,
  },
};
</script>
