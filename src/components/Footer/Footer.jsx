"use client"
import * as SC from './Footer.styled'
import { useTranslation } from 'react-i18next'


export default function Footer() {
    const { t } = useTranslation()

    return (
        <SC.WrapperFooter>
            <SC.InfoSection>
                <img src="/images/clock.png" alt="clock" />
                <div>
                    <h4>{t('footer.hours')}</h4>
                    <p>{t("footer.days")} <span>8:00 - 20:00</span></p>
                </div>
            </SC.InfoSection>

            <SC.ContactSection>
                <address>
                    <p>
                        <img src="/images/mail.png" alt="mail" />
                        <a href="mailto:valihursky@gmail.com">valihursky@gmail.com</a>
                    </p>
                    <p>
                        <img src="/images/telephone.png" alt="phone" />
                        <a href="tel:+420773612198">+420 773 612 198</a>
                    </p>
                    <p>
                        <img src="/images/location.png" alt="location" />
                        <a href="https://www.google.com/maps?q=49.1713935,16.6466475"   target="_blank"  rel="noopener noreferrer">
                            Vinohradská 1305/82a, 618 00 Brno-Černovice
                        </a>
                    </p>
                </address>
            </SC.ContactSection>
        </SC.WrapperFooter>
    );
}
