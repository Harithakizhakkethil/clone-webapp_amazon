import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';


function Home() {
    return (
       
            <div className='row home d-flex justify-content-center align-items-center '>

                <div className='col-md-12 d-flex justify-content-center align-items-center'>
                    <Carousel className='carousal'>
                        <Carousel.Item>
                            <img className='home_image' src="https://m.media-amazon.com/images/I/71VBt4eTg3L._SX3000_.jpg" alt="" />
                            <Carousel.Caption style={{ marginBottom: '120px' }}>
                                <p style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item>
                            <img className='home_image' src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="" />
                            <Carousel.Caption style={{ marginBottom: '120px' }}>
                                <p style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className='home_image' src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt="" />
                            <Carousel.Caption style={{ marginBottom: '120px' }}>
                                <p style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className='home_image' src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" alt="" />
                            <Carousel.Caption style={{ marginBottom: '120px' }}>
                                <p style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className='home_image' src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="" />
                            <Carousel.Caption style={{ marginBottom: '120px' }}>
                                <p style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className='home_image' src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" alt="" />
                            <Carousel.Caption style={{ marginBottom: '120px' }}>
                                <p style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
                            </Carousel.Caption>
                        </Carousel.Item>



                    </Carousel>
                </div>




            </div>
        
    )
}

export default Home