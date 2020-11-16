<template>
  <div class="home">
    <h1 :style="colorContador">Mi contador {{ contador }}</h1>
    <button @click="incrementar">Aumentar 10</button>
    <BtnDisminuir />
  </div>
</template>

<script>
import BtnDisminuir from "../components/BtnDisminuir";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: 'Home',
  components: {
    BtnDisminuir
  },
  computed: {
    ...mapState(['contador']),
    colorContador() {
      return [this.contador > 100 ? { 'color' : 'green' }: { 'color' : 'red' }];
    }
  },
  methods: {
    ...mapActions(['incrementar', 'disminuir'])
  },
}
</script>
