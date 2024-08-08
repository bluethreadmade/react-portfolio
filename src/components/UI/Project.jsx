const project = [
    { title: '', description: '', githubLink: '', deployedLink: ''},
    { title: 'AppTrack', description: '', githubLink: '', deployedLink: ''},
    { title: 'Weather Dashboard', description: '', githubLink: '', deployedLink: ''},
    { title: 'READMe Generator', description: '', githubLink: '', deployedLink: ''},
    { title: 'Dad Dinner', description: '', githubLink: '', deployedLink: ''},
    { title: 'Tech Blog', description: '', githubLink: '', deployedLink: ''}
]

export default function Project() {
    return (
<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
    <div class="max-w-sm overflow-hidden rounded shadow-lg">
        <div class="relative">
            <img
                class="w-full"
                src="https://cdn.britannica.com/92/212692-050-D53981F5/labradoodle-dog-stick-running-grass.jpg?w=400&h=300&c=crop"
                alt="Sunset in the mountains"
            />
            <div class="absolute inset-y-0 right-0 flex flex-col justify-center space-y-2 bg-white bg-opacity-50 hover:bg-opacity-100 p-2">
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
            <div class="mb-2 text-xl font-bold">The Coldest Sunset</div>
            <p class="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
    </div>
</div>
    )
}
