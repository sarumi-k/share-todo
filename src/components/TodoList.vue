<template>
  <div class="flex justify-center">
    <ul class="space-y-4 w-72">
      <transition-group name="list">
        <li class="bg-white h-10 px-4 py-1 rounded flex justify-between items-center shadow" v-for="(list, index) in todoList" :key="index" >
          <input type="checkbox"  @click="toggleOnOff(list, index)">
          <class class="mr-3" :class="{ 'line-through text-gray-400': list.completed }">{{ list.item }}</class>
          <button class="bg-red-400 text-white px-3 rounded" @click="deleteList(list.item, index)">Del</button>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['todoList'],
  methods: {
    deleteList(item, index) { 
      this.$emit('deleteItem', item, index)
    },
    toggleOnOff(item, index) { 
      this.$emit('toggleItem', item, index)
    }
  },

};
</script>

<style>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
</style>