import React from 'react'
import './Products.css'
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';





function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}


function Products() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,

        nextArrow: <Arrow />,
        prevArrow: <Arrow />,

        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (

        <div className='main'>
            <div className='card-product-container row'>
                <div className="col-sm-3">
                    <div className="card-product  ">
                        <h5>Handpicked music & audio</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg" alt="" />
                                <p>Headsets</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt="" />
                                <p>Keyboards</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg" alt="" />
                                <p>Computer Mice</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg" alt="" />
                                <p>Chairs</p>
                            </div>

                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">see more</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Deals in PCs</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '275px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop now</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card-product">
                        <h5>Get ready to celebrate Easter</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="" />
                                <p>Arts and Crafts</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="" />
                                <p>Puzzles and Games</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="" />
                                <p>Books</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="" />
                                <p>Easter eggs</p>
                            </div>

                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop all</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card-product">
                        <h5>Handpicked music & audio</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img src="https://m.media-amazon.com/images/I/41aF1Kpc1iL._SY160_.jpg" alt="" />
                                <p>Headphones</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://m.media-amazon.com/images/I/316r7290SLL._SY75_.jpg" alt="" />
                                <p>Guitars</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://m.media-amazon.com/images/I/31qcGgiIK7L._SY75_.jpg" alt="" />
                                <p>Keyboards</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://m.media-amazon.com/images/I/313zteqI9LL._SY75_.jpg" alt="" />
                                <p>Microphones</p>
                            </div>

                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">see more curated tech</a>
                    </div>
                </div>

            </div>

            <div className='card-product-container row'>
                <div className="col-sm-3">
                    <div className="card-product">
                        <h5>Handpicked music & audio</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics/XCM_CUTTLE_1468425_2580535_186x116_1X_en_US._SY116_CB609480017_.jpg" alt="" />
                                <p>Headphones</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1546380_2938463_186x116_1X_en_US._SY116_CB613156637_.jpg" alt="" />
                                <p>Guitars</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1545875_2934703_186x116_1X_en_US._SY116_CB613346538_.jpg" alt="" />
                                <p>Keyboards</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics/XCM_CUTTLE_1468425_2580538_186x116_1X_en_US._SY116_CB609480017_.jpg" alt="" />
                                <p>Microphones</p>
                            </div>

                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">see more curated tech</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Fill your Easter basket with joy</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '275px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Easter/Fuji_Easter_Dash_card_1x_EN._SY304_CB581341381_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop gifts</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card-product">
                        <h5>Get ready to celebrate Easter</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/1H/Easter/GW/QuadCard/EA_2024_AH_119_Gateway_QuadCard_Crafts_186x116_1x._SY116_CB582182024_.jpg" alt="" />
                                <p>Arts and Crafts</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/1H/Easter/GW/QuadCard/EA_2024_AH_118_Gateway_QuadCard_PuzzlesGames_186x116_1x._SY116_CB582182024_.jpg" alt="" />
                                <p>Puzzles and Games</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/1H/Easter/GW/QuadCard/EA_2024_AH_120_Gateway_QuadCard_Books_186x116_1x._SY116_CB582182024_.jpg" alt="" />
                                <p>Books</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/1H/Easter/GW/QuadCard/EA_2024_AH_121_Gateway_QuadCard_Eggs_186x116_1x._SY116_CB582182024_.jpg" alt="" />
                                <p>Easter eggs</p>
                            </div>

                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop all</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Home décor under $50</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '275px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop now</a>
                    </div>

                </div>

            </div>

            <div className="slider-container mt-3 pb-5">
                <h5 className='p-3'>Best Sellers in Books</h5>
                <Slider {...settings}>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/91q6YJUqiAL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/913C+MR3S5L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71ihGxMQEBL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/810bsxh1MmL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81uxN1LVsML._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/91uwJky9oWL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81TmnPZWb0L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81uv7QtqJ0L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/91yskyVPAmL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81VP91WWhSL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81xj1NY02TL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/818PqOiT44L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81RrEEMiOCL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51xKFo2B+RL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81AHTyq2wVL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/917Bc9C1MlL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71EJeWqNPLL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81NsX5gOJkL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71sOjwYbBgL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/611X8GI7hpL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81EmtXw0mrL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81RYRl7DvXL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/812XbpMDovL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81h4xinmqmL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/8136u75+kkL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71X9FMy66NL._AC_SY200_.jpg" alt="" />
                    </div>
                </Slider>
            </div>

            <div className="slider-container mt-5 pb-5">
                <h5 className='p-3'>Best Sellers in Kitchen & Dining</h5>
                <Slider {...settings}>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81NiP8MImEL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51trbmB3icL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61J0e7d0GEL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61POocZniqL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51C2DONw-TL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51SxIyLWwUL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81ls7DEceZL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71ieKqkc+gL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61s3oyEy-0L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61YO+aQShHL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61OxyGRWqVL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71tX1irZ1ML._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/519BZry6UNL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71HUNCsDlaL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81sM+JebdSL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/814WEkpf3-L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81ACs6i1esL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61UFMf2FffL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81RsS2LspoL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71scVzee-zL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81Pzdi+8KWL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81TrRhCeRtL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/719uhUMV3mL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81ckgHGO3WL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/91rXHZZRBZL._AC_SY200_.jpg" alt="" />
                    </div>

                </Slider>
            </div>

            <div className='card-product-container row mt-5'>
                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Player's paradise starts here</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '275px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1546843_2940864_379x304_1X_en_US._SY304_CB613273467_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop video games</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card-product">
                        <h5>Gaming merchandise</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg" alt="" />
                                <p>Apparel</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg" alt="" />
                                <p>Hatss</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg" alt="" />
                                <p>Action figures</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg" alt="" />
                                <p>Mugs</p>
                            </div>

                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">See more</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Upgrade your office furniture</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '275px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_1X_Furnitrure_v2._SY304_CB577544739_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop now</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>A whole new way to work</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '275px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1622892_3373436_379x304_1X_en_US._SY304_CB597161294_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop personal computers</a>
                    </div>
                </div>

            </div>

            <div className="slider-container mt-3 pb-5 " >
                <h5 className='p-3'>Best Sellers in Beauty & Personal Care</h5>
                <Slider {...settings} >
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61NFkX7td8L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51bryY47IFL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71x8eJYN4JL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71PXjjbQCzL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61viR94S9QL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51lEPa776HL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/41tFi33Pi6L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61pIL2maVKL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71XeBzXVE+L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71fizOWwhFL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51iMh82b5UL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/715LkF0QqAL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61zhzjgd2xL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61pp+20Oo0L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71zh8GABKAL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61iB1kaDQhL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71PQla8xf3L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/711BkLez67L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51DbQev1thL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/41xE4gTTZQL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61KedtnoewL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71MQo8pHmBL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71i6g3WhoIL._AC_SY200_.jpg" alt="" />
                    </div>

                </Slider>
            </div>

            <div className="slider-container mt-4 pb-5 w-100" >
                <h5 className='p-3'>Deals Under $25 <span><a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">See more</a></span></h5>
                <Slider {...settings} >

                    <div >
                        <img src="https://m.media-amazon.com/images/I/31yRAqSpavL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 34% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '18px' }}>$ 7.97 <span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $12.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>
                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/51zLSmvBrJL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/41cLoyNtOpL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 31% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.99<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $15.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>


                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/21-3Uq+o0gL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 41% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 20.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $34.49</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/51b7vM6rocL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 25% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '15px', }}>$ 13.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $17.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/41fbufQUn7L._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 20% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 7.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $9.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/41ARxRB1-eL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 39% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 7.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $12.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/316YXLGzyRL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/71fizOWwhFL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/51iMh82b5UL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/715LkF0QqAL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/61zhzjgd2xL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/61pp+20Oo0L._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/71zh8GABKAL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/61iB1kaDQhL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/71PQla8xf3L._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/711BkLez67L._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/51DbQev1thL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/41xE4gTTZQL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/61KedtnoewL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/71MQo8pHmBL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                    <div>
                        <img src="https://m.media-amazon.com/images/I/71i6g3WhoIL._AC_SY200_.jpg" alt="" />
                        <div className="row">
                            <div className="col-md-6"><button className='btn btn-danger ' style={{ fontSize: '10px', marginTop: '10px', marginRight: '0px' }}> 15% off</button></div>
                            <div className="col-md-6" style={{ fontSize: '10px', color: 'red', marginTop: '10px' }}> Limited time deal</div>
                        </div>
                        {/*                         <button className='btn btn-danger ' style={{ fontSize: '10px', marginRight: '5px', marginTop: '10px' }}>34% off </button><span style={{ fontSize: '10px', color: 'red' }}>Limited time deal</span>
 */}                        <p style={{ fontSize: '17px' }}>$ 10.19<span style={{ fontSize: '12px', color: 'grey' }}>List Price:<del> $11.99</del> </span></p>
                        <p style={{ fontSize: '12px' }}>Pantene Miracle Rescue Hair Mask, Inte...</p>

                    </div>

                </Slider>
            </div>


            <div className='card-product-container row m-2 '>
                <div className="col-sm-3">
                    <div className="card-product ">
                        <h5>Warm & welcoming decor</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_Oct_Wreaths_Decor_QuadCard_D_01_186x116._SY116_CB596234042_.jpg" alt="" />
                                <p>Wreaths & garlands</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_HP_Oct_Decor_QuadCard_D_03_186x116._SY116_CB596234042_.jpg" alt="" />
                                <p>Outdoor decor</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_Oct_Pillows_Decor_QuadCard_D_02_186x116._SY116_CB596234042_.jpg" alt="" />
                                <p>Pllows & throws</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_HP_Oct_Decor_QuadCard_D_04_186x116._SY116_CB596234042_.jpg" alt="" />
                                <p>Wall art & images</p>
                            </div>

                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop more fall finds</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Shop activity trackers and <br />smartwatches</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '250px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop now</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Creating business solutions</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '275px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/cc_359_laptop_us_v1._SY304_CB576754001_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">See more software products</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Personal Care under $25</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '275px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v10._SY304_CB573698005_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">See more </a>
                    </div>
                </div>
            </div>

            <div className="slider-container mt-3 pb-5 " >
                <h5 className='p-3'>Most wished for in Movies & TV</h5>
                <Slider {...settings} >
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71Groo63lJL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71JNdvfxj5L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71faTWApPcL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71l9NiyJ0HL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81dcLOrU5YL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/91rKy7qfODL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71CbUtxZPeL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71aNunUKCsL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81QXIa9fFvL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/714sCbJA+xL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81+qRc6JzXL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/719hkDvWtoL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81JeYtWAU2L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71G9scZtapL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/914YOOQVARL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81sfdUGbjhL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81dcLOrU5YL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/91tgKeTw4-L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81rjuxLh2TL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81a1kLBSGrL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/813had2NjiL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/717ax6Q1wGL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71puSyupTEL._AC_SY200_.jpg" alt="" />
                    </div>

                </Slider>
            </div>

            <div className="slider-container mt-3 pb-5 " >
                <h5 className='p-3'>Best Sellers in Computers & Accessories</h5>
                <Slider {...settings} >
                    <div>
                        <img src="https://m.media-amazon.com/images/I/610lABRzuuL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51HbD2W7FtL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71rAlnvFHoL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71nVIiWEcgL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71QPduoKd1L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71p+P8mZ3RL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81OFxhFWmML._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61ZGsavfynL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51NYHYnamhL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61I1c75BKFL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71xUGwGReSL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71G8rdQin3L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51IFiSD+kCL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/613PhfiVnYL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71iMPr0C8KL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51cpWg2Ay7L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/710SEbFmPuL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61TGq9hHOKL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81F99hab1GL._AC_SY200_.jpg" alt="" />
                    </div>


                </Slider>
            </div>

            <div className='card-product-container row m-2'>

                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Laptops for every need</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '250px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/XCM_CUTTLE_1622894_3373440_379x304_1X_en_size1_US._SY304_CB597469214_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Find Your Laptop Here</a>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Deals on shoes</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '250px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v8._SY304_CB573698005_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">See more</a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Gift ideas in Hair Treatment <br /> Masks</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '240px', height: '230px' }} src="https://m.media-amazon.com/images/I/71M1QfLMKzL._AC_SY175_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">See more </a>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Gift ideas inspired by your <br /> shopping history</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '235px' }} src="https://m.media-amazon.com/images/I/51xfB9C0L4L._SY445_SX342_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">See more </a>
                    </div>
                </div>
            </div>

            <div>
                <hr />
                <h5 className='ms-5'>Customers who viewed items in your browsing history also viewed</h5>
                <div className="slider-container1 mt-3 ms-5 me-5 " >



                    <div className="row">
                        <div className="col-md-2">


                            <img src="https://images-na.ssl-images-amazon.com/images/I/81tr699x1XL._AC_UL160_SR160,160_.jpg"  width={'250px'} alt="" />
                            <p className='ps-5 pb-0' >Dog Man: Mothering Heights: A Graphic Novel (10) Hardcover </p>
                            <p className='ps-5 pb-0'><FontAwesomeIcon icon={faChevronRight} /> Dav Pilkey </p>
                           
                                <FontAwesomeIcon className='ps-5' icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />


                          
                            <p className='ps-5'>hard cover</p>
                            <p className='ps-5 pt-0'>$95.00 </p>
                            <p className='ps-5'>$13.38 Shipping</p>
                        </div>

                        <div className="col-md-2">


                            <img src="https://images-na.ssl-images-amazon.com/images/I/91oCUTUmgoL._AC_UL160_SR160,160_.jpg"  width={'250px'} alt="" />
                            <p className='ps-5 pb-0' >Dog Man: Mothering Heights: A Graphic Novel (10) Hardcover </p>
                            <p className='ps-5 pb-0'><FontAwesomeIcon icon={faChevronRight} /> Dav Pilkey </p>
                           
                                <FontAwesomeIcon className='ps-5' icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />


                          
                            <p className='ps-5'>hard cover</p>
                            <p className='ps-5 pt-0'>$95.00 </p>
                            <p className='ps-5'>$13.38 Shipping</p>
                        </div>

                        <div className="col-md-2">


                            <img src="https://images-na.ssl-images-amazon.com/images/I/91xSGOO8MdL._AC_UL160_SR160,160_.jpg"  width={'250px'} alt="" />
                            <p className='ps-5 pb-0' >Dog Man: Mothering Heights: A Graphic Novel (10) Hardcover </p>
                            <p className='ps-5 pb-0'><FontAwesomeIcon icon={faChevronRight} /> Dav Pilkey </p>
                           
                                <FontAwesomeIcon className='ps-5' icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />


                          
                            <p className='ps-5'>hard cover</p>
                            <p className='ps-5 pt-0'>$95.00 </p>
                            <p className='ps-5'>$13.38 Shipping</p>
                        </div>

                        <div className="col-md-2">


                            <img src="https://images-na.ssl-images-amazon.com/images/I/91+of7ka0vL._AC_UL160_SR160,160_.jpg"  width={'250px'} alt="image" />
                            <p className='ps-5 pb-0' >Dog Man: Mothering Heights: A Graphic Novel (10) Hardcover </p>
                            <p className='ps-5' ><FontAwesomeIcon icon={faChevronRight} /> Dav Pilkey </p>
                           
                                <FontAwesomeIcon className='ps-5' icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />


                          
                            <p className='ps-5'>hard cover</p>
                            <p className='ps-5 pt-0'>$95.00 </p>
                            <p className='ps-5'>$13.38 Shipping</p>
                        </div>

                        <div className="col-md-2">


                            <img src="https://images-na.ssl-images-amazon.com/images/I/81GB2LdDomL._AC_UL160_SR160,160_.jpg"  width={'250px'} alt="" />
                            <p className='ps-5 pb-0' >Dog Man: Mothering Heights: A Graphic Novel (10) Hardcover </p>
                            <p className='ps-5 pb-0'><FontAwesomeIcon icon={faChevronRight} /> Dav Pilkey </p>
                           
                                <FontAwesomeIcon className='ps-5' icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />


                          
                            <p className='ps-5'>hard cover</p>
                            <p className='ps-5 pt-0'>$95.00 </p>
                            <p className='ps-5'>$13.38 Shipping</p>
                        </div>

                        <div className="col-md-2">


                            <img src="https://images-na.ssl-images-amazon.com/images/I/91s0P16WAFL._AC_UL160_SR160,160_.jpg"  width={'250px'} alt="" />
                            <p className='ps-5 pb-0' >Dog Man: Mothering Heights: A Graphic Novel (10) Hardcover </p>
                            <p className='ps-5 pb-0'><FontAwesomeIcon icon={faChevronRight} /> Dav Pilkey </p>
                           
                                <FontAwesomeIcon className='ps-5' icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffae3d", }} />


                          
                            <p className='ps-5'>hard cover</p>
                            <p className='ps-5 pt-0'>$95.00 </p>
                            <p className='ps-5'>$13.38 Shipping</p>
                        </div>

                        
                       
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-center align-items-center flex-column '>
                    <p style={{ fontSize: '14px' }}>See personalized recommendations</p>
                    <button className='btn btn-warning  ' style={{ paddingLeft: '100px', paddingRight: '100px' }}>Sign in</button>
                    <p style={{ fontSize: '12px', paddingTop: '10px' }}>New Customer <a href="">Start here</a></p>

                </div>
                <hr />
            </div>


        </div >



    )
}

export default Products