"use client"
import Brands from 'src@/components/Brands/Brands'
import ServiceList from '../../components/Styled/Home/components/ServiceList/ServiceList'
import {Wrapper,Title,SubTitle,WrapperImage,Image, WrapperServiceList}  from '../../components/Styled/Home/HomePages.styled'
import { useTranslation } from 'react-i18next'


export default function HomePage() {
    const { t } = useTranslation()
    const highlight1 = t('tittle.highlight1');
    const middle = t('tittle.middle');
    const highlight2 = t('tittle.highlight2');


    return (
        <>
            <Wrapper>
                <div>
                    <Title>
                        <span className="gradient">{highlight1}</span> <span className='middle'>{middle}</span> <span className="gradient">{highlight2}</span>
                    </Title>

                    <SubTitle>{t('tittle2')}</SubTitle>
                </div>
                <WrapperImage>
                    <Image src="/images/Garage.webp" alt="Garage" />
                </WrapperImage>
            </Wrapper>
            <WrapperServiceList>
                <ServiceList />
            </WrapperServiceList>
            <Brands />
        </>

    )
}