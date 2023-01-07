<template>
  <div class="flex justify-center">
    <ul class="space-y-2 w-72">
      <li class="bg-white h-10 px-4 py-1 rounded flex justify-between items-center shadow" v-for="(list, index) in todoList" :key="index">
        <span class="mr-3">{{ index+1 }}.</span>{{ list }}
        <button class="bg-red-400 text-white px-3 rounded" @click="deleteList(list, index)">Del</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      todoList: [],
    }
  },
  methods: {
    deleteList(list, index) { 
      if (localStorage.getItem(list)) { 
        localStorage.removeItem(list)
        this.todoList.splice(index, 1)
      }
    }
  },
  created: function () {
    if (localStorage.length > 0) { 
      for (let i = 0; i < localStorage.length; i++) { 
        this.todoList.push(localStorage.key(i))
      }
    }
  }
};
</script>