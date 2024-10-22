// Without context api

function Child3({ value }) {
    return <h3>Child 3, value is: {value}</h3>
}

function Child2({ value }) {
    return <div>
        <h3>Child 2</h3>
        <div className="m-4">
            <Child3 value={value} />
        </div>
    </div>
}



function Child1({ value }) {
    return <div>
        <h3>Child 1</h3>
        <div className="m-4">
            <Child2 value={value} />
        </div>
    </div>
}


function About() {
    const value = 100;

    return (<div className="m-2">
        <h1>About Page</h1>
        {/* <AutoCounter /> */}
        <div className="ml-4">
            <Child1 value={value} />
        </div>
    </div>);
}

export default About;