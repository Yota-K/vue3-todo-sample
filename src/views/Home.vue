<template>
  <ToDoList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToDoList from '../components/ToDoList.vue';

export default defineComponent({
  components: {
    ToDoList,
  },
})
</script>
