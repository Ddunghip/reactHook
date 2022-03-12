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
                <NavLink activeClassName='active1' to='/' exact>Home</NavLink>
                <NavLink activeClassName='active1' to='/countdown'>TimerApps</NavLink>
                <NavLink activeClassName='active1' to='/todo'>Todo Apps</NavLink>
                <NavLink activeClassName='active1' to='/blog'>Blog Apps</NavLink>

                {/* <NavLink>About</NavLink> */}



            </div>
        </>

    )

}

export default Nav;