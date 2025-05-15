import { useState } from 'react'
import * as SC from './ServiceList.styled'
import Services from "src@/data/serviceList.json"
import ServiceListItem from '../ServiceListItem/ServiceListItem'
import { useTranslation } from 'react-i18next'


export default function ServiceList() {
    const { t } = useTranslation()
    const [openIndex, setOpenIndex] = useState(null)

    const toggleOpenIndex = (index) => {
        setOpenIndex(index === openIndex ? null : index)
    }

    return (
        <SC.List>
            {Services.map(({ title, icon, text1, text2, text3, text4, text5, text6,text7,text8 }, index) => <ServiceListItem key={index} isOpen={openIndex === index} handleClick={() => toggleOpenIndex(index)} title={t(title)} img={icon}><p>{t(text1)}</p> <p>{t(text2)}</p><p>{t(text3)}</p> <p>{t(text4)}</p><p>{t(text5)}</p><p>{t(text6)}</p><p>{t(text7)}</p><p>{t(text8)}</p></ServiceListItem>)}
        </SC.List>
    )
}