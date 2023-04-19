import React from 'react';
import ReactDOM from 'react-dom/client';

const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn6.f-cdn.com/contestentries/1769335/34201588/5ec220ee4652d_thumb900.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResCard = ({resName})=>{
    return (
    <div className="res-card-container">
        <img className="res-image" src=""/>
        <h3>{resName}</h3>
        <p>Description</p>
        <p>Rating</p>
    </div>
    )
}
const resList = [{name:"Saravana Bhavan", id:"123"}, {name:"A 2 B", id:"345"}]
const Body = ()=>{
    return (
        <div className="body-layout">
            <div className="search-bar"></div>
            <div className="res-container">
                {resList.map((res)=> <ResCard key={res.id} resName={res.name}/>
                )}
            
            </div>
        </div>
    )
}
const AppLayout=()=>{
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
