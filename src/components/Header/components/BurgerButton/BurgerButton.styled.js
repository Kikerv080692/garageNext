import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
`

export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    transition: transform 0.3s ease; /* Додаємо плавну анімацію */
  }

  &:focus {
    outline: none;
  }
`;

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background: grey;
  z-index: 999;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;