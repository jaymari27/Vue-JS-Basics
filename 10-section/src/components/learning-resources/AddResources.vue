<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="closeDialog">
    <template #default>
      <p>You have entered invalid inputs!</p>
      <p>
        Please make sure you enter at least a few characters into each input
        fields.
      </p>
    </template>
    <template #actions>
      <base-button @click="closeDialog">
        Okay
      </base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <input id="description" name="description" rows="3" ref="descInput" />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
// import { defineComponent } from '@vue/composition-api';

export default {
  components: { BaseDialog, BaseButton },
  data() {
    return {
      inputIsInvalid: false // Since there is no input initially
    };
  },
  inject: ['addResource'],
  methods: {
    // Acquiring data using $ref, which takes an element from the DOM
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;

      // The trim() method will remove whitespaces in a given string. This way, entering only a series of spaces in the textbox won't be accepted as value.
      if (
        enteredTitle.trim() === '' ||
        enteredDesc.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      // Passing data to addResource
      this.addResource(enteredTitle, enteredDesc, enteredLink);
    },
    closeDialog() {
      this.inputIsInvalid = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
