"use client";
import {WrapperDiagnosticPage, WrapperTittle, WrapperIMG, LogoWaveWrapper,SubTitle,Text1,Text2, WrapperUl,Last} from '../../components/Styled/Diagnostic/Diagnostic.styled';
import { useTranslation } from 'react-i18next';

export default function DiagnosticPage() {
  const { t } = useTranslation();

  return (
    <WrapperDiagnosticPage>
      <WrapperTittle>
        <h1>{t('diagnostik.title')}</h1>
      </WrapperTittle>

      <WrapperIMG>
        <img src="/images/octavia.webp" alt="octavia" />

        <LogoWaveWrapper style={{ top: "15px", left: "20px" }}>
          <img src="/logoDiagnostik/brake.png" alt="brake" />
        </LogoWaveWrapper>

        <LogoWaveWrapper style={{ top: "20px", left: "80px" }}>
          <img src="/logoDiagnostik/piston.png" alt="piston" />
        </LogoWaveWrapper>
        <LogoWaveWrapper style={{ top: "25px", left: "140px" }}>
          <img src="/logoDiagnostik/check.png" alt="check" />
        </LogoWaveWrapper>
        <LogoWaveWrapper style={{ top: "30px", left: "200px" }}>
          <img src="/logoDiagnostik/belt.png" alt="belt" />
        </LogoWaveWrapper>
      </WrapperIMG>

      <SubTitle>
        <h2>{t('diagnostik.subtitle')}</h2>
      </SubTitle>
      <Text1>
        <p>{t("diagnostik.text")}</p>
      </Text1>
      <Text2>
        <p>{t("diagnostik.text2")}</p>
      </Text2>
      <WrapperUl>
        <li>{t('diagnostik.li1')}</li>
        <li>{t('diagnostik.li2')}</li>
        <li>{t('diagnostik.li3')}</li>
        <li>{t('diagnostik.li4')}</li>
        <li>{t('diagnostik.li5')}</li>
        <li>{t('diagnostik.li6')}</li>
      </WrapperUl>
      <Last>
        <p>{t('diagnostik.end')}</p>
      </Last>
    </WrapperDiagnosticPage>
  );
}
