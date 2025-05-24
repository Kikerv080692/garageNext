"use client"
import {WrapperElectricPage,Title ,Subtitle, Image, WrapperTextTitle, WrapperUl}  from '../../components/Styled/Electric/ElectricPage.styled'
import { useTranslation } from 'react-i18next'

<<<<<<< HEAD
=======
export const WrapperElectricPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  gap: 20px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 60px 40px;
  }

  @media (min-width: 1024px) {
    padding: 80px 60px;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  background: linear-gradient(90deg, rgb(0, 255, 153), rgb(102, 255, 0));
  -webkit-background-clip: text;
   background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-transform: uppercase;
  max-width: 1000px;
  line-height: 1.4;
  word-break: break-word;
  margin: 0 auto;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  background: linear-gradient(90deg, rgb(255, 204, 0), rgb(102, 255, 0));
  -webkit-background-clip: text;
   background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 900px;
  line-height: 1.4;
  word-break: break-word;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 900px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 255, 0, 0.15);
`;

export const WrapperTextTitle = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;
  text-align: center;

  h3 {
    font-size: 20px;
    background: linear-gradient(90deg, rgb(81, 255, 0), rgb(102, 255, 0));
    -webkit-background-clip: text;
    background-clip: text;

    -webkit-text-fill-color: transparent;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.4;
    word-break: break-word;
  }
`;

export const WrapperUl = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);

  li {
    position: relative;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
    margin-bottom: 16px;
    padding-left: 36px;
    background: linear-gradient(90deg, rgb(81, 255, 0), rgb(102, 255, 0));
    -webkit-background-clip: text;
    background-clip: text;

    -webkit-text-fill-color: transparent;
    word-break: break-word;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      top: 0;
      font-size: 20px;
      color: rgb(81, 255, 0);
    }

    &:hover {
      background: linear-gradient(90deg, #00ff6a, #00c851);
      -webkit-background-clip: text;
    background-clip: text;

      -webkit-text-fill-color: transparent;

      &::before {
        color: #00ff6a;
      }
    }
  }
`;
>>>>>>> 49994ae (fix all bug)

export default function ElectricPage() {
  const { t } = useTranslation()

  return (
    <WrapperElectricPage>
      <div>
        <Title>
          {t("electricPage.title")}
        </Title>
      </div>
      <div>
        <Subtitle>
          {t("electricPage.subtitle")}
        </Subtitle>
      </div>
      <Image src="/images/inside-lapTop.jpg" alt="electric" />
      <WrapperTextTitle><h3>{t("electricPage.textTitle")}</h3></WrapperTextTitle>
      <WrapperUl>
        <li>{t("electricPage.text1")}</li>
        <li>{t("electricPage.text2")}</li>
        <li>{t("electricPage.text3")}</li>
        <li>{t("electricPage.text4")}</li>
        <li>{t("electricPage.text5")}</li>
        <li>{t("electricPage.text6")}</li>
        <li>{t("electricPage.text7")}</li>
        <li>{t("electricPage.text8")}</li>
      </WrapperUl>
    </WrapperElectricPage>
  );
}
