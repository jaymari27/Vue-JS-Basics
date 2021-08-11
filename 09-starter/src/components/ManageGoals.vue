<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid!</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      inputIsInvalid: false //setting it to false since user has no input yet on page load
    };
  },
  methods: {
    setGoal() {
      // $refs = gets access to input element "text" and ".value" will return the elements value
      const input = this.$refs.goal.value;
      if (input === ``) {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
};
</script>
