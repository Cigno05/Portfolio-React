
import swanLogo from '/img/swan.png'

function Navbar() {

    return (
        <>
            <nav id="navbar" className="my-navbar">
                <div className="container-fluid d-flex justify-content-between">
                    <img src={swanLogo} alt="Logo" className="logo" />
                    
                    <div className="navbar-link d-flex align-items-center">
                        <ul className="navbar-list d-flex mb-0">
                            <li className="navbar-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#">Link</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>

                    <img src={swanLogo} alt="Logo" className="logo" />
                </div>
            </nav>

        </>
    )
}


export default Navbar