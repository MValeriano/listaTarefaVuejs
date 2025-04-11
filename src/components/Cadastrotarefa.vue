<template>
  <div>
    <h1>Cadastro de Tarefas</h1>
    {{ tarefa }}
    {{ descricao }}
    {{ prioridade }}
    <div>
      <div>
        <label for="tarefa"> Titulo da tarefa </label>
      </div>
      <div>
        <input v-model="tarefa" id="tarefa" type="text" placeholder="Digite uma tarefa" />
      </div>
      <div>
        <label for="descricao"> Descrição </label>
      </div>
      <div>
        <textarea
          v-model="descricao"
          id="descricao"
          type="text"
          placeholder="descrição uma tarefa"
        />
      </div>
      <div>
        <label for="prioridade"> Prioridades </label>
      </div>
      <div>
        <select id="prioridade" v-model="prioridade">
          <!-- <option value="baixa">Baixa</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option> -->
          <option v-for="prioridade in listaPrioridades" :key="prioridade.value">
            {{ prioridade }}
          </option>
        </select>
      </div>
      <button v-on:click="isVazio()">Enviar</button>
    </div>
  </div>
</template>

<script>
export default {
  // modulos no javascript
  data() {
    return {
      tarefa: '',
      descricao: '',
      prioridade: '',
      listaPrioridades: ['Baixa', 'Media', 'Alta'],
    }
  },
  methods: {
    verificarVazios() {
      if (!this.tarefa) {
        alert('Campo tarefa Vazio')
      }
      if (!this.descricao) {
        alert('Campo descricao Vazio')
      }
      if (!this.prioridade) {
        alert('Campo prioridade Vazio')
      }
    },

    isVazio() {
      this.verificarVazios()
    },
  },
  //hooks (criação : before create, created | montagem : before mount, mounted | update e destroy )
  //observadores ( watch e o computed )
}
</script>
