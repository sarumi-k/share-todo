<template>
  <div class="space-y-5">
    <TodoHeader />
    <TodoInput/>
    <TodoList />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";

export default {
  data(){
    return {
    }
  },
  methods: {
  },

  components: {
    TodoHeader,
    TodoFooter,
    TodoList,
    TodoInput,
  },
};
</script>
<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
</style>
