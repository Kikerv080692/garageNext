

export default function ServiceListItem({children, title, img, handleClick, isOpen}) {
    return (
        <>
        <li onClick={handleClick}>
            <img src={img} alt="" />
            <h2>{title}</h2>
            {isOpen && <p>{children}</p>}
        </li>
        </>
    )
}