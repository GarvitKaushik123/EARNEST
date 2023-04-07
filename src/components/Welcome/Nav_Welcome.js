import logo from './logo.jpeg';
import './Nav_Welcome.css'

const Nav_Welcome = () => {
    return (
        <nav className='nav__welcome_main'>
            <div className='nav__welcome'>
                <img className='company_image' src={logo} alt="Logo" />
                <h1>Earnest</h1>
            </div>
        </nav>
    );
} 

export default Nav_Welcome;