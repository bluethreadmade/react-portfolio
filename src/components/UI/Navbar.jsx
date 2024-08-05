export default function Nav({ links }) {
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
                    <ul className="nav">{links.map((link) => link)}</ul>
                </div>
            </nav>
        </header>
    )
}
