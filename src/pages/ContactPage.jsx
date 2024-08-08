import { useState } from 'react';

// This is a static page with a contact form
export default function ContactPage() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ messageActive, setMessageActive ] = useState(true);
    const [ isEmailValid, setIsEmailValid ] = useState();

    return (
        <div>
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Contact Me!
                </h2>
            </div>
            <form
                action="#"
                method=""
                className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                id="name"
                                name="name"
                                type="text"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                value={email}
                                onChange={e => {setEmail(e.target.value); setIsEmailValid(e.target.validity.valid)}}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {!isEmailValid && <p className="text-red-500 text-sm">Enter A Valid Email</p>}

                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                onMouseEnter={ () => setMessageActive(true)}
                                onMouseLeave={ () => setMessageActive(false)}
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                            {!messageActive && !message && <p className="text-red-500 text-sm">Message Required</p>}
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}
