import styled from "styled-components";

export const WrapperElectricPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 20px;

  h1 {
    font-size: 22px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    word-break: break-word;
    line-height: 1.2;
    max-width: 800px;
    background: linear-gradient(90deg, rgb(0, 255, 153), rgb(102, 255, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 20px;
    background: linear-gradient(90deg, rgb(255, 204, 0), rgb(102, 255, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const WrapperTextTitle = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    background: linear-gradient(90deg, rgb(81, 255, 0), rgb(102, 255, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const WrapperUl = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 20px auto;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.2);
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

    &::before {
      content: "✓";
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
