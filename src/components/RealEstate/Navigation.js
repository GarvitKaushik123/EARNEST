import { ethers } from 'ethers';
import logo from './logo.jpeg';

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
            <ul className='nav__links'>
                <li><a href="#" style={{fontSize: "20px"}}>Buy</a></li>
                <li><a href="#" style={{fontSize: "20px"}}>Sell</a></li>
                <li><a href="#" style={{fontSize: "20px"}}>Rent</a></li>
            </ul>

            <div className='nav__brand'>
                <img className='logo' src={logo} alt="Logo" />
                <h1>Earnest</h1>
            </div>

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
    );
}

export default Navigation;