"use client"
import {WrapperElectricPage,Title ,Subtitle, Image, WrapperTextTitle, WrapperUl}  from '../../components/Styled/Electric/ElectricPage.styled'
import { useTranslation } from 'react-i18next'


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
