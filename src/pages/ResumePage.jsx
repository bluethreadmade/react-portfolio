import ResumeButton from '../components/UI/ResumeButton'

// This is a static page - an "About Me" section
export default function ResumePage() {
    return (
        <div className="bg-background">
            <div className="bg-background mx-auto flex max-w-7xl flex-col items-center lg:flex-row">
                <img
                    src="/assets/headshot.jpg"
                    className="mb-12 w-36 rounded-full object-cover lg:w-64"
                ></img>
                <div>
                    <p className="mx-16 text-lg font-medium text-gray-800">
                        ABOUT ABOUT ABOUT Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Repellendus tenetur maiores, dolor
                        iusto dolorum ullam, natus deleniti blanditiis impedit
                        suscipit sed magnam alias in, repellat expedita hic
                        explicabo architecto soluta. About us Lorem ipsum, dolor
                        sit amet consectetur adipisicing elit. Velit voluptate
                        exercitationem quaerat pariatur mollitia, excepturi,
                        voluptatem eveniet a dolor nobis ex veniam totam nostrum
                        temporibus ad omnis nam rerum eligendi.
                    </p>
                    <div className="mx-16 my-16 flex justify-center">
                        <ResumeButton />
                    </div>
                </div>
            </div>
        </div>
    )
}
