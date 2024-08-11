import FooterLinks from './UI/FooterLinks'

export default function Footer() {
    return (
        <footer className="bg-background h-24 flex items-center justify-center">
            <div className="container-fluid">
                <ul className="navbar-nav my-2 me-auto">
                    <FooterLinks />
                </ul>
            </div>
        </footer>
    )
}
