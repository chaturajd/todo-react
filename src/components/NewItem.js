import React, { Component } from 'react'

export default class NewItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }

    handeInput = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    render() {
        return (
            <div className="container flex items-center bg-red-100 p-2">
                <div className="w-5/6">
                    <input className="p-2 rounded-full" type="text" placeholder="New Item" value={this.state.title} onChange={this.handeInput}></input>
                </div>
                <div>
                    <button onClick={this.props.handleInsert.bind(this,this.state.title)} className="py-2 px-4 mx-2 rounded-full border border-solid border-4 border-green-400 hover:bg-green-400 hover:text-white hover:font-bold">Insert</button>
                </div>
            </div>
        )
    }

}
