function List() {
    const langs = ['Javascript', 'Java', 'Python', 'C#', 'Scala'];

    return <div>
        <h1>Programming Languages</h1>
        <ul className="m-2">
            {langs.map(elem => <li>{elem}</li>)}
        </ul>
    </div>
}

export default List;