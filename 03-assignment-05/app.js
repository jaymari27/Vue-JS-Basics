const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: '',
      enteredValue: '',
      isVisible: true,
    };
  },

  computed: {
    displayLabel() {
      return this.isVisible ? 'Hide' : 'Show';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
    },
    listToggle() {
      if (this.task.length > 0) {
        this.displayLabel = 'Hide';
      } else if (this.task.length > 0) {
        this.displayLabel = 'Show';
      }
    },
    toggleList() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount('#assignment');
