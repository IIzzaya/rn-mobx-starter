import React from "react";
import { observable, action, computed, reaction } from "mobx";
import MobxView from "./mobxView";

class Store {
  @observable
  todos = [
    {
      title: "todo标题",
      done: false
    },
    {
      title: "已经完成 todo 的标题",
      done: true
    },
    {
      title: "I am IIzzaya",
      done: false
    }
  ];
  @action
  changeTodoTitle({ index, title }) {
    this.todos[index].title = title;
    this.todos[index].done = !this.todos[index].done;
  }
  @computed
  get unfinishedTodos() {
    return this.todos.filter(todo => todo.done).length;
  }
}

var store = new Store();

class App extends React.Component {
  render() {
    return <MobxView store={store} />;
  }
}
export default App;
