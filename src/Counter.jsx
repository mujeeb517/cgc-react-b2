import React from "react";
/*
    function/class
    null/UI
    props (input, immutable)
    state (internal, mutate)
    events
*/
class Counter extends React.Component {
    state = {
        count: 0
    }

    constructor(props) {
        super();
        this.state.count = props.initialValue;
    }

    onInc = () => {
        this.setState({
            count: this.state.count + 1
        });
        // this.state.count = this.state.count + 1;
    }

    onDec = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return <div className="m-4">
            <h1 className="text-xl font-semibold text-gray-600">Counter {this.state.count}</h1>
            <button onClick={this.onInc} className="bg-green-500 px-2 py-1 text-white rounded hover:bg-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </button>
            <button onClick={this.onDec} className="bg-green-500 px-2 py-1 text-white rounded ml-2 hover:bg-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </button>
        </div>
    }
}

export default Counter;
