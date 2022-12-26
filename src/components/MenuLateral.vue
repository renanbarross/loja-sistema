<script>
</script>

<template>
  <main>
    <div id="menu" class="d-flex flex-column p-3 text-white bg-dark">
      <RouterLink to="/" id="nome-loja" class="nav-link text-white">
        <span class="fs-4">Loja ABC</span>
      </RouterLink>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li>
          <RouterLink to="/" class="nav-link text-white">
            <i class="bi bi-house" style="font-size: 16px"></i>
            Página inicial
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/produto" class="nav-link text-white">
            <i class="bi bi-box" style="font-size: 16px"></i>
            Produto
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/unmedida" class="nav-link text-white">
            <i class="bi bi-rulers" style="font-size: 14px"></i>
            Unidade de Medida
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/planta" class="nav-link text-white">
            <i class="bi bi-building" style="font-size: 16px"></i>
            Planta
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/parceiro" class="nav-link text-white">
            <i class="bi bi-people" style="font-size: 16px"></i>
            Parceiro
          </RouterLink>
        </li>
      </ul>
      <hr>
      <div>
        <i class="bi bi-person-circle rounded-circle me-2" width="32" height="32"></i>
        <strong>usuário</strong>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

main {
  height: 100%;
  width: 100%;
}

#menu {
  height: 100%;
}

#nome-loja {
  text-align: left;
  padding-left: 32px;
}
</style>