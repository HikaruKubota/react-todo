import React from 'react'

class TodoInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ''
    }
  }
  handleChange = e => {
    this.setState({inputValue: e.target.value})
  }

  handleClick = () => {
    this.props.addTodo(this.state.inputValue)
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} placeholder="新規Todo" />
        <button onClick={this.handleClick}>add</button>
      </div>
    )
  }
}

export default TodoInput
