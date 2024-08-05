export default function Footer({ links }) {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
                <div
                    className="navbar-collapse collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mb-lg-0 mb-2 me-auto">
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
