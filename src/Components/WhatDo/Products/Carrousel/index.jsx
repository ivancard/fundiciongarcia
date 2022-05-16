import { CarrouselItem } from './CarrouselItem';
import image1 from '../../../../assets/img/product-1.jpg';

import './carrousel.scss';

export const Carrousel = () => {
    return (
        <div className='carrousel'>
            <div className='product-icon-row row-right'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='40'
                    height='40'
                    fill='currentColor'
                    className='bi bi-arrow-left-circle-fill product-icon-row row-right'
                    viewBox='0 0 16 16'>
                    <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z' />
                </svg>
            </div>

            <div className='carrousel-container'>
                <CarrouselItem img={image1} description='hoa' />
                <CarrouselItem img={image1} description='hoa' />
                <CarrouselItem img={image1} description='hoa' />
                <CarrouselItem img={image1} description='hoa' />
                <CarrouselItem img={image1} description='hoa' />
                <CarrouselItem img={image1} description='hoa' />
                <CarrouselItem img={image1} description='hoa' />
                <CarrouselItem img={image1} description='hoa' />
                <CarrouselItem img={image1} description='hoa' />
                <CarrouselItem img={image1} description='hoa' />
                <CarrouselItem img={image1} description='hoa' />
                <CarrouselItem img={image1} description='hoa' />
            </div>
            <div
                className='product-icon-row row-right'
                style={{ transform: 'rotate(180deg)' }}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='40'
                    height='40'
                    fill='currentColor'
                    className='bi bi-arrow-left-circle-fill product-icon-row row-right'
                    viewBox='0 0 16 16'>
                    <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z' />
                </svg>
            </div>
        </div>
    );
};