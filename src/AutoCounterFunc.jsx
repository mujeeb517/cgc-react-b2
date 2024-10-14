import { useEffect, useState } from "react";

function AutoCounterFunc() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('incrementing...');
            setCount(count + 1);
        }, 1000);

        // will unmount
        return () => {
            console.log('cleaning up');
            clearInterval(timer);
        };
    }, []);


    return (<div>
        <h1>Counter {count}</h1>
    </div>);
}

export default AutoCounterFunc;