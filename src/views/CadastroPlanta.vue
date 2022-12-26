<script setup>
</script>

<template>
  <main>
    <span class="fs-4 pt-3 pb-4 text-white">Planta</span>
    <form class="row g-3">
      <div class="col-md-2 esp">
        <label class="form-label text-white">Id</label>
        <input type="text" readonly class="form-control">
      </div>
      <div class="w-100 m-0"></div>
      <div class="col-md-6 esp">
        <label class="form-label text-white ">
          Nome
          <i style="color: red" title="Campo Obrigatório">*</i>
        </label>
        <input type="text" class="form-control" placeholder="Insira o nome da planta">
      </div>
      <div class="col-md-6 esp">
        <label class="form-label text-white">
          Categoria
          <i style="color: red" title="Campo Obrigatório">*</i>
        </label>
        <select class="form-select">
          <option selected>Escolha uma categoria</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-12 esp">
        <label class="form-label text-white">Observação</label>
        <input type="text" class="form-control" placeholder="Insira uma observação">
      </div>
      <div class="col-2 esp">
        <button type="submit" class="btn btn-success">Salvar</button>
      </div>
      <div class="col-2 esp">
        <RouterLink to="/planta" class="nav-link text-white">
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