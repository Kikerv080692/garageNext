import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import * as SC from './Translate.styled'
import { useTranslation } from "react-i18next";

export default function Translate() {
    const {i18n} = useTranslation()

    const onLangClick = (event) => {
        const {name} = event.currentTarget
        i18n.changeLanguage(name)
    }

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
                    {leng !== "/images/czech.png" && <button type="button" name="cz" onClick={onLangClick}><img data-src="/images/czech.png" src="/images/czech.png" alt="czech" width={'30px'} height={'30px'} /> </button> }
                   {leng !== "/images/ukraine.png" && <button type="button" name="ua" onClick={onLangClick}><img data-src="/images/ukraine.png" src="/images/ukraine.png" alt="ukraine" width={'30px'} height={'30px'} /> </button> }
                    {leng !== "/images/russia.png" && <button type="button" name="ru" onClick={onLangClick}><img data-src="/images/russia.png" src="/images/russia.png" alt="russia" width={'30px'} height={'30px'} /></button> }
                </SC.LengWrapper>
            }

        </SC.Wrapper>
    )
}