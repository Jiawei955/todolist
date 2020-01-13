import React, { Component } from 'react'
import { decorator } from '@babel/types';

export class TodoItem extends Component {
    getStyle = () => {
         return {
             background: '#f4f4f4',
             padding: '10px',
             borderBottom:'1px #ccc dotted',
             textDecorations: this.props.todo.completed ? 
             'line-through' : 'none'
         }   


    }
    


    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                { <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> }
                { title }
                <button onClick = {this.props.delTodo.bind(this,id)} style={btnStyle}></button>
                </p>
            </div>
        )
    }
}
const btnStyle ={
    background: "#f4f4f4",
    color: "#ff0000",
    border: 'none',
    padding: '5px 9px',
    borderRadius:'50%'
}
export default TodoItem;
