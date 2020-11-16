<template>
  <button @click="disminuir">Disminuir 10</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(['incrementar', 'disminuir'])
  },
}
</script>