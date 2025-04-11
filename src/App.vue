<template>
  <div>
    <Cabecalho></Cabecalho>
    <div>
      <Cadastrotarefa></Cadastrotarefa>
    </div>
    <Rodape></Rodape>
  </div>
</template>

<script>
import Cabecalho from './components/Cabecalho.vue'
import Rodape from './components/Rodape.vue'
import Cadastrotarefa from './components/Cadastrotarefa.vue'
export default {
  name: 'CabecalhoComponent',
  components: {
    Cabecalho,
    Rodape,
    Cadastrotarefa,
  },
}
</script>
