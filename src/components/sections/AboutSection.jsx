import React, { useState } from "react";
import {
  StyledAboutSection,
  ImageContainer,
  StyledImage,
  AboutContent,
  StyledHeading,
  GradientCircle,
  DarkCircle,
  StyledEmoji,
} from "../styles/sections/AboutSection.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import Modal from "../Portal/Modal";

export const AboutSection = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

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
          <CTAButton className="btn" onClick={() => Toggle()}>
            Czytaj
          </CTAButton>
          <Modal show={modal} close={Toggle} title="Czynsze i daniny chłopskie">
            <p>
              Od czasu rozprzestrzenienia się gospodarki towarowo-pieniężnej w
              XIII - XIV wieku istniały na wsi opłaty pieniężne na rzecz pana,
              tzw. czynsze. Czynsze obliczano w groszach z łanu czy włóki i
              płacono najczęściej raz do roku na św. Marcina (n. XI.), lub też
              rzadziej kwartalnie. Czynsze były różnej wielkości, najczęściej w
              XVI w. około 30-48-60 groszy z łana kmiecego, z tym że praktycznie
              wahania tej stawki były nieraz duże nawet w obrębie tych samych
              dóbr, np. od 12 do 108 gr 2 łana. Zależało to od pozostałych
              obciążeń i ich wielkości.
            </p>
            <br />
            <p>
              <em>
                otworzksiazke.pl/images/ksiazki/wies_polskiego_odrodzenia/wies_polskiego_odrodzenia.pdf
              </em>
            </p>
          </Modal>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
