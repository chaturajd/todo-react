import React, { Component } from 'react'
import { ToolTypes } from '../helpers/resolveTool';
import Timer from '../tools/Timer';
import Description from '../tools/Description';

export default class Tools extends Component {

    getTool(tool) {
        if (tool.name === "TIMER") {
            return <Timer />
        }
        else if (tool.name === "DESCRIPTION") {
            return <Description itemId={tool.itemId} description={tool.description} toolId={tool.id} handleSaveDescription={this.props.handleSaveDescription} > </Description>
        }
    }

    componentDidMount(){
    }
    
    componentDidUpdate(){
        console.log("Tools update ",this.props.tools)
    }

    render() {
        // const { tools } = this.props;
        return (
            <div className="">
                {
                    !this.props.tools ? <div className="p-4 bg-green-200" >Select an Item</div> :this.props.tools.length < 1 ?
                        <div className="flex mx-auto p-4 bg-indigo-200 " > <h1 className="mt-2"> No Tools Added </h1>  </div> :
                        this.props.tools.map(tool => (
                            this.getTool(tool)
                            // <p>{tool.className} </p>
                        ))
                }
            </div>
        )
    }
}
