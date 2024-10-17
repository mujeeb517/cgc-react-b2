import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../util/Error";
import myAxios from "../util/myAxios";

function Login() {

    const navigate = useNavigate();
    const refEmail = useRef();

    useEffect(() => {
        if (refEmail.current) {
            refEmail.current.focus();
        }
    }, []);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [err, setErr] = useState(false);

    const onInputChange = (evt) => {
        const newUser = { ...user, [evt.target.name]: evt.target.value };
        setUser(newUser);
    };

    const onLogin = async (evt) => {
        try {
            evt.preventDefault();
            const res = await myAxios().post('/api/v1/users/signin', user);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('name', res.data.firstName);
            navigate('/products');
        } catch (err) {
            setErr(true);
        }
    };

    return (<div className="m-4">
        <form onSubmit={onLogin} className="text-center bg-gray-100 w-1/2">
            <h1 className="font-semibold text=gray-600">Login</h1>
            {err && <Error msg="Wrong username or password" />}
            <div className="my-2">
                <label className="block mb-1">Email</label>
                <input ref={refEmail} onChange={onInputChange} className="p-2 border border-gray-300 rounded" name="email" type="text" />
            </div>

            <div className="my-2">
                <label className="block mb-1">Password</label>
                <input onChange={onInputChange} className="p-2 border border-gray-300 rounded" name="password" type="password" />
            </div>

            <div className="my-2">
                <button type="submit" className="bg-orange-500 rounded p-2 text-white hover:bg-orange-600">Login</button>
            </div>
        </form>
    </div>);
}

export default Login;