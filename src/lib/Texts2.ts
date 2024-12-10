import getAlongImage from '@/assets/image/projects/realProjectsImage/getAlongCard.svg';
import instGenesisImage from '@/assets/image/projects/realProjectsImage/instGenesisCard.svg';
import thisProject from '@/assets/image/projects/thisProject.png';
import other from '@/assets/image/projects/macbook.png';

export const Texts = {
  en:
  {
    navbar: {
      menuItems: ['HOME', 'ABOUT', 'PROJECTS', 'CURRICULUM'],
      subtitle: "Contacts - info"
    },
    home: {
      title1: "We'll Make",
      title2: "It work",
      subtitle1: "Because there is only one way",
      subtitle2: "to make it to the next step",
      subtitle3: "— nailing your mvp —",
    },

    about: {
      title: "Hello",
      decription:
        "My name is Anderson Carvalho, I'm a full-stack web and software developer with a passion for creating innovations that solve problems, with a special focus on user interactions. I'm ready to bring your ideas to life and add a touch of originality to your online space.",
      span1: "Let's make your project special!",
    },

    resume: {
      top: {
        title: 'Web Developer',
        subtitle: 'End-to-end web development',
        description: 'Development of projects in search of validation of the user experience.'
      },
      left: {
        title: 'UX/UI',
        subtitle: 'Software prototyping',
        description: 'Development of projects in search of validation of the user experience.'
      },
      right: {
        title: 'Designer',
        subtitle: 'Visual identity creation',
        description: 'Development of visual identities that reinforce the brand &apos;s identity.'
      }

    },

    projects: [
      {
        id: 1,
        nameOfProject: 'Portfolio (This)',
        descriptionTitle: "Project Summary:",
        descriptionOfProject:
          "CMS with intuitive UI, customised editor, control panel, blog, API connections.",
        techStacksTitle: "Tech stack:",
        techStacks: ["ReactJS", "HTML", "CSS", "JS", "Tailwind", "Zustand", "Figma", "NextUI"],
        oficialWebsite: 'https://get-along-lc.vercel.app/',
        image: thisProject,
        callToAction: 'Veja mais',
      },
      {
        id: 2,
        nameOfProject: 'Other',
        descriptionTitle: "Project Summary:",
        descriptionOfProject:
          "CMS with intuitive UI, customised editor, control panel, blog, API connections.",
        oficialWebsite: 'https://instituto-genesis.com/',
        techStacksTitle: "Tech stack:",
        techStacks: ["ReactJS", "HTML", "CSS", "JS", "Tailwind", "Zustand", "Figma", "NextUI", "Mongo- db"],
        image: other,
        callToAction: 'Em produção',
      },
      {
        id: 3,
        nameOfProject: 'Curso de Idiomas Get Along',
        descriptionTitle: "Project Summary:",
        descriptionOfProject:
          'Landing page em 5 idiomas, com redirecionamento para outra plataforma integrada a um chatboot para auto atendimento. (Em desenvolvimento)',
        techStacksTitle: "Tech stack:",
        techStacks: ["ReactJS", "HTML", "CSS", "JS", "Tailwind", "Zustand", "Figma", "NextUI", "Mongo- db"],
        oficialWebsite: 'https://get-along-lc.vercel.app/',
        image: getAlongImage,
        callToAction: 'Veja mais',
      },
      {
        id: 4,
        nameOfProject: 'Instituto de Aperfeiçoamento Gênesis',
        descriptionTitle: "Project Summary:",

        descriptionOfProject:
          'Site para exposição dos cursos, com redirecionamento para plataformas externas, uma área de cadastro e um dashboard para edição de conteúdo por parte da equipe. (Em desenvolvimento)',
        techStacksTitle: "Tech stack:",
        techStacks: ["ReactJS", "HTML", "CSS", "JS", "Tailwind", "Zustand", "Figma", "NextUI", "Mongo- db"],
        oficialWebsite: 'https://instituto-genesis.com/',
        image: instGenesisImage,
        callToAction: 'Em produção',
      },
    ],

    footer: {
      title: "Start a project",
      description: "Interested in working together? We should queue up a time to chat. I'll buy the coffee.",
      button: "Let's do this",
      copy: "Handcrafted by me ",
      contacts: [
        {
          id: 1,
          image: '/contacts/linkedin.svg',
          alt: 'linkedin',
          href: 'https://www.linkedin.com/in/andersoninn/'
        },
        {
          id: 2,
          image: '/contacts/github.svg',
          alt: 'github',
          href: 'https://github.com/andersoninn'
        },
        {
          id: 3,
          image: '/contacts/cv.svg',
          alt: 'curriculum',
          href: 'https://drive.google.com/file/d/1wttA0BPcDON1vijG78N9UZqr2EDuZKxu/view?usp=sharing'
        },
        {
          id: 4,
          image: '/contacts/gmail.svg',
          alt: 'gmail',
          href: 'mailto:andersoninnocencio17@gmail.com?subject=Helloo&body=EWrite your message here'
        },
        {
          id: 5,
          image: '/contacts/whatsapp.svg',
          alt: 'whatsapp',
          href: 'https://wa.me/351933864893'
        },
      ]
    }
  },
  pt: {
    home: {
      title1: "We&apos;ll Make",
      title2: "It work",
      name: 'Anderson Carvalho',
      subtitle: 'Web and Software Developer',

      calToAction: 'Turning ideais',
      subtitleCalToAction: 'into possibilities'
    },

    resume: {
      top: {
        title: 'Web Developer',
        subtitle: 'End-to-end web development',
        description: 'Development of projects in search of validation of the user experience.'
      },
      left: {
        title: 'UX/UI',
        subtitle: 'Software prototyping',
        description: 'Development of projects in search of validation of the user experience.'
      },
      right: {
        title: 'Designer',
        subtitle: 'Visual identity creation',
        description: 'Development of visual identities that reinforce the brand &apos;s identity.'
      }

    },

    about: {
      titleH1: 'Disciplina, amor e coragem é o lema do nosso sucesso',
      titleSpan: '- So George Ayres Borges',
      decriptionFistPart:
        'Durante anos, servi com dedicação nas fileiras militares do Brasil, onde destaquei-me como Secretário do Diretor Aeronaves, obtendo a segunda posição em minha classe. Liderei missões críticas de manutenção da paz no Batalhão de Infantaria Especial do Galeão, o que me proporcionou experiências inestimáveis, moldando minha capacidade de liderança e minha habilidade para implementar operações eficazes. No entanto, uma mudança marcante em minha vida veio com a decisão de imigrar para Portugal em busca de uma existência longe da violência e de novas oportunidades.',
      decriptionSecondPart:
        'Essa transição representou um ponto de virada significativo em minha jornada, marcando o início de uma nova fase fora da área militar. Comprometido em encontrar meu lugar em uma nova terra, mergulhei de cabeça no mundo da programação. Como programador freelancer em Portugal, estou construindo uma carreira sólida, fundamentada em minha experiência militar em liderança e resolução de problemas. Cada desafio superado e cada projeto concluído reafirmam meu compromisso com o crescimento contínuo e a busca por excelência em minha nova trajetória profissional.',
    },

    projects: [
      {
        id: 1,
        nameOfProject: 'Curso de Idiomas Get Along',
        descriptionOfProject:
          'Landing page em 5 idiomas, com redirecionamento para outra plataforma integrada a um chatboot para auto atendimento. (Em desenvolvimento)',
        oficialWebsite: 'https://get-along-lc.vercel.app/',
        image: getAlongImage,
        callToAction: 'Veja mais',
      },
      {
        id: 2,
        nameOfProject: 'Instituto de Aperfeiçoamento Gênesis',
        descriptionOfProject:
          'Site para exposição dos cursos, com redirecionamento para plataformas externas, uma área de cadastro e um dashboard para edição de conteúdo por parte da equipe. (Em desenvolvimento)',
        oficialWebsite: 'https://instituto-genesis.com/',
        image: instGenesisImage,
        callToAction: 'Em produção',
      },
    ],

    footer: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati on ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      contacts: [
        {
          id: 1,
          image: '/contacts/linkedin.svg',
          alt: 'linkedin',
          href: 'https://www.linkedin.com/in/andersoninn/'
        },
        {
          id: 2,
          image: '/contacts/github.svg',
          alt: 'github',
          href: 'https://github.com/andersoninn'
        },
        {
          id: 3,
          image: '/contacts/cv.svg',
          alt: 'curriculum',
          href: 'https://drive.google.com/file/d/1wttA0BPcDON1vijG78N9UZqr2EDuZKxu/view?usp=sharing'
        },
        {
          id: 4,
          image: '/contacts/gmail.svg',
          alt: 'gmail',
          href: 'mailto:andersoninnocencio17@gmail.com?subject=Olá&body=Escreva sua mensagem aqui'
        },
        {
          id: 5,
          image: '/contacts/whatsapp.svg',
          alt: 'whatsapp',
          href: 'https://wa.me/351933864893'
        },



      ]
    }
  }


};
