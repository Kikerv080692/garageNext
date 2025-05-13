
import * as SC from './ServiceListItem.styled'

export default function ServiceListItem({ children, title, img, handleClick, isOpen }) {
    return (
        <SC.WrapperItem>
            <SC.Item onClick={handleClick}>
                <SC.WrapperIMGTitle>
                    <div>
                    <img src={img} alt="" />
                    </div>
                    <h2>{title}</h2>
                </SC.WrapperIMGTitle>
                {isOpen && <p>{children}</p>}
            </SC.Item>
        </SC.WrapperItem>

    )
}