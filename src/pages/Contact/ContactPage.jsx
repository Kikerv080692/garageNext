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
                    src="https://maps.google.com/maps?q=49.1713935,16.6466475&z=15&output=embed"
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
