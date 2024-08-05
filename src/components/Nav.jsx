// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Navbar from './UI/Navbar'

const navigation = [
    { name: 'About', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resume', href: '/resume' },
];

export default function Nav() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <Navbar
            links={navigation.map((item) => ( 
                <NavLink
                    to={item.href}
                    key={item.name}
                    className={({ isActive }) =>
                        [
                            'px-2 py-2.5',
                            'hover:bg-cprimary-300 hover:text-csecond-100',
                            'rounded-md transition',
                            isActive ? 'bg-red-500' : 'bg-black-500',
                        ].join(' ')
                    }
                >
                    {item.name}
                </NavLink>
                ))}
                
        />
    )
}
