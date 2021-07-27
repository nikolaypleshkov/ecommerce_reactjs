import React, { Component } from 'react'
import Navbar from '../Navbar/navbar-component';
import './Sidebar.css'

function MouseOver(e) {
    e.target.style.color = 'white';
}

function MouseOut(e){
    e.target.style.color = 'red';
}
const styles = { 
    transform: '' 
};
export default class Sidebar extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggleMenu: false,
            toggleMe: false,
        }

        // this.getState = this.getState.bind(this);
    }
    getState = (toOpen) => {        
       this.setState({
           toggleMenu: toOpen
       });
       this.state.toggleMe = toOpen;
       console.log('from toggleMe value: '+ this.state.toggleMe); 
    }

    toggleThat = () => {
        this.setState({
            toggleMe: !this.state.toggleMe
        });
        console.log(this.state.toggleMe);
    }

    changeTranslate = () =>{
        if(this.state.toggleMe){ 
            return {
                transform: 'translateX(-510px)',
                transition: '0.5s ease-in'
            };
        }
        else{
            return {
                transform : 'translateX(0px)',
                transition: '0.5s ease-in'
            };
        }
       
    }
    
    render(){
    
     return (
        <aside className='sidebar' id="toggleThat"  style={this.changeTranslate()}>
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


