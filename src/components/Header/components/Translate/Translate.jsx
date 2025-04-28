import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import * as SC from './Translate.styled'


export default function Translate() {
    const [showVariant, setShowVariant] = useState(false)
    const [leng, setLeng] = useState("/images/czech.png")

    const handleShowVariant = () => {
        setShowVariant(!showVariant)
    }

    const handleChangelang = (event) => {
        setLeng(event.target.dataset.src)
        setShowVariant(false)
    }

    return (
        <SC.Wrapper>
            <SC.ButtonLeng type="button" onClick={handleShowVariant}>
                <img src={leng} alt="czech" width={'30px'} height={'30px'} />
                {!showVariant ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </SC.ButtonLeng>
            {showVariant && 
                <SC.LengWrapper onClick={handleChangelang}>
                    {leng !== "/images/czech.png" && <img data-src="/images/czech.png" src="/images/czech.png" alt="czech" width={'30px'} height={'30px'} />}
                   {leng !== "/images/ukraine.png" && <img data-src="/images/ukraine.png" src="/images/ukraine.png" alt="ukraine" width={'30px'} height={'30px'} />}
                    {leng !== "/images/russia.png" && <img data-src="/images/russia.png" src="/images/russia.png" alt="russia" width={'30px'} height={'30px'} />}
                </SC.LengWrapper>
            }

        </SC.Wrapper>
    )
}