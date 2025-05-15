import styled from "styled-components";

export const WrapperBrands = styled.div`
width: 100%;
max-width: 1200px;
margin: 0 auto;
padding: 20px 10px;

.swiper-slide img {
width: 100%;
max-height: 60px;
object-fit: contain;
border-radius: 8px;
box-shadow: 0 2px 8px rgba(0,0,0,0.1);
cursor: pointer;
transition: transform 0.3s;
}

.swiper-slide img:hover {
transform: scale(1.1);
}
`;
