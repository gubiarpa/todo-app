import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, newTaskTitle) {
      if (newTaskTitle === '') return;
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      };
      state.tasks.push(newTask);
    },
  },
  actions: {
  },
  modules: {
  }
})
