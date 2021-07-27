import React, { Component } from 'react'
import Sidebar from '../Sidebar/sidebar-components';
import './Navbar.css'

class Navbar extends Component {
    state = {toggleBurger: false}
    menuState = {toggleMenu: false}
 
    toggle = () => {
        this.setState({
            showBurger: !this.state.showBurger,
        });
        this.menuState.toggleMenu = !this.menuState.toggleMenu;
        this.openMenu();
    }

    openMenu = () => {
      return this.menuState.toggleMenu;
    }

render(){
    let value = this.openMenu();
    let sidebar = new Sidebar();
    const{toggleMenu} = this.menuState;
    console.log(value);
    sidebar.getState(this.openMenu());
    return (
        <header>
            <div className="header-container">
                <div className="items-float-left">
                    <div className={this.state.showBurger ? 'mb-menu-btn toggle' : 'mb-menu-btn'} onClick={this.toggle}>
                        <div className="mobile-icon line1"></div>
                        <div className="mobile-icon line2"></div>
                        <div className="mobile-icon line3"></div>
                    </div>
                    <div className="break-border">
                    </div>
                    <a href="#home" className="bar-logo">SkateX</a>
                </div>
                <div className="items-float-right">
                <div className="header-container-search">
                        <a href="#location" className="btn-header-search">
                            <span className="btn-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                                <span className="icon-name">Търсене</span>
                            </span>
                        </a>
                    </div>
                    <div className="header-container-location">
                        <a href="#location" className="btn-header-location">
                            <span className="btn-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                   <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                <span className="icon-name">Магазин</span>
                            </span>
                        </a>
                    </div>
                    <div className="header-container-profile">
                     <a href="#location" className="btn-header-profile">
                        <span className="btn-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                             <span className="icon-name">Профил</span>
                        </span>
                    </a>
                </div>
                <div className="header-container-cart">
                    <a href="#location" className="btn-header-cart">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                               <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                            </svg>
                            <div className="cart-items">
                             <span className="cart-item-indicator" id="indicator">0</span>
                            </div>   
                            <span className="icon-name cart">Количка</span>
                         
                        </span>
                    </a>
                </div>
                
            </div>
        </div>
    </header>
    )
  }
}

export default Navbar
