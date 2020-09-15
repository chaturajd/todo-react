import React, { Component } from 'react'
import {toolList} from '../helpers/toolList'

export default class NewTool extends Component {
    constructor(props){
        super(props)
        this.state = {
            showTools : false
        }
    }

    toggleNewToolVisibilty = ()=>{
        this.setState({
            showTools : !this.state.showTools
        })
    }

    render() {
        const { handleAddNewTool } = this.props;
        const toolListStyle = `" w-32 mt-2 right-0 shadow-lg py-2 rounded-lg absolute bg-white " ${!this.state.showTools ? " hidden " : " "}`
        return (
            <div className="relative">
                <button onClick={this.toggleNewToolVisibilty} className="block h-8 w-8 hover:bg-blue-300 rounded font-bold"> + </button>
                <div className="container">
                <div className={toolListStyle}>
                        <button className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 w-full hover:text-white text-left" onClick={handleAddNewTool.bind(this,"TIMER")} > Timer </button>
                        <button className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 w-full hover:text-white text-left" onClick={handleAddNewTool.bind(this,"DESCRIPTION")} > Description </button>
                </div>
                </div>
            </div>
        )
    }
}
