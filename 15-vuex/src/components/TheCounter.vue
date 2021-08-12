<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // mapGetters will give you an object full of computed properties. It takes an array of getters that you want computed here.
    // Also, mapGetters must only be called inside "computed" object
    ...mapGetters('numbers', ['finalCounter'])
  }
};
</script>
