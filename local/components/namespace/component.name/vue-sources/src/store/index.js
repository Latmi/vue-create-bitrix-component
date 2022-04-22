import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const configureURL = (action) => {
  const query = new URLSearchParams({
    c: "custom:lk.add.program",
    action,
    mode: "class",
  }).toString();
  return `${process.env.VUE_APP_API_HOST_LOCAL}bitrix/services/main/ajax.php?${query}`;
};

const prepareData = (data) => {
  if (data === null) {
    return null;
  }
  const requestData = [];
  for (let param in data) {
    requestData.push({ name: param, value: data[param] });
  }
  const formData = new FormData();
  requestData.forEach((el) => {
    if (Array.isArray(data)) {
      formData.append("data[]", JSON.stringify(el));
    } else {
      formData.append(el.name, el.value);
    }
  });

  return formData;
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async getTest({ commit }, dataSend = null) {

      const url = configureURL('test');
      const formData = prepareData(dataSend);

      try {
        const { data } = await axios.post(url, formData);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
  modules: {},
});
