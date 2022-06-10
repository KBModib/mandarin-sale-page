import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


export default function CarouselSlider() {
  return (
    <Carousel fade class="carousel">
         <Carousel.Item>
            <div className="d-block w-100 carousel-img img-1"/>
            <Carousel.Caption class="carousel-text">
                <h1>Useful Delicious Mandarins</h1>
                <p>Fruits pefectly preserve vitamin C with long storage. Mandarins ripen in November-December, so winter can be a source of vitamins for those living in the northern hemisphere.</p>
                <h2>$1.65</h2>
                <button type="button" class='add-btn'>Add to cart</button>
        </Carousel.Caption>
        <h1 class="item-number">001</h1>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-block w-100 carousel-img img-2"/>
            <Carousel.Caption class="carousel-text">
                <h1>Sweet Juicy Clementines</h1>
                <p>A clementine is a citrus fruit hybrid between a willowleaf mandarin orange and a sweet orange. It is named in honor of Clément Rodier, a French missionary who discovered the cultivar in Algeria.</p>
                <h2>$1.55</h2>
                <button type="button" class='add-btn'>Add to cart</button>
            </Carousel.Caption>
            <h1 class="item-number">002</h1>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-block w-100 carousel-img img-3" />
            <Carousel.Caption class="carousel-text">
                <h1>Ruby Red Grapefruit</h1>
                <p>It may benefit your immune system.Grapefruit may help prevent insulin resistance and diabetes. Grapefruit has weight loss benefits.</p>
                <h2>$1.60</h2>
                <button type="button" class='add-btn'>Add to cart</button>
            </Carousel.Caption>
            <h1 class="item-number">003</h1>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-block w-100 carousel-img img-4"/>
            <Carousel.Caption class="carousel-text">
                <h1>Zesty Delicious Limes</h1>
                <p>Vitamin C can help protect you from infection and speed up your body's healing process. Limes contain high levels of antioxidants, which have been shown to help reduce inflammation.</p>
                <h2>$1.95</h2>
                <button type="button" class='add-btn'>Add to cart</button>
            </Carousel.Caption>
            <h1 class="item-number">004</h1>
        </Carousel.Item>    
        <Carousel.Item>
            <div className="d-block w-100 carousel-img img-5" />
            <Carousel.Caption class="carousel-text">
                <h1>Useful Plumpy Pomelos</h1>
                <p>Pomelo fruit is rich in powerful antioxidants like vitamin C. It also contains protein and fiber, which can aid digestion and help you feel full for a longer period of time after eating.</p>
                <h2>$1.50</h2>
                <button type="button" class='add-btn'>Add to cart</button>
            </Carousel.Caption>
            <h1 class="item-number">005</h1>
        </Carousel.Item>
    </Carousel>

  )
}
