import { SEO } from "@/components/SEO";
import { Main, Presentation, Projects } from "@/styles/pages/Projects";
import { projectsTranslate } from "@/translate/texts";
import { useRouter } from "next/router";
import Image from "next/image";
import { DropdownMenu } from "@/components/DropdownMenu";
import {
  SiC,
  SiJava,
  SiJavascript,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { TbStack, TbStack2 } from "react-icons/tb";
import { Input } from "@/components/Input";
import { techTags } from "@/shared/techTags";
import { useEffect, useState } from "react";
import { ProjectDisplay } from "@/components/ProjectDisplay";

export default function Project() {
  const [filter, setFilter] = useState({
    search: "",
    language: "",
    category: "",
    tech: "",
  });
  const { locale } = useRouter();

  const currentLocale = locale === "en-US" ? "en-US" : "pt-BR";
  const translations = projectsTranslate[currentLocale];
  const [filteredProjects, setFilteredProjects] = useState(
    translations.projects
  );

  function handleFilter(newFilterValue: typeof filter) {
    const filteredSearch = translations.projects.filter((project) =>
      project.name
        .toLocaleLowerCase()
        .includes(newFilterValue.search.toLocaleLowerCase())
    );

    const filteredLanguage = filteredSearch.filter(
      (project) =>
        newFilterValue.language === "" ||
        project.languages.includes(newFilterValue.language)
    );

    const filteredCategory = filteredLanguage.filter(
      (project) =>
        newFilterValue.category === "" ||
        project.categories.includes(newFilterValue.category)
    );

    const filteredTech = filteredCategory.filter(
      (project) =>
        newFilterValue.tech === "" ||
        project.techs.includes(newFilterValue.tech)
    );

    setFilteredProjects(filteredTech);
  }

  function changeFilter(newValue: string, changedProperty: string) {
    const newFilterValue = { ...filter, [changedProperty]: newValue };
    setFilter(newFilterValue);
    handleFilter(newFilterValue);
  }

  return (
    <>
      <SEO
        title={translations.title}
        description={translations.description}
        routeName="/project"
      />

      <Main>
        <Presentation>
          <div>
            <h1>{translations.title}</h1>
            <p>{translations.description}</p>
          </div>
          <Image
            src="/images/programming.svg"
            width={530}
            height={350}
            alt={translations.imageAlt}
          />
        </Presentation>
        <Projects>
          <div>
            <Input
              value={filter.search}
              onChange={(e) => changeFilter(e.target.value, "search")}
              placeholder={translations.filters.search}
            />
            <DropdownMenu
              currentOption={filter.language}
              optionChange={(option) => changeFilter(option, "language")}
              options={[
                {
                  value: "TypeScript",
                  icon: <SiTypescript />,
                },
                {
                  value: "JavaScript",
                  icon: <SiJavascript />,
                },
                {
                  value: "Java",
                  icon: <SiJava />,
                },
                {
                  value: "C",
                  icon: <SiC />,
                },
                {
                  value: "Python",
                  icon: <SiPython />,
                },
              ]}
              placeholder={translations.filters.languages}
            />
            <DropdownMenu
              currentOption={filter.category}
              optionChange={(option) => changeFilter(option, "category")}
              options={[
                {
                  value: "Front-End",
                  icon: <TbStack />,
                },
                {
                  value: "Back-End",
                  icon: <TbStack />,
                },
                {
                  value: "Mobile",
                  icon: <TbStack />,
                },
                {
                  value: "Full Stack",
                  icon: <TbStack2 />,
                },
              ]}
              placeholder={translations.filters.category}
            />
            <DropdownMenu
              currentOption={filter.tech}
              optionChange={(option) => changeFilter(option, "tech")}
              options={techTags}
              placeholder={translations.filters.tech}
            />
          </div>
          <div>
            {filteredProjects.map((project) => (
              <ProjectDisplay
                key={project.name}
                slug={project.slug}
                name={project.name}
                description={project.description}
                isGithub={project.isGithub}
                preview={project.preview}
                techs={project.techs}
                projectCardTranslation={translations.projectCard}
              />
            ))}
          </div>
        </Projects>
      </Main>
    </>
  );
}
