import React, { Component } from 'react'

export default class Timer extends Component {
    render() {
        return (
            <div className="container mx-auto justify-center rounded mt-2 shadow-md bg-white sm:max-w-xs ">
                <div className="flex justify-center p-4 text-xl font-bold ">
                    00:27:06
                    </div>
                <div className="flex justify-center pb-2">
                    <button className="hover:bg-gray-200 rounded-full mx-2 h-8 w-8 shadow-lg border border-white"> > </button>
                    <button className="hover:bg-gray-200 rounded-full mx-2 h-8 w-8 shadow-lg border border-white">O</button>
                </div>
            </div>
        )
    }
}
