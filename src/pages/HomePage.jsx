// This is a static page - an "About Me" section
export default function HomePage() {
    return (
        <div className="bg-background">
        <div className="mx-auto max-w-7xl flex items-center space-x-4 lg:flex-row flex-col bg-background">
            <img src="/assets/headshot.jpg" className="mb-12 w-32 lg:w-64 rounded-full object-cover"></img>
            <p className="text-lg font-medium text-gray-800">
                ABOUT ABOUT ABOUT Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellendus tenetur maiores, dolor iusto
                dolorum ullam, natus deleniti blanditiis impedit suscipit sed
                magnam alias in, repellat expedita hic explicabo architecto
                soluta. About us Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Velit voluptate exercitationem quaerat
                pariatur mollitia, excepturi, voluptatem eveniet a dolor nobis
                ex veniam totam nostrum temporibus ad omnis nam rerum eligendi.
            </p>
        </div>
        </div>
    )
}
