import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: red;

/* @media(max-width: ) */
`
export const LogoWrapper = styled.div`
  flex: 0 0 auto;
`;

export const NavigationWrapper = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
`;

export const SocialWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  gap: 10px;
`;


// const Title = styled.h1`
//   font-size: 40px;

//   @media (max-width: 768px) {
//     font-size: 30px;
//   }

//   @media (max-width: 480px) {
//     font-size: 20px;
//   }
// `;