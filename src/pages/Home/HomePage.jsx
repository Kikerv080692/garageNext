"use client"
import ServiceList from './components/ServiceList/ServiceList'
import * as SC from './HomePages.styled'

export default function HomePage() {
    return (
        // <>Home page</>
        <SC.Wrapper>
            <div>
                <SC.Title>Наше СТО вирішить будь-які проблеми, які виникли з вашим автомобілем</SC.Title>
                <SC.SubTitle>Ми розпочинаємо обслуговування протягом кількох годин після доставки автомобіля в майстерню. Гарантія 24 місяці.</SC.SubTitle>
            </div>
            <SC.WrapperImage>
                <SC.Image src="/images/Garage.webp" alt="Garage" />
            </SC.WrapperImage>
            <ServiceList/>
        </SC.Wrapper>

    )
}