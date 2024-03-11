import { Component } from 'react';
import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem';

import './index.css'

class SimpleTodos extends Component{
  state={todosList: [], value: ''}

  updateItem = event => {
    const data = event.target.value
    this.setState({value: data})
  }

  addItem = () => {
    const {value, todosList} = this.state
    const array = value.split(' ')
    const lengths = array.length
    if (value !== '') {
      let number = array.slice(lengths - 1, lengths)
      number = parseInt(number)
      let text = array.slice(0, lengths - 1)
      text = text.join(' ')
      let i = 0
      let newInitialTodosList = [...todosList]
      while (i < number) {
        const option = {id: uuidv4(), title: text}
        newInitialTodosList = [...newInitialTodosList, option]
        i += 1
      }
      this.setState({value: '', todosList: newInitialTodosList})
    }
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredTodosList = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredTodosList})
  }

  render(){
    const {todosList, value} = this.state
    return(
      <div className='mainContainer'>
        <h1 className='headingElement'>Day Goals!</h1>
        <input type="text" value={value} onChange={this.updateItem}placeholder='Write code 3' className='inputElement'></input>
        <button className='addButton' onClick={this.addItem} >Add Todo</button>
        <ul className='list'>
            {todosList.map((eachTodo)=>(
                <TodoItem key={eachTodo.id}
                todoList={eachTodo}
                deleteTodo={this.deleteTodo}></TodoItem>
            ))}
        </ul>
      </div>
    )
  }
}
export default SimpleTodos;