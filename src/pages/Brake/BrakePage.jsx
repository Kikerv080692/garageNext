"use client"
import {WrapperBrakePage} from '../../components/Styled/Brake/BrakePage.styled'
import { useTranslation } from 'react-i18next'
export default function BrakePage() {
    const {t} = useTranslation()
    return (
        <WrapperBrakePage>
            <h1>{t('brakePage.title')}</h1>
            <h2>{t('brakePage.title2')}</h2>

        <h3>{t('brakePage.title3')}</h3>
        <ul>
            <li>{t('brakePage.title4')}</li>
            <li>{t('brakePage.title5')}</li>
            <li>{t('brakePage.title6')}</li>
        </ul>
        <img src="/images/wheel.webp" alt="lap-top" />
    </WrapperBrakePage>
    );
}
