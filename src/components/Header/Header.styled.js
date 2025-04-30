import styled from 'styled-components'

export const HeaderWrapper = styled.div`
position: relative;
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
  background-color: grey;

`
export const LogoWrapper = styled.div`
  flex: 0 0 auto;
`;

export const NavigationWrapper = styled.nav`
 @media (min-width: 768px){
  display: flex;
  justify-content: center;
  align-items: center;
 }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;


