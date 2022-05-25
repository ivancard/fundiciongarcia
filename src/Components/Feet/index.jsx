import pata1 from '../../assets/img/pata-1-low.jpg';
import './feet.scss';
export const Feet = () => {
    return (
        <div className='feet-container'>
            <h3>Patas de sillones</h3>
            <div className='card-patas-container'>
                <div className='card-pata'>
                    <img src={pata1} alt='pata1' />
                    <h5>pata1</h5>
                </div>
            </div>
        </div>
    );
};
