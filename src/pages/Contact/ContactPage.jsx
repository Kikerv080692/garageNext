"use client"
import {WrapperContactPage, PageTitle, MapContainer }  from '../../components/Styled/Contact/ContactPage.styled'
import { useTranslation } from 'react-i18next'

export default function ContactPage() {
     const { t } = useTranslation()
    return (
        <WrapperContactPage>
              <PageTitle>{t('contactPage.title')}</PageTitle>
            <MapContainer style={{ width: '100%', height: '400px' }}>
                <iframe
                    src="https://maps.google.com/maps?q=49.1713935,16.6466475&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </MapContainer>
        </WrapperContactPage>
    )
}
