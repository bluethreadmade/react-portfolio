import Navigation from './UI/Navigation'

export default function Header() {
    return (
        <header className="bg-background pt-4 lg:pb-8">
            <nav
                aria-label="Global"
                className="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 pb-0 lg:px-8 lg:flex-row "
            >
                <div className="flex lg:flex-1 justify-start">
                    <p className="-m-1.5 p-1.5 font-bold text-3xl lg:text-4xl text-gunmetal">Megan McNeill</p>
                </div>

                <div className="m-2 lg:flex">
                        <Navigation />
                </div>
            </nav>
        </header>
    )
}
