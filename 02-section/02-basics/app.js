const app = Vue.createApp({
  // an alternate syntax of functions
  data() {
    // Everything we will return can be used inside the controlled HTML
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing applications!",
      vueLink: "https://vuejs.org/",
    };
  },
  // Methods takes an object full of methods. They must ALL be functions
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) return this.courseGoalA;
      else return this.courseGoalB;
    },
  },
});

/// Establishing control on HTML
// Selecting the section "user-goal"
app.mount("#user-goal");
