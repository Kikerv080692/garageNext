import styled, { keyframes } from "styled-components";

// Анімація хвилі
const wavePulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
`;

export const WrapperDiagnosticPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 50px 20px;
  color: white;
`;

export const WrapperTittle = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 20px;

  h1 {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    word-break: break-word;
    line-height: 1.2;
    margin: 0 auto;
    max-width: 800px;
     background: linear-gradient(90deg,rgb(0, 255, 153),rgb(102, 255, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const WrapperIMG = styled.div`
  position: relative;
  width: 400px;

  img {
    width: 100%;
    display: block;
  }
`;


export const LogoWaveWrapper = styled.div`
  position: absolute;
  width: 38px;
  height: 38px;
  background: white;
  padding: 3px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  overflow: visible;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: black;
    border-radius: 6px;
    animation: ${wavePulse} 2s infinite;
    transform-origin: center;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0.4;
  }

  img {
    width: 32px;
    height: 32px;
    z-index: 2;
     
  }
`;
export const SubTitle = styled.div`
h2{
      background: linear-gradient(90deg,rgb(255, 204, 0),rgb(102, 255, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`

export const Text1 = styled.div`
p{
    background: linear-gradient(90deg,rgb(81, 255, 0),rgb(102, 255, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`
export const Text2 = styled.div`
p{
    background: linear-gradient(90deg,rgb(81, 255, 0),rgb(102, 255, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`
export const WrapperUl = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 20px auto;
  max-width: 600px;
  
  /* Фон для списку з легким затемненням */
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0,255,0,0.2);
  padding: 20px 30px;

  li {
    position: relative;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 600;
    color: transparent;

    background: linear-gradient(90deg, rgb(81, 255, 0), rgb(102, 255, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-bottom: 15px;
    padding-left: 30px;
    cursor: default;

    /* Іконка-прапорець ліворуч */
    &::before {
      content: "✓"; /* або можна вставити свій SVG через background-image */
      position: absolute;
      left: 0;
      top: 0;
      color: rgb(81, 255, 0);
      font-weight: bold;
      font-size: 20px;
      line-height: 1.5;
      user-select: none;
      transition: color 0.3s ease;
    }

    /* Hover ефект для li */
    &:hover {
      background: linear-gradient(90deg, #00ff6a, #00c851);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &::before {
        color: #00ff6a;
      }
    }
  }
`;
export const Last = styled.div`
background: linear-gradient(90deg, #00ff6a, #00c851);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
`