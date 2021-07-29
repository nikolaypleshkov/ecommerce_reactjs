import React, { Component } from 'react'

import './Navbar.css'
import './Sidebar.css'
import adidas from '../../svg/adidas.svg'
import nike from '../../svg/nike.svg'
import jordan from '../../svg/jordan.svg'
import puma from '../../svg/puma.svg'
import reebok from '../../svg/reebok.svg'
import vans from '../../svg/vans.svg'

class Navbar extends Component {
    state = {
        toggleBurger: false,
        toggleDropdow: false,
        toggleDropdow2: false
    }
    
    OnMouseOut = () => { 
        this.setState({
            toggleDropdow: false
        });
    }

    OnMouseOver = () => {
        if(this.state.toggleDropdow2){
            this.setState({
                toggleDropdow2: false
            });
        }
 
            this.setState({
                toggleDropdow: !this.state.toggleDropdow
            });
     
    }

    OnMouseOver2 = () => {
        if(this.state.toggleDropdow){
            this.setState({
                toggleDropdow: false
            });
        }
 
            this.setState({
                toggleDropdow2: !this.state.toggleDropdow2
            });
    }

    toggle = () => {
        this.setState({
            showBurger: !this.state.showBurger,
        });

    }



render(){

    return (
        <> 
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                                <span className="icon-name">Търсене</span>
                            </span>
                        </a>
                    </div>
                    <div className="header-container-location">
                        <a href="#location" className="btn-header-location">
                            <span className="btn-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                   <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                <span className="icon-name">Магазин</span>
                            </span>
                        </a>
                    </div>
                    <div className="header-container-profile">
                     <a href="#location" className="btn-header-profile">
                        <span className="btn-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                             <span className="icon-name">Профил</span>
                        </span>
                    </a>
                </div>
                <div className="header-container-cart">
                    <a href="#location" className="btn-header-cart">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
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

<aside className={this.state.showBurger ? 'sidebar translate' : 'sidebar'} id="toggleThat" >
<div className="navlink-site-container"> 
  <div className="mb-header">
      <h1>
          Меню
      </h1> 
      
  </div>    
   <hr className="display-none mb-display" />  
    <ul className="navlinks-site-main">
        <li className={!this.state.toggleDropdow && !this.state.toggleDropdow2 ? 'navlink thover active ' : 'navlink thover'} >
            <a href="#home" className="navlink-text">Начало</a>
        </li>
        <li  className={this.state.toggleDropdow ? 'navlink thover active' : 'navlink thover'} onClick={this.OnMouseOver}  >
            <a href="#men" className="navlink-text " >Мъже</a>
        </li>
        <div className={this.state.toggleDropdow ? 'dropdown add-dropdown mv' : 'dropdown'}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill man" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
                <div className="container" >
                    <div className="row">
                        <div className="col">
                            <h3>Облекло</h3>
                            <hr />
                            <ul className="dropdwn-ul-elements">
                                <li className="dropdown-li new-collection">
                                    <a href="#new"  className="ahref">NEW</a>
                                </li>
                                <li className="dropdown-li" >
                                    <a href="#shirts"  className="ahref">Блузи</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#jeans"  className="ahref">Панталони</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#sport"  className="ahref">Анцузи</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#jackets"  className="ahref">Якета</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#sweatshirts"  className="ahref">Суитшърти и горнища</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#tshirtandtanks" className="ahref">Тениски и потници</a>
                                </li>
                            </ul>
                            <hr />
                            <a href="#savemoney" className="ahref fl">  <p><b>Комбинирай и спести </b></p></a>
                        </div>
                        <div className="col">
                        <h3>Обувки</h3>
                        <hr />
                        <ul className="dropdwn-ul-elements">
                                <li className="dropdown-li new-collection">
                                    <a href="#new-shoes"  className="ahref">NEW</a>
                                </li>
                                <li className="dropdown-li" >
                                    <a href="#everyday"  className="ahref">Ежедневни обувки</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#boots"  className="ahref">Ботуши</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#sandals"  className="ahref">Сандали</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#sport-shoes"  className="ahref">Спортни обувки</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#tours"  className="ahref">Туристичeски обувки</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#flipflops" className="ahref">Джапанки</a>
                                </li>
                            </ul>
                            <hr />
                            <a href="#lastitems" className="ahref fl"> <p><b>Купи последни бройки</b></p> </a>
                        </div>
                        <div className="col">
                        <h3>Аксесоари</h3>
                        <hr />
                        <ul className="dropdwn-ul-elements">
                                <li className="dropdown-li new-collection">
                                    <a href="#new-access"  className="ahref">NEW</a>
                                </li>
                                <li className="dropdown-li" >
                                    <a href="#bags"  className="ahref">Раници</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#morebags"  className="ahref">Чанти, сакове, портмонета</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#belt"  className="ahref">Колани</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#socks"  className="ahref">Чорапи</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#hats"  className="ahref">Шапки и шалове</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#tips" className="ahref">Стелки и връзки</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#clean" className="ahref">Препарати за почистване</a>
                                </li>
                            </ul>
                            <hr />
                            <a href="#lastitems-shoes" className="ahref fl"> <p><b>Купи последни бройки</b></p> </a>
                        </div>
                        <div className="col">
                        <h3> Марки</h3>
                        <hr />
                        <div className="container brand-layout">
                            <div className="row">
                                <div className="col">
                                    <img src={adidas} alt="" />
                                </div>
                                <div className="col">
                                   <img src={nike} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src={jordan} alt="" />
                                </div>
                                <div className="col">
                                   <img src={puma} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src={reebok} alt="" />
                                </div>
                                <div className="col">
                                   <img src={vans} alt="" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <a href="#allbrands" className="ahref fl"> <p><b>Виж всички марки</b></p> </a>
                    </div>
                </div>
            </div>
        </div>
        
        <li className={this.state.toggleDropdow2 ? 'navlink thover active' : 'navlink thover'}  onClick={this.OnMouseOver2} >
            <a href="#women" className="navlink-text">Жени</a>
            <div className={this.state.toggleDropdow2 ? 'dropdown add-dropdown wm2' : 'dropdown wm'}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill man" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
                <div className="container" >
                    <div className="row">
                        <div className="col">
                            <h3>Облекло</h3>
                            <hr />
                            <ul className="dropdwn-ul-elements">
                                <li className="dropdown-li new-collection">
                                    <a href="#new-women"  className="ahref">NEW</a>
                                </li>
                                <li className="dropdown-li" >
                                    <a href="#shirts-women"  className="ahref">Блузи</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="jeans-women"  className="ahref">Панталони</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#sport-women"  className="ahref">Анцузи</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="jackets-women"  className="ahref">Якета</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#seatshirts-women"  className="ahref">Суитшърти и горнища</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#tshirtsandtanks-women" className="ahref">Тениски и потници</a>
                                </li>
                            </ul>
                            <hr />
                            <a href="#savemoney-women"  className="ahref fl">  <p><b>Комбинирай и спести </b></p></a>
                        </div>
                        <div className="col">
                        <h3>Обувки</h3>
                        <hr />
                        <ul className="dropdwn-ul-elements">
                                <li className="dropdown-li new-collection">
                                    <a href="#new-shoes-women"  className="ahref">NEW</a>
                                </li>
                                <li className="dropdown-li" >
                                    <a href="#everyday-women"  className="ahref">Ежедневни обувки</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#boots-women" className="ahref"> Ботуши</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#sandals-women"  className="ahref">Сандали</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#sport-shoes-women"  className="ahref">Спортни обувки</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#tours-women"  className="ahref">Туристичeски обувки</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#fliplops-women" className="ahref">Джапанки</a>
                                </li>
                            </ul>
                            <hr />
                            <a href="#lastitems-women" className="ahref fl"> <p><b>Купи последни бройки</b></p> </a>
                        </div>
                        <div className="col">
                        <h3>Аксесоари</h3>
                        <hr />
                        <ul className="dropdwn-ul-elements">
                                <li className="dropdown-li new-collection">
                                    <a href="#new-access-women"  className="ahref">NEW</a>
                                </li>
                                <li className="dropdown-li" >
                                    <a href="#bags-women" className="ahref">Раници</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#morebags-women"  className="ahref">Чанти, сакове, портмонета</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#belt-women"  className="ahref">Колани </a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#socks-women"  className="ahref">Чорапи</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#hats-women"  className="ahref">Шапки и шалове</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#tips-women" className="ahref">Стелки и връзки</a>
                                </li>
                                <li className="dropdown-li">
                                    <a href="#clean-women" className="ahref">Препарати за почистване</a>
                                </li>
                            </ul>
                            <hr />
                            <a href="#lastitems-women" className="ahref fl"> <p><b>Купи последни бройки</b></p> </a>
                        </div>
                        <div className="col">
                        <h3> Марки</h3>
                        <hr />
                        <div className="container brand-layout">
                            <div className="row">
                                <div className="col">
                                    <img src={adidas} alt="" />
                                </div>
                                <div className="col">
                                   <img src={nike} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src={jordan} alt="" />
                                </div>
                                <div className="col">
                                   <img src={puma} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src={reebok} alt="" />
                                </div>
                                <div className="col">
                                   <img src={vans} alt="" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <a href="#allbrands-women" className="ahref fl"> <p><b>Виж всички марки</b></p> </a>
                    </div>
                </div>
            </div>
        </div>
            
        </li>
        <li className="navlink thover">
            <a href="#kinder" className="navlink-text">Деца</a>
        </li>
        <li className="navlink thover">
            <a href="#brands" className="navlink-text">Марки</a>
        </li>
        <li className="navlink sales">
            <a href="#sales" className="navlink-text ">Намаления</a>
        </li>
    </ul>
</div>

</aside>
</>
    )
  }
}

export default Navbar
