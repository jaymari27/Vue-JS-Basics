const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log(
      'beforeCreate(): This is supposed to appear before everything else'
    );
  },
  created() {
    console.log(
      'created(): App has been created internally but has not been mounted'
    );
  },
  beforeMount() {
    console.log('beforeMounted()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdated()');
  },
  updated() {
    console.log('updated()');
  },
});

app.mount('#app');
// app.unmount();

const app2 = Vue.createApp({
  // template is the DOM? inside where we mounted our app
  template: `
  <p>{{ favouriteMeal }}</p>
  `,

  data() {
    return {
      favouriteMeal: 'pizza',
    };
  },
});

app2.mount('#app2');

// ...

const data = {
  message: 'Hello',
  longMessage: 'HELLO WORLD',
};
const handler = {
  set(target, key, value) {
    /*
    console.log(target); // the object that was wrapped, which is the contents of the object "data"
    console.log(key); // the property we set a new value to, which is "message"
    console.log(value); // the value of the key
    */

    // overwrites longMessage
    if (key === 'message') target.longMessage = value + 'WORLDD';
    target.message = value;
  },
};
const proxy = new Proxy(data, handler);

proxy.message = 'HELLOOOO';
// console.log(proxy.longMessage);
