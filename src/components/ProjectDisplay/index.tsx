import Image from "next/image";
import { ImLink } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import {
  LinksContainer,
  InfoContainer,
  ProjectDisplayContainer,
  APICode,
} from "./styles";
import { ProjectTypes } from "@/@types/project";

interface ProjectCardTranslationProps {
  tech: string;
  github: string;
  apiGithub: string;
  preview: string;
}

interface ProjectDisplayProps extends ProjectTypes {
  projectCardTranslation: ProjectCardTranslationProps;
}

export function ProjectDisplay({
  name,
  slug,
  description,
  isGithub,
  isGithubAPI,
  preview,
  projectCardTranslation,
}: ProjectDisplayProps) {
  return (
    <ProjectDisplayContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
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
      {isGithubAPI && (
        <APICode
        >
          <a
            href={isGithubAPI}
            target="_blank"
            rel="noreferrer"
          >
            {projectCardTranslation.apiGithub}
          </a>
        </APICode>
      )}
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
