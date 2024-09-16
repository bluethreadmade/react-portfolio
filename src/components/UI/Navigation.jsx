// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const navigation = [
    { name: 'About', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    // { name: 'Contact', href: '/contact' },
    { name: 'Resume', href: '/resume' },
]

export default function Nagivation() {
    return (
        <ul className="flex space-x-1 lg:space-x-6">
            {navigation.map((item) => (
                <li key={item.name}>
                <NavLink
                    to={item.href}
                    className={({ isActive }) =>{
                        return 'px-2 py-2.5 hover:bg-cprimary-300 hover:text-csecond-100 rounded-md lg:text-2xl text-l font-bold '+ (isActive? 'text-gunmetal': 'text-accent')
                        }}
                >
                    {item.name}
                </NavLink>
                </li>
            ))}
        </ul>
    )
}
