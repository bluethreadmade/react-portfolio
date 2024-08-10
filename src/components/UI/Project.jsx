const project = [
    {
        title: 'Craft Corner',
        description: '',
        image: '/assets/craftcorner.PNG',
        githubLink: '',
        deployedLink: '',
    },
    {
        title: 'AppTrack',
        description: `This application was created for busy job-hunters who want a centralized place to track what jobs they've applied to, the ongoing status of those applications, and when any interviews are scheduled.`,
        image: '',
        githubLink: 'https://github.com/bluethreadmade/job-app-tracker',
        deployedLink: 'https://job-app-tracker-boic.onrender.com/',
    },
    {
        title: 'Weather Dashboard',
        description: '',
        image: '',
        githubLink: '',
        deployedLink: '',
    },
    {
        title: 'README Generator',
        description: '',
        image: '',
        githubLink: '',
        deployedLink: '',
    },
    {
        title: 'Dad Dinner',
        description: '',
        image: '',
        githubLink: '',
        deployedLink: '',
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
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
            {project.map((item) => (
                <div class="max-w-sm overflow-hidden rounded shadow-lg">
                    <div class="relative">
                        <img
                            class="w-full"
                            src={item.image}
                            alt="Sunset in the mountains"
                        />
                        <div class="absolute inset-y-0 right-0 flex flex-col justify-center space-y-2 bg-white bg-opacity-50 p-2 hover:bg-opacity-100">
                            <svg
                                class="h-6 w-12 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                />
                            </svg>
                            <svg
                                class="h-6 w-12 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                />
                            </svg>
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="mb-2 text-xl font-bold">{item.title}</div>
                        <p class="text-base text-gray-700">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
