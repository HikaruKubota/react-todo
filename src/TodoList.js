import React from 'react'
import { TodoItem } from './TodoItem'

class TodoList extends React.Component {
  render() {
    const list = this.props.tasks.map(todo => {
      return <TodoItem todo={todo}/>
    })
    return (
      <div>
        {list}
      </div>
    )
  }
}

export default TodoList
