import Navigation from './UI/Navigation'

export default function Header() {
    return (
        <header className="bg-white">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <p className="-m-1.5 p-1.5">Megan McNeill</p>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                        <Navigation />
                </div>
            </nav>
        </header>
    )
}
