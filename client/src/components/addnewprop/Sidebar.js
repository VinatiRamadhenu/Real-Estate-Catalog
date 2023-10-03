import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sidebar.css";
import UncontrolledExample from './addnewprop';

function Sidebar(){
    return(
        <div style={{ display: 'flex' }}>
            <div id="sidebar">
            <ul className="nav navbar-nav side-bar">
    <li className="side-bar"><a href="/sidebar">Property</a></li>
    <li className="side-bar"><a href="#">Assistance</a></li>
    <li className="side-bar"><a href="#">Received Interest</a></li>
    <li className="side-bar"><a href="#">Sent Interest</a></li>
    <li className="side-bar"><a href="#">Property Views</a></li>
    <li className="side-bar"><a href="#">Tariff Plan</a></li>
  </ul>
            </div>
            <div id="content">
                <UncontrolledExample />
            </div>
            <div className="logo-container">
            <img style={{ width: "100px", height: "80px" }} src='https://cdn.vectorstock.com/i/1000x1000/94/24/real-estate-company-logo-designs-vector-24429424.webp' alt="Logo" />
        </div>
        </div>
    )
}

export default Sidebar;
