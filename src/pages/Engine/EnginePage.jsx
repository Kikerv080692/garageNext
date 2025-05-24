"use client"
import * as SC from './EnginePage.styled'
import { useTranslation } from 'react-i18next'

export default function EnginePage() {
  const { t } = useTranslation()

  return (
    <SC.WrapperEnginePage>
      <SC.Content>
        <h1>{t('enginePage.title')}</h1>
        <h2>{t('enginePage.subtitle')}</h2>
        <ul>
          <li>{t('enginePage.subtitleText')}</li>
          <li>{t('enginePage.subtitleText1')}</li>
          <li>{t('enginePage.subtitleText2')}</li>
          <li>{t('enginePage.subtitleText3')}</li>
          <li>{t('enginePage.subtitleText4')}</li>
          <li>{t('enginePage.subtitleText5')}</li>
        </ul>
        <p>{t('enginePage.underSubTitle')}</p>
        <img src="/images/ENGINE.png" alt="engine" />
      </SC.Content>
      <SC.Content2>
        <h1>{t('enginePage.title2')}</h1>
        <p>{t('enginePage.subtitle2')}</p>
        <h3>{t('enginePage.title3')}</h3>
        <ul>
          <li>{t('enginePage.title3Text')}</li>
          <li>{t('enginePage.title3Text1')}</li>
          <li>{t('enginePage.title3Text2')}</li>
          <li>{t('enginePage.title3Text3')}</li>
          <li>{t('enginePage.title3Text4')}</li>
          <li>{t('enginePage.title3Text5')}</li>
          <li>{t('enginePage.title3Text6')}</li>
        </ul>
        <img src="/images/zazor.jpeg" alt="zazor" />
      </SC.Content2>
      <SC.FooterText>
        <p>{t('enginePage.end')}</p>
      </SC.FooterText>
    </SC.WrapperEnginePage>
  );
}
