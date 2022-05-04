import Navigation from './components/Navigation';
import Logo from './components/Logo';
import './App.css';
import Tilt from 'react-tilt'

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner"> 👽 </div>
            </Tilt>

        </div>
    )
}

export default Logo;