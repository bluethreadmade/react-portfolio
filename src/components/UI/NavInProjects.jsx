import React from 'react';

export default function NavInProjects({ githubLink, deployedLink }) {
    return (
        <div
            id="ProjectButtonGroup"
            className="bg-reseda-green bottom-6 flex w-full flex-row justify-evenly divide-x divide-black self-center border border-black rounded-xl p-1 font-sans text-xl font-medium text-black"
        >
            <a href={deployedLink} className="flex-1 text-center text-base lg:text-2xl">Link</a>
            <a href={githubLink} className="flex-1 text-center text-base lg:text-2xl">Github</a>
            {/* <p className="flex-1 text-center text-base lg:text-2xl">More</p> */}
        </div>
    )
}
