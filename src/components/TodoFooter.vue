<template>
  <div class="flex justify-center">
    <div class="w-28 py-3 bg-white hover:cursor-pointer">
      <span class="text-red-700 block" @click="clearAll()">Clear All</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll() { 
      this.$emit('itemClear')
    }
  }
};
</script>
