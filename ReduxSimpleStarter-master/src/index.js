import React from 'react'
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
const App = () => {
    return <div>Hello World!</div>;
}

const App2 = () => {
    return <div>Hello World2!</div>;
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
ReactDOM.render(<App2 />, document.querySelector('.container2'));