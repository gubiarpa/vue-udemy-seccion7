<template>
  <div class="home">
    <h1 :style="colorContador">Mi contador {{ contador }}</h1>
    <button @click="incrementar">Aumentar 10</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapState(['contador']),
    colorContador() {
      return [this.contador > 100 ? { 'color' : 'green' }: { 'color' : 'red' }];
    }
  },
  methods: {
    ...mapMutations(['incrementar'])
  },
}
</script>
