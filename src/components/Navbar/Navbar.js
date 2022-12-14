import React, { Component } from 'react';
import { MenuItems } from "./Menuitems";

class Navbar extends Component {
  render() {
    return (
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>React<i className='fab fa-react'></i></h1>
        <div className='menu-icon'>

        </div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar;
