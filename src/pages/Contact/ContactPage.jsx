"use client"
import * as SC from './ContactPage.styled'
import { useTranslation } from 'react-i18next'

export default function ContactPage() {
     const { t } = useTranslation()
    return (
        <SC.WrapperContactPage>
              <SC.PageTitle>{t('contactPage.title')}</SC.PageTitle>
            <SC.MapContainer style={{ width: '100%', height: '400px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.7037255041845!2d16.650993176601865!3d49.18880067931848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712952c7a2d70b3%3A0x69f6df5c9bbff1f0!2sVinohradsk%C3%A1%201305%2F82a%2C%20618%2000%20Brno-%C4%8Cernovice%2C%20%C4%8Cesk%C3%A1%20republika!5e0!3m2!1scs!2scz!4v1716371280724!5m2!1scs!2scz"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </SC.MapContainer>
        </SC.WrapperContactPage>
    )
}
