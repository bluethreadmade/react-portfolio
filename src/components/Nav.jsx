// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Navbar from './UI/Navbar'

export default function Nav() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <Navbar
            links={[
                <NavLink
                    to="/"
                    key={1}
                    className={({ isActive }) =>
                        [
                            'px-2 py-2.5',
                            'hover:bg-cprimary-300 hover:text-csecond-100',
                            'rounded-md transition',
                            isActive ? 'bg-red-500' : 'bg-black-500',
                        ].join(' ')
                    }
                >
                    About Me
                </NavLink>,
                <NavLink
                    to="/portfolio"
                    key={2}
                    className={({ isActive }) =>
                        [
                            'px-2 py-2.5',
                            'hover:bg-cprimary-300 hover:text-csecond-100',
                            'rounded-md transition',
                            isActive ? 'bg-red-500' : 'bg-black-500',
                        ].join(' ')
                    }
                >
                    Portfolio
                </NavLink>,
                <NavLink
                    to="/resume"
                    key={2}
                    className={({ isActive }) =>
                        [
                            'px-2 py-2.5',
                            'hover:bg-cprimary-300 hover:text-csecond-100',
                            'rounded-md transition',
                            isActive ? 'bg-red-500' : 'bg-black-500',
                        ].join(' ')
                    }
                >
                    Resume
                </NavLink>,
                <NavLink
                    to="/contact"
                    key={2}
                    className={({ isActive }) =>
                        [
                            'px-2 py-2.5',
                            'hover:bg-cprimary-300 hover:text-csecond-100',
                            'rounded-md transition',
                            isActive ? 'bg-red-500' : 'bg-black-500',
                        ].join(' ')
                    }
                >
                    Contact
                </NavLink>,
            ]}
        />
    )
}
