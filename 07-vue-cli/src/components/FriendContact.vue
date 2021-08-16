<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? '(Favourite)' : '' }}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteFriend">Delete Friend</button>
  </li>
</template>

<script>
export default {
  // properties:
  // these will be available everywhere in the vue template using "this."
  // props: ['name', 'phoneNumber', 'emailAddress'],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false
      // validator: function(value) {
      //   return value === '1' || value === '0';
      // }
    }
  },
  emits: ['toggle-favourite', 'delete'],
  // emits is the counterpart to props. You define which custom events your component will omit.
  // emits: {
  //   // specifying that toggle-favourite will be handled by a function that receives the parameter id
  //   'toggle-favourite': function(id) {
  //     // adding conditional statement
  //     if (id) return true;
  //     else {
  //       // else will be ran when the parameter "id" is ommitted
  //       console.warn('ID is missing');
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false
      // friendIsFavourite: this.isFavourite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      // emit allows us to listen to the parent element, which is App.vue
      this.$emit('toggle-favourite', this.id);
    },
    deleteFriend() {
      // forward the information to App.vue, its parent so the deletion process occurs there in the parent part
      this.$emit('delete', this.id);
    }
  }
};
</script>
