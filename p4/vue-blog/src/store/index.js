import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
		blogViewCount: 0
  },
  mutations: {
    updateBlogCount(state, payload) {
      state.blogViewCount += payload;
		}
	}
});
