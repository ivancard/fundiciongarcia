import { CardProcess } from './CardProcess';
import './what-do.scss';

export const WhatDo = () => {
    return (
        <section className='wwd-container' id='wwd'>
            <div>
                <h2 className='what-do-title'>¿Qué hacemos?</h2>
                <p className='what-do-p'>
                    Hacemos piezas de aluminio a través de tres procesos
                </p>
            </div>
            <CardProcess title='En tierra' />
            <CardProcess title='En arena' />
            <CardProcess title='Por coquilla' />
        </section>
    );
};
