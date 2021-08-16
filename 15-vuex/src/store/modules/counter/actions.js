// Actions trigger mutations. They can run asynchronous code, unlike mutations
export default {
  increment(context) {
    setTimeout(function() {
      // commit is a method from vuex. it commits a mutation. In this case it commits after 2 seconds
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    console.log(context);
    context.commit('increase', payload);
  },
  login() {}
};
