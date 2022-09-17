import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
    render() {
      return (
        <ul>
        {this.props.todos.map(todo => (
          <TodoItem setUpdate={this.props.setUpdate} deleteTodoProps={this.props.deleteTodoProps} handleChangeProps={this.props.handleChangeProps} key={todo.id} todo={todo} />
        ))}
      </ul>
        
      )
    }
  }
  
  export default TodosList