import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


export default function CarouselSlider() {
  return (
    <Carousel fade class="carousel">
         <Carousel.Item>
            <img
                className="d-block w-100 carousel-img"
                src=""
                alt="1 slide"
            />
            <Carousel.Caption class="carousel-text">
                <h1>Useful Delicious Mandarins</h1>
                <p>lorem ipsum dolor sit amet, nto nton, should have used a random text generator because isLatin angisazi.</p>
                <h2>$1.65</h2>
                <button type="button" class='add-btn'>Add to cart</button>
        </Carousel.Caption>
        <h1 class="item-number">001</h1>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 carousel-img"
                src=""
                alt="2 slide"
            />
            <Carousel.Caption class="carousel-text">
                <h1>Useful Delicious Mandarins</h1>
                <p>lorem ipsum dolor sit amet, nto nton, should have used a random text generator because isLatin angisazi.</p>
                <h2>$1.55</h2>
                <button type="button" class='add-btn'>Add to cart</button>
            </Carousel.Caption>
            <h1 class="item-number">002</h1>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 carousel-img"
                src=""
                alt="Third slide"
            />
            <Carousel.Caption class="carousel-text">
                <h1>Useful Delicious Mandarins</h1>
                <p>lorem ipsum dolor sit amet, nto nton, should have used a random text generator because isLatin angisazi.</p>
                <h2>$1.60</h2>
                <button type="button" class='add-btn'>Add to cart</button>
            </Carousel.Caption>
            <h1 class="item-number">003</h1>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 carousel-img"
                src=""
                alt="4 slide"
            />
            <Carousel.Caption class="carousel-text">
                <h1>Useful Delicious Mandarins</h1>
                <p>lorem ipsum dolor sit amet, nto nton, should have used a random text generator because isLatin angisazi.</p>
                <h2>$1.95</h2>
                <button type="button" class='add-btn'>Add to cart</button>
            </Carousel.Caption>
            <h1 class="item-number">004</h1>
        </Carousel.Item>    
        <Carousel.Item>
            <img
                className="d-block w-100 carousel-img"
                src=""
                alt="5 slide"
            />
            <Carousel.Caption class="carousel-text">
                <h1>Useful Delicious Mandarins</h1>
                <p>lorem ipsum dolor sit amet, nto nton, should have used a random text generator because isLatin angisazi.</p>
                <h2>$1.50</h2>
                <button type="button" class='add-btn'>Add to cart</button>
            </Carousel.Caption>
            <h1 class="item-number">005</h1>
        </Carousel.Item>
    </Carousel>

  )
}
