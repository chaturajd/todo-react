import React, { Component } from 'react'
import TodoList from './components/TodoList'
import NewItem from './components/NewItem'
import NewTool from './components/NewTool';
import Tools from './components/Tools';

import { toolList } from './helpers/toolList';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { title: "Sample item", id: -3, isCompleted: false, tools: [] },
                { title: "Sample item", id: -2, isCompleted: true, tools: [] }
            ],
            lastItemId: 0,
            lastToolId: 0,
            selectedItemId: undefined,
            selectedItemTools: undefined
        }
    }
    componentDidMount() {
        //Get Data from Local Storage
        //localStorage
    }

    handleItemSelect = (id, e) => {

        const tools = this.state.items.find((item) => {
            return item.id === id
        }).tools;

        this.setState({
            selectedItemId: id,
            selectedItemTools: tools
        })
    }

    handleCompletedStateChange = (key, isCompleted) => {
        console.log("Completed State changeed");
    }

    handleInsertItem = (title, newItem) => {
        this.setState(
            {
                items: [...this.state.items, { title: title, id: this.state.lastItemId + 1, isCompleted: false, tools: [] }],
                lastItemId: this.state.lastItemId + 1
            }
        )
    }

    handleSaveDescription = (toolId, description, itemId) => {
        console.log("Saving Description, ToolId ", toolId, " description ", description);

        const items = this.state.items.map((item) => {
            let modItem = item;
            if (modItem.id === itemId) {
                modItem.tools = modItem.tools.map(tool => {
                    let modTool = tool;
                    if (tool.id === toolId) {
                        modTool.description = description
                    }
                    return modTool;
                })
            }
            return modItem;
        });

        console.log(items);

        this.setState({
            items: items
        })

    }

    getCurrentItemTools = () => {
        if (!this.state.selectedItemId) {
            return [];
        }

        const tools = this.state.items.find((item) => {
            return item.id === this.state.selectedItemId
        }).tools;

        console.log("Selected Item tools ", tools);

        return tools;
    }

    handleAddNewTool = (toolType) => {
        console.log("Add ", toolType, this.state.selectedItemId)
        const items = [...this.state.items];
        const newToolId = this.state.lastToolId + 1;
        if (toolList.includes(toolType)) {
            items.forEach(item => {
                if (item.id === this.state.selectedItemId) {
                    item.tools.push({ name: toolType, itemId: item.id, id: newToolId });
                    return;
                }
            });
        }


        this.setState({
            items: items,
            lastToolId: newToolId
        })
        console.log(this.state);

    }

    handleDelete =(itemId)=>{
        const items = this.state.items.filter(item=>{
            if(item.id === itemId){
                return false;
            }
            return true;
        })

        this.setState({
            items : items,
            selectedItemTools : itemId === this.state.selectedItemId ? undefined : this.state.selectedItemTools 

        })
        console.log(itemId)
    }

    render() {
        return (
            <div className="md:m-8 border-t-8 border-pink-900 shadow-lg md:shadow-2xl md:rounded-lg">

                <div className="flex flex-col md:flex-row md:h-screen">
                    <div className="md:w-1/2 bg-gray-200">
                        <NewItem parentId={0} handleInsert={this.handleInsertItem}></NewItem>
                        <TodoList selectedItemId={this.state.selectedItemId} handleDelete={this.handleDelete} handleItemSelect={this.handleItemSelect} handleCompletedChange={this.handleCompletedStateChange} items={this.state.items} ></TodoList>
                    </div>
                    <div className="md:w-1/2 h-full py-2 flex-col bg-gray-100">
                        <div className="p-2 flex items-center items-stretch ">
                            <div className="w-11/12 text-lg text-center">
                                <label className=" px-2 font-bold">Tools</label>
                            </div>
                            <NewTool className="w-1/12" handleAddNewTool={this.handleAddNewTool} ></NewTool>
                        </div>
                        <Tools handleSaveDescription={this.handleSaveDescription} tools={this.state.selectedItemTools} ></Tools>
                    </div>
                </div>
            </div>
        )
    }
}