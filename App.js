import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById("root"));
const TitleComponent = ()=>(<h1 className="heading" tabIndex="5">Hello React!!</h1>);
const title = <h1>Hello from React Element</h1>
const HeadingComponent = ()=>{
    return (
    <div id="container">
        {title}
        <TitleComponent/>
        <h1 id="headingComp">Welcome to React!</h1>
    </div>)
}
root.render(<HeadingComponent />);
