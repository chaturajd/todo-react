import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const item = this.props.item;
        const borderStyle = item.isCompleted ? "border-green-500" : "border-red-500";
        const bgColor = this.props.isSelected ? "bg-blue-400 text-white font-bold" : "";
        const itemStyle = `font-sans container border-l-8 m-2 py-2 ${borderStyle} ${bgColor}`;
        return (
            <div onClick={this.props.handleItemSelect.bind(this,item.id)} className={itemStyle}>
                <div className="m-2 flex-row flex items-center">
                    <div className="w-11/12">
                        <span className="p-2">{item.title}</span>
                    </div>
                    <div className="">
                        <button onClick={this.props.handleDelete.bind(this,this.props.id)} className="text-red-500 w-8 h-full text-center hover:bg-red-600 hover:text-white rounded">x</button>
                    </div>
                </div>
            </div>
        )
    }
}
