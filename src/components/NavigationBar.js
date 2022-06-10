import React from 'react'


export default function NavigationBar() {

  return (
    <nav class="navbar sticky-top">
      <div class="container">
        <a class="navbar-brand"></a>
        <ul class="nav justify-content-end">
          <li class="nav-item nav-hov">
            <a class="nav-link active" aria-current="page">Home</a>
          </li>
          <li class="nav-item nav-hov">
            <a class="nav-link">About</a>
          </li>
          <li class="nav-item nav-hov">
            <a class="nav-link">History</a>
          </li>
          <li class="nav-item nav-hov">
            <a class="nav-link">Sale</a>
          </li>
          <li class="nav-item nav-hov">
            <a class="nav-link">Contact</a>
          </li>
          <li class="nav-item cart-link">
          <button class="cart-icon nav-link"></button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

