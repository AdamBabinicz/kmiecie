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

export const HeroSection = () => {
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
          <CTAButton href="#struktura">Czytaj</CTAButton>
          <CTAButton href="#contact" primary margin="0 0 0 20px">
            Zobacz
          </CTAButton>
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
