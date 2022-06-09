import React from 'react'
//import mandarin from './images/mandarin.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'


export default function CarouselSlider() {
  return (
    <Carousel fade class="carousel">
         <Carousel.Item>
            <img
                className="d-block w-100 "
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="1 slide"
            />
            <Carousel.Caption>
                <h1>Useful Delicious Mandarins</h1>
                <p>lorem ipsum dolor sit amet, nto nton, should have used a random text generator because isLatin angisazi.</p>
                <h2>$1.65</h2>
                <Button variant="outline-secondary" class='add-btn'>Add to cart</Button>{' '}
                <h1>001</h1>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 "
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="2 slide"
            />
            <Carousel.Caption>
                <h1>Useful Delicious Mandarins</h1>
                <p>lorem ipsum dolor sit amet, nto nton, should have used a random text generator because isLatin angisazi.</p>
                <h2>$1.55</h2>
                <h1>002</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 "
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h1>Useful Delicious Mandarins</h1>
                <p>lorem ipsum dolor sit amet, nto nton, should have used a random text generator because isLatin angisazi.</p>
                <h2>$1.60</h2>
                <h1>003</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 "
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="4 slide"
            />
            <Carousel.Caption>
                <h1>Useful Delicious Mandarins</h1>
                <p>lorem ipsum dolor sit amet, nto nton, should have used a random text generator because isLatin angisazi.</p>
                <h2>$1.95</h2>
                <h1>004</h1>
            </Carousel.Caption>
        </Carousel.Item>    
        <Carousel.Item>
            <img
                className="d-block w-100 "
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="5 slide"
            />
            <Carousel.Caption>
                <h1>Useful Delicious Mandarins</h1>
                <p>lorem ipsum dolor sit amet, nto nton, should have used a random text generator because isLatin angisazi.</p>
                <h2>$1.50</h2>
                <h1>005</h1>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

  )
}
