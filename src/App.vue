<template>
  <div class="space-y-5">
    <TodoHeader />
    <TodoInput @addTodoItem="addOneItem" />
    <TodoList :todoList="todoList" @deleteItem="deleteOneItem" @toggleItem="toggleOneItem" />
    <TodoFooter @itemClear="allItem" />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";

export default {
  data: function(){
    return {
      todoList:[]
    }
  },
  methods: {
    addOneItem(todoItem) { 
        let obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoList.push(obj);
    },
    deleteOneItem(item, index) { 
      if (localStorage.getItem(item)) { 
        localStorage.removeItem(item.item);
        this.todoList.splice(index, 1);
      }
    },
    toggleOneItem(item, index) { 
      this.todoList[index].completed = !this.todoList[index].completed;
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item, JSON.stringify(item));
    },
    allItem() { 
      localStorage.clear();
      this.todoList = [];
    }
  },
  created: function () {
    if (localStorage.length > 0) { 
      for (let i = 0; i < localStorage.length; i++) { 
        console.log(localStorage.getItem(localStorage.key(i)))
        this.todoList.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
  },

  components: {
    TodoHeader: TodoHeader,
    TodoFooter: TodoFooter,
    TodoList: TodoList,
    TodoInput: TodoInput,
  },
};
</script>
<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
</style>
