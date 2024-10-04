function Result({ marks }) {
    return <div>
        {/* {
            marks >= 40 ?
                <h1 className="text-xl font-bold text-green-500">Passed</h1>
                : <h1 className="text-xl font-bold text-red-500">Failed</h1>
        } */}

        {/* {
            marks >= 40 ?
                <h1 className="text-xl font-bold text-green-500">Passed</h1>
                : null
        } */}
        { marks >= 40 && <h1 className="text-xl font-bold text-green-500">Passed</h1> }
    </div>
}

export default Result;
