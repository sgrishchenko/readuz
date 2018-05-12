// @flow

import { just, type Reader } from 'readuz';

import App from './App';
import appStyle from './App/App.style';
import simplifiedAppStyle from './App/SimplifiedApp.style';
import TodoItem from './TodoItem';
import SimplifiedTodoItem from './TodoItem/SimplifiedTodoItem';
import simplifiedTodoItemStyle from './TodoItem/SimplifiedTodoItem.style';
import todoItemStyle from './TodoItem/TodoItem.style';
import TodoInput, { type TodoInputProps } from './TodoInput';
import todoInputStyle from './TodoInput/TodoInput.style';
import simplifiedTodoInputStyle from './TodoInput/SimplifiedTodoInput.style';
import TodoList from './TodoList';
import todoListStyle from './TodoList/TodoList.style';
import simplifiedTodoListStyle from './TodoList/SimplifiedTodoList.style';
import Filter from './Filter';
import filterStyle from './Filter/Filter.style';
import Toggle from './Toogle';
import toggleStyle from './Toogle/Toggle.style';
import Cleaner from './Cleaner';
import cleanerStyle from './Cleaner/Cleaner.style';
import Counter from './Counter';

type Style<P> =
  | { [string]: {} }
  | P => { [string]: {} }

type ComponentGroup<P> = {
  component: Reader<ComponentEnv, React$ComponentType<P>>,
  style: Reader<ComponentEnv, Style<P>>,
}

export type ComponentEnv = {
  App: ComponentGroup<{}>,
  TodoItem: ComponentGroup<{ id: string }>,
  TodoInput: ComponentGroup<TodoInputProps>,
  TodoList: ComponentGroup<{}>,
  Filter: ComponentGroup<{}>,
  Toggle: ComponentGroup<{}>,
  Cleaner: ComponentGroup<{}>,
  Counter: ComponentGroup<{}>,
};

const componentEnv: ComponentEnv = {
  App: {
    component: App,
    style: just(appStyle),
  },
  TodoItem: {
    component: TodoItem,
    style: just(todoItemStyle),
  },
  TodoInput: {
    component: TodoInput,
    style: just(todoInputStyle),
  },
  TodoList: {
    component: TodoList,
    style: just(todoListStyle),
  },
  Filter: {
    component: Filter,
    style: just(filterStyle),
  },
  Toggle: {
    component: Toggle,
    style: just(toggleStyle),
  },
  Cleaner: {
    component: Cleaner,
    style: just(cleanerStyle),
  },
  Counter: {
    component: just(Counter),
    style: just({}),
  },
};

export default componentEnv;

export const simplifiedComponentEnv: ComponentEnv = {
  App: {
    component: App,
    style: just(simplifiedAppStyle),
  },
  TodoItem: {
    component: SimplifiedTodoItem,
    style: just(simplifiedTodoItemStyle),
  },
  TodoInput: {
    component: TodoInput,
    style: just(simplifiedTodoInputStyle),
  },
  TodoList: {
    component: TodoList,
    style: just(simplifiedTodoListStyle),
  },
  Filter: {
    component: just(() => null),
    style: just({}),
  },
  Toggle: {
    component: just(() => null),
    style: just({}),
  },
  Cleaner: {
    component: just(() => null),
    style: just({}),
  },
  Counter: {
    component: just(() => null),
    style: just({}),
  },
};
