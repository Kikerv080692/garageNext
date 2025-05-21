"use client"
import * as SC from './GasSistemPage.styled'
import { useTranslation } from 'react-i18next'


export default function GasSistem() {
 const { t } = useTranslation()

    return (
        <SC.WrapperGasSistemPage>
           <SC.Content>
                   <h1>{t('exhaustPage.title')}</h1>
                   <h2>{t('exhaustPage.subtitle')}</h2>
                   <ul>
                     <li>{t('exhaustPage.subtitleText')}</li>
                     <li>{t('exhaustPage.subtitleText1')}</li>
                     <li>{t('exhaustPage.subtitleText2')}</li>
                     <li>{t('exhaustPage.subtitleText3')}</li>
                     <li>{t('exhaustPage.subtitleText4')}</li>
                   </ul>
                   <p>{t('exhaustPage.underSubTitle')}</p>
                   <img src="/images/gasSistem.jpg"  alt="engine" />
                 </SC.Content>
                 <SC.Content2>
                   <h1>{t('exhaustPage.title2')}</h1>
                   <p>{t('exhaustPage.subtitle2')}</p>
                   <h3>{t('exhaustPage.title3')}</h3>
                   <ul>
                     <li>{t('exhaustPage.title3Text')}</li>
                     <li>{t('exhaustPage.title3Text1')}</li>
                     <li>{t('exhaustPage.title3Text2')}</li>
                     <li>{t('exhaustPage.title3Text3')}</li>
                     <li>{t('exhaustPage.title3Text4')}</li>
                     <li>{t('exhaustPage.title3Text5')}</li>
                   </ul>
                   <img src="/images/Corvette.jpg" alt="zazor" />
                 </SC.Content2>
                 <SC.FooterText>
                   <p>{t('exhaustPage.end')}</p>
                 </SC.FooterText>
        </SC.WrapperGasSistemPage>
    );
}
