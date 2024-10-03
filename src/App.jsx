import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Calc from './Calc';

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
    return <div id="parent" class="flex flex-col flex-grow min-h-screen">
        <Header />
        <main class="flex-grow">
            <Calc a={10} b={20} />
            <Calc a={100} b={200} />
            <Calc a={-100} b={200} />
        </main>
        <Footer />
    </div>
}

export default App;


