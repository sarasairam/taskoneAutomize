import {Component} from 'react'
import { FaPencil } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import './index.css'

class TodoItem extends Component {
    state = {data: '', value: 'edit',count:0}
  
    componentDidMount = () => {
      const {todoList} = this.props
      const {title} = todoList
      this.setState({data: title})
    }
  
    changeValue = () => {
      const {value} = this.state
      if (value === 'save') {
        this.setState({value: 'edit'})
      } else {
        this.setState({value: 'save'})
        this.setState((prevState)=>({count:prevState.count+1}))
      }
    }
  
    changeTitle = event => {
      this.setState({data: event.target.value})
    }
  
    onDelete = () => {
      const {todoList, deleteTodo} = this.props
      const {id} = todoList
      deleteTodo(id)
    }
  
    render() {
      const {value, data,count} = this.state
      return (
        <li className="listItem">
          {value === 'edit' ? (
            <div className='listFDiv'>
                <p className='para'>{data}</p>
                <p>(Updated {count} Times)</p>
            </div>
          ) : (
            <input
              type="text"
              value={data}
              className="inputEl"
              onChange={this.changeTitle}
            />
          )}
          <div>
            <button type="button" className="editButton" onClick={this.changeValue}>
                    <FaPencil />
                </button>
            <button type="button" className="deleteButton" onClick={this.onDelete}>
                    <RxCross2 />
                </button>
          </div>
        </li>
      )
    }
  }
  
  export default TodoItem