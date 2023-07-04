import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    margin: 0,
    height: '650px',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const CarouselHome = () => {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            <div>
                <h3 style={contentStyle}>
                    <img className='w-100' src="./image/nike.jpeg" alt="..." />
                </h3>
            </div>  
            <div>
                <h3 style={contentStyle}>
                    <img className='w-100' src="./image/nike11.jpg" alt="..." />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img className='w-100 ' height={700} src="./image/adidas.jpeg" alt="..." />
                </h3>
            </div>
        </Carousel>
    )
}

export default CarouselHome