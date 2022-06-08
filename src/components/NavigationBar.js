import React from 'react'


export default function NavigationBar() {

  return (
    <nav class="navbar sticky-top">
       <div class="container">
    <a class="navbar-brand" href="#"></a>
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">History</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Sale</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
  <li class="nav-item cart-link">
  <a class="cart-icon nav-link"></a>
  </li>
</ul>
  </div>
    </nav>
  );
}

