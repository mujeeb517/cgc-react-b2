// hooks
import { useState, useEffect } from "react";

function CounterFunc() {

    const [count, setCount] = useState(10);

    useEffect(function () {
        console.log('inside use effect');
    }, [count]);

    const onInc = () => {
        setCount(count + 1);
    };

    const onDec = () => {
        setCount(count - 1);
    };

    return (<div>
        <h1>Count {count}</h1>
        <button onClick={onInc} className="bg-green-500 px-2 py-1 text-white rounded hover:bg-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </button>
        <button onClick={onDec} className="bg-green-500 px-2 py-1 text-white rounded ml-2 hover:bg-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
        </button>
    </div>);
}

export default CounterFunc;