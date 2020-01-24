// @flow

import { just, type Reader } from 'readuz';

import { App } from './App';
import appStyle from './App/App.style';
import simplifiedAppStyle from './App/SimplifiedApp.style';
import { TodoItem } from './TodoItem';
import { SimplifiedTodoItem } from './TodoItem/SimplifiedTodoItem';
import simplifiedTodoItemStyle from './TodoItem/SimplifiedTodoItem.style';
import todoItemStyle from './TodoItem/TodoItem.style';
import { TodoInput, type TodoInputProps } from './TodoInput';
import todoInputStyle from './TodoInput/TodoInput.style';
import simplifiedTodoInputStyle from './TodoInput/SimplifiedTodoInput.style';
import { TodoList } from './TodoList';
import todoListStyle from './TodoList/TodoList.style';
import simplifiedTodoListStyle from './TodoList/SimplifiedTodoList.style';
import { Filter } from './Filter';
import filterStyle from './Filter/Filter.style';
import { Toggle } from './Toogle';
import toggleStyle from './Toogle/Toggle.style';
import { Cleaner } from './Cleaner';
import cleanerStyle from './Cleaner/Cleaner.style';
import { Counter } from './Counter';

type Style<P> =
  | { [string]: {} }
  | P => { [string]: {} }

type ComponentGroup<E, P> = {
  component: Reader<E, React$ComponentType<P>>,
  style: Reader<E, Style<P>>,
}

export type ComponentEnv = {
  App: ComponentGroup<ComponentEnv, {}>,
  TodoItem: ComponentGroup<ComponentEnv, { id: string }>,
  TodoInput: ComponentGroup<ComponentEnv, TodoInputProps>,
  TodoList: ComponentGroup<ComponentEnv, {}>,
  Filter: ComponentGroup<ComponentEnv, {}>,
  Toggle: ComponentGroup<ComponentEnv, {}>,
  Cleaner: ComponentGroup<ComponentEnv, {}>,
  Counter: ComponentGroup<ComponentEnv, {}>,
};

export const componentEnv: ComponentEnv = {
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
