import React from 'react'


export default function NavigationBar() {

  return (
    <nav class="navbar sticky-top">
      <div class="container">
        <a class="navbar-brand" href='#'></a>
        <ul class="nav justify-content-end">
          <li class="nav-item nav-hov">
            <a class="nav-link active" aria-current="page" href='./RedirectPage'>Home</a>
          </li>
          <li class="nav-item nav-hov">
            <a class="nav-link" href='./RedirectPage'>About</a>
          </li>
          <li class="nav-item nav-hov">
            <a class="nav-link" href='./RedirectPage'>History</a>
          </li>
          <li class="nav-item nav-hov">
            <a class="nav-link" href='./RedirectPage'>Sale</a>
          </li>
          <li class="nav-item nav-hov">
            <a class="nav-link" href='./RedirectPage'>Contact</a>
          </li>
          <li class="nav-item cart-link">
          <button class="cart-icon nav-link" href='./RedirectPage'></button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

