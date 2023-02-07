export const headerTranslate = {
  "en-US": {
    home: 'Home',
    projects: "Projects",
    articles: "Articles",
  },
  "pt-BR": {
    home: 'Inicio',
    projects: "Projetos",
    articles: "Artigos",
  },
};

export const homeTranslate = {
  "en-US": {
    seo: {
      title: "Home",
      description:
        "A young full-stack developer and technology, hacking and design enthusiast",
    },
    welcomeSection: {
      hello: "Hi, i am",
      resume:
        "a young full-stack developer passionate about solving problems and creating solutions!",
      contact: "Get in touch",
      imageAlt: "My image in drawing version",
    },
    aboutSection: {
      title: "About me",
      descriptions: [
        "Pleasure my name is Nilton and I'm currently 19 years old, with only 15 years old I started learning hacking, but I fell in love with creating solutions and solving problems right when I started learning my first programming language, from that moment I started to learn and develop myself each more in software development.",
        "I'm currently studying for a bachelor's degree in computer science, in addition to specializing more and more as a software developer and always looking to learn more.",
      ],
      imageAlt: "My Github Image",
    },
    skillsSection: {
      title: "My skills",
      categories: {
        main: {
          title: "Main technologies",
          warn: "These are just some technologies that I have knowledge, if you want to know more please contact me or take a look at my projects.",
        },
        tools: {
          title: "Tools",
          warn: "These are some tools that I am aware of, if you want to know more, please contact me.",
        },
      },
    },
    contactSection: {
      title: "Contact",
      categories: {
        contact: {
          title: "Contact",
          description:
            "If you need more information, for example my phone number, please don't hesitate to email me first.",
          country: "Brazil",
        },
        mediaSocial: {
          title: "Social networks",
        },
      },
    },
  },
  "pt-BR": {
    seo: {
      title: "Inicio",
      description:
        "Um jovem desenvolvedor full-stack e entusiasta de tecnologia, hacking e design",
    },
    welcomeSection: {
      hello: "Olá, sou",
      resume:
        "um jovem desenvolvedor full-stack apaixonado por resolver problemas e criar soluções!",
      contact: "Entrar em contato",
      imageAlt: "Minha imagem em versão de desenho",
    },
    aboutSection: {
      title: "Sobre mim",
      descriptions: [
        "Prazer meu nome é Nilton e atualmente tenho 19 anos, com apenas 15 anos comecei aprendendo hacking, mas me apaixonei por criar soluções e resolver problemas logo quando comecei a aprender minha primeira linguagem de programação, a partir desde momento comecei a aprender e me desenvolver cada vez mais em desenvolvimento de software.",
        "Atualmente estou cursando bacharel em ciência da computação, além de estar me especializando cada vez mais como desenvolvedor de software e estar sempre buscando aprender mais.",
      ],
      imageAlt: "Minha imagem do Github",
    },
    skillsSection: {
      title: "Minhas habilidades",
      categories: {
        main: {
          title: "Principais tecnologias",
          warn: "Essas são apenas algumas tecnologias que tenho conhecimentos, caso queira conhecer mais entre em contato comigo ou dê uma olhada em meus projetos.",
        },
        tools: {
          title: "Ferramentas",
          warn: "Essas são algumas ferramentas que tenho conhecimento, caso queira saber mais entre em contato comigo.",
        },
      },
    },
    contactSection: {
      title: "Contato",
      categories: {
        contact: {
          title: "Contato",
          description:
            "Se precisar de mais informações, por exemplo, meu número de telefone, não hesite em me enviar um e-mail primeiro.",
          country: "Brasil",
        },
        mediaSocial: {
          title: "Redes sociais",
        },
      },
    },
  },
};

export const footerTranslate = {
  "en-US": {
    code: "Source code",
    copy: "All rights reserved",
  },
  "pt-BR": {
    code: "Código fonte",
    copy: "Todos os direitos reservados",
  },
};

export const fourOhFourTranslate = {
  "en-US": {
    title: "Oops! This page was not found.",
    text: "This page was not found, please return to the homepage.",
    back: "Back",
    imageAlt: "Image of an ET being abducted",
  },
  "pt-BR": {
    title: "Oops! Esta página não encontrada.",
    text: "Está página não foi encontrada, volte clicando no botão abaixo.",
    back: "Voltar",
    imageAlt: "Imagem de um ET sendo abduzido",
  },
};

export const projectsTranslate = {
  "en-US": {
    seo: {
      title: "Projects",
      description:
        "These are some projects developed to learn, demonstrate or practice some technology.",
    },
    title: "My projects",
    description:
      "These are some projects developed to learn, demonstrate or practice some technology.",
    imageAlt: "illustrative image of a person working on the PC",
    filters: {
      search: "Search",
      languages: "Languages",
      category: "Categories",
      tech: "Technologies",
    },
    projects: [
      {
        name: 'Proffy',
        slug: 'proffy',
        preview: '',
        isGithub: true,
        description: 'A website where you can create your classes or connect with people who are teaching through the platform.',
        categories: ['Front-End', 'Back-End', 'Mobile', 'Full Stack'],
        techs: ['React.JS', 'Axios','Expo', 'React Native', 'Express', 'Knex', 'SQLite3'],
        languages: ['TypeScript']
      },
      {
        name: 'Space Traveling',
        slug: 'space-traveling',
        preview: '',
        isGithub: true,
        description: 'A blog built with viewing and commenting functionality via the Github account.',
        categories: ['Front-End'],
        techs: ['Next.JS', 'Prismic', 'Sass'],
        languages: ['TypeScript']
      },
      {
        name: 'Ig news',
        slug: 'ig-news',
        preview: '',
        isGithub: true,
        description: 'A blog built with recurring payment functionality and connecting via Github, in addition to using Stripe and FaunaDB.',
        categories: ['Front-End'],
        techs: ['Next.JS', 'Prismic', 'Sass', 'FaunaDB', 'Stripe', 'Next Auth'],
        languages: ['TypeScript']
      },
      {
        name: 'Go Restaurant',
        slug: 'go-restaurant',
        preview: '',
        isGithub: true,
        description: 'Website for restaurant management, where you can create, delete and edit dishes.',
        categories: ['Front-End'],
        techs: ['React.JS', 'Axios', 'Styled Components'],
        languages: ['TypeScript']
      },
      {
        name: 'To.Do',
        slug: 'to-do',
        preview: '',
        isGithub: true,
        description: 'A website where you manage your tasks.',
        categories: ['Front-End'],
        techs: ['React.JS', 'Sass'],
        languages: ['TypeScript']
      },
      {
        name: 'DT.Money',
        slug: 'dt-money',
        preview: '',
        isGithub: true,
        description: 'A spend manager.',
        categories: ['Front-End'],
        techs: ['React.JS', 'Styled Components', 'Axios'],
        languages: ['TypeScript']
      },
      {
        name: 'Rocket Shoes',
        slug: 'rocket-shoes',
        preview: '',
        isGithub: true,
        description: 'Sneaker sales website with inventory management and items in cart',
        categories: ['Front-End'],
        techs: ['React.JS', 'Styled Components', 'Axios'],
        languages: ['TypeScript']
      },
      {
        name: 'Watch Me',
        slug: 'watch-me',
        preview: '',
        isGithub: true,
        description: 'A website where movies are listed by their respective categories.',
        categories: ['Front-End'],
        techs: ['React.JS', 'Sass', 'Axios'],
        languages: ['TypeScript']
      },
      {
        name: 'Github Explorer',
        slug: 'github-explorer',
        preview: 'https://niltonizaguirres.github.io/github-explorer/',
        isGithub: true,
        description: 'Site where lists Github repositories by searched username.',
        categories: ['Front-End'],
        techs: ['React.JS', 'Sass'],
        languages: ['TypeScript']
      },
    ],
    projectCard: {
      tech: 'Technologies',
      github: 'Source code',
      preview: 'Preview'
    }
  },
  "pt-BR": {
    seo: {
      title: "Projetos",
      description:
        "Estes são alguns projetos desenvolvidos para aprender, demonstrar ou praticar alguma tecnologia.",
    },
    title: "Meus projetos",
    description:
      "Estes são alguns projetos desenvolvidos para aprender, demonstrar ou praticar alguma tecnologia.",
    imageAlt: "imagem ilustrativa de uma pessoa trabalhando no PC",
    filters: {
      search: "Buscar",
      languages: "Linguagens",
      category: "Categorias",
      tech: "Tecnologias",
    },
    projects: [
      {
        name: 'Proffy',
        slug: 'proffy',
        preview: '',
        isGithub: true,
        description: 'Um site onde você pode criar suas aulas ou se conectar com pessoas que estão ensinando através da plataforma.',
        categories: ['Front-End', 'Back-End', 'Mobile', 'Full Stack'],
        techs: ['React.JS', 'Axios','Expo', 'React Native', 'Express', 'Knex', 'SQLite3'],
        languages: ['TypeScript']
      },
      {
        name: 'Space Traveling',
        slug: 'space-traveling',
        preview: '',
        isGithub: true,
        description: 'Um blog criado com a funcionalidade de visualização e comentários por meio da conta do Github.',
        categories: ['Front-End'],
        techs: ['Next.JS', 'Prismic', 'Sass'],
        languages: ['TypeScript']
      },
      {
        name: 'Ig news',
        slug: 'ig-news',
        preview: '',
        isGithub: true,
        description: 'Um blog construído com funcionalidade de pagamento recorrente e conexão via Github, além de usar Stripe e FaunaDB.',
        categories: ['Front-End'],
        techs: ['Next.JS', 'Prismic', 'Sass', 'FaunaDB', 'Stripe', 'Next Auth'],
        languages: ['TypeScript']
      },
      {
        name: 'Go Restaurant',
        slug: 'go-restaurant',
        preview: '',
        isGithub: true,
        description: 'Website para gestão de restaurantes, onde pode criar, eliminar e editar pratos.',
        categories: ['Front-End'],
        techs: ['React.JS', 'Axios', 'Styled Components'],
        languages: ['TypeScript']
      },
      {
        name: 'To.Do',
        slug: 'to-do',
        preview: '',
        isGithub: true,
        description: 'Um site onde você gerencia suas tarefas.',
        categories: ['Front-End'],
        techs: ['React.JS', 'Sass'],
        languages: ['TypeScript']
      },
      {
        name: 'DT.Money',
        slug: 'dt-money',
        preview: '',
        isGithub: true,
        description: 'Um gerenciador de gastos.',
        categories: ['Front-End'],
        techs: ['React.JS', 'Styled Components', 'Axios'],
        languages: ['TypeScript']
      },
      {
        name: 'Rocket Shoes',
        slug: 'rocket-shoes',
        preview: '',
        isGithub: true,
        description: 'Site de vendas de tênis com gestão de estoque e itens no carrinho.',
        categories: ['Front-End'],
        techs: ['React.JS', 'Styled Components', 'Axios'],
        languages: ['TypeScript']
      },
      {
        name: 'Watch Me',
        slug: 'watch-me',
        preview: '',
        isGithub: true,
        description: 'Um site onde os filmes são listados por suas respectivas categorias.',
        categories: ['Front-End'],
        techs: ['React.JS', 'Sass', 'Axios'],
        languages: ['TypeScript']
      },
      {
        name: 'Github Explorer',
        slug: 'github-explorer',
        preview: 'https://niltonizaguirres.github.io/github-explorer/',
        isGithub: true,
        description: 'Site onde lista os repositórios do Github por nome de usuário pesquisado.',
        categories: ['Front-End'],
        techs: ['React.JS', 'Sass'],
        languages: ['TypeScript']
      },
    ],
    projectCard: {
      tech: 'Tecnologias',
      github: 'Código fonte',
      preview: 'Preview'
    }
  },
};
