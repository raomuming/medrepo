import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, delTodo } from '../../../actions/todoList';
import { Checkbox } from 'antd';
import FilterLink from './filterLink';
import './index.less';

let nextTodoId = 0;
@connect(state => ({
  todoList: state.todoList,
  setVisibility: state.setVisibility
}))
export default class todoList extends React.Component {
  submit = e => {
    e.preventDefault();
    if (!this.input.value.trim()) {
      return;
    }
    this.props.dispatch(
      addTodo({
        id: nextTodoId++,
        text: this.input.value,
        type: 'ADD_TODO'
      })
    );
    this.input.value = '';
  }

  render() {
    const { todoList, setVisibility } = this.props;
    let todos = todoList;
    if (setVisibility.filter === 'SHOW_COMPLETED') {
      todos = todoList.filter(t => t.completed);
    } else if (setVisibility.filter === 'SHOW_ACTIVE') {
      todos = todoList.filter(t => !t.completed);
    }
    return (
      <div className="todo-box">
        <div className="todo-innerBox">
          <div className="todo-tab">
            <FilterLink filter="SHOW_ALL" name="全部任务" />
            <FilterLink filter="SHOW_ACTIVE" name="待办事件" />
            <FilterLink filter="SHOW_COMPLETED" name="已完成任务" />
          </div>
          <ul className="list-group">
            {todos.map(todo => (
              <li className="todo-list_li" key={todo.id}>
              </li>
            ))}
          </ul>
          <form onSubmit={this.submit} className="todo-add">
            <input placeholder="您想做点什么" ref={ r => (this.input = r)} className="todo-input" />
          </form>
        </div>
      </div>
    );
  }
}
