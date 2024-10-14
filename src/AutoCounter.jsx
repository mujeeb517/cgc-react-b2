import React from 'react';


class AutoCounter extends React.Component {

    state = {
        count: 100
    };

    componentDidMount = () => {
        this.timer = setInterval(() => {
            console.log('Updating...');
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }

    componentWillUnmount = () => {
        console.log('clearing..');
        clearInterval(this.timer);
    };

    render() {
        return <div>
            <h1>Counter {this.state.count}</h1>
        </div>
    }
}

export default AutoCounter;
