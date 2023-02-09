import { homeTranslate } from "@/translate/texts";
import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsChevronDoubleDown, BsGithub, BsLinkedin } from "react-icons/bs";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiVisualstudiocode,
  SiFigma,
  SiInsomnia,
  SiAdobephotoshop,
} from "react-icons/si";
import { Card } from "@/components/Card";
import { Category } from "@/components/Category";
import { SEO } from "@/components/SEO";
import { SubTitle } from "@/components/SubTitle";
import {
  AboutMeSection,
  ContactInfo,
  ContactSection,
  Main,
  ScrollDown,
  SkillsSection,
  SquareAnimation,
  WelcomeSection,
} from "@/styles/pages/Home";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { FramedIcon } from "@/components/FramedIcon";
import { ExternalLink } from "@/components/ExternalLink";

export default function Home() {
  const { locale } = useRouter();

  const currentLocale = locale === "en-US" ? "en-US" : "pt-BR";
  const translations = homeTranslate[currentLocale];

  return (
    <>
      <SEO
        title={translations.seo.title}
        description={translations.seo.description}
        routeName={"/"}
      />

      <Main>
        <WelcomeSection>
          <div>
            <p>{translations.welcomeSection.hello}</p>
            <h1>Nilton Izaguirres.</h1>
            <p>{translations.welcomeSection.resume}</p>
            <Link href="#contact" scroll={false}>
              {translations.welcomeSection.contact}
            </Link>
          </div>

          <NextImage
            src="/images/me.png"
            alt={translations.welcomeSection.imageAlt}
            width={395}
            height={658}
          />
          <ScrollDown>
            <Link href="#about" scroll={false}>
              <BsChevronDoubleDown />
            </Link>
          </ScrollDown>

          <SquareAnimation>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </SquareAnimation>
        </WelcomeSection>

        <AboutMeSection
          id="about"
          initial={{ translateX: -600, opacity: 0 }}
          transition={{ delay: 0.6 }}
          whileInView={{ translateX: 0, opacity: 1 }}
        >
          <NextImage
            src="https://github.com/niltonizaguirres.png"
            alt={translations.aboutSection.imageAlt}
            style={{ objectFit: "cover" }}
            width={395}
            height={500}
          />

          <div>
            <SubTitle title={translations.aboutSection.title} />
            {translations.aboutSection.descriptions.map(
              (description, index) => (
                <p key={index}>{description}</p>
              )
            )}
          </div>
        </AboutMeSection>
        <SkillsSection
          initial={{ translateX: 600, opacity: 0 }}
          transition={{ delay: 0.6 }}
          whileInView={{ translateX: 0, opacity: 1 }}
        >
          <SubTitle title={translations.skillsSection.title} />

          <Category
            title={translations.skillsSection.categories.main.title}
            warn={translations.skillsSection.categories.main.warn}
          >
            <Card icon={<SiJavascript />} title="JavaScript" />
            <Card icon={<SiTypescript />} title="TypeScript" />
            <Card icon={<SiNextdotjs />} title="Next.JS" />
            <Card icon={<SiReact />} title="React" />
            <Card icon={<SiHtml5 />} title="HTML 5" />
            <Card icon={<SiCss3 />} title="CSS" />
            <Card icon={<SiNodedotjs />} title="Node.JS" />
            <Card icon={<SiPython />} title="Python" />
          </Category>
          <Category
            title={translations.skillsSection.categories.tools.title}
            warn={translations.skillsSection.categories.main.warn}
          >
            <Card icon={<SiVisualstudiocode />} title="VS Code" />
            <Card icon={<SiFigma />} title="Figma" />
            <Card icon={<SiInsomnia />} title="Insomnia" />
            <Card icon={<SiAdobephotoshop />} title="PhotoShop" />
          </Category>
        </SkillsSection>

        <ContactSection
          id="contact"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.6 }}
          whileInView={{ opacity: 1 }}
        >
          <SubTitle title={translations.contactSection.title} />

          <Category
            title={translations.contactSection.categories.contact.title}
            warn={translations.contactSection.categories.contact.description}
          >
            <ContactInfo>
              <FramedIcon icon={<IoLocationOutline />} />
              <span>
                Florianópolis, Santa catarina,{" "}
                {translations.contactSection.categories.contact.country}
              </span>
            </ContactInfo>
            <ContactInfo break>
              <FramedIcon icon={<IoMailOutline />} />
              <span>
                <ExternalLink
                  href="mailto:niltonizaguirres2003@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  text="niltonizaguirres2003@gmail.com"
                />
              </span>
            </ContactInfo>
          </Category>

          <Category
            title={translations.contactSection.categories.mediaSocial.title}
          >
            <ContactInfo>
              <FramedIcon icon={<BsLinkedin />} />
              <span>
                <ExternalLink
                  href="https://github.com/NiltonIzaguirres/"
                  target="_blank"
                  rel="noreferrer"
                  text="Linkedin"
                />
              </span>
            </ContactInfo>
            <ContactInfo>
              <FramedIcon icon={<BsGithub />} />
              <span>
                <ExternalLink
                  href="https://github.com/NiltonIzaguirres/"
                  target="_blank"
                  rel="noreferrer"
                  text="Github"
                />
              </span>
            </ContactInfo>
          </Category>
        </ContactSection>
      </Main>
    </>
  );
}
