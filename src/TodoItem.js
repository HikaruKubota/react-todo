import React from 'react'

export const TodoItem = (props) => {
  return(
    <li>
      {props.todo.title}
    </li>
  )
}
