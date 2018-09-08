"use strict";

import VueX from "vuex";

const mkStore = Counter => new VueX.Store({
	  state: {
		    count: 1
	  },
	  getters: {
		    stringify: state => ('Stringified state: ' + state.count)
	  },
	  mutations: {
		    increment: state => {
            state.count = Counter.inc(state.count);
        },
		    decrement: state => {
            state.count = Counter.dec(state.count);
        }
	  },
	  actions: {
		    increment: ctx => ctx.commit("increment"),
		    decrement: ctx => ctx.commit("decrement")
	  }
});

module.exports = {
    mkStore: mkStore
};
