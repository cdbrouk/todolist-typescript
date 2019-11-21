import { createAction, createReducer, ActionType } from 'typesafe-actions';

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

export const addTodo = createAction(ADD_TODO)<string>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

const actions = { addTodo, toggleTodo, removeTodo };

type TodosAction = ActionType<typeof actions>;

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type TodoState = Todo[];

const initialState: TodoState = [
  { id: 1, text: 'Learn TypeScript', done: true },
  { id: 2, text: 'Learn TypeScript with Redux', done: true },
  { id: 3, text: 'Create TodoList', done: false },
];

const todos = createReducer<TodoState, TodosAction>(initialState, {
  [ADD_TODO]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map(todo => todo.id)) + 1,
      text,
      done: false,
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter(todo => todo.id !== id),
});

export default todos;
