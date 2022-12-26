<script setup>
</script>

<template>
  <main>
    <span class="fs-4 pt-3 pb-4 text-white">Produto</span>
    <form class="row g-3">

      <div class="col-md-2 esp">
        <label class="form-label text-white">ID</label>
        <input type="text" readonly class="form-control">
      </div>
      <div class="w-100 m-0"></div>

      <div class="col-md-6 esp">
        <label class="form-label text-white">
          Status
          <i style="color: red" title="Campo Obrigatório">*</i>
        </label>
        <select class="form-select">
          <option selected>Ativo</option>
          <option>Inativo</option>
        </select>
      </div>
      <div class="col-md-6 esp">
        <label class="form-label text-white">
          Descrição
          <i style="color: red" title="Campo Obrigatório">*</i>
        </label>
        <input type="text" class="form-control" placeholder="Informe a descrição do produto">
      </div>

      <div class="col-md-6 esp">
        <label class="form-label text-white">
          Natureza
          <i style="color: red" title="Campo Obrigatório">*</i>
        </label>
        <input type="text" class="form-control" placeholder="Informe a descrição do produto">
      </div>
      <div class="col-md-6 esp">
        <label class="form-label text-white">
          Cod. Sistema Externo
          <i style="color: red" title="Campo Obrigatório">*</i>
        </label>
        <input type="text" class="form-control" placeholder="Informe o código externo do produto">
      </div>

      <div class="col-md-6 esp">
        <label class="form-label text-white">Observação</label>
        <textarea class="form-control" rows="2" placeholder="Observações do produto"></textarea>
      </div>
      <div class="w-100 m-0"></div>

      <div class="col-2 esp">
        <button type="submit" class="btn btn-success">Salvar</button>
      </div>
      <div class="col-2 esp">
        <RouterLink to="/produto" class="nav-link text-white">
          <button type="submit" class="btn btn-danger">Cancelar</button>
        </RouterLink>
      </div>

    </form>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-left: 75px;
}

form {
  width: 950px;
}

.esp {
  margin: 5px 0;
}
</style>