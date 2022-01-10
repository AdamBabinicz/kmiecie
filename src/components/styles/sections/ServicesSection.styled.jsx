import styled from "styled-components";

export const StyledServicesSection = styled.section`
  min-height: 90vh;
  padding: 10rem 0 5rem 0;
  width: 100%;
`;

export const ServicesItems = styled.div`
  display: flex;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const SingleService = styled.div`
  min-height: 20rem;
  border-radius: 7px;
  background: rgba(4, 20, 44, 1);
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1;
  padding: 1.3rem;
  margin-right: 2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-1rem);
  }
  &:last-child {
    margin-right: 0;
  }
  h3 {
    font-size: 2rem;
    margin: 1.5rem 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.white} 0%,
      ${({ theme }) => theme.colors.red} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-family: "Source Code Pro", monospace;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 0 4rem 0;
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  width: 4.5rem;
  color: ${({ theme }) => theme.colors.navyBlue};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
`;
