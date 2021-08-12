<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
// import { defineComponent } from '@vue/composition-api';

export default {
  props: ['mode']
  // data() {}
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #9d60c5;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #7a00cc;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3c0064;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
