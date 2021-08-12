<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // mapActions must be called inside methods. It accepts an array of actions.
    ...mapActions('numbers', {
      // Assigning naming conventions to our actions:
      inc: 'increment',
      increase: 'increase'
    })
  }
};
</script>
