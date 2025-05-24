"use client"
import { useTranslation } from 'react-i18next'
import styled from "styled-components";

export const WrapperGasSistemPage = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
margin-top: 50px;
`
export const Content = styled.div`
  max-width: 100%;
  width: 100%;
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 1.5rem;
    color: #00d1b2;
    text-align: center;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
    color: #e0e0e0;
  }

  ul {
    list-style: disc inside;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li {
    font-size: 1rem;
    line-height: 1.4;
    color: #cccccc;
  }

  p {
    font-size: 0.95rem;
    color: #f3c623;
    text-align: center;
    font-weight: 500;
  }

  @media (min-width: 600px) {
    padding: 30px;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    li {
      font-size: 1.05rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    max-width: 800px;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    li {
      font-size: 1.1rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;
export const Content2 = styled.div`
  max-width: 100%;
  width: 100%;
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 1.5rem;
    color: #00d1b2;
    text-align: center;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
    color: #e0e0e0;
  }

  ul {
    list-style: disc inside;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li {
    font-size: 1rem;
    line-height: 1.4;
    color: #cccccc;
  }

  p {
    font-size: 0.95rem;
    color: #f3c623;
    text-align: center;
    font-weight: 500;
  }

  @media (min-width: 600px) {
    padding: 30px;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    li {
      font-size: 1.05rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    max-width: 800px;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    li {
      font-size: 1.1rem;
    }

    p {
      font-size: 1.1rem;
    }
  }`
export const FooterText = styled.div`
  max-width: 100%;
  width: 100%;
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
  margin-top: 20px;

  p {
    font-size: 0.95rem;
    color: #f3c623;
    text-align: center;
    font-weight: 500;
  }

  @media (min-width: 600px) {
    padding: 30px;

    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    max-width: 800px;

    p {
      font-size: 1.1rem;
    }
  }`

export default function GasSistem() {
 const { t } = useTranslation()

    return (
        <WrapperGasSistemPage>
           <Content>
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
                 </Content>
                 <Content2>
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
                 </Content2>
                 <FooterText>
                   <p>{t('exhaustPage.end')}</p>
                 </FooterText>
        </WrapperGasSistemPage>
    );
}
