import React, { Component } from 'react'
import Navbar from '../Navbar/navbar-component';
import './Sidebar.css'
const sideMenu = document.getElementsByTagName('aside');

function MouseOver(e) {
    e.target.style.color = 'white';
}
function MouseOut(e){
    e.target.style.color = 'red';
}

export default class Sidebar extends Component {

    getState = (toOpen) => { 
        let navbar = new Navbar();
        let value = toOpen;
        console.log('from sidebar: '+ value);
        console.log(sideMenu);
        if(value === true){
          
        }
        else{

        }
    }
    render(){
     return (
        <aside className="sidebar" id="toggleThat">
            <div className="navlink-site-container">

         
                <ul className="navlinks-site-main">
                    <li className="navlink thover active" >
                        <a href="#" className="navlink-text isactive">Начало</a>
                    </li>
                    <li className="navlink thover">
                        <a href="#" className="navlink-text ">Мъже</a>
                    </li>
                    <li className="navlink thover">
                        <a href="#" className="navlink-text">Жени</a>
                    </li>
                    <li className="navlink thover">
                        <a href="#" className="navlink-text">Деца</a>
                    </li>
                    <li className="navlink thover">
                        <a href="#" className="navlink-text">Марки</a>
                    </li>
                    <li className="navlink sales">
                        <a href="#" className="navlink-text ">Намаления</a>
                    </li>
                </ul>
            </div>
        </aside>
    )
  }
}


