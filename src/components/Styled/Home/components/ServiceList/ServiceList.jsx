"use client"
import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import styled from "styled-components";
import ServiceListItem from '../ServiceListItem/ServiceListItem';
import Services from "src@/data/serviceList.json"

export const List = styled.ul`
display: grid;
padding: 0;
box-sizing: border-box;
grid-template-columns: 1fr; 
background: #131619;
max-width: 400px;
width: 100%;  
align-items: start;

@media (min-width: 768px) {
grid-template-columns: repeat(2, 1fr); 
}

@media (min-width: 1024px) {
 grid-template-columns: repeat(3, 1fr);  
}

@media (min-width: 1700px) {
      grid-template-columns: repeat(5, 1fr); 
   
}
`;
export default function ServiceList() {
    const { t } = useTranslation()
    const [openIndex, setOpenIndex] = useState(null)

    const toggleOpenIndex = (index) => {
        setOpenIndex(index === openIndex ? null : index)
    }

    return (
        <List>
            {Services.map(({ title, icon, text1, text2, text3, text4, text5, text6,text7,text8 }, index) => <ServiceListItem key={index} isOpen={openIndex === index} handleClick={() => toggleOpenIndex(index)} title={t(title)} img={icon}><p>{t(text1)}</p> <p>{t(text2)}</p><p>{t(text3)}</p> <p>{t(text4)}</p><p>{t(text5)}</p><p>{t(text6)}</p><p>{t(text7)}</p><p>{t(text8)}</p></ServiceListItem>)}
        </List>
    )
}