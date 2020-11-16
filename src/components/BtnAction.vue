<template>
  <button>{{ title }}</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    // methods: {
    // ...mapActions(['incrementar', 'disminuir'])
    // },
}
</script>