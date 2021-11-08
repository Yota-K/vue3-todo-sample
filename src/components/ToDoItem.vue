<template>
  <li @click="toggleTodo">
    <div class="todo-text">
      <span v-if="done" :class="['done']">✔︎</span>
      <span>{{ id }}, {{ text }}</span>
    </div>
    <Button @click="removeTodo" :text="'削除'" />
  </li>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
import Button from '../components/Button.vue'

type Props = {
  id: number;
  done: boolean;
  text: string;
};

export default defineComponent({
  components: {
    Button
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    done: {
      type: Boolean
    },
    text: {
      type: String,
      required: true
    }
  },
  emits: ['toggleTodo', 'removeTodo'],
  setup(props: Props, { emit }) {
    const toggleTodo = () => {
      emit('toggleTodo', props.id);
    }

    const removeTodo = () => {
      emit('removeTodo', props.id);
    }

    return {
      toggleTodo,
      removeTodo,
    }
  }
})
</script>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;

  .todo-text {
    cursor: pointer;
    text-align: left;
    width: 85%;
    padding: 8px;

    .done {
      margin-right: 10px;
    }

    &:hover {
      background: #ddd;
      transition: all 0.4s;
    }
  }
}
</style>
