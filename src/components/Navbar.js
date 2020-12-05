import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../Images/logo.svg'

import {NavWrapper,ButtonConatainer} from './Button'
export default class NavBar extends Component {
render(){
return(
    <NavWrapper className="navbar navbar-expand-sm px-sm">
      <Link to="/">
         <img src={logo} />
       </Link>
       <ul className="navbar-nav align-items-center">
           <li className="nav-item ml-5">
               <Link to="/" className="nav-link">
                   Products
               </Link>
           </li>
       </ul>
       <Link to="/cart" className="ml-auto">
           <ButtonConatainer >
              <span className="mr-2"><i className="fas fa-cart-plus"/></span> 
               my cart
           </ButtonConatainer>
       </Link>
    </NavWrapper>
)
}
}









