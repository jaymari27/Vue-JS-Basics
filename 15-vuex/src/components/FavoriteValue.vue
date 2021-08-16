<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  // How to access normalizedCounter when it is no longer inside the store
  computed: {
    counter() {
      // "numbers" is the namespace, "normalizedCounter" is the getter
      return this.$store.getters['numbers/normalizedCounter'];
    }
  }
};
</script>
