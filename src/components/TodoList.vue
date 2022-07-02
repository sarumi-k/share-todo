<template>
  <div>
    <ul>
      <li v-for="(item, index) in todoList" :key="index">
        {{ item }}
        <span @click="removeTodo(item, index)">Delete</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      todoList: [],
    };
  },
  created: function () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoList.push(localStorage.key(i));
      }
    }
  },
  methods: {
    removeTodo: function (item, index) {
      localStorage.removeItem(item);
      this.todoList.splice(index, 1);
    },
  },
};
</script>