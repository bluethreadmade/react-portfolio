const project = [
    {
        title: 'Craft Corner',
        description: `This application was created for new crafters looking for a way in and for passionate hobbyists looking to learn, grow and connect.`,
        image: '/assets/craftcorner.PNG',
        githubLink: 'https://github.com/kaitlynmooney/craft-corner',
        deployedLink: 'http://craft-corner.onrender.com/',
    },
    {
        title: 'AppTrack',
        description: `This application was created for busy job-hunters who want a centralized place to track what jobs they've applied to, the ongoing status of those applications, and when any interviews are scheduled.`,
        image: '/assets/apptrack.png',
        githubLink: 'https://github.com/bluethreadmade/job-app-tracker',
        deployedLink: 'https://job-app-tracker-boic.onrender.com/',
    },
    {
        title: 'Weather Dashboard',
        description:
            'This is a simple application using javascript, jquery, html, css and bootstrap to pull from the openweather api and display the current weather and the 5 day forecast for a city. The search history is also displayed.',
        image: '/assets/weather.png',
        githubLink: 'https://github.com/bluethreadmade/weather-dashboard',
        deployedLink: 'https://bluethreadmade.github.io/weather-dashboard/',
    },
    {
        title: 'README Generator',
        description:
            'This is a command-line application that prompts the user for input using the inquirer package. The user input is used to fill a markdown file template.',
        image: '/assets/readme.PNG',
        githubLink: 'https://github.com/bluethreadmade/README-generator',
        deployedLink:
            'https://drive.google.com/file/d/19bVGJE_fgBrTlYVI0GxK5dFw36oWCkke/preview',
    },
    {
        title: 'Dad Dinner',
        description: `We've created an application that enhances the lives of busy parents everywhere and takes the stress out of the long asked question "What's for dinner?". Just search for your main ingredient on the homepage and choose to randomize it if you're feeling like an adventure.`,
        image: '/assets/dinner.PNG',
        githubLink:
            'https://github.com/adammathis05/dad-dinner?tab=readme-ov-file',
        deployedLink: 'https://adammathis05.github.io/dad-dinner/',
    },
    {
        title: 'Tech Blog',
        description: `My Tech Blog follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. I also use the dotenv package for environment variables, the bcrypt package to hash passwords, and the express-sessionand connect-session-sequelize packages to add authentication.`,
        image: '/assets/techblog.PNG',
        githubLink: 'https://github.com/bluethreadmade/tech-blog',
        deployedLink: 'https://tech-blog-275r.onrender.com/',
    },
]

export default function Project() {
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            {project.map((item) => (
                <div
                    key={item.title}
                    className="max-w-xl gap-x-2 overflow-hidden rounded shadow-lg"
                >
                    <div className="relative flex h-64 items-center justify-center bg-gray-200 lg:h-80">
                        <img
                            className="max-h-full max-w-full"
                            src={item.image}
                        />
                    </div>
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between space-x-4">
                            <div>
                                <div className="mb-2 text-xl font-bold">
                                    {item.title}
                                </div>
                                <p className="text-base text-gray-700">
                                    {item.description}
                                </p>
                            </div>
                            <div className="flex flex-shrink-0 flex-col space-y-2">
                                <a href={item.githubLink}>
                                    <img
                                        className="h-12 w-12"
                                        src="/assets/github-mark.png"
                                    />
                                </a>
                                <a href={item.deployedLink}>
                                    <svg
                                        className="h-12 w-12 text-indigo-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        class="size-10"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
