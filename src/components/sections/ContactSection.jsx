import {
  StyledContactSection,
  DetailsWrapper,
  ContactInfo,
  ImageWrapper,
} from "../styles/sections/ContactSection.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { FaEnvelope } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <>
      <StyledContactSection id="epilog">
        <SectionHeading>
          <h3>Epilog</h3>
          <p>
            "Wsi spokojna, wsi wesoła
            <br />
            Który głos twej chwale zdoła?
            <br />
            Kto twe wczasy, kto pożytki
            <br />
            Może wspomnieć za raz wszytki?"
          </p>
        </SectionHeading>
        <DetailsWrapper>
          <ContactInfo>
            <p>
              "Najbardziej znanym źródłem do dziejów wsi polskiej są tzw.
              <b> lustracje dóbr królewskich</b>. Te ogromne księgi zapisów,
              sporządzone w latach 1564/65 i&nbsp;1569/70 przez specjalne
              komisje, które składały się z&nbsp;przedstawiciela króla, senatu
              i&nbsp;izby poselskiej, dochowały się do naszych czasów niemal
              w&nbsp;komplecie. Jak sama jednak nazwa wskazuje, obejmowały one
              jedynie majątki królewskie, i&nbsp;to zresztą nie wszystkie."
            </p>
            <br />
            <p>
              <p>Oparto na tekstach</p>
              <i>
                Andrzeja Wyczańskiego
                <strong> WIEŚ POLSKIEGO ODRODZENIA </strong>
                Książka i Wiedza 1969
              </i>
            </p>
            <div>
              <a href="mailto:puaro@vp.pl">
                <FaEnvelope />
                <span>puaro@vp.pl</span>
              </a>
            </div>
          </ContactInfo>
          <ImageWrapper>
            <img src="./images/8.jpg" alt="..." />
          </ImageWrapper>
        </DetailsWrapper>
      </StyledContactSection>
      <hr />
    </>
  );
};
