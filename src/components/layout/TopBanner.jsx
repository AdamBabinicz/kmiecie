import {
  StyledTopBanner,
  BannerSection,
} from "../styles/layout/TopBanner.styled";
import { MdEmail } from "react-icons/md";
import { GiSickle, GiGoose } from "react-icons/gi";

export const TopBanner = () => {
  return (
    <>
      <StyledTopBanner>
        <BannerSection showOnMobile>
          <a href="mailto:puaro@vp.pl">
            <MdEmail /> puaro@vp.pl&nbsp;
          </a>
        </BannerSection>
        <BannerSection>
          <a
            href="//sciaga.pl/tekst/83645-84-wies_w_literaturze_renesansu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GiGoose /> Wieś szlachecka w renesansie&nbsp;
          </a>
        </BannerSection>
        <BannerSection>
          <a
            href="//www.bryk.pl/wypracowania/jezyk-polski/motywy/1660-motyw-wsi-w-literaturze-polskiego-renesansu.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GiSickle />
            Kmiecie, zagrodnicy i inni
          </a>
        </BannerSection>
      </StyledTopBanner>
    </>
  );
};
