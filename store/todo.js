export const state = () => ({
  counter: 0,
});

export const actions = {
  increment ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("INCREMENT");
        resolve();
      }, 200);
    });
  },
};

export const mutations = {
  INCREMENT (state) {
    state.counter++;
  },
};
