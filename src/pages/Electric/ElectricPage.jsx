"use client"
import * as SC from './ElectricPage.styled'
import { useTranslation } from 'react-i18next'


export default function ElectricPage() {
  const { t } = useTranslation()

  return (
    <SC.WrapperElectricPage>
      <div>
        <SC.Title>
          {t("electricPage.title")}
        </SC.Title>
      </div>
      <div>
        <SC.Subtitle>
          {t("electricPage.subtitle")}
        </SC.Subtitle>
      </div>
      <SC.Image src="/images/inside-lapTop.jpg" alt="electric" />
      <SC.WrapperTextTitle><h3>{t("electricPage.textTitle")}</h3></SC.WrapperTextTitle>
      <SC.WrapperUl>
        <li>{t("electricPage.text1")}</li>
        <li>{t("electricPage.text2")}</li>
        <li>{t("electricPage.text3")}</li>
        <li>{t("electricPage.text4")}</li>
        <li>{t("electricPage.text5")}</li>
        <li>{t("electricPage.text6")}</li>
        <li>{t("electricPage.text7")}</li>
        <li>{t("electricPage.text8")}</li>
      </SC.WrapperUl>
    </SC.WrapperElectricPage>
  );
}
