import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) { 
      for (let i = 0; i < localStorage.length; i++) { 
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    headerText: 'My TODO List',
    todoList: storage.fetch(),
  },
  mutations: {
    addOneItem(state, todoItem) { 
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoList.push(obj);
    },
    deleteOneItem(state, payload) { 
      if (localStorage.getItem(payload.item)) { 
        localStorage.removeItem(payload.item.item);
        state.todoList.splice(payload.index, 1);
      }
    },
    toggleOneItem(state, payload) { 
      state.todoList[payload.index].completed = !state.todoList[payload.index].completed;
      localStorage.removeItem(payload.item.item);
      localStorage.setItem(payload.item.item, JSON.stringify(payload.item));
    },
    allItem(state) { 
      localStorage.clear();
      state.todoList = [];
    }
  }
})