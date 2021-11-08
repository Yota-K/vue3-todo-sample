import { inject } from 'vue'
import { todoStateKey } from './todo';

export const useTodo = () => {
  const state = inject(todoStateKey);

  if (!state) {
    throw new Error('NO Global Key')
  }

  return state;
}
