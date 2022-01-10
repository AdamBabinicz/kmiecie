import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Globals.styled";
import { NavBar } from "./components/layout/NavBar";
import { TopBanner } from "./components/layout/TopBanner";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { Container } from "./components/styles/common/Container.styled";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ServicesSection } from "./components/styles/sections/ServicesSection";
import { ContactSection } from "./components/sections/ContactSection.jsx";
import { Footer } from "./components/layout/Footer";
import CookieConsent from "react-cookie-consent";

const App = () => {
  const theme = {
    colors: {
      white: "rgba(248, 247, 255, 1)",
      navyBlue: "rgba(2, 12, 27, 1)",
      lightNavyBlue: "rgba(4, 22, 48, 1)",
      green: "rgba(0, 286, 158, 1)",
      orange: "rgba(249, 105, 14, 1)",
      purple: "rgba(102, 51, 153, 1)",
      red: "rgba(255, 0, 0, 1)",
      gray: "rgba(182, 182, 182, 1)",
    },
    mobile: "768px",
    transition: "all .4s ease-in-out",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TopBanner />
        <NavBar />
        <HeroSection />
        <Container>
          <AboutSection />
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
        </Container>
        <Footer />
      </ThemeProvider>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </>
  );
};

export default App;
