<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            value="poor"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            value="great"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <p v-if="error">{{ error }}</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      error: null
    };
  },
  // emits: ['survey-submit'],
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      // this.$emit('survey-submit', {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      this.error = null;
      fetch(
        'https://vue-http-demo-80ef9-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json',
        {
          // this influences what kind of http request we send, like POST, DELETE, GET, PATCH, etc. We use "POST" because we are sending data.
          method: 'POST',
          headers: {
            // Telling the server we are sending data in json format
            'Content-Type': 'application/json'
          },
          // This is the data we are sending to the server
          body: JSON.stringify({
            name: this.enteredName,
            rating: this.chosenRating
          })
        }
      )
        .then(response => {
          if (response.ok) {
            // ...
          } else {
            // Setting an error for Status errors since catch() block cant detect it
            throw new Error('Could not save data!');
          }
        })
        .catch(error => {
          console.log(error);
          this.error = error.message;
        });

      // Resetting form values after submit
      this.enteredName = '';
      this.chosenRating = null;
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
