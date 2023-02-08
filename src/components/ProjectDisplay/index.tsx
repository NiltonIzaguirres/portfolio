import Image from "next/image";
import { ImLink } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import {
  LinksContainer,
  InfoContainer,
  ProjectDisplayContainer,
  TechContainer,
} from "./styles";

interface ProjectCardTranslationProps {
  tech: string;
  github: string;
  preview: string;
}

interface ProjectDisplayProps {
  name: string;
  slug: string;
  description: string;
  techs: string[];
  isGithub: boolean;
  preview: string;
  projectCardTranslation: ProjectCardTranslationProps;
}

export function ProjectDisplay({
  name,
  slug,
  description,
  techs,
  isGithub,
  preview,
  projectCardTranslation,
}: ProjectDisplayProps) {
  return (
    <ProjectDisplayContainer>
      <Image
        src={`/images/projects/${slug}.png`}
        width={265}
        height={200}
        style={{ objectFit: "cover" }}
        alt={slug}
      />
      <InfoContainer>
        <h3>{name}</h3>
        <p>{description}</p>
      </InfoContainer>
      <TechContainer>
        <h4>{projectCardTranslation.tech}</h4>
        <p>
          {techs.map((tech, index) => (
            <span key={tech + index}>{tech}</span>
          ))}
        </p>
      </TechContainer>
      <LinksContainer>
        {isGithub && (
          <a
            href={`https://github.com/niltonizaguirres/${slug}`}
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
            <span>{projectCardTranslation.github}</span>
          </a>
        )}
        {preview && (
          <a href={preview} target="_blank" rel="noreferrer">
            <ImLink /> <span>{projectCardTranslation.preview}</span>
          </a>
        )}
      </LinksContainer>
    </ProjectDisplayContainer>
  );
}
