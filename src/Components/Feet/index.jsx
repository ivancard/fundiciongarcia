import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';

import './feet.scss';

import patas from '../../data/dataPatas';
import { useState, useRef } from 'react';

export const Feet = () => {
    // const [pataArr, setpataArr] = useState(patas);
    // const pataHtml = useRef(null);

    // const handleRight = (e) => {
    //     e.preventDefault();
    //     pataHtml.current.scrollLeft += pataHtml.current.offsetWidth / 5;
    //     // const patas = pataHtml.current.childNodes;
    //     // patas.forEach((element) => {
    //     //     if (!element.classList.contains('pata-right')) {
    //     //         element.classList.add('pata-right');
    //     //     } else {
    //     //         element.classList.remove('pata-right');
    //     //     }
    //     // });
    //     const auxPataArr = [...pataArr];
    //     auxPataArr.push(auxPataArr.shift());
    //     setpataArr(auxPataArr);
    // };

    // const handleLeft = (e) => {
    //     pataHtml.current.scrollLeft -= 50;
    //     // const auxPataArr = [...pataArr];
    //     // auxPataArr.unshift(auxPataArr.pop());
    //     // setpataArr(auxPataArr);
    // };

    return (
        <div className='feet-container'>
            <h3>Patas de sillones</h3>
            <div className='card-patas-container'>
                <Swiper
                    modules={[Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {/* <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide> */}
                    {patas.map(({ id, title, img }) => (
                        <SwiperSlide key={id}>
                            <div className='card-pata'>
                                <img
                                    className='img-pata'
                                    src={img}
                                    alt={title}
                                />
                                <span className='pata'>{title}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* <div className='card-pata'>
                    <img src={pata1} alt='pata1' />
                    <h5>psata1</h5>
                </div> */}
            </div>
        </div>
    );
};
