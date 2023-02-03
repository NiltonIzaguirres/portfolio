import { useThemeMode } from "@/context/ThemeModeContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { IoLanguage, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { headerTranslate } from "@/translate/texts";
import { Link } from "./Link";

import {
  Divider,
  HeaderContainer,
  HeaderContent,
  LinkList,
  OpenMobileMenu,
  Option,
  Options,
} from "./styles";

export function Header() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [show, setShow] = useState(true);
  const [fixedHeader, setFixedHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { toggleTheme } = useThemeMode();
  const { locale, push } = useRouter();

  const currentLocale = locale === "en-US" ? "en-US" : "pt-BR";
  const translations = headerTranslate[currentLocale];

  function toggleLanguage() {
    push("/", "/", { locale: locale === "en-US" ? "pt-BR" : "en-US" });
  }

  function controlNavbar() {
    if (typeof window !== "undefined") {
      if (window.scrollY > 0) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }

      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <HeaderContainer show={show} fixedHeader={fixedHeader}>
      <HeaderContent isOpenMobileMenu={isOpenMobileMenu}>
        <nav>
          <Link href="/" arial-label="Home">
            <span>{"< "}</span>
            Nilton<span>.</span>Izaguirres
            <span>{" />"}</span>
          </Link>

          <LinkList isOpenMobileMenu={isOpenMobileMenu}>
            <Link href="/project">{translations.about}</Link>
            <Link href="/articles">{translations.articles}</Link>
          </LinkList>
        </nav>
        <Options isOpenMobileMenu={isOpenMobileMenu}>
          <Option>
            <a href="https://www.linkedin.com/in/nilton-izaguirres/">
              <BsLinkedin />
            </a>
          </Option>
          <Option>
            <a href="https://github.com/NiltonIzaguirres/">
              <BsGithub />
            </a>
          </Option>
          <Option>
            <Divider />
          </Option>
          <Option>
            <button onClick={toggleTheme}>
              <CgDarkMode />
            </button>
          </Option>
          <Option>
            <button onClick={toggleLanguage}>
              <IoLanguage />
            </button>
          </Option>
        </Options>

        <OpenMobileMenu
          onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
          isOpenMobileMenu={isOpenMobileMenu}
        >
          {isOpenMobileMenu ? <IoCloseOutline /> : <IoMenuOutline />}
        </OpenMobileMenu>
      </HeaderContent>
    </HeaderContainer>
  );
}
