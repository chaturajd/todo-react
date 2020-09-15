import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <div className="container">
                {this.props.items.length > 0 ?
                    this.props.items.map((item) => (
                        <TodoItem isSelected={this.props.selectedItemId === item.id ? true : false} id={item.id} handleDelete={this.props.handleDelete} handleItemSelect={this.props.handleItemSelect} key={item.id} handleCompletedChange={this.props.handleCompletedChange} item={item}></TodoItem>
                    )) :

                    <div className="p-4 text-center font-bold bg-blue-200 text-white">
                        No items to show, Start By Inserting Items.
                    </div>
                }
            </div>
        )
    }
}
