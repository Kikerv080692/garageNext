import styled from "styled-components";

export const WrapperContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem 1rem;
  gap: 1.25rem;
  width: 100%;
  margin-top: 2rem;

  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  /* Tablet */
  @media (min-width: 600px) {
    padding: 2rem;
    gap: 1.5rem;
    margin-top: 3rem;
  }

  /* Laptop/Desktop */
  @media (min-width: 1024px) {
    max-width: 1200px;
    margin-inline: auto;
    padding: 3rem;
    gap: 2rem;
  }
`;
export const MapContainer = styled.div`
  width: 100%;
  height: 300px;

  @media (min-width: 600px) {
    height: 400px;
  }

  @media (min-width: 1024px) {
    height: 500px;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0.75rem;
  }
`;
export const PageTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #222;
  margin-bottom: 0.5rem;

  @media (min-width: 600px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.25rem;
  }
`;