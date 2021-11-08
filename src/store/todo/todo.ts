import { reactive, InjectionKey, readonly } from 'vue'

// TODOの型を定義
type TodoState = {
  todoItems: {
    id: number;
    done: boolean;
    text: string;
  }[];
}

export const todoState = () => {
  // 管理したいステートを定義
  const state = reactive<TodoState>({
    todoItems: [],
  });

  // TODO追加
  const addTodo = (value: string) => {
    if (!value) {
      alert('値が入力されていません');
      return;
    };

    state.todoItems = [...state.todoItems, {
      id: state.todoItems.length + 1,
      done: false,
      text: value
    }];
  }

  // TODOを削除
  const removeTodo = (id: number) => {
    state.todoItems = state.todoItems.filter(todo => todo.id !== id)
  }

  // TODOのチェック
  const toggleTodo = (id: number) => {
    const todo = state.todoItems.find(todo => todo.id === id);

    if (!todo) return;

    todo.done = !todo.done;
  }

  return {
    state: readonly(state),
    addTodo,
    removeTodo,
    toggleTodo,
  }
}

// ステートの型を生成
export type todoStateType = ReturnType<typeof todoState>;

// provideメソッドに指定するInjectionKeyを指定
export const todoStateKey: InjectionKey<todoStateType> = Symbol('todoState');
