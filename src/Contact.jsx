import { useContext } from "react";
import AutoCounterFunc from "./AutoCounterFunc";
import ValueContext from './context/ValueContext';

function Child3() {
    const value = useContext(ValueContext);
    return <h3>Child 3, value is: {value}</h3>
}

function Child2() {
    return <div>
        <h3>Child 2</h3>
        <div className="m-4">
            <Child3 />
        </div>
    </div>
}

function Child1() {
    return <div>
        <h3>Child 1</h3>
        <div className="m-4">
            <Child2 />
        </div>
    </div>
}

function Contact() {

    return (<div>
        <h1>Contact Page</h1>
        <ValueContext.Provider value={20000}>
            <div className="ml-4">
                <Child1 />
            </div>
        </ValueContext.Provider>
    </div>);

}

export default Contact;