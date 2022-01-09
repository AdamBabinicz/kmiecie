import styled from "styled-components";

export const CTAButton = styled.a`
  background: ${({ primary, theme }) => (primary ? theme.colors.red : "none")};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.white};
  padding: 10px 20px;
  margin: ${({ margin }) => margin};
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-size: 14px;
  font-family: "Source Code Pro", monospace;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background: ${({ primary, theme }) =>
      primary ? theme.colors.red : "none"};
    color: ${({ primary, theme }) =>
      primary ? theme.colors.white : theme.colors.red};
    border: 2px solid ${({ theme }) => theme.colors.red};
  }
`;
