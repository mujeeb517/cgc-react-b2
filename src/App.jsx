import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './product/ProductList';
import UserList from './user/UserList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import ProductDetail from './product/ProductDetail';
import NewProduct from './product/NewProduct';
import Login from './user/Login';

// function App() {

//     /*
//         JSX: Javascript xml
//         <div id="parent">
//             <h1>Hello React!!</h1>
//             <img src="" width="200" height="200" />
//         </div>
//     */
//     const url = 'https://images.pexels.com/photos/28039616/pexels-photo-28039616/free-photo-of-a-bowl-of-tomatoes-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load';

//     const img = React.createElement('img', { src: url, width: 200, height: 300 });
//     const elem = React.createElement('h2', null, 'Hello React!!');
//     const parent = React.createElement('div', { id: 'parent' }, [elem, img]);

//     return parent;
// }


// Component
// Component driven development
// Component: 
//    * Function
//    * Returns either null or html elements

function App() {
    return <div id="parent" className="flex flex-col flex-grow min-h-screen">
        <BrowserRouter>
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/about" Component={About} />
                    <Route path="/contact" Component={Contact} />
                    <Route path="/products" Component={ProductList} />
                    <Route path="/products/new" Component={NewProduct} />
                    <Route path="/product-detail/:id" Component={ProductDetail} />
                    <Route path="/users" Component={UserList} />
                    <Route path="/login" Component={Login} />
                    <Route path="*" Component={NotFound} />
                    {/* <Route path="*" Component={Home} /> */}
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    </div >
}

export default App;


