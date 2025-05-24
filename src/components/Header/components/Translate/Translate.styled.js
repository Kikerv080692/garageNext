import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const ButtonLeng = styled.button`
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #d4edda; 
    color: #155724; 
  }

  svg {
    font-size: 18px;
    color: #28a745;
    transition: color 0.2s ease;
  }
`;

export const LengWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 6px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  padding: 6px 0;
  min-width: 100%;

  button {
    width: 100%;
    background: transparent;
    border: none;
    padding: 10px 15px;
    text-align: left;
    font-size: 15px;
    color: #333;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: #c3e6cb; 
      color: #155724; 
    }
  }
`;
