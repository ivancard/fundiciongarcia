import './footer.scss';
export const Footer = () => {
    return (
        <>
            <section className='pre-footer-container'>
                <div className='links'>
                    <nav>
                        <ul>
                            <li>
                                <a href='#start'>Inicio</a>
                            </li>
                            <li>
                                <a href='#wwd'>¿Que hacemos?</a>
                            </li>
                            <li>
                                <a href='#products'>Productos</a>
                            </li>
                            <li>
                                <a href='#contact'>Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* <div className='map'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.524881847848!2d-58.4241749417098!3d-34.67869348937937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccc7b562d81cb%3A0x7d4723424af99161!2sViamonte%203354%2C%20B1824LMO%20Valent%C3%ADn%20Alsina%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1653518830816!5m2!1ses!2sar'
                        width='600'
                        className='map-iframe'
                        height='450'
                        style={{ border: 0 }}
                        allowFullScreen=''
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'></iframe>
                </div> */}
            </section>
            <footer>
                Copyright 2022 © Fundicion Garcia | Todos los derechos
                reservados.
            </footer>
        </>
    );
};
