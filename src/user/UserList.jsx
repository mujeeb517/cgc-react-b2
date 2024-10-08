// fetch the data
// render the data
import axios from 'axios';
import React from 'react';

// function UserList() {

//     axios.get('https://api.github.com/users')
//         .then(function (res) {
//             console.log(res.data);
//         })
//         .catch(function (err) {
//             console.log(err);
//         });


//     return <div>
//         <h1 className="m-4 text-xl font-bold text-gray-600">Users</h1>
//     </div>
// }


function UserItem({ user }) {
    return <div className="my-4">
        <img src={user.avatar_url} className="w-20 h-20 rounded-full" />
        <h1 className="font-bold">{user.login}</h1>
    </div>
}

class UserList extends React.Component {

    state = {
        users: []
    }

    constructor() {
        super();
        axios.get('https://api.github.com/users')
            .then(res => {
                this.setState({
                    users: res.data
                });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    render() {
        return <div className="m-4">
            <h1 className="text-xl font-bold text-gray-600">Users</h1>
            {this.state.users.map(user => <UserItem user={user} />)}
        </div>
    }
}

export default UserList;
