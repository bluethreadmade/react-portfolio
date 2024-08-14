import ResumeButton from '../components/UI/ResumeButton'

const skills = [
    { name: 'HTML', imageSrc: '/assets/images/skill-logos/HTML5_Logo_512.png' },
    {
        name: 'SQL',
        imageSrc:
            '/assets/images/skill-logos/512px-Sql_data_base_with_logo.png',
    },
    {
        name: 'JavaScript',
        imageSrc: '/assets/images/skill-logos/Javascript_badge.svg',
    },
    {
        name: 'Bootstrap',
        imageSrc: '/assets/images/skill-logos/bootstrap-logo.svg',
    },
    { name: 'React', imageSrc: '/assets/images/skill-logos/react-logo.svg' },
    {
        name: 'Express.js',
        imageSrc: '/assets/images/skill-logos/Expressjs.png',
    },
    {
        name: 'MongoDB',
        imageSrc: '/assets/images/skill-logos/MongoDB_SlateBlue.png',
    },
    { name: 'NPM', imageSrc: '/assets/images/skill-logos/Npm-logo.svg' },
    {
        name: 'JQuery',
        imageSrc: '/assets/images/skill-logos/JQuery-Logo.svg.png',
    },
    { name: 'NodeJS', imageSrc: '/assets/images/skill-logos/jsIconGreen.svg' },
    { name: 'Vite', imageSrc: '/assets/images/skill-logos/Vitejs-logo.svg' },
    { name: 'Git', imageSrc: '/assets/images/skill-logos/Git-Logo-2Color.png' },
    {
        name: 'Tailwind',
        imageSrc: '/assets/images/skill-logos/tailwindcss-logotype.svg',
    },
    { name: 'Scrum Master', imageSrc: '/assets/images/skill-logos/SCRUM.png' },
]

export default function ResumePage() {
    return (
        <div className="bg-background flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32 py-10">
            <div className="flex flex-col items-center order-last">
                <h2 className="text-accent text-3xl font-bold">Technologies</h2>
                <ul className="bg-background py-10">
                    {skills.map((skill, index) => (
                        <li
                            key={index}
                            className="flex w-48 flex-col items-center p-2 shadow-lg"
                        >
                            <p className="text-accent text-xl font-bold">
                                {skill.name}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ResumeButton />
            </div>
        </div>
    )
}
