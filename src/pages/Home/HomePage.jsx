"use client"
import Brands from 'src@/components/Brands/Brands'
import ServiceList from './components/ServiceList/ServiceList'
import * as SC from './HomePages.styled'
import { useTranslation } from 'react-i18next'
export default function HomePage() {
const {t} = useTranslation()
    return (
        <>
        <SC.Wrapper>
            <div>
                <SC.Title>{t('tittle')}</SC.Title>
                <SC.SubTitle>{t('tittle2')}</SC.SubTitle>
            </div>
            <SC.WrapperImage>
                <SC.Image src="/images/Garage.webp" alt="Garage" />
            </SC.WrapperImage>
        </SC.Wrapper>
        <SC.WrapperServiceList>
            <ServiceList/>
        </SC.WrapperServiceList>
            <Brands/>
        </>

    )
}