// 5 steps to create an app on React
//1) Import the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

//2) Get a reference ot the div with id root
const el = document.getElementById('root');

//3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

//4) Create the component
function App() {
    
    return <input type='number' min={5} max={10}/>;
}

//5) Show the component on the screen

root.render(<App />);