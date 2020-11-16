<template>
  <div class="home">
    <h1 :style="colorContador">Mi contador: {{ contador }}</h1>
    <BtnAction title="Aumentar 20" @click="incrementar(20)" />
    <BtnAction title="Disminuir 10" @click="disminuir(10)" />
  </div>
</template>

<script>
// import BtnDisminuir from "../components/BtnDisminuir";
import BtnAction from "../components/BtnAction";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: 'Home',
  components: {
    // BtnDisminuir,
    BtnAction,
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
