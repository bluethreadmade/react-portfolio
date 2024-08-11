export default function ResumeButton() {
    return (
        <a
            href="./Megan McNeill Resume.pdf"
            className="bg-accent text-textLight border-accent rounded-full border px-4 py-1 text-lg font-semibold hover:border-transparent hover:bg-purple-600 hover:text-white"
            download
        >
            Download Resume
        </a>
    )
}
