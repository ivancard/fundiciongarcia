import './header-page.scss';
import logo from '../../assets/img/logo.jpg';
export const HeaderPage = () => {
    return (
        <header>
            <div className='header-div' id='start'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='50'
                    height='50'
                    fill='currentColor'
                    className='bi bi-list header-menu'
                    viewBox='0 0 16 16'>
                    <path
                        fillRule='evenodd'
                        d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                    />
                </svg>

                <img src={logo} alt='logo' className='header-logo' />
                <div className='logo-text'>
                    <h1>Fundición Garcia</h1>
                    <h5>fundiciones de aluminio</h5>
                </div>
                <p>
                    Somos una empresa de fundición de aluminio con mas de 20
                    años de experiencia.
                </p>
                <button>Contactanos</button>
            </div>
        </header>
    );
};
