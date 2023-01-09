<template>
  <div class="flex justify-center">
    <ul class="space-y-2 w-72">
      <li class="bg-white h-10 px-4 py-1 rounded flex justify-between items-center shadow" v-for="(list, index) in todoList" :key="index" >
        <input type="checkbox"  @click="toggleOnOff(list)">
        <class class="mr-3" :class="{ 'line-through text-gray-400': list.completed }">{{ list.item }}</class>
        <button class="bg-red-400 text-white px-3 rounded" @click="deleteList(list.item, index)">Del</button>
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
    },

    toggleOnOff(list) { 
      list.completed = !list.completed;
      localStorage.removeItem(list.item)
      localStorage.setItem(list.item, JSON.stringify(list))
    }
  },
  created: function () {
    if (localStorage.length > 0) { 
      for (let i = 0; i < localStorage.length; i++) { 
        console.log(localStorage.getItem(localStorage.key(i)))
        this.todoList.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
  }
};
</script>