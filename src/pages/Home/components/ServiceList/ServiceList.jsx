import { useState } from 'react'
import * as SC from './ServiceList.styled'
import Services from "src@/data/serviceList.json"
import ServiceListItem from '../ServiceListItem/ServiceListItem'

export default function ServiceList() {
   const [openIndex, setOpenIndex] = useState(null)

    const toggleOpenIndex = (index) => {
        setOpenIndex(index === openIndex ? null : index)
    }

    return (
        <SC.List>
        {Services.map(({title, icon, text},index) => <ServiceListItem key={index} isOpen={openIndex === index} handleClick={() => toggleOpenIndex(index)} title={title} img={icon}>{text}</ServiceListItem>)}
        </SC.List>
    )
}