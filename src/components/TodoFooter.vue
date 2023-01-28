<template>
  <div class="flex justify-center">
    <div class="w-28 py-3 bg-white hover:cursor-pointer">
      <span class="text-red-700 block" @click="clearAll()">Clear All</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      clearAll : 'allItem'
    }),
  }
};
</script>
