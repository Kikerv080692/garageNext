import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(6deg); }
  50% { transform: rotate(-20deg); }
  75% { transform: rotate(6deg); }
  100% { transform: rotate(0deg); }
`;

export const WrapperButton = styled.button`
  position: fixed;
  bottom: 300px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid green;
  padding: 20px;
  background-color: green;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 128, 0, 0.3);

  .icon {
    height: 30px;
  }

  .shake {
    animation: ${shake} 0.8s ease;
  }

  .text {
    font-size: 12px;
    color: white;
    font-weight: bold;
    text-align: center;
  }
  :hover {
    animation: ${shake} 0.8s ease;
  }
`;
