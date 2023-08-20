import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navigator'>
            <NavLink className='navigator_link' to='/'>Home</NavLink>
            <NavLink className='navigator_link' to='/movies'>Movies</NavLink>
        </nav>
    )
}