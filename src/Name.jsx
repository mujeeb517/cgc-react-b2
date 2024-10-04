/*
    Function
    returns null or UI
    Input/props
*/

// function Name(props) {
//     const { name, dept } = props;

//     return (
//         <h1>Hello, {name}, {dept}</h1>
//     );
// }

function Name({ name }) {
    const url = 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=800';

    return (<div className="m-4 flex">
        <img src={url} className="w-6 h-6 rounded-full"></img>
        <h1 className="text-sm ml-1 underline">Hello, {name}</h1>
    </div>
    );
}

export default Name;
