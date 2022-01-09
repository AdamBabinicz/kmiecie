import {
  StyledAboutSection,
  ImageContainer,
  StyledImage,
  AboutContent,
  StyledHeading,
  GradientCircle,
  DarkCircle,
  StyledEmoji,
} from "../../styles/sections/AboutSection.styled";
import { CTAButton } from "../common/CTAButton.styled";

export const AboutSection = () => {
  return (
    <>
      <StyledAboutSection id="gospodarstwa">
        <ImageContainer>
          <StyledImage src="./images/3.jfif" alt="..." />
          <DarkCircle />
          <GradientCircle />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>
            Gospodarstw<StyledEmoji>a</StyledEmoji> i&nbsp;ich użytkownicy
          </StyledHeading>
          <p>
            "Łany puste były to role kmiece, które nie posiadały własnych,
            czynnych gospodarstw do ich eksploatowania.
          </p>
          <p>
            W całym niemal kraju ról takich było jeszcze dużo - przeciętnie
            szacuje się, że około 30% ról kmiecych stanowiły w XVI wieku pustki.
          </p>
          <p>
            Role puste nie równały się jednak odłogom, nieużytkom. Łany puste
            były w praktyce rezerwą ziemi, z której to rezerwy korzystał tak
            rozwijający się folwark, jak i chłopi, którzy pragnęli i mogli
            rozszerzyć swe gospodarstwa.
          </p>
          <p>
            Kmieć siedzący na półłanku mógł w praktyce gospodarować na całym
            łanie (dzierżawiąc półłanek pusty), byli zaś czasem nawet tacy,
            którzy przy skromnym gospodarstwie nominalnym, znacznie więcej
            gruntów pustych brali pod uprawę.
          </p>
          <p>
            Dwór nie sprzeciwiał się, gdy kmiecie pragnęli dzierżawić puste
            łany, i godził się je oddawać na korzystniejszych dla chłopów
            warunkach niż przy normalnym osadzaniu kmiecia."
          </p>
          <CTAButton href="#" target="_blank" rel="noopener noreferrer">
            Czytaj
          </CTAButton>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
