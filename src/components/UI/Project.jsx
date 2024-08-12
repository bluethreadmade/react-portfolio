const project = [
    {
        title: 'Craft Corner',
        description: '',
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
                    <div className="relative h-64 bg-gray-200 lg:h-80">
                        <img
                            className="h-full w-full object-cover"
                            src={item.image}
                            alt="Sunset in the mountains"
                        />
                    </div>
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="mb-2 text-xl font-bold">
                                    {item.title}
                                </div>
                                <p className="text-base text-gray-700">
                                    {item.description}
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <a href={item.deployedLink}>
                                    <img
                                        className="h-12 w-12"
                                        src="/assets/github-mark.png"
                                    />
                                </a>
                                <a href={item.githubLink}>
                                    <svg
                                        className="h-6 w-6 text-indigo-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
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
