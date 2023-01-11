import { useNavigate } from "react-router-dom"


function Header() {

    let navigate = useNavigate();

    return(
        <nav className="navbar navbar-expand-md" id="header">
            <div className="container">
                <img src="/img/globe2.svg" alt="logo" className='mr-5 pr-5 navbar-brand bi'></img>
                <button className="navbar-toggler bi" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav nav-pills">
                        <li className="nav-item">
                            <button 
                                className="nav-link text-light">About Me
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="nav-link text-light">Blog Posts
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                onClick={() => {navigate('/projects')}}
                                className="nav-link text-light">Portfolio
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="nav-link text-light">Resume
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                onClick={() => {navigate('/contact')}}
                                className="nav-link text-light">Contact Me
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header