<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some survey results first.
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch(
        'https://vue-http-demo-80ef9-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json'
      )
        .then(response => {
          // returns response.json() if it is successful
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          // We need to reset isLoading here since all the processes under "then" will execute at a later point in time
          this.isLoading = false;
          // Collecting values in "data", which contains all submitted ratings and storing them inside the results[] array
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating
            });
          }
          // The collected data from local variable results will be passed to global variable results
          this.results = results;
        })
        .catch(error => {
          console.log(error);
          // resetting isLoading since the page is not loading when we get an error
          this.isLoading = false;
          this.error = 'Failed to fetch data - please try again later.';
        });
    }
  },
  mounted() {
    // All submitted experiences will show up once the page is displayed.
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
