"use client"
import { useTranslation } from 'react-i18next'
import styled from "styled-components";

export const WrapperEnginePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  padding: 20px;
  background: linear-gradient(135deg, #1f1f1f, #2c2c2c);
  min-height: 100vh;
  color: white;
`;

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
  }
`;
export default function EnginePage() {
  const { t } = useTranslation()

  return (
    <WrapperEnginePage>
      <Content>
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
      </Content>
      <Content2>
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
      </Content2>
      <FooterText>
        <p>{t('enginePage.end')}</p>
      </FooterText>
    </WrapperEnginePage>
  );
}
