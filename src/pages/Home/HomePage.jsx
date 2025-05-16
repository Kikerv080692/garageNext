"use client"
import Brands from 'src@/components/Brands/Brands'
import ServiceList from './components/ServiceList/ServiceList'
import * as SC from './HomePages.styled'
import { useTranslation } from 'react-i18next'


export default function HomePage() {
    const { t } = useTranslation()
    const tittle = t('tittle')
    const highlight1 = t('tittle.highlight1');
    const middle = t('tittle.middle');
    const highlight2 = t('tittle.highlight2');


    return (
        <>
            <SC.Wrapper>
                <div>
                    <SC.Title>
                        <span className="gradient">{highlight1}</span> <span className='middle'>{middle}</span> <span className="gradient">{highlight2}</span>
                    </SC.Title>

                    <SC.SubTitle>{t('tittle2')}</SC.SubTitle>
                </div>
                <SC.WrapperImage>
                    <SC.Image src="/images/Garage.webp" alt="Garage" />
                </SC.WrapperImage>
            </SC.Wrapper>
            <SC.WrapperServiceList>
                <ServiceList />
            </SC.WrapperServiceList>
            <Brands />
        </>

    )
}