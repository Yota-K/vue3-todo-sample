<template>
  <div class="todo">
    <h2>TODOを追加</h2>
    <div class="input-wrap">
      <input type="text" v-model="inputValue">
      <Button @click="addTodoFunc" :text="'TODOを追加'" />
    </div>
    <p>入力した値: {{ inputValue }}</p>
    <h2>TODOを絞り込む</h2>
    <div class="input-wrap">
      <input type="text" placeholder="フィルタテキスト" v-model="filterValue">
    </div>
    <ul v-if="filterTodoItems.length">
      <ToDoItem
        v-for="todo in filterTodoItems"
        :key="todo.id"
        :id="todo.id"
        :done="todo.done"
        :text="todo.text"
        @toggle-todo="toggleTodo"
        @remove-todo="removeTodo"
      />
    </ul>
    <p v-else>TODOが登録されていません</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToDoItem from '../components/ToDoItem.vue'
import Button from '../components/Button.vue'
import { useTodo } from '../store/todo/use-todo';
import { useInputValue } from '../composables/use-input-value';
import { useFilterValue } from '../composables/use-filter-value';

export default defineComponent({
  name: 'ToDoList',
  components: {
    ToDoItem,
    Button,
  },
  setup() {
    const { addTodo, removeTodo, toggleTodo } = useTodo();
    const { inputValue } = useInputValue();
    const { filterValue, filterTodoItems } = useFilterValue();

    const addTodoFunc = () => {
      addTodo(inputValue.value);
      inputValue.value = '';
    }

    return {
      inputValue,
      filterValue,
      addTodoFunc,
      removeTodo,
      toggleTodo,
      filterTodoItems
    }
  },
})
</script>

<style lang="scss" scoped>
.todo {
  .input-wrap {
    input {
      padding: 8px;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 5px;
    }

    button {
      padding: 6px;
      border: none;
      border-radius: 5px;
      color: #fff;
      background-color: #eb6100;
      margin-left: 12px;
      cursor: pointer;
    }
  }

  ul {
    max-width: 600px;
    margin: 20px auto;
  }
}
</style>
