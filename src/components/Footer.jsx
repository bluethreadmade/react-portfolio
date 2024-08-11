import FooterLinks from './UI/FooterLinks'

export default function Footer() {
    return (
        <footer className="bg-background">
            <div className="container-fluid">
                    <ul className="navbar-nav mb-lg-0 mb-2 me-auto">
                        <FooterLinks />
                    </ul>
            </div>
        </footer>
    )
}
