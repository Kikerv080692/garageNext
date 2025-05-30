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
  background-color: #404040;
border-bottom: 1px solid #C4C4C4;
`
export const LogoWrapper = styled.div`
  flex: 0 0 auto;
`;

export const NavigationWrapper = styled.nav`
 @media (min-width: 768px){
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: white;
 }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;


