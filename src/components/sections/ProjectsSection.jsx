import {
  StyledProjectsSection,
  SingleProject,
  ProjectImageContainer,
  ProjectDescription,
  Tags,
  SlantedCard,
} from "../styles/sections/ProjectsSection.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { Projects } from "../../data/Projects";
import { FaLink } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";

export const ProjectsSection = () => {
  return (
    <>
      <StyledProjectsSection id="struktura">
        <SectionHeading>
          <h2>Kategorie ludności chłopskiej</h2>
          <p>
            Wieś chłopska doby renesansu, nie była jednolita i charakteryzowała
            się bardzo różnymi kategoriami ludności wiejskiej.
          </p>
        </SectionHeading>
        <div>
          {Projects &&
            Projects.map((project, index) => (
              <SingleProject key={index}>
                <ProjectImageContainer
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.thumbnail} alt={project.title} />
                  <SlantedCard />
                </ProjectImageContainer>
                <ProjectDescription>
                  <h2>{project.title}</h2>
                  <Tags>
                    {project.tags &&
                      project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex}>{tag}</span>
                      ))}
                  </Tags>
                  <p>{project.paragraph}</p>
                  <div>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GoBook />
                      <span>
                        <BsArrowRight />
                      </span>
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink />
                      <span>{project.projectlinkText}</span>
                    </a>
                  </div>
                </ProjectDescription>
              </SingleProject>
            ))}
        </div>
      </StyledProjectsSection>
      <hr />
    </>
  );
};
