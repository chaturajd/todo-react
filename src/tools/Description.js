import React, { Component } from 'react'

export default class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            isEditing: this.props.description ? false : true
        }
    }

    handleChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleSave = () => {
        this.setState({
            isEditing: false
        })
        this.props.handleSaveDescription(this.props.toolId, this.state.description, this.props.itemId);
    }

    handleEdit = () => {
        this.setState({
            isEditing: true
        })
    }

    render() {
        return (
            this.state.isEditing ?
                <div>
                    {/* <div className="p-2 container w-full">
                        <textarea placeholder="Write description here..." className="block shadow-inner resize-y width-full" rows="10" onChange={this.handleChange} value={this.state.description}></textarea>
                    </div> */}
                    <div class="col p-2">
                        <div class="box border rounded flex flex-col shadow bg-white">
                            <div className="bg-gray-400 px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Description</h3></div>
                            <textarea placeholder="Write description here...(Click Save !)" className="text-gray-900 flex-1 p-2 m-1 bg-transparent resize-y" onChange={this.handleChange} value={this.state.description}></textarea>
                        </div>
                    </div>
                    <button className="border-2 border-red-100 text-gray-400 mx-2 px-4 rounded-full hover:bg-red-400 hover:text-white" onClick={this.handleSave}>Save</button>
                </div>
                : <div className="mt-2 p-4 bg-white">
                    <button className="block text-blue-400 px-4 rounded-full hover:bg-blue-200 hover:text-white hover:font-bold" onClick={this.handleEdit}>Edit </button>
                    <p className="shadow-md p-4">
                        {this.state.description}
                    </p>
                </div>
        )
    }
}
