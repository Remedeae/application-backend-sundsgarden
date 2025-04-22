import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <div>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/motivation" className="link">Motivation</Link></li>
                        <div className="about">
                            <li>About</li>
                            <div className="about__dropdown">
                                <li><Link to="/about-applicant" className="link">About Applicant</Link></li>
                                <li><Link to="/about-site" className="link">About This Site</Link></li>
                            </div>
                        </div>
                    </div>
                    <a href="https://github.com/Remedeae"><i className="fa-brands fa-github"></i></a>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar