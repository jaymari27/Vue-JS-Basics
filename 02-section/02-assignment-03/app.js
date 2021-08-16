const app = Vue.createApp({
  data() {
    return {
      result: 0,
      counter: "",
    };
  },
  watch: {
    resultChange() {
      console.log("Watcher executing on result change");
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    resultChange() {
      if (this.result < 37) return "Not there yet";
      else if (this.result > 37) return "Too much!";
      else return this.result;
    },
  },
  methods: {
    add(num) {
      this.result += num;
    },
  },
}).mount("#assignment");
