import React from 'react'


export default function NavigationBar() {
  return (
    <nav class="nav">
    <a class="navbar-brand" href="">
      <img src="/assets/images/Mandarin-logo.png" width="30" height="24"/>
    </a>
    <span class="nav-links">
    <a>Home</a>
    <a>About</a>
    <a>History</a>
    <a>Sale</a>
    <a>Contact</a>
    </span>
    <img src="/assets/icons/shopping-bag.png" alt="" class="cart-icon" width="30" height="24"/>
    </nav>
  );
}

