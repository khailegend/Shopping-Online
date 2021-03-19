import React, { Component } from 'react';
import './hotShose.scss';
import Button from '@material-ui/core/Button';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotProduct from '../../../assets/images/product/hotproduct.webp'
import HotProduct2 from '../../../assets/images/product/hotproduct2.webp'
import HotProduct3 from '../../../assets/images/product/hotproduct3.webp'
import HotProduct4 from '../../../assets/images/product/hotproduct4.webp'
import HotProduct5 from '../../../assets/images/product/hotproduct5.webp'
import LogoProduct from '../../../assets/images/hot-logo.png'

class hotShose extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        return (
            <div className="hotProducts">
                <div className="title">
                    <span>
                        <WhatshotIcon className="icon" /> Giày Hot
                    </span>
                </div>

                <div className="product">
                    <Slider {...settings} className="slider-product">
                        <Card className="cardProduct">
                            <img src={LogoProduct} className="logoCard"></img>
                            <CardActionArea>
                                <CardMedia
                                    className="cardMedia"
                                    image={HotProduct}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    Giày Hunter X
                                </CardContent>
                            </CardActionArea>
                            <div>
                                <small className="shoseSize" >+5 Size</small>
                                <div className="listSize">
                                    <input type="radio" name="size" />39
                                    <input type="radio" name="size" />40
                                    <input type="radio" name="size" />41
                                    <input type="radio" name="size" />42
                                    <input type="radio" name="size" />43
                                </div>
                            </div>
                            <span className='price'>999.000đ</span>
                            <CardActions>
                                <Button className="btnBuy" color="primary">
                                    Mua Hàng
                                </Button>
                            </CardActions>
                        </Card>

                        <Card className="cardProduct">
                            <img src={LogoProduct} className="logoCard"></img>
                            <CardActionArea>
                                <CardMedia
                                    className="cardMedia"
                                    image={HotProduct2}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    Giày Hunter X
                                    </CardContent>
                            </CardActionArea>
                            <div>
                                <small className="shoseSize" >+5 Size</small>
                                <div className="listSize">
                                    <input type="radio" name="size" />39
                                    <input type="radio" name="size" />40
                                    <input type="radio" name="size" />41
                                    <input type="radio" name="size" />42
                                    <input type="radio" name="size" />43
                                </div>
                            </div>
                            <span className='price'>999.000đ</span>
                            <CardActions>
                                <Button className="btnBuy" color="primary">
                                    Mua Hàng
                                </Button>
                            </CardActions>
                        </Card>

                        <Card className="cardProduct">
                            <img src={LogoProduct} className="logoCard"></img>
                            <CardActionArea>
                                <CardMedia
                                    className="cardMedia"
                                    image={HotProduct3}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    Giày Hunter X
                                    </CardContent>
                            </CardActionArea>
                            <div>
                                <small className="shoseSize" >+5 Size</small>
                                <div className="listSize">
                                    <input type="radio" name="size" />39
                                    <input type="radio" name="size" />40
                                    <input type="radio" name="size" />41
                                    <input type="radio" name="size" />42
                                    <input type="radio" name="size" />43
                                </div>
                            </div>
                            <span className='price'>999.000đ</span>
                            <CardActions>
                                <Button className="btnBuy" color="primary">
                                    Mua Hàng
                                </Button>
                            </CardActions>
                        </Card>

                        <Card className="cardProduct">
                            <img src={LogoProduct} className="logoCard"></img>
                            <CardActionArea>
                                <CardMedia
                                    className="cardMedia"
                                    image={HotProduct4}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    Giày Hunter X
                                    </CardContent>
                            </CardActionArea>
                            <div>
                                <small className="shoseSize" >+5 Size</small>
                                <div className="listSize">
                                    <input type="radio" name="size" />39
                                    <input type="radio" name="size" />40
                                    <input type="radio" name="size" />41
                                    <input type="radio" name="size" />42
                                    <input type="radio" name="size" />43
                                </div>
                            </div>
                            <span className='price'>999.000đ</span>
                            <CardActions>
                                <Button className="btnBuy" color="primary">
                                    Mua Hàng
                                </Button>
                            </CardActions>
                        </Card>

                        <Card className="cardProduct">
                            <img src={LogoProduct} className="logoCard"></img>
                            <CardActionArea>
                                <CardMedia
                                    className="cardMedia"
                                    image={HotProduct5}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    Giày Hunter X
                                    </CardContent>
                            </CardActionArea>
                            <div>
                                <small className="shoseSize" >+5 Size</small>
                                <div className="listSize">
                                    <input type="radio" name="size" />39
                                    <input type="radio" name="size" />40
                                    <input type="radio" name="size" />41
                                    <input type="radio" name="size" />42
                                    <input type="radio" name="size" />43
                                </div>
                            </div>
                            <span className='price'>999.000đ</span>
                            <CardActions>
                                <Button className="btnBuy" color="primary">
                                    Mua Hàng
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className="cardProduct">
                            <img src={LogoProduct} className="logoCard"></img>
                            <CardActionArea>
                                <CardMedia
                                    className="cardMedia"
                                    image={HotProduct}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    Giày Hunter X
                                </CardContent>
                            </CardActionArea>
                            <div>
                                <small className="shoseSize" >+5 Size</small>
                                <div className="listSize">
                                    <input type="radio" name="size" />39
                                    <input type="radio" name="size" />40
                                    <input type="radio" name="size" />41
                                    <input type="radio" name="size" />42
                                    <input type="radio" name="size" />43
                                </div>
                            </div>
                            <span className='price'>999.000đ</span>
                            <CardActions>
                                <Button className="btnBuy" color="primary">
                                    Mua Hàng
                                </Button>
                            </CardActions>
                        </Card>
                    </Slider>
                </div>
                <Button color='primary' variant="contained">Xem Thêm</Button>
            </div>
        );
    }
}

export default hotShose;
