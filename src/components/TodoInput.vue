<template>
  <div>
    <input type="text" class="rounded w-60 py-1" v-model="newTodoItem" @keyup.enter="addTodo" />
    <button @click="addTodo" class="bg-gray-400 px-3 py-1 rounded-sm ml-2">add</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function () {
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput();
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
};
</script>