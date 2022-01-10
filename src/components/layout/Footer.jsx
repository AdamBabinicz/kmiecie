import {
  StyledFooter,
  FooterNav,
  CodeWith,
} from "../styles/layout/Footer.styled";

export const Footer = () => {
  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  return (
    <>
      <StyledFooter>
        <FooterNav>
          <a href="#gospodarstwa">Gospodarstwa</a>
          <a href="#struktura">Struktura</a>
          <a href="#zawody">Zawody</a>
          <a href="#epilog">Epilog</a>
        </FooterNav>
        <CodeWith>Polska wieś szlachecka doby odrodzenia</CodeWith>
        <div>
          Radom 2022 - {months[new Date().getMonth()]}&nbsp;
          {new Date().getFullYear()}.
        </div>
      </StyledFooter>
    </>
  );
};
