<template>
  <div class="home">
    <h1>Mi contador {{ contador }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapState(['contador'])
  }
}
</script>
