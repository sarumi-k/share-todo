<template>
  <div class="flex justify-center">
    <ul class="space-y-4 w-72">
      <transition-group name="list">
        <li class="bg-white h-10 px-4 py-1 rounded flex justify-between items-center shadow" v-for="(list, index) in this.storedItemsList" :key="index" >
          <input type="checkbox"  @click="toggleOnOff({ list, index })">
          <div class="mr-3" :class="{ 'line-through text-gray-400': list.completed }">{{ list.item }}</div>
          <button class="bg-red-400 text-white px-3 rounded" @click="deleteList({ list, index })">Del</button>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      deleteList: 'deleteOneItem',
      toggleOnOff: 'toggleOneItem'
    }),
  },
  computed: {
    ...mapGetters(['storedItemsList'])
  }
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