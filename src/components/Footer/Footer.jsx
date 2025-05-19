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
                        <a href="https://www.google.com/search?q=Vinohradsk%C3%A1+1305%2F82a%2C+618+00+Brno-%C4%8Cernovice&rlz=1C1GCEU_ruCZ1162&oq=Vinohradsk%C3%A1+1305%2F82a%2C+618+00+Brno-%C4%8Cernovice&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABjvBTIHCAIQABjvBTIHCAMQABjvBTIKCAQQABiABBiiBDIHCAUQABjvBdIBCTIwNjZqMGoxNagCCLACAfEFTtv-bQmGpVI&sourceid=chrome&ie=UTF-8&zx=1747682567785&no_sw_cr=1&dlnr=1&ved=2ahUKEwj_ysT0oLCNAxXkgf0HHZc9LNcQl6ENegQIFBAH"   target="_blank"  rel="noopener noreferrer">
                            Vinohradská 1305/82a, 618 00 Brno-Černovice
                        </a>
                    </p>
                </address>
            </SC.ContactSection>
        </SC.WrapperFooter>
    );
}
