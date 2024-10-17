function Error({ msg }) {
    return (<div className="bg-red-400 p-2 rounded w-1/2">
        {msg || 'Something went wrong, please try again!'}
    </div>);
}

export default Error;