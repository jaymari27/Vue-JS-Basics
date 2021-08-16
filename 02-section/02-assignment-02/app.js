const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      onEnter: "",
    };
  },
  methods: {
    showAlert() {
      alert("You clicked the alert button!");
    },
    registerInput(e) {
      this.userInput = e.target.value;
    },
    registerOnEnter(e) {
      this.onEnter = e.target.value;
    },
  },
}).mount("#assignment");
