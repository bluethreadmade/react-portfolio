export default function ListItem({ children, ...props }) {
    return (
        <li
            className="list-group-item d-flex justify-content-center align-items-center pt-4"
            {...props}
        >
            {children}
        </li>
    )
}
