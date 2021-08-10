const currentTime = new Date();
const currentYear = currentTime.getFullYear();

const app = Vue.createApp({
  data() {
    return {
      myName: "Jing",
      myAge: currentYear - 1998,
      //   ageAfter: this.myAge + 5,
      //   favNum: Math.trunc(Math.random() * 1) + 1,
      imageLink:
        "https://64.media.tumblr.com/f683251dce50bef9bb0dcdc0d2abfb97/e542de8ee4d41d84-62/s1280x1920/b8785b228fac035d7f82885f4a8af9ca43d7d994.jpg",
    };
  },
  methods: {
    favNum() {
      const ran = Math.random();
      return ran;
    },
    ageAfter() {
      const age = this.myAge + 5;
      return age;
    },
  },
});

app.mount("#assignment");
