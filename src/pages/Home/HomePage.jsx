"use client"
import * as SC from './HomePages.styled'

export default function HomePage() {
    return (
        // <>Home page</>
        <SC.Wrapper>
            <div>
                <h1>Наше СТО вирішить будь-які проблеми, які виникли з вашим автомобілем</h1>
                <h2>Ми розпочинаємо обслуговування протягом кількох годин після доставки автомобіля в майстерню. Гарантія 24 місяці.</h2>
            </div>
            <div>
                <img src="/images/Garage.webp" alt="Garage" />
            </div>
        </SC.Wrapper>

    )
}