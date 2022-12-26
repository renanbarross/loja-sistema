import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Planta from '../views/Planta.vue'
import Parceiro from '../views/Parceiro.vue'
import Produto from '../views/Produto.vue'
import UnMedida from '../views/UnMedida.vue'
import CadastroPlanta from '../views/CadastroPlanta.vue'
import CadastroParceiro from '../views/CadastroParceiro.vue'
import CadastroProduto from '../views/CadastroProduto.vue'
import CadastroUnMedida from '../views/CadastroUnMedida.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/planta',
      name: 'planta',
      component: Planta
    },
    {
      path: '/parceiro',
      name: 'parceiro',
      component: Parceiro
    },
    {
      path: '/produto',
      name: 'produto',
      component: Produto
    },
    {
      path: '/unmedida',
      name: 'unmedida',
      component: UnMedida
    },
    {
      path: '/cadastroplanta',
      name: 'cadastroplanta',
      component: CadastroPlanta
    },
    {
      path: '/cadastroparceiro',
      name: 'cadastroparceiro',
      component: CadastroParceiro
    },
    {
      path: '/cadastroproduto',
      name: 'cadastroproduto',
      component: CadastroProduto
    },
    {
      path: '/cadastrounmedida',
      name: 'cadastrounmedida',
      component: CadastroUnMedida
    },
  ]
})

export default router
