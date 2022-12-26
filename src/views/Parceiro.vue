<script setup>
</script>

<template>
  <main>
    <span class="fs-4 pt-3 pb-4 text-white">Parceiro</span>
    <div id="topo-tabela">
      <RouterLink to="/cadastroparceiro" class="nav-link text-white">
        <button type="submit" class="btn btn-primary">
          <i class="bi bi-plus"></i>
          Novo cadastro
        </button>
      </RouterLink>
      <div class="input-group" style="width: 20%;">
        <span class="input-group-text" id="basic-addon1">
          <i class="bi bi-search"></i>
        </span>
        <input type="text" class="form-control" placeholder="Pesquisa" aria-label="Input group example"
          aria-describedby="basic-addon1">
      </div>
    </div>
    <table class="table table-secondary table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Observação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Parceiro 1</td>
          <td>XYZ</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div id="paginacao">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item disabled">
            <a class="page-link">Anterior</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Próximo</a>
          </li>
        </ul>
      </nav>
    </div>

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

#topo-tabela {
  width: 950px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#paginacao {
  width: 950px;
}

table {
  width: 950px;
  margin-top: 15px;
}
</style>