import { CardProcess } from './CardProcess';
import './what-do.scss';

export const WhatDo = () => {
    return (
        <section className='wwd-container'>
            <div>
                <h2 className='what-do-title'>¿Qué hacemos?</h2>
                <p className='what-do-p'>
                    Hacemos piezas de aluminio a través de tres procesos
                </p>
            </div>
            <CardProcess title='En tierra' body='Usando tierra como molde' />
            <CardProcess title='En arena' body='Usando arena como molde' />
            <CardProcess
                title='Por coquilla'
                body='Usando máquina de coquilla'
            />
        </section>
    );
};
