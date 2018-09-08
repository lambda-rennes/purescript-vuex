import Vue from "vue";
import VueX from "vuex";
import Store from "./Store";
import App from "./App.vue";
import Counter from "../output/Counter";

function setupUI() {
    Vue.use(VueX);

    var store = Store.mkStore(Counter);
    var vm = new Vue({
        el: "#mount-point",
        store,
        render: h => h(App),
    });
}

window.addEventListener("load", setupUI);

