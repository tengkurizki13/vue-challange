import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const BASE_URL = "https://api.contact-manager.project.skyshi.io";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getAllContactsData() {
      return await axios.get(`${BASE_URL}/contacts`).catch((error) => {
        return error;
      });
    },
    // TODO: Uncomment baris kode dibawah untuk membuat sebuah fungsi yang akan mengirimkan data kontak baru ke API
    async addNewContact(context, payload) {
      return await axios
        .post(`${BASE_URL}/contacts`, payload)
        .catch((error) => {
          return error;
        });
    },
  },
  modules: {},
});
