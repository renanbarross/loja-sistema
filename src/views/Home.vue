<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  }
})
</script>

<template>
  <main>
    <span class="fs-4 pt-3 pb-4 text-white">Bem-vindo!</span>
    <div id="contador">
      <span class="fs-4 pt-3 pb-4 text-white">{{ count }}</span>
      <div>
        <button @click="increment">Incrementa</button>
        <button @click="decrement">Decrementa</button>
      </div>
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

#contador {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>