import * as SC from './Footer.styled'

export default function Footer() {
    return (
        <SC.WrapperFooter>
            <SC.InfoSection>
                <img src="/images/clock.png" alt="clock" />
                <div>
                    <h4>Години роботи</h4>
                    <p>Пн. - Сб. <span>8:00 - 20:00</span></p>
                </div>
            </SC.InfoSection>

            <SC.ContactSection>
                <address>
                    <p>
                        <img src="/images/mail.png" alt="mail" />
                        <a href="mailto:valigurskyi41@gmail.com">valigurskyi41@gmail.com</a>
                    </p>
                    <p>
                        <img src="/images/telephone.png" alt="phone" />
                        <a href="tel:+420773612198">+420 773 612 198</a>
                    </p>
                    <p>
                        <img src="/images/location.png" alt="location" />
                        <a href="https://maps.app.goo.gl/B2mJKV3b2wG6phrz5" rel="noopener noreferrer">
                            Stankova 24, Brno - Královo Pole
                        </a>
                    </p>
                </address>
            </SC.ContactSection>
        </SC.WrapperFooter>
    );
}
