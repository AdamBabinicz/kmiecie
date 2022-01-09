import {
  StyledServicesSection,
  ServicesItems,
  SingleService,
  IconWrapper,
} from "../sections/ServicesSection.styled";
import { SectionHeading } from "../common/SectionHeading.styled";
import {
  GiAnvilImpact,
  GiBarrel,
  GiBooze,
  GiCellarBarrels,
  GiWaterMill,
} from "react-icons/gi";

export const ServicesSection = () => {
  return (
    <>
      <StyledServicesSection id="zawody">
        <SectionHeading>
          <h2>Przedstawiciele zamożniejszej ludności wiejskiej</h2>
          <p>
            "Obok karczmarzy i młynarzy znajdowali się na wsi rzemieślnicy o
            zawodach niekoniecznie wiejskich. Byli to czasem tkacze, sukiennicy
            czy płóciennicy, szewcy, krawcy, garncarze, kowale i tym podobne
            zawody."
          </p>
        </SectionHeading>
        <ServicesItems>
          <SingleService>
            <IconWrapper>
              <GiCellarBarrels />
            </IconWrapper>
            <h2>Karczmarze</h2>
            <p>
              "W XVI wieku ściślejszego ograniczenia uprawnień karczmarzy przez
              dwór jeszcze nie było. Karczmarze produkowali i&nbsp;sprzedawali
              piwo na własną rękę, a&nbsp;chłopi mogli je nabywać wedle swego
              uznania."
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <GiWaterMill />
            </IconWrapper>
            <h2>Młynarze</h2>
            <p>
              "Jeśli młynarz sam budował młyn, otrzymywał zapisaną na nim (jak
              gdyby hipotecznie) sumę, odpowiadającą w&nbsp;przybliżeniu
              wartości młyna. Nie można go było z&nbsp;młyna usunąć bez spłaty
              tej sumy."
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <GiAnvilImpact />
            </IconWrapper>
            <h2>Kowale</h2>
            <p>
              "Istotę pracy kowala stanowiła kuźnia i&nbsp;jej urządzenia takie
              jak miech, kowadło sąsiadujące z&nbsp;paleniskiem, młoty
              i&nbsp;szczypce. Do tych podstawowych narzędzi dochodziły jeszcze
              dłuta, dłubacze, przebijaki do&nbsp;wyrobu gwoździ, cęgi -
              szczypce do&nbsp;wyjmowania żelaza z&nbsp;żaru, młotki
              i&nbsp;stemple."
            </p>
          </SingleService>
        </ServicesItems>
      </StyledServicesSection>
      <hr />
    </>
  );
};
