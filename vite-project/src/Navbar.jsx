

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <div>
                    <h2>Home</h2>
                    <div className="about">
                        <h2>About</h2>
                        <div className="about__dropdown">
                            <h3>About the Applicant</h3>
                            <h3>About the Page</h3>
                        </div>
                    </div>
                </div>
                <h2><i class="fa-brands fa-github"></i></h2>
            </nav>
        </div>
    );
};

export default Navbar