<template>
  <button @click="disminuir(1)">Disminuir 1</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(['incrementar', 'disminuir'])
  },
}
</script>