import { Carrousel } from './Carrousel';

import './products.scss';

export const Products = () => {
    return (
        <div className='products-container' id='products'>
            <h3>Productos</h3>
            <Carrousel />
        </div>
    );
};
