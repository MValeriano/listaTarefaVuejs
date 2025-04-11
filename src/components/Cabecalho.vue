<template>
  <div class="cabecalho">
    <img  alt="Prefeitura de Belo Horizonte" src="@/assets/pbh.svg">
  </div>
  <br>
  <br>
</template>
<style>
  .cabecalho {
    /* position: fixed;  */
    top: 0; /* Posiciona no topo */
    left: 0; /* Alinha à esquerda */
    width: 100%; /* Faz o cabeçalho ocupar toda a largura */
    background-color: #7ca1c5; /* Cor de fundo */
    padding: 10px;
    z-index: 1000; /* Garante que o cabeçalho fique acima de outros elementos */
  }

  .cabecalho img {

    width: 200px;
    height: auto; /* Mantém a proporção da imagem */

  }
</style>

