import getAlongImage from '@/assets/image/projects/realProjectsImage/getAlongCard.svg';
import instGenesisImage from '@/assets/image/projects/realProjectsImage/instGenesisCard.svg';
import thisProject from '@/assets/image/projects/thisProject.png';
import other from '@/assets/image/projects/macbook.png';

export const Texts = {
  en: {
    navbar: {
      menuItems: [
        { name: 'HOME', link: '/' },
        { name: 'ABOUT', link: '#about11' },
        { name: 'PROJECTS', link: '#projects' },
        { name: 'CURRICULUM', link: '/CV-AndersonCarvalho.pdf' },
      ],
      subtitle: 'Contacts - info',
    },
    home: {
      title1: "Let's Make",
      title2: 'It work',
      subtitle1: 'Because there is only one way',
      subtitle2: 'to make it to the next step',
      subtitle3: '— nailing your prototype —',
    },

    about: {
      title: 'Hello',
      decription:
        "My name is Anderson Carvalho, I'm a full-stack web and software developer with a passion for creating innovations that solve problems, with a special focus on user interactions. I'm ready to bring your ideas to life and add a touch of originality to your online space.",
      span1: "Let's make your project special!",
    },

    resume: {
      top: {
        title: 'Web Developer',
        subtitle: 'End-to-end web development',
        description:
          'Creating complete solutions for the web, with a focus on performance and user experience.',
      },
      left: {
        title: 'UX/UI',
        subtitle: 'Software prototyping',
        description:
          'Development of interactive prototypes focused on improving usability.',
      },
      right: {
        title: 'Designer',
        subtitle: 'Visual identity creation',
        description:
          'Creating attractive visual identities that connect the brand to the public.',
      },
    },

    projects: [
      // {
      //   id: 1,
      //   nameOfProject: 'Portfolio (This)',
      //   descriptionTitle: "Project Summary:",
      //   descriptionOfProject:
      //     "CMS with intuitive UI, customised editor, control panel, blog, API connections.",
      //   techStacksTitle: "Tech stack:",
      //   techStacks: ["ReactJS", "HTML", "CSS", "JS", "Tailwind", "Zustand", "Figma", "NextUI"],
      //   oficialWebsite: 'https://get-along-lc.vercel.app/',
      //   image: thisProject,
      //   callToAction: 'Veja mais',
      // },
      // {
      //   id: 2,
      //   nameOfProject: 'Other',
      //   descriptionTitle: "Project Summary:",
      //   descriptionOfProject:
      //     "CMS with intuitive UI, customised editor, control panel, blog, API connections.",
      //   oficialWebsite: 'https://instituto-genesis.com/',
      //   techStacksTitle: "Tech stack:",
      //   techStacks: ["ReactJS", "HTML", "CSS", "JS", "Tailwind", "Zustand", "Figma", "NextUI", "Mongo- db"],
      //   image: other,
      //   callToAction: 'Em produção',
      // },
      {
        id: 3,
        nameOfProject: 'Genesis Training Institute',
        descriptionTitle: 'Project Summary:',

        descriptionOfProject:
          'Project that offers a complete solution for managing and displaying online courses. The display is centralized with direct links to external platforms, facilitating access. The registration system allows a personalized area for each user, while an intuitive dashboard enables staff to manage and edit courses easily, without the need for technical intervention. A practical and efficient platform for everyone involved.',
        techStacksTitle: 'Tech stack:',
        techStacks: [
          'ReactJS',
          'HTML',
          'CSS',
          'JS',
          'Tailwind',
          'Zustand',
          'Figma',
          'NextUI',
          'Mongo- db',
        ],
        oficialWebsite: 'https://instituto-genesis.com/',
        image: instGenesisImage,
        callToAction: 'Deployed',
      },
      {
        id: 4,
        nameOfProject: 'Get Along Language Course',
        descriptionTitle: 'Project Summary:',
        descriptionOfProject:
          'Landing page developed to serve a global audience, offering support in 5 languages. It includes redirects to another platform and is integrated with a chatbot, providing an efficient and practical self-service experience for users. The solution aims to optimize service and facilitate navigation, ensuring accessibility and agility in the process.',
        techStacksTitle: 'Tech stack:',
        techStacks: [
          'ReactJS',
          'HTML',
          'CSS',
          'JS',
          'Tailwind',
          'Zustand',
          'Figma',
          'NextUI',
          'Mongo- db',
        ],
        oficialWebsite: 'https://get-along-lc.vercel.app/',
        image: getAlongImage,
        callToAction: 'Under production',
      },
    ],

    footer: {
      title: 'Start a project',
      description:
        "Interested in working together? We should queue up a time to chat. I'll buy the coffee.",
      button: "Let's do this",
      copy: 'Handcrafted by me ',
      contacts: [
        {
          id: 1,
          image: '/contacts/linkedin.svg',
          alt: 'linkedin',
          href: 'https://www.linkedin.com/in/andersoninn/',
        },
        {
          id: 2,
          image: '/contacts/github.svg',
          alt: 'github',
          href: 'https://github.com/andersoninn',
        },
        {
          id: 3,
          image: '/contacts/cv.svg',
          alt: 'curriculum',
          href: '/CV-AndersonCarvalho.pdf',
        },
        {
          id: 4,
          image: '/contacts/gmail.svg',
          alt: 'gmail',
          href: 'mailto:andersoninnocencio17@gmail.com?subject=Helloo&body=Write your message here',
        },
        {
          id: 5,
          image: '/contacts/whatsapp.svg',
          alt: 'whatsapp',
          href: 'https://wa.me/351933864893',
        },
      ],
    },
  },
  pt: {
    navbar: {
      menuItems: [
        { name: 'HOME', link: '/' },
        { name: 'SOBRE', link: '#about11' },
        { name: 'PROJETOS', link: '#projects' },
        { name: 'CURRÍCULO', link: '/CV-AndersonCarvalho.pdf' },
      ],
      subtitle: 'Contacts - info',
    },
    home: {
      title1: 'Vamos fazer',
      title2: 'funcionar',
      subtitle1: 'Porque só existe uma maneira',
      subtitle2: 'de chegar ao próximo passo,',
      subtitle3: '— construindo seu protótipo —',
    },

    about: {
      title: 'Hello',
      decription:
        "My name is Anderson Carvalho, I'm a full-stack web and software developer with a passion for creating innovations that solve problems, with a special focus on user interactions. I'm ready to bring your ideas to life and add a touch of originality to your online space.",
      span1: "Let's make your project special!",
    },

    resume: {
      top: {
        title: 'Web Developer',
        subtitle: 'End-to-end web development',
        description:
          'Construção de soluções completas para a web, desde a concepção até a implementação, com foco na performance e na experiência do usuário.',
      },
      left: {
        title: 'UX/UI',
        subtitle: 'Software prototyping',
        description:
          'Criação de protótipos interativos que visam melhorar a usabilidade e garantir a melhor experiência para o usuário final.',
      },
      right: {
        title: 'Designer',
        subtitle: 'Visual identity creation',
        description:
          'Desenvolvimento de identidades visuais que comunicam a essência da marca e a conectam emocionalmente com o público',
      },
    },

    projects: [
      // {
      //   id: 1,
      //   nameOfProject: 'Portfolio (This)',
      //   descriptionTitle: "Project Summary:",
      //   descriptionOfProject:
      //     "CMS with intuitive UI, customised editor, control panel, blog, API connections.",
      //   techStacksTitle: "Tech stack:",
      //   techStacks: ["ReactJS", "HTML", "CSS", "JS", "Tailwind", "Zustand", "Figma", "NextUI"],
      //   oficialWebsite: 'https://get-along-lc.vercel.app/',
      //   image: thisProject,
      //   callToAction: 'Veja mais',
      // },
      // {
      //   id: 2,
      //   nameOfProject: 'Other',
      //   descriptionTitle: "Project Summary:",
      //   descriptionOfProject:
      //     "CMS with intuitive UI, customised editor, control panel, blog, API connections.",
      //   oficialWebsite: 'https://instituto-genesis.com/',
      //   techStacksTitle: "Tech stack:",
      //   techStacks: ["ReactJS", "HTML", "CSS", "JS", "Tailwind", "Zustand", "Figma", "NextUI", "Mongo- db"],
      //   image: other,
      //   callToAction: 'Em produção',
      // },
      {
        id: 3,
        nameOfProject: 'Curso de Idiomas Get Along',
        descriptionTitle: 'Project Summary:',
        descriptionOfProject:
          'Landing page em 5 idiomas, com redirecionamento para outra plataforma integrada a um chatboot para auto atendimento. (Em desenvolvimento)',
        techStacksTitle: 'Tech stack:',
        techStacks: [
          'ReactJS',
          'HTML',
          'CSS',
          'JS',
          'Tailwind',
          'Zustand',
          'Figma',
          'NextUI',
          'Mongo- db',
        ],
        oficialWebsite: 'https://get-along-lc.vercel.app/',
        linkDescription: 'visit the Get Along Language Course website',
        image: getAlongImage,
        callToAction: 'under Production',
      },
      {
        id: 4,
        nameOfProject: 'Instituto de Aperfeiçoamento Gênesis',
        descriptionTitle: 'Project Summary:',
        descriptionOfProject:
          'Site para exposição dos cursos, com redirecionamento para plataformas externas, uma área de cadastro e um dashboard para edição de conteúdo por parte da equipe. (Em desenvolvimento)',
        techStacksTitle: 'Tech stack:',
        techStacks: [
          'ReactJS',
          'HTML',
          'CSS',
          'JS',
          'Tailwind',
          'Zustand',
          'Figma',
          'NextUI',
          'Mongo- db',
        ],
        oficialWebsite: 'https://instituto-genesis.com/',
        linkDescription: ' visit the Instituto Gênesis website',
        image: instGenesisImage,
        callToAction: 'Deployed',
      },
    ],

    footer: {
      title: 'Start a project',
      description:
        "Interested in working together? We should queue up a time to chat. I'll buy the coffee.",
      button: "Let's do this",
      copy: 'Handcrafted by me ',
      contacts: [
        {
          id: 1,
          image: '/contacts/linkedin.svg',
          alt: 'linkedin',
          href: 'https://www.linkedin.com/in/andersoninn/',
        },
        {
          id: 2,
          image: '/contacts/github.svg',
          alt: 'github',
          href: 'https://github.com/andersoninn',
        },
        {
          id: 3,
          image: '/contacts/cv.svg',
          alt: 'curriculum',
          href: '/CV-AndersonCarvalho.pdf',
        },
        {
          id: 4,
          image: '/contacts/gmail.svg',
          alt: 'gmail',
          href: 'mailto:andersoninnocencio17@gmail.com?subject=Helloo&body=EWrite your message here',
        },
        {
          id: 5,
          image: '/contacts/whatsapp.svg',
          alt: 'whatsapp',
          href: 'https://wa.me/351933864893',
        },
      ],
    },
  },
};
