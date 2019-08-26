import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tasks : [
        {title: '1'},
        {title: '2'}
      ]
    }
  }

  addTodo = title => {
    const tasks = this.state.tasks
    tasks.push({title: title})
    this.setState({tasks: tasks})
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App
