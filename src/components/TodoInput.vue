<template>
  <div>
    <input type="text" class="rounded w-60 py-1" v-model="newTodoItem" @keyup.enter="addTodo" />
    <button @click="addTodo" class="bg-gray-400 px-3 py-1 rounded-sm ml-2">add</button>

    <ModalBase v-if="showModal" @close="showModal = false">
      <h3 slot="body">단어를 입력해주세요 :)</h3>
    </ModalBase>
  </div>
</template>

<script>
import ModalBase from './common/ModalBase.vue';

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  components: {
    ModalBase
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else { 
        this.showModal = true;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>