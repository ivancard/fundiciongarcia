import './carrousel-item.scss';
export const CarrouselItem = ({ img, description }) => {
    return (
        <div className='carrousel-item-container'>
            <img src={img} alt={description} />
        </div>
    );
};
