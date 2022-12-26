<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuLateral from '@/components/MenuLateral.vue'
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 m-0 p-0">
          <MenuLateral />
        </div>
        <div class="col-10 m-0 p-0">
          <RouterView />
        </div>
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
  background-color: #343635;
  margin: 0;
  padding: 0;
}
</style>