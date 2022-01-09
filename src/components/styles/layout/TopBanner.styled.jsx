import styled from "styled-components";

export const StyledTopBanner = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.navyBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 20px;
  z-index: 99;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
  }
`;

export const BannerSection = styled.div`
  font-family: "Source Code Pro", monospace;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  margin-left: 2rem;

  a svg {
    position: absolute;
    bottom: 0.1rem;
    left: -1.5rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: ${({ showOnMobile }) => (showOnMobile ? "inline-block" : "none")};
  }
`;
