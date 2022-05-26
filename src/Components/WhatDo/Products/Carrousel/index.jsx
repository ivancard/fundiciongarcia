import { useRef } from 'react';
import { CarrouselItem } from './CarrouselItem';
import products from '../../../../assets/img/products';
import './carrousel.scss';

export const Carrousel = () => {
    const carrousel = useRef(null);

    const handleLeftClick = () => {
        // carrousel.current.scrollLeft -= 285;
        carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
    };
    const handleRightClick = () => {
        carrousel.current.scrollLeft += carrousel.current.offsetWidth;
        // carrousel.current.scrollLeft += 285;
    };
    return (
        <div className='carrousel'>
            <button
                onClick={handleLeftClick}
                className='product-icon-row row-right'
                style={{ border: 'none' }}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='40'
                    height='40'
                    fill='currentColor'
                    className='bi bi-arrow-left-circle-fill product-icon-row row-right'
                    viewBox='0 0 16 16'>
                    <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z' />
                </svg>
            </button>

            <div className='carrousel-container' ref={carrousel}>
                <CarrouselItem img={products.prod1} description='hoa' />
                <CarrouselItem img={products.prod2} description='hoa' />
                <CarrouselItem img={products.prod3} description='hoa' />
                <CarrouselItem img={products.prod4} description='hoa' />
                <CarrouselItem img={products.prod2} description='hoa' />
                <CarrouselItem img={products.prod1} description='hoa' />
                <CarrouselItem img={products.prod4} description='hoa' />
                <CarrouselItem img={products.prod3} description='hoa' />
                <CarrouselItem img={products.prod4} description='hoa' />
                <CarrouselItem img={products.prod2} description='hoa' />
                <CarrouselItem img={products.prod3} description='hoa' />
                <CarrouselItem img={products.prod1} description='hoa' />
            </div>
            <button
                onClick={handleRightClick}
                className='product-icon-row row-right'
                style={{ transform: 'rotate(180deg)', border: 'none' }}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='40'
                    height='40'
                    fill='currentColor'
                    className='bi bi-arrow-left-circle-fill product-icon-row row-right'
                    viewBox='0 0 16 16'>
                    <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z' />
                </svg>
            </button>
        </div>
    );
};
