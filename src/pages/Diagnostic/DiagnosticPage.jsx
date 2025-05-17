"use client";
import * as SC from './Diagnostic.styled';
import { useTranslation } from 'react-i18next';

export default function DiagnosticPage() {
  const { t } = useTranslation();

  return (
    <SC.WrapperDiagnosticPage>
      <SC.WrapperTittle>
        <h1>{t('diagnostik.title')}</h1>
      </SC.WrapperTittle>

      <SC.WrapperIMG>
        <img src="/images/octavia.webp" alt="octavia" />

        <SC.LogoWaveWrapper style={{ top: "15px", left: "20px" }}>
          <img src="/logoDiagnostik/brake.png" alt="brake" />
        </SC.LogoWaveWrapper>

        <SC.LogoWaveWrapper style={{ top: "20px", left: "80px" }}>
          <img src="/logoDiagnostik/piston.png" alt="piston" />
        </SC.LogoWaveWrapper>
        <SC.LogoWaveWrapper style={{ top: "25px", left: "140px" }}>
          <img src="/logoDiagnostik/check.png" alt="check" />
        </SC.LogoWaveWrapper>
        <SC.LogoWaveWrapper style={{ top: "30px", left: "200px" }}>
          <img src="/logoDiagnostik/belt.png" alt="belt" />
        </SC.LogoWaveWrapper>
      </SC.WrapperIMG>

      <SC.SubTitle>
        <h2>{t('diagnostik.subtitle')}</h2>
      </SC.SubTitle>
      <SC.Text1>
        <p>{t("diagnostik.text")}</p>
      </SC.Text1>
      <SC.Text2>
        <p>{t("diagnostik.text2")}</p>
      </SC.Text2>
      <SC.WrapperUl>
        <li>{t('diagnostik.li1')}</li>
        <li>{t('diagnostik.li2')}</li>
        <li>{t('diagnostik.li3')}</li>
        <li>{t('diagnostik.li4')}</li>
        <li>{t('diagnostik.li5')}</li>
        <li>{t('diagnostik.li6')}</li>
      </SC.WrapperUl>
      <SC.Last>
        <p>{t('diagnostik.end')}</p>
      </SC.Last>
    </SC.WrapperDiagnosticPage>
  );
}
