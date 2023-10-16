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
    async addNewContact(context, payload) {
      return await axios
        .post(`${BASE_URL}/contacts`, payload)
        .catch((error) => {
          return error;
        });
    },
    async deleteContact(context, payload) {
      const { id } = payload;
      return await axios.delete(`${BASE_URL}/contacts/${id}`).catch((error) => {
        return error;
      });
    },
    async editContact(context, payload) {
      const { id } = payload;
      return await axios
        .put(`${BASE_URL}/contacts/${id}`, payload)
        .catch((error) => {
          return error;
        });
    },

    // TODO:
    // 1. Buat sebuah fungsi untuk menghapus data kontak dengan mengirimkan id sebagai params dari kontak yang akan dihapus ke API menggunakan endpoint /contacts, axios method yang digunakan adalah delete
    // 2. Buat sebuah fungsi untuk mengubah data kontak dengan mengirimkan id sebagai params dari kontak yang akan diubah beserta dengan data perubahan terbaru dari kontak tersebut ke API menggunakan endpoint /contacts, axios method yang digunakan adalah put
  },
  modules: {},
});
