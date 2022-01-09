import React, { useState } from "react";
import {
  HeroContent,
  StyledHeroSection,
  StyledArrowDown,
  HeroSocialIcons,
  SocialIcon,
} from "../styles/sections/HeroSection.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  FaArrowDown,
  FaTwitter,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import Modal from "../Portal/Modal";
import Modal1 from "../Portal/Modal";

export const HeroSection = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <StyledHeroSection id="hero-section">
      <HeroContent>
        <h1>Polska wieś szlachecka w XVI wieku</h1>
        <h3>
          Kmiecie, główna w renesansie grupa ludności chłopskiej, stanowili
          warstwę, którą obecnie byliby chłopi pełnorolni.
        </h3>
        <p>
          "Każdy z&nbsp;kmieci posiadał oprócz roli użytki dodatkowe, przede
          wszystkim łąkę, a&nbsp;nadto cała gromada mogła korzystać
          z&nbsp;pastwisk, nieużytków, lasów, no i&nbsp;wypasać bydło na rolach,
          będących ugorem w&nbsp;danym roku.
        </p>
        <p>
          Warunki gospodarcze XVI wieku, dobra koniunktura na 136 produkty
          wiejskie, znośne położenie materialne chłopów i&nbsp;ich zdolność do
          rozwijania własnej gospodarki złożyły się na&nbsp;praktyczne
          powiększanie areału uprawnego pól chłopskich."
        </p>
        <div>
          <CTAButton onClick={() => Toggle()}>Czytaj</CTAButton>
          <Modal
            show={modal}
            close={Toggle}
            title="Sytuacja ekonomiczna kmieci"
          >
            <p>
              Gospodarny chłop - kmieć, karczmarz czy młynarz stał też niekiedy
              lepiej finansowo od ubogiego szlachcica, udzielał mu nawet
              pożyczek, jak na przykład Wojciech Wojtyra z Sowin, który w 1558
              roku pożyczył szlachcicowi Janowi Malichowskiemu 100 florenów, a
              ten uroczyście zobowiązał się przed sądem grodzkim kościańskim
              zwrócić mu dług na św. Bartłomieja (24. VIII) 1559 roku.
            </p>
            <br />
            <p>
              <em>
                otworzksiazke.pl/images/ksiazki/wies_polskiego_odrodzenia/wies_polskiego_odrodzenia.pdf
              </em>
            </p>
          </Modal>
          <CTAButton onClick={() => Toggle1()} primary margin="0 0 0 20px">
            Zobacz
          </CTAButton>
          <Modal1
            show={modal1}
            close={Toggle1}
            title="Przedsiębiorczość kmieci"
          >
            <p>
              O rozmachu, jakiego nabierały dodatkowe zajęcia chłopskie, może na
              przykład świadczyć historia kmiecia z Gierczyc w pow.
              sandomierskim, Stanisława Kurpiela. Kurpiel w spółce z
              mieszczaninem z Chęcin Teofilem Dzieżą i mieszczaninem z Bochni
              Szymonem Wielogórskim wygnał w 1545 roku na Śląsk do Brzegu i
              sprzedał 172 woły. W handlu tym wyręczał bezpośrednio Kurpiela
              jego sługa, Jakub Starostka, a część wpływów przypadająca na
              Kurpiela wyniosła niebłahą kwotę 300 florenów.
            </p>
            <br />
            <p>
              <em>
                otworzksiazke.pl/images/ksiazki/wies_polskiego_odrodzenia/wies_polskiego_odrodzenia.pdf
              </em>
            </p>
          </Modal1>
        </div>
      </HeroContent>
      <StyledArrowDown href="#gospodarstwa">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <FaPinterest />
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};
