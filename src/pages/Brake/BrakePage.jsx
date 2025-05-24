

import { useTranslation } from 'react-i18next'
import styled from "styled-components";

export const WrapperBrakePage = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
color: white;
margin-top: 50px;
margin-left: 20px;
margin-right: 20px;
  word-break: break-word;
  h1, h2, h3, p, li {
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
  }
ul{
    list-style: disc;
    padding-left: 20px;
    margin: 0;

}
  img {
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 380px;
    height: auto;
    border-radius: 8px;
  }
   
`
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
