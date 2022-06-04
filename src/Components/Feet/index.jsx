import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';

import './feet.scss';

import patas from '../../data/dataPatas';
import { useState, useRef } from 'react';

export const Feet = () => {
    return (
        <div className='feet-container'>
            <h3>Patas de sillones</h3>
            <div className='card-patas-container'>
                <div className='over-patas'></div>
                <Swiper
                    modules={[Scrollbar]}
                    spaceBetween={100}
                    slidesPerView={3}
                    loop={true}>
                    {patas.map(({ id, title, img }) => (
                        <SwiperSlide key={id}>
                            <div className='card-pata'>
                                <img
                                    className='img-pata'
                                    src={img}
                                    alt={title}
                                />
                                <span className='pata-text'>{title}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
