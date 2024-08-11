// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom'

const footerLinks = [
    {
        name: 'Medium',
        link: 'https://medium.com/@meganelise_23551',
        image: '/assets/Medium-Logo-Black.png',
    },
    {
        name: 'Github',
        link: 'https://github.com/bluethreadmade',
        image: '/assets/GitHub_Logo.png',
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/megan-mcneill/',
        image: '/assets/LinkedIn-Blue.png',
    },
]

export default function FooterLinks() {
    // The Footerlinks UI component will render each of the Link elements in the links prop
    return (
        <ul className="flex justify-center space-x-6">
            {footerLinks.map((item) => (
                <li key={item.name} className="flex items-center">
                    <Link to={item.link}>
                        <img className="h-8 object-contain" src={item.image}></img>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
