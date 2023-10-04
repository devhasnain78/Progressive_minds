import React from 'react'
import '../css/NavBar.css'
function NavBar() {
  return (
    <>
    <nav class="navbar">
        <div class="navbar-container container">

        <div class="logo">
           <a href="/"><h4>Progressive Minds</h4></a>
        </div>
        <ul class="nav-menues">
            <li><a href="/"> Home </a></li>
            <li><a href="/categories"> Categories </a></li>
            <li><a href="/bestselling"> Best Selling </a></li>
            <li><a href="/testimonials"> Testimonials</a></li>
            <li><a href="/contactform"> Contact Us </a></li>
        </ul>
    </div>

    </nav>
    </>
  )
}

export default NavBar