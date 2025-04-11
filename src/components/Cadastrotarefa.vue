<template>
<div class="d-flex justify-content-center align-items-center" >
 <b-card header-tag="header" footer-tag="footer" style="width: 40%">
   <template #header>
     <h6 class="mb-0">Cadastro de tarefas</h6>
   </template>
   <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
    <b-form @submit="onSubmit" @reset="onReset">
   <!-- --------------------inicio dos imputs -------------------- -->
   <!-- Título da tarefa (obrigatório) -->
   <b-form-group
        id="input-group-1"
        label="Título da tarefa:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.titulo"
          type="text"
          placeholder="Título da tarefa."
          required
        ></b-form-input>
      </b-form-group>

   <!-- Descrição -->
   <b-form-group id="input-group-2" label="Descrição:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.descricao"
          placeholder="Faça uma descrição da tarefa."
          required
        ></b-form-input>
      </b-form-group>

   <!-- Prioridade (baixa, média, alta – select). -->
   <b-form-group id="input-group-3" label="Prioridade:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.prioridade"
          :options="prioridades"
          required
        ></b-form-select>
      </b-form-group>
   <!-- ------------------------fim dos imputs -------------------- -->
    <hr>
      <div class="d-flex justify-content-end">
         <b-button type="submit" variant="primary">Salvar</b-button>
         <b-button type="reset" variant="primary">Limpar</b-button>
        <b-button type="button" variant="primary">Voltar</b-button>
      </div>

    <template #footer>
      Rodape...
    </template>

  </b-form>
 </b-card>

</div>
</template>

<script>
import Cabecalho from './Cabecalho.vue';
import Rodape from './Rodape.vue';
export default {
  name: 'CabecalhoComponent',
  components: {
    Cabecalho, // Registro correto do componente
    Rodape,
  },
  data() {
    return {
      form: {
          titulo: '',
          descricao: '',
          prioridade: null,
        },
        prioridades: [{ text: 'Selecione a prioridade', value: null }, 'Baixa', 'Média', 'Alta'],
        show: true
    };
  },
  methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.titulo = ''
        this.form.descricao = ''
        this.form.prioridade = null

        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
};
</script>
