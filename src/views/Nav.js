import './Nav.scss'
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <>
            <div className="topnav">
                {/* <a className="active" href="#home">Home</a>
                <a href="#news">TimerApps</a>
                <a href="#contact">Todo Apps</a>
                <a href="#about">About</a> */}
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/countdown'>TimerApps</NavLink>
                <NavLink to='/todo'>Todo Apps</NavLink>
                {/* <NavLink>About</NavLink> */}



            </div>
        </>

    )

}

export default Nav;