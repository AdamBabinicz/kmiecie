import styled, { keyframes } from "styled-components";

const float = keyframes`
   from {
      transform: translate(0px, 0px)
   }
   65% {
      transform: translate(0px, 10px)
   }
   to {
      transform: translate(0px, 0px)
   }
`;

export const StyledContactSection = styled.section`
  min-height: 90vh;
  padding: 10rem 0 5rem 0;
  width: 100%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  font-family: "Source Code Pro", monospace;
  font-size: 18px;

  p {
    padding: 0;
    margin-bottom: 2rem;
    text-align: left;
  }

  div {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      margin: 0 2rem 2rem 0;

      svg {
        margin-right: 0.5rem;
      }
    }

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      align-items: flex-start;
      flex-direction: column;

      a {
        margin: 0 0 2rem 0;
        font-size: 16px;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  img {
    width: 100%;
    animation: ${float} 3s ease-in-out infinite;
    object-fit: contain;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: flex-start;
    margin-bottom: 2rem;

    img {
      height: 800px;
    }
  }
`;
