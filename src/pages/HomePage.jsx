import ResumeButton from '../components/UI/ResumeButton'

// This is a static page - an "About Me" section
export default function HomePage() {
    return (
        <div className="bg-background">
            <div className="bg-background mx-auto flex max-w-7xl flex-col items-center lg:flex-row">
                <img
                    src="/assets/headshot.jpg"
                    className="mb-12 w-36 rounded-full object-cover lg:w-64"
                ></img>
                <div>
                    <p className="mx-16 text-base lg:mt-24 lg:text-lg font-medium text-gray-800">
                        <p className="mb-4 indent-10">With 14 years of hands-on experience in product design and engineering, I’ve honed my ability to create impactful solutions that enhance user experiences and drive innovation.</p> 
                        
                        <p className="mb-4 indent-10">Recently, I’ve expanded my skill set to include web development, where I’ve embraced the challenge of building dynamic and responsive web applications. My background in mechanical engineering and program management has instilled a deep understanding of design principles and a strategic mindset that I now apply to both digital and physical products.</p>

                        <p className="mb-4 indent-10">I thrive on turning complex ideas into intuitive, user-centric designs and enjoy leveraging my technical expertise to build and refine systems, workflows, and digital interfaces. My passion for creating meaningful solutions and my commitment to continuous learning enable me to excel in crafting high-quality, innovative web solutions that align with user needs and business goals.</p>
                    </p>
                    <div className="mx-16 my-16 flex justify-center">
                        <ResumeButton />
                    </div>
                </div>
            </div>
        </div>
    )
}
