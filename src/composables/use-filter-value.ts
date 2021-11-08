import { reactive, toRefs, computed } from 'vue'
import { useTodo } from '../store/todo/use-todo';

type filterValueState = {
  filterValue: string;
}

export const useFilterValue = () => {
  const state = reactive<filterValueState>({
    filterValue: ''
  });

  // TODOの絞り込み検索
  const filterTodoItems = computed(() => {
    const todo = useTodo();
    const todoState = todo.state;

    // filterValueが空の時は、todoItems（既存の配列）を返す
    if (!state.filterValue) return todoState.todoItems;
 
    return todoState.todoItems.filter(
      todo => todo.text.includes(state.filterValue)
    );
  })

  return {
    ...toRefs(state),
    filterTodoItems
  }
}
