
import * as SC from './ServiceListItem.styled'
import { FaChevronDown } from "react-icons/fa";


export default function ServiceListItem({ children, title, img, handleClick, isOpen }) {
    return (
        <SC.WrapperItem>
            <SC.Item onClick={handleClick}>
                <SC.WrapperIMGTitle>
                    <div>
                    <img src={img} alt="3" />
                    </div>
                    <h2>{title}</h2>
                      <SC.Icon $isopen={isOpen}> 
                        <FaChevronDown />
                    </SC.Icon>
                </SC.WrapperIMGTitle>
                {isOpen && <p>{children}</p>}
            </SC.Item>
        </SC.WrapperItem>

    )
}